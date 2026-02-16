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
      { name: 'JavaScript', deviconClass: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', deviconClass: 'devicon-typescript-plain colored' },
      { name: 'React', deviconClass: 'devicon-react-original colored' },
      { name: 'Vitest', deviconClass: 'devicon-vitest-plain colored' },
      { name: 'PrimeReact', deviconClass: 'devicon-primeng-plain' },
      { name: 'Tailwind', deviconClass: 'devicon-tailwindcss-original colored' },
      { name: 'Jest', deviconClass: 'devicon-jest-plain colored' },
      { name: 'Cypress', deviconClass: 'devicon-cypressio-plain' },
    ],
  },
  {
    title: 'Backend',
    icon: 'dns',
    skills: [
      { name: 'Java', deviconClass: 'devicon-java-plain colored' },
      { name: 'Kotlin', deviconClass: 'devicon-kotlin-plain colored' },
      { name: 'Spring Boot', deviconClass: 'devicon-spring-original colored' },
      { name: 'Node', deviconClass: 'devicon-nodejs-plain colored' },
      { name: 'Mongo', deviconClass: 'devicon-mongodb-plain colored' },
      { name: 'Postgres', deviconClass: 'devicon-postgresql-plain colored' },
      { name: 'Graphql', deviconClass: 'devicon-graphql-plain colored' },
      { name: 'JUnit', deviconClass: 'devicon-junit-plain colored' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      { name: 'AWS', deviconClass: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Github Actions', deviconClass: 'devicon-githubactions-plain colored' },
      { name: 'Github', deviconClass: 'devicon-github-original' },
      { name: 'Git Hooks', deviconClass: 'devicon-git-plain colored' },
      { name: 'Docker', deviconClass: 'devicon-docker-plain colored' },
      { name: 'Kubernetes', deviconClass: 'devicon-kubernetes-plain colored' },
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
  { name: 'GitHub', url: 'https://github.com/vladimirvaca', icon: githubIcon.src },
];
