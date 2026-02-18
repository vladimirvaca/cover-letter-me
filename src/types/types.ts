export interface Section {
  id: string;
  name: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

export interface Skill {
  name: string;
  deviconClass?: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Company {
  name: string;
  icon: string;
  width?: number;
  height?: number;
}
