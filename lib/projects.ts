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
   previewImage: '/school.webp',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', "cloudinary", 'Recharts'],
    category: 'Web App',
    filters: ['Web Apps', 'Freelance'],
    links: [
     { label: 'Live Site', href: 'https://ilmtrack-saas.vercel.app/', external: true },
      { label: 'Case Study', href: '/work/ilmtrack-school-management-system' },
      { label: 'GitHub', href: 'https://github.com/ismailkhan8585/ilmtrack-saas', external: true },
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
    previewImage: '/organocity.webp',
    stack: ['Next.js',  'postgreSQL', 'cloudinary'],
    category: 'Web & Mobile App',
    filters: ['Web Apps', 'Mobile Apps', 'Freelance'],
    links: [
      // { label: 'App Store', href: '#', external: true },
      { label: 'Case Study', href: 'https://organocity.com/' },
      { label: 'GitHub', href: 'https://github.com/ismailkhan8585/Organocity', external: true },
    ],
    featured: true,
  },
 {
  slug: 'royal-furniture-ecommerce',
  title: 'Royal Furniture E-Commerce Website',
  description:
    'A premium furniture e-commerce platform built for Royal Furniture, featuring product categories, custom orders, wishlist, cart, WhatsApp support, easy payments, nationwide delivery, and a modern responsive shopping experience.',
  previewImage: '/royal-furt.webp',
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
    {
      label: 'GitHub',
      href: 'https://github.com/ismailkhan8585/royal-furniture-ecommerce',
      external: true,
    },
  ],
  featured: true,
},
  {
    slug: 'taxirapport',
    title: 'TaxiRapport',
    description:
      'TaxiRapport is a mobile application built with React Native to help taxi drivers track daily trips, driving activity, and earnings in a structured and efficient way. The app allows users to log trips, monitor performance summaries, and review historical driving data through a clean and user-friendly interface. It focuses on reliability, smooth navigation, and real-time data management to support drivers in managing their work more effectively.',
    previewImage:
      '/taxirapport.webp',
    stack: ['React Native','CLI','Firebase','Redux'],
    category: 'Mobile App',
    filters: ['Mobile Apps', 'Freelance'],
    links: [
      { label: 'Live Site', href: 'https://apps.apple.com/pk/app/taxirapport/id6742173529', external: true },
      { label: 'Case Study', href: '/work/taxirapport' },
      { label: 'GitHub', href: 'https://github.com/ismailkhan8585/TaxiRapport-ReactNative', external: true },
    ],
    featured: true,
    caseStudy: {
      client: 'TaxiRapport',
      role: 'React Native Developer',
      timeline: '6 weeks',
      challenge:
        'Taxi drivers needed a simple mobile workflow for recording trips, reviewing daily activity, and understanding earnings without relying on scattered notes or manual calculations. The app had to stay fast, practical, and easy to use during a working day.',
      solution:
        'I built TaxiRapport as a React Native mobile app with structured trip logging, Firebase-backed data handling, and Redux state management. The experience focuses on quick entry, clear summaries, and reliable navigation so drivers can track work activity with minimal friction.',
      features: [
        'Trip logging flow for recording daily rides and driving activity',
        'Earnings and performance summaries for quick driver review',
        'Historical trip data organized for easy lookup and comparison',
        'Firebase integration for reliable mobile data management',
        'Redux-powered state management for predictable app behavior',
      ],
      results:
        'TaxiRapport gives drivers a focused mobile tool for managing trip records and earnings in one place. The project demonstrates a production-minded React Native workflow with practical data handling, clean UI structure, and an app-store-ready delivery path.',
    },
  },
  {
    slug: 'zayvoratech',
    title: 'Zayvora Tech',
    description:
      'A professional digital agency website for Zayvora Tech, positioning the company as a complete growth partner for websites, e-commerce stores, paid ads, branding, content, social media management, and long-term business support.',
    previewImage:
      '/zayvora.webp',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    category: 'Business Website',
    filters: ['Web Apps', 'Freelance'],
    links: [
      { label: 'Live Site', href: 'https://www.zayvoratech.com/', external: true },
      { label: 'Case Study', href: '/work/zayvoratech' },
      { label: 'GitHub', href: 'https://github.com/ismailkhan8585/zayvora-Tech', external: true },
    ],
    featured: true,
    caseStudy: {
      client: 'Zayvora Tech',
      role: 'Website Developer',
      timeline: '4 weeks',
      challenge:
        'Zayvora Tech needed a polished online presence that could communicate a broad service offering without feeling scattered. The website had to explain websites, stores, ads, branding, content, social media, consulting, and support in a clear growth-focused story while giving business owners an easy path to contact the team.',
      solution:
        'I created a modern agency website with strong conversion sections, service breakdowns, pricing plans, client proof, and direct contact calls to action. The structure presents Zayvora Tech as a complete digital growth partner for Pakistan-based and international businesses, with messaging built around visibility, trust, and measurable business outcomes.',
      features: [
        'Conversion-focused homepage with a clear agency positioning and primary calls to action',
        'Service sections for branding, web development, app development, e-commerce, ads, content, social media, cloud solutions, and consulting',
        'Pricing plan presentation that helps prospects compare service levels quickly',
        'Trust-building sections for agency values, client results, testimonials, and business impact',
        'Responsive layout and contact flow designed for fast inquiries through forms, calls, and WhatsApp',
      ],
      results:
        'The finished website gives Zayvora Tech a credible, professional digital presence that explains the company clearly, supports lead generation, and makes the brand feel ready for serious clients. It turns a wide service catalog into a focused business-growth narrative with practical conversion paths.',
    },
  },
  {
    slug: 'organocity',
    title: 'OrganoCity: AI Video & Social Media Marketing',
    description:
      'Managed full social media presence and produced AI-generated marketing videos and posts for OrganoCity using Gemini AI, InVideo AI, and Grok AI — covering content strategy, video production, and cross-platform publishing.',
    previewImage:
      '/socail.webp',
    stack: ['Gemini AI', 'InVideo AI', 'Grok AI', 'Social Media Management'],
    category: 'AI Video & Marketing',
    filters: ['AI Video & Marketing', 'Freelance'],
    links: [
      { label: 'Visit Site', href: 'https://organocity.com/', external: true },
      { label: 'GitHub', href: 'https://github.com/ismailkhan8585/Organocity', external: true },
    ],
    
    featured: true,
  },
  {
    slug: 'techcreator',
    title: 'TechCreator',
    description:
      'A full-featured software development and digital growth platform designed to help businesses build powerful online presences. The website showcases services like custom software solutions, web and mobile app development, UX/UI design, SEO, and digital marketing with a clean, responsive, and professional user experience.',
    previewImage: '/teacherator.webp',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'SEO'],
    category: 'Business Website',
    filters: ['Web Apps', 'Business Website', 'Freelance'],
    links: [
      {
        label: 'Live Site',
        href: 'https://www.techcreator.co/',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/ismailkhan8585/TechCreator',
        external: true,
      },
      {
        label: 'Case Study',
        href: '/work/techcreator',
      },
    ],
    featured: true,
    caseStudy: {
      client: 'TechCreator',
      role: 'Website Developer',
      timeline: '5 weeks',
      challenge:
        'TechCreator needed a professional agency website that could explain a wide service catalog without overwhelming visitors. The site had to communicate custom software, web development, mobile apps, AI-first delivery, UI/UX, SEO, digital marketing, industries served, client trust, FAQs, and contact options in one clear conversion-focused experience.',
      solution:
        'I developed a polished business website that organizes TechCreator around a clear digital-transformation message. The experience presents strong hero messaging, service sections, technology expertise, project workflow, product offerings, industry pages, social proof, FAQs, and direct calls to action so potential clients can quickly understand the company and start a conversation.',
      features: [
        'Conversion-focused homepage with strong agency positioning and clear calls to action',
        'Service coverage for web development, mobile app development, UI/UX, SEO, digital marketing, QA, DevOps, and software maintenance',
        'Technology and process sections that explain the company workflow from roadmap planning through launch and support',
        'Industry-focused content for e-commerce, real estate, hospitality, restaurants, healthcare, and green energy clients',
        'Trust-building sections for client proof, FAQs, contact details, appointment booking, and quote requests',
      ],
      results:
        'The final website gives TechCreator a credible and professional online presence that supports lead generation, explains its full-service offer, and positions the company as an AI-first technology partner for businesses that need scalable software, modern websites, and digital growth support.',
    },
  },
  {
  slug: 'saudi-property-platform',
  title: 'Saudi Property Platform',
  description:
    'A modern bilingual real-estate platform for Saudi Arabia, featuring Arabic and English support, RTL and LTR layouts, advanced property search, sale and rental listings, detailed property pages, and direct WhatsApp enquiries.',
  previewImage: '/saudi-property.webp',
  stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  category: 'Real Estate Web App',
  filters: ['Web Apps', 'Real Estate', 'Freelance'],
  links: [
    {
      label: 'Live Site',
      href: 'https://saudi-property-platform.vercel.app/',
      external: true,
    },
    {
      label: 'Case Study',
      href: '/work/saudi-property-platform',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ismailkhan8585/saudi-property-platform',
      external: true,
    },
  ],
  featured: true,
},

];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
