import './globals.css';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { inter, spaceGrotesk, jetbrainsMono } from '@/lib/fonts';
import { Toaster } from 'sonner';
import { NAME, ROLE, DOMAIN } from '@/lib/constants';
import { personJsonLd } from '@/lib/seo';
import Providers from './providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: `${NAME} - Full-Stack Developer, Next.js Developer & Digital Solutions Specialist`,
    template: `%s | ${NAME}`,
  },
  description:
    'Portfolio of Muhammad Ismail, a full-stack JavaScript, Next.js, mobile app, AI automation, and digital solutions developer building fast production-ready web and mobile products.',
  keywords: [
    'Muhammad Ismail',
    'full-stack developer',
    'Next.js developer',
    'React developer',
    'mobile app developer',
    'JavaScript developer',
    'TypeScript developer',
    'software developer portfolio',
    'digital solutions services',
    'AI automation specialist',
  ],
  authors: [{ name: NAME, url: DOMAIN }],
  creator: NAME,
  publisher: NAME,
  metadataBase: new URL(DOMAIN),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DOMAIN,
    siteName: NAME,
    title: `${NAME} - Full-Stack Developer & Digital Solutions Specialist`,
    description: `${ROLE}. Portfolio, case studies, services, and contact for production-ready web and mobile development.`,
    images: [
      {
        url: '/ismail.webp',
        width: 640,
        height: 960,
        alt: `${NAME} portfolio portrait`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME} - Full-Stack Developer & Digital Solutions Specialist`,
    description: `${ROLE}. Available for freelance projects and full-time opportunities.`,
    images: ['/ismail.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        <Providers>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personJsonLd()),
            }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="bottom-right" richColors />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
