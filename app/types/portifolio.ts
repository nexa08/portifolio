import { Ionicons } from "@expo/vector-icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  telegram?:string;
  location?:string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: Skill[];
  projects: Project[];
  contact: ContactInfo;
}