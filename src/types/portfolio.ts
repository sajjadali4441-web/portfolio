export interface SocialLinks {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  microsoftProfile?: string;
}

export interface HeroProfile {
  name: string;
  title: string;
  summary: string;
  avatarUrl: string;
  resumeUrl: string;
  socials: SocialLinks;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Power Platform' | 'Full-Stack & .NET' | 'SharePoint' | 'Dynamics 365';
  organization?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  linkText?: string;
}

export interface CertificationItem {
  id: string;
  code?: string;
  title: string;
  issuer: 'Microsoft' | 'LinkedIn' | 'Hackathon';
  badgeType: 'official' | 'course' | 'achievement';
  highlight?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}
