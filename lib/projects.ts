export interface Project {
  slug: string;
  title: string;
  description: string;
  previewImage: string;
  stack: string[];
  category: string;
  filters: string[];
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  featured: boolean;
  caseStudy?: {
    client: string;
    role: string;
    timeline: string;
    challenge: string;
    solution: string;
    features: string[];
    results: string;
  };
}

export const projects: Project[] = [
  {
      slug: 'ilmtrack-school-management-system',
    title: 'IlmTrack School Management System',
    description:
      'A Pakistan-focused school management SaaS for attendance, fees, results, reports, and institution-wide analytics.',
   previewImage: '/school.png',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', "cloudinary", 'Recharts'],
    category: 'Web App',
    filters: ['Web Apps', 'Freelance'],
    links: [
     { label: 'Live Site', href: 'https://ilmtrack-saas.vercel.app/', external: true },
      { label: 'Case Study', href: '/work/ilmtrack-school-management-system' },
    ],
    featured: true,
    caseStudy: {
      client: 'IlmTrack SaaS',
      role: 'Full-Stack Developer',
      timeline: '8 weeks',
      challenge:
        'Schools needed a single, reliable platform to manage daily academic and administrative work without jumping between spreadsheets, manual registers, and disconnected tools. The product also needed to feel credible for Pakistani institutions, with clear pricing, fast onboarding, and a dashboard that made important school metrics easy to understand.',
      solution:
        'I built IlmTrack as a modern school management platform with a polished marketing site and a dashboard experience for core operations. The interface brings students, teachers, attendance, fees, exams, classes, reports, and settings into one structured workspace, supported by a responsive Next.js front end, typed application logic, PostgreSQL data modeling, Cloudinary media handling, and Recharts-powered analytics.',
      features: [
        'Landing page positioned for Pakistani schools with feature, pricing, FAQ, demo, and free-trial flows',
        'Role-aware dashboard layout for administrators to monitor students, teachers, attendance, fees, and recent activity',
        'Analytics cards and charts for fee collection, student distribution, attendance trends, and academic-year context',
        'Organized management modules for students, classes, teachers, exams, reports, and school settings',
        'Responsive UI with production-ready visual polish, reusable components, and clear navigation',
      ],
      results:
        'The final product presents IlmTrack as a professional SaaS platform rather than a simple admin panel. It gives school owners a clear first impression, demonstrates the operational value of the software, and provides a scalable foundation for future modules such as parent portals, online admissions, notifications, and payment workflows.',
    },
  },
  {
    slug: 'ecommerce-mobile',
    title: 'E-Commerce web & Mobile App',
    description:
      'Cross-platform shopping app with real-time inventory sync, payment integration, and push notifications — built for a retail client.',
    previewImage: '/organocity.png',
    stack: ['Next.js',  'postgreSQL', 'cloudinary'],
    category: 'Web & Mobile App',
    filters: ['Web & Mobile ', 'Freelance'],
    links: [
      // { label: 'App Store', href: '#', external: true },
      { label: 'Case Study', href: 'https://organocity.com/' },
    ],
    featured: true,
  },
 {
  slug: 'royal-furniture-ecommerce',
  title: 'Royal Furniture E-Commerce Website',
  description:
    'A premium furniture e-commerce platform built for Royal Furniture, featuring product categories, custom orders, wishlist, cart, WhatsApp support, easy payments, nationwide delivery, and a modern responsive shopping experience.',
  previewImage: '/Royal-furt.png',
  stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudinary'],
  category: 'E-Commerce Web App',
  filters: ['Web Apps', 'E-Commerce', 'Freelance'],
  links: [
    {
      label: 'Live Site',
      href: 'https://royal-furniture-ecommerce.vercel.app/',
      external: true,
    },
    {
      label: 'Case Study',
      href: '/work/royal-furniture-ecommerce',
    },
  ],
  featured: true,
},
  {
    slug: 'real-estate',
    title: 'Real Estate Listing Platform',
    description:
      'Property search platform with map integration, advanced filters, and agent dashboard for listing management.',
    previewImage:
      'https://placehold.co/800x500/0a0a0a/10b981?text=Real+Estate+Preview',
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
    previewImage:
      'https://placehold.co/800x500/0a0a0a/10b981?text=Internal+Tools+Preview',
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
    previewImage:
      'https://placehold.co/800x500/0a0a0a/10b981?text=OrganoCity+Preview',
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
