import { z } from 'zod';

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional().or(z.literal('')),
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://muhammadismail.dev'),
  CONTACT_EMAIL: z.string().email().default('hello@muhammadismail.dev'),
  RATE_LIMIT_SECRET: z.string().min(1).optional().or(z.literal('')),
});

export const env = envSchema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  RATE_LIMIT_SECRET: process.env.RATE_LIMIT_SECRET,
});
