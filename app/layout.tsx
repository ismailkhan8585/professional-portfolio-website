import './globals.css';
import type { Metadata } from 'next';
import { inter, spaceGrotesk, jetbrainsMono } from '@/lib/fonts';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { NAME, ROLE, DOMAIN } from '@/lib/constants';
import { personJsonLd } from '@/lib/seo';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: `${NAME} — Full-Stack Web & Mobile Developer`,
  description: `${ROLE}. Available for freelance projects and full-time opportunities. 25+ projects delivered.`,
  metadataBase: new URL(DOMAIN),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DOMAIN,
    siteName: NAME,
    title: `${NAME} — Full-Stack Web & Mobile Developer`,
    description: `${ROLE}. Available for freelance projects and full-time opportunities.`,
    images: [
      {
        url: `${DOMAIN}/og.png`,
        width: 1200,
        height: 630,
        alt: `${NAME} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME} — Full-Stack Web & Mobile Developer`,
    description: `${ROLE}. Available for freelance projects and full-time opportunities.`,
    images: [`${DOMAIN}/og.png`],
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
