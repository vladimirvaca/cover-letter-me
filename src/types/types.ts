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
  icon: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Company {
  name: string;
  icon: string;
  size: string;
}
