import type { Company, Project, Section, TechCategory } from '../types/types.ts';
import ioetLogo from '../assets/icons/ioet.png';
import ibmLogo from '../assets/icons/ibm.png';
import thoughtworksLogo from '../assets/icons/thoughtworks.png';
import encoraLogo from '../assets/icons/encora.webp';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

export const SECTIONS: Section[] = [
  { id: '1', name: 'About', href: '#about' },
  { id: '2', name: 'Stack', href: '#stack' },
  { id: '3', name: 'Experience', href: '#experience' },
  { id: '4', name: 'Projects', href: '#projects' },
];

export const TECH_STACK: TechCategory[] = [
  {
    title: 'Frontend',
    icon: 'desktop_mac',
    skills: [
      { name: 'React', icon: 'code_blocks' },
      { name: 'TypeScript', icon: 'integration_instructions' },
      { name: 'Next.js', icon: 'keyboard_double_arrow_right' },
      { name: 'Redux', icon: 'account_tree' },
      { name: 'Tailwind', icon: 'brush' },
    ],
  },
  {
    title: 'Backend',
    icon: 'dns',
    skills: [
      { name: 'Spring Boot', icon: 'terminal' },
      { name: 'Java', icon: 'coffee' },
      { name: 'Kotlin', icon: 'android' },
      { name: 'Hibernate', icon: 'table_view' },
      { name: 'REST API', icon: 'api' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      { name: 'Lambda', icon: 'functions' },
      { name: 'EC2', icon: 'cloud_queue' },
      { name: 'S3', icon: 'folder_open' },
      { name: 'DynamoDB', icon: 'database' },
      { name: 'Docker', icon: 'deployed_code' },
    ],
  },
];

export const COMPANIES: Company[] = [
  { name: 'ioet', icon: ioetLogo.src, size: 'w-30 h-30' },
  { name: 'IBM', icon: ibmLogo.src, size: 'w-20 h-20' },
  { name: 'Thoughtworks', icon: thoughtworksLogo.src, size: 'w-35 h-35' },
  { name: 'Encora', icon: encoraLogo.src, size: 'w-20 h-20' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Alpha Analytics Platform',
    description:
      'A real-time financial data visualization dashboard processing high-frequency trading data via WebSockets.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBP4Ccz2HeMv9qg1l3L16b3oOS6oVQG9ap_QM1H_KlG4YhkNpbO5IHF_lWQJZYpo9JZLVIiw8PPMvHQuKk9ZWzQrSKRUIy1x0XKtJaIhHKPcQPLiSEniiyQc1__rhQSPtugGOUFBVa9pGuNdlmMuvQ07YCIXzHkBRjmZOFNTV01NKSRoHk0FGD8oczWtH1Rb10IZzNU6GvoMJXI9wq66OnDihfvvWnqaCC8G6eLit2LNbJhHwTRflfX4HL8br1ySaUP1O9NICmdYk',
    tags: ['React', 'D3.js', 'Spring WebFlux'],
    category: 'FinTech',
  },
  {
    id: '2',
    title: 'ShopScale API',
    description:
      'Headless e-commerce backend handling 50k+ transactions per minute. Built with microservices architecture.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuApVOrrGq8280ftcbM03gNLzleqPQNOWkQPE1J4d_UjAo7HHs8xCks_XzdAx3WS0qsTalFdROzhkQZxummu-5P7PkqbDHd4J4ngkUglsWz6ekORYNVQc0MVL3ct5gYuVwhtS0d0UbIw7c-TBLdRV-C-4NWVpesykHLWYWcRFeOxJArwnEoILkF-q4bjuoBGMIT5_W5PS_WSaiDshfYX03lzC01tW-Nc2mvIjii9AZEQC9XFl8Wlbl5WN0hZjW3GwlkJ2Mkf4XJkudI',
    tags: ['Kotlin', 'AWS Lambda', 'DynamoDB'],
    category: 'E-Commerce',
  },
];

export const SOCIAL_MEDIA = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vladimir-vaca-5a08aba7/',
    icon: linkedinIcon.src,
  },
  { name: 'GitHub', url: 'https://github.com/vladimirvaca', icon: githubIcon.src }
];
