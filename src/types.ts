export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  title: string;
  organization?: string;
  period: string;
  status?: string;
  description?: string;
  highlights?: string[];
}

export interface EducationItem {
  institution: string;
  department?: string;
  period: string;
  degree?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  role?: string;
  techStack?: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface PersonalInfo {
  name: string;
  nameEn: string;
  role: string;
  phone: string;
  email: string;
  github: string;
  velog: string;
  tagline: string;
  aboutParagraphs: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
}
