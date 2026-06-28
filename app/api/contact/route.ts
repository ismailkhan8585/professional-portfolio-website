import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { env } from '@/lib/env';

const ipStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const maxRequests = 5;

  const record = ipStore.get(ip);
  if (!record || now > record.resetAt) {
    ipStore.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) return false;
  record.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.website && body.website.length > 0) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message || 'Invalid input' },
        { status: 400 }
      );
    }

    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Try again later.' },
        { status: 429 }
      );
    }

    const { name, email, projectType, budget, message } = parsed.data;

    const emailBody = `
New Inquiry
------------
Name: ${name}
Email: ${email}
Project Type: ${projectType}
${budget ? `Budget: ${budget}` : ''}

Message:
${message}
    `.trim();

    if (!env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured.' },
        { status: 503 }
      );
    }

    const Resend = (await import('resend')).Resend;
    const resend = new Resend(env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'contact@muhammadismail.dev',
      to: env.CONTACT_EMAIL,
      subject: `New ${projectType} inquiry from ${name}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
