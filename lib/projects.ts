export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  category: string;
  filters: string[];
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'saas-dashboard',
    title: 'SaaS Dashboard Platform',
    description:
      'A multi-tenant analytics dashboard built for a B2B SaaS startup, handling real-time data visualization for 500+ active teams.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts'],
    category: 'Web App',
    filters: ['Web Apps', 'Freelance'],
    links: [
      { label: 'Live Site', href: '#', external: true },
      { label: 'Case Study', href: '/work/saas-dashboard' },
    ],
    featured: true,
  },
  {
    slug: 'ecommerce-mobile',
    title: 'E-Commerce Mobile App',
    description:
      'Cross-platform shopping app with real-time inventory sync, payment integration, and push notifications — built for a retail client.',
    stack: ['React Native', 'Node.js', 'Stripe', 'Firebase'],
    category: 'Mobile App',
    filters: ['Mobile Apps', 'Freelance'],
    links: [
      { label: 'App Store', href: '#', external: true },
      { label: 'Case Study', href: '/work/ecommerce-mobile' },
    ],
    featured: true,
  },
  {
    slug: 'booking-system',
    title: 'Booking & Scheduling System',
    description:
      'Full booking platform for a service business — calendar sync, automated reminders, and admin dashboard for managing 1000+ monthly bookings.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Twilio'],
    category: 'Web App',
    filters: ['Web Apps', 'Freelance'],
    links: [
      { label: 'Live Site', href: '#', external: true },
      { label: 'Case Study', href: '/work/booking-system' },
    ],
    featured: true,
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Listing Platform',
    description:
      'Property search platform with map integration, advanced filters, and agent dashboard for listing management.',
    stack: ['React', 'Express', 'MongoDB', 'Google Maps API'],
    category: 'Web App',
    filters: ['Web Apps', 'Freelance'],
    links: [
      { label: 'Live Site', href: '#', external: true },
      { label: 'GitHub', href: '#', external: true },
    ],
    featured: true,
  },
  {
    slug: 'internal-tools',
    title: 'Internal Tools Suite',
    description:
      'A set of internal productivity tools built for a remote team — task tracking, time logging, and reporting, replacing 3 separate paid subscriptions.',
    stack: ['Next.js', 'tRPC', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Personal',
    filters: ['Personal'],
    links: [
      { label: 'Case Study', href: '/work/internal-tools' },
      { label: 'GitHub', href: '#', external: true },
    ],
    featured: true,
  },
  {
    slug: 'organocity',
    title: 'OrganoCity: AI Video & Social Media Marketing',
    description:
      'Managed full social media presence and produced AI-generated marketing videos and posts for OrganoCity using Gemini AI, InVideo AI, and Grok AI — covering content strategy, video production, and cross-platform publishing.',
    stack: ['Gemini AI', 'InVideo AI', 'Grok AI', 'Social Media Management'],
    category: 'AI Video & Marketing',
    filters: ['AI Video & Marketing', 'Freelance'],
    links: [
      { label: 'Visit Site', href: 'https://organocity.com/', external: true },
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
