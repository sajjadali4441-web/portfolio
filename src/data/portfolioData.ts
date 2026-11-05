import {
  HeroProfile,
  ExperienceItem,
  ProjectItem,
  CertificationItem,
  SkillCategory,
  EducationItem
} from '../types/portfolio';

export const personalProfile: HeroProfile = {
  name: 'SAJJAD ALI',
  title: 'Software Engineer',
  summary:
    "Hi, I'm Sajjad Ali, a Software Engineer passionate about building scalable applications, intelligent automation, and AI-powered solutions.",
  avatarUrl: './avatar.jpg',
  resumeUrl: './Sajjad-Ali-CV.pdf',
  socials: {
    email: 'sajjadali.4441@gmail.com',
    phone: '+92 304 7678275',
    location: 'Lahore, Pakistan',
    linkedin: 'https://www.linkedin.com/in/sajjad-ali-332503278/',
    github: 'https://github.com/sajjadali4441-web',
    microsoftProfile: 'https://www.linkedin.com/in/sajjad-ali-332503278/'
  }
};

export const experiences: ExperienceItem[] = [
  {
    id: 'allied-bank',
    role: 'SharePoint & .NET Solutions Engineer',
    company: 'Allied Bank Limited (Head Office)',
    period: 'Sep 2025 – Present',
    location: 'Lahore, PK',
    highlights: [
      'Architect and develop core banking web applications including the Product Knowledge Measurement Portal (PKMP) and Branch Service Health Check using React.js and .NET Web APIs.',
      'Collaborate with the enterprise migration team on environment analysis, troubleshooting complex migration challenges, and verifying data consistency (SharePoint 2013 to 2019).',
      'Provide production support, maintenance, and system optimization for enterprise SharePoint platforms to ensure high availability and security.'
    ],
    skills: ['React.js', '.NET Web API', 'C#', 'SQL Server', 'SharePoint Server', 'Enterprise Systems']
  },
  {
    id: 'stewart-pakistan',
    role: 'Software & Solutions Engineer',
    company: 'Stewart Pakistan (Pvt.) Ltd',
    period: 'Apr 2022 – Aug 2025',
    location: 'Lahore, PK',
    highlights: [
      'Developed modular Canvas and Model-Driven applications connected to Microsoft Dataverse and SharePoint.',
      'Engineered automated business workflows using Power Automate, eliminating repetitive manual operations across departments.',
      'Optimized backend data access layers and relational database operations using ADO.NET, Entity Framework, and SQL Server.',
      'Administered and customized SharePoint Online environments to support internal business needs and collaboration.'
    ],
    skills: ['C#', '.NET', 'Power Apps', 'Power Automate', 'Microsoft Dataverse', 'SQL Server', 'SharePoint Online']
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'pkmp',
    title: 'Product Knowledge Measurement Portal (PKMP)',
    subtitle: 'Full-Stack Banking Application',
    category: 'Full-Stack & .NET',
    organization: 'Allied Bank Limited',
    description:
      'A comprehensive web platform that enables the bank to evaluate, monitor, and measure employee product expertise across regional branch networks with real-time reporting.',
    highlights: [
      'Directed end-to-end technical architecture, relational database design, and API development.',
      'Built secure RESTful endpoints in .NET Core with role-based access control and token authentication.',
      'Created an interactive, performant frontend with React.js connected to optimized SQL Server queries.'
    ],
    technologies: ['React.js', '.NET Web API', 'C#', 'SQL Server', 'REST APIs'],
    featured: true
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    subtitle: 'Intelligent Healthcare Operations',
    category: 'Power Platform',
    organization: 'Healthcare Solution',
    description:
      'A modern, modular healthcare operations system designed to streamline patient intake, clinical appointment management, and automated notification routing.',
    highlights: [
      'Developed responsive Canvas and Model-Driven applications with user-centric interface flows.',
      'Implemented automated multi-stage approval workflows and email/SMS alerts using Power Automate.',
      'Configured relational entities and granular security access policies within Microsoft Dataverse.'
    ],
    technologies: ['Power Apps', 'Power Automate', 'Microsoft Dataverse', 'Intelligent Workflows'],
    featured: true
  },
  {
    id: 'branch-health-check',
    title: 'Branch Service Health Check & Migration',
    subtitle: 'System Monitoring & Infrastructure Migration',
    category: 'SharePoint',
    organization: 'Allied Bank Limited',
    description:
      'A real-time monitoring dashboard and large-scale intranet migration project transitioning mission-critical banking assets to modern infrastructure.',
    highlights: [
      'Developed dynamic monitoring views using React.js and .NET Web APIs to track operational branch health metrics.',
      'Performed detailed environment diagnostics and resolved schema discrepancies during SharePoint migration.',
      'Ensured uninterrupted service availability for high-volume banking workloads throughout the migration.'
    ],
    technologies: ['React.js', '.NET Web API', 'SharePoint Server', 'SQL Server', 'Monitoring'],
    featured: true
  },
  {
    id: 'concierge-portal',
    title: 'Enterprise Concierge Portal',
    subtitle: 'Intelligent Workplace Automation',
    category: 'Power Platform',
    organization: 'Stewart Pakistan (Pvt.) Ltd',
    description:
      'An internal service automation hub that consolidates IT, HR, and administrative requests into an intuitive, self-service digital experience.',
    highlights: [
      'Designed responsive request forms with dynamic field validation and status tracking.',
      'Automated multi-level approval hierarchies and SLA escalations using Power Automate.',
      'Integrated unified record storage with audit logging for compliance.'
    ],
    technologies: ['Power Apps', 'Power Automate', 'SharePoint Online', 'Process Automation'],
    featured: true
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'pl-400',
    code: 'PL-400',
    title: 'Microsoft Certified: Power Platform Developer Associate',
    issuer: 'Microsoft',
    badgeType: 'official',
    highlight: 'Official credential validating custom business logic, API integrations, data modeling, and enterprise solution development.'
  },
  {
    id: 'hackathon-2024',
    code: 'AI-2024',
    title: 'Microsoft AI Hackathon 2024 Contributor',
    issuer: 'Hackathon',
    badgeType: 'achievement',
    highlight: 'Contributed to AI hackathon initiatives applying intelligent agents and automated AI workflows to modern software solutions.'
  },
  {
    id: 'pl-100',
    code: 'PL-100',
    title: 'Power Platform App Maker Associate',
    issuer: 'LinkedIn',
    badgeType: 'course',
    highlight: 'Application design, business logic implementation, and workflow automation.'
  },
  {
    id: 'pl-900',
    code: 'PL-900',
    title: 'Power Platform Fundamentals',
    issuer: 'LinkedIn',
    badgeType: 'course',
    highlight: 'Foundational capabilities of cloud-based low-code architecture and Dataverse integration.'
  },
  {
    id: 'dynamics-365',
    code: 'D365',
    title: 'Microsoft Dynamics 365 Basics',
    issuer: 'LinkedIn',
    badgeType: 'course',
    highlight: 'Enterprise CRM architectures, customer engagement workflows, and extensibility.'
  },
  {
    id: 'power-apps-essential',
    code: 'PA-ADV',
    title: 'Power Apps Essential Training',
    issuer: 'LinkedIn',
    badgeType: 'course',
    highlight: 'Formulas, collections, responsive layout containers, and performance optimization.'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Software Engineering & Full-Stack',
    skills: [
      'C#',
      '.NET Core / .NET 8',
      'ASP.NET Web API',
      'React.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5 & Tailwind CSS',
      'RESTful APIs & Microservices'
    ]
  },
  {
    title: 'AI & Intelligent Automation',
    skills: [
      'Generative AI Integration',
      'AI-Powered Workflows',
      'Intelligent Automation (RPA)',
      'OpenAI / Azure OpenAI APIs',
      'Power Automate (Cloud & Desktop)',
      'Prompt Engineering & LLM APIs'
    ]
  },
  {
    title: 'Enterprise Platforms & Cloud',
    skills: [
      'Power Apps (Canvas & Model-Driven)',
      'Microsoft Dataverse',
      'Dynamics 365 CRM',
      'SharePoint Online & Server 2019',
      'Azure DevOps & CI/CD Pipelines',
      'Git & GitHub'
    ]
  },
  {
    title: 'Databases & Architecture',
    skills: [
      'Microsoft SQL Server',
      'T-SQL & Stored Procedures',
      'Entity Framework Core & ADO.NET',
      'Database Optimization & Indexing',
      'Relational Data Modeling',
      'Clean Architecture & Design Patterns'
    ]
  }
];

export const education: EducationItem = {
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  institution: 'University of Central Punjab',
  period: '2018 – 2022',
  location: 'Lahore, Pakistan'
};
