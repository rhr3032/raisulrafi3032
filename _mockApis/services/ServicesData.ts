import mock from '../mockAdapter';
import type { ServiceType } from '@/types/services/ServiceTypes';

const ServicesData: ServiceType[] = [
  {
    id: 1,
    service_title: "UX Research & Strategy",
    service_subtitle: "Understand users, define problems, and shape product direction",
    service_icon: "mdi:account-search-outline",
    service_image: "/images/projects/project1.webp",
    description: "I help teams uncover user needs and product opportunities through research and strategic UX planning. This includes user interviews, competitive analysis, personas, and journey mapping to ensure the product solves the right problems.\n\nThe outcome is a clear UX strategy that aligns business goals with user expectations and sets a strong foundation for design and development.",
    category: "UX",
    duration: "2-4 weeks",
    deliverables: "Research Plan, Personas, Journey Maps, UX Strategy",
    price_range: "$1,500 - $4,000",
    detail_img_1: "/images/projects/details/pd-11.webp",
    detail_img_2: "/images/projects/details/pd-12.webp",
    detail_img_3: "/images/projects/details/pd-13.webp",
    features: [
      "Stakeholder Interviews",
      "User Research & Surveys",
      "Personas & Jobs-to-be-Done",
      "Journey Mapping",
      "Information Architecture",
      "UX Roadmap"
    ],
    process_steps: [
      "Discovery",
      "Research",
      "Synthesis",
      "Strategy"
    ]
  },
  {
    id: 2,
    service_title: "UI Design",
    service_subtitle: "Create modern, clean, and accessible interfaces",
    service_icon: "mdi:palette-outline",
    service_image: "/images/projects/project2.webp",
    description: "I design visually compelling, user-friendly interfaces that reflect your brand and improve usability. I focus on hierarchy, layout, typography, and accessibility to create clean and consistent experiences.\n\nYou receive high-fidelity UI designs that are ready for developer handoff with clear specs and assets.",
    category: "UI",
    duration: "2-5 weeks",
    deliverables: "High-fidelity UI, Design Specs, Assets",
    price_range: "$2,000 - $6,000",
    detail_img_1: "/images/projects/details/pd-21.webp",
    detail_img_2: "/images/projects/details/pd-22.webp",
    detail_img_3: "/images/projects/details/pd-23.webp",
    features: [
      "Visual Design",
      "Responsive Layouts",
      "Accessibility Considerations",
      "Component Library",
      "Style Guide",
      "Developer Handoff"
    ],
    process_steps: [
      "Moodboard",
      "UI Exploration",
      "High-fidelity Design",
      "Handoff"
    ]
  },
  {
    id: 3,
    service_title: "Wireframing & Prototyping",
    service_subtitle: "Validate ideas quickly with clear user flows",
    service_icon: "mdi:vector-polyline",
    service_image: "/images/projects/project3.webp",
    description: "I translate concepts into wireframes and interactive prototypes to validate ideas early and align teams. This helps reduce risk, clarify user flows, and guide development with confidence.\n\nPrototypes are shareable for stakeholder reviews and usability testing.",
    category: "UX",
    duration: "1-3 weeks",
    deliverables: "User Flows, Wireframes, Interactive Prototype",
    price_range: "$1,200 - $3,500",
    detail_img_1: "/images/projects/details/pd-31.webp",
    detail_img_2: "/images/projects/details/pd-32.webp",
    detail_img_3: "/images/projects/details/pd-33.webp",
    features: [
      "User Flow Mapping",
      "Low-fidelity Wireframes",
      "Interactive Prototype",
      "Iteration Cycles",
      "Usability Feedback",
      "Design Documentation"
    ],
    process_steps: [
      "Flow Definition",
      "Wireframes",
      "Prototype",
      "Validate"
    ]
  },
  {
    id: 4,
    service_title: "Design Systems",
    service_subtitle: "Build scalable UI components and guidelines",
    service_icon: "mdi:layers-outline",
    service_image: "/images/projects/project4.webp",
    description: "I create scalable design systems that keep your product consistent and easier to maintain. This includes UI components, spacing rules, typography scales, and documentation for teams to follow.\n\nDesign systems improve collaboration between design and development while speeding up future releases.",
    category: "UI",
    duration: "3-6 weeks",
    deliverables: "Component Library, Style Guide, Documentation",
    price_range: "$3,000 - $8,000",
    detail_img_1: "/images/projects/details/pd-41.webp",
    detail_img_2: "/images/projects/details/pd-42.webp",
    detail_img_3: "/images/projects/details/pd-43.webp",
    features: [
      "Reusable Components",
      "Design Tokens",
      "Typography & Color Systems",
      "Spacing & Layout Rules",
      "Documentation",
      "Handoff Guidelines"
    ],
    process_steps: [
      "Audit",
      "System Planning",
      "Component Build",
      "Documentation"
    ]
  }
];

// Helper function to slugify service titles
const slugify = (title?: string) => {
  if (!title) return '';
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

// Mock API endpoints
mock.onGet('/api/services').reply(() => {
  return [200, ServicesData];
});

mock.onGet(new RegExp('/api/services/.*')).reply((config) => {
  const slug = config.url?.split('/').pop();
  const service = ServicesData.find(
    (s) => slugify(s.service_title) === slug
  );
  if (service) {
    return [200, service];
  }
  return [404, { message: 'Service not found' }];
});

export default ServicesData;
