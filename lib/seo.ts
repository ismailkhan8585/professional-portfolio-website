import { DOMAIN, NAME, ROLE } from '@/lib/constants';

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: NAME,
    jobTitle: ROLE,
    url: DOMAIN,
    sameAs: [
      'https://github.com/muhammadismail',
      'https://linkedin.com/in/muhammadismail',
      'https://twitter.com/muhammadismail',
    ],
  };
}
