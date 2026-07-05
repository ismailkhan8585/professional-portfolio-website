import { DOMAIN, NAME, ROLE, SOCIALS } from '@/lib/constants';

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: NAME,
    jobTitle: ROLE,
    url: DOMAIN,
    sameAs: [SOCIALS.github, SOCIALS.linkedin],
  };
}
