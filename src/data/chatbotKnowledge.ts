export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  chips?: string[];
  links?: { label: string; url: string }[];
}

export interface PromptOption {
  label: string;
  query: string;
  icon?: string;
}

export const INITIAL_SUGGESTIONS: PromptOption[] = [
  { label: '⚡ 30-Second Elevator Pitch', query: 'Tell me about Sajjad Ali' },
  { label: '🛠️ Core Tech Stack', query: "What is Sajjad's technical stack?" },
  { label: '💼 Enterprise Experience', query: "Tell me about his work experience" },
  { label: '🚀 Attendance Log System (ALS)', query: 'Tell me about the Attendance Log System' },
  { label: '🏆 Microsoft Certifications', query: 'What certifications does Sajjad have?' },
  { label: '📄 Resume & CV Download', query: 'Can I view or download Sajjad’s CV?' },
  { label: '📬 How to Contact', query: 'How can I contact Sajjad?' },
];

export function getBotResponse(userQuery: string): {
  text: string;
  chips?: string[];
  links?: { label: string; url: string }[];
} {
  const query = userQuery.toLowerCase().trim();

  // 1. Resume / CV Download
  if (
    query.includes('cv') ||
    query.includes('resume') ||
    query.includes('pdf') ||
    query.includes('download')
  ) {
    return {
      text: "You can view and download Sajjad Ali's comprehensive CV directly:\n\n• **Format:** PDF (Print & ATS-optimized)\n• **Includes:** 4+ years enterprise timeline, technical proficiencies, Microsoft credentials, and project metrics.",
      chips: ["Core Tech Stack", "Enterprise Experience", "Contact Sajjad"],
      links: [
        { label: "Download Sajjad-Ali-CV.pdf 📄", url: "./Sajjad-Ali-CV.pdf" },
        { label: "LinkedIn Profile ↗", url: "https://www.linkedin.com/in/sajjad-ali-332503278/" }
      ]
    };
  }

  // 2. Elevator Pitch / Overview / Who is Sajjad
  if (
    query.includes('who is') ||
    query.includes('about sajjad') ||
    query.includes('tell me about') ||
    query.includes('pitch') ||
    query.includes('summary') ||
    query.includes('introduction') ||
    query.includes('overview')
  ) {
    return {
      text: "Sajjad Ali is a Software Engineer with over 4 years of experience architecting and delivering high-availability software across banking, healthcare, and enterprise corporate environments. He specializes in full-stack application development, intelligent automation, and AI-powered solutions.",
      chips: ["Core Tech Stack", "Enterprise Experience", "Featured Projects", "Contact Sajjad"],
      links: [
        { label: "View CV (PDF)", url: "./Sajjad-Ali-CV.pdf" },
        { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/sajjad-ali-332503278/" }
      ]
    };
  }

  // 3. Tech Stack / Skills
  if (
    query.includes('stack') ||
    query.includes('skill') ||
    query.includes('technolog') ||
    query.includes('language') ||
    query.includes('c#') ||
    query.includes('.net') ||
    query.includes('dotnet') ||
    query.includes('react') ||
    query.includes('frontend') ||
    query.includes('backend') ||
    query.includes('database') ||
    query.includes('sql')
  ) {
    return {
      text: "Sajjad's core technical competencies span four major areas:\n\n• **Software Engineering & Full-Stack:** C#, .NET Core / .NET 8, ASP.NET Web API, React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, REST APIs.\n• **AI & Intelligent Automation:** Generative AI Integration, AI-Powered Workflows, RPA, OpenAI / Azure OpenAI APIs, Power Automate (Cloud & Desktop).\n• **Enterprise Platforms:** Microsoft Power Platform (Canvas & Model-Driven), Dataverse, Dynamics 365 CRM, SharePoint Server 2019 & Online, Azure DevOps CI/CD.\n• **Databases & Architecture:** Microsoft SQL Server, T-SQL, Stored Procedures, Entity Framework Core, Relational Data Modeling, and Clean Architecture.",
      chips: ["Featured Projects", "Microsoft Certifications", "Enterprise Experience"],
      links: [
        { label: "LinkedIn Skills & Endorsements", url: "https://www.linkedin.com/in/sajjad-ali-332503278/" }
      ]
    };
  }

  // 4. Work Experience / Companies
  if (
    query.includes('experience') ||
    query.includes('work') ||
    query.includes('allied bank') ||
    query.includes('abl') ||
    query.includes('stewart') ||
    query.includes('career') ||
    query.includes('job') ||
    query.includes('company')
  ) {
    return {
      text: "Sajjad has 4+ years of professional enterprise experience:\n\n1. **Allied Bank Limited (Head Office)** (Sep 2025 – Present)\n*SharePoint & .NET Solutions Engineer*\n• Architecting core banking web applications (Product Knowledge Measurement Portal & Branch Health Check) using React.js and .NET Web APIs.\n• Enterprise SharePoint 2013 to 2019 migration, complex environment diagnostics, and high-availability operations.\n\n2. **Stewart Pakistan (Pvt.) Ltd** (Apr 2022 – Aug 2025)\n*Software & Solutions Engineer*\n• Developed modular Canvas & Model-Driven apps connected to Dataverse.\n• Built automated business workflows with Power Automate.\n• Optimized backend SQL Server access utilizing ADO.NET and Entity Framework.",
      chips: ["Core Tech Stack", "Attendance Log System", "Microsoft Certifications", "Contact Sajjad"],
      links: [
        { label: "View Detailed Resume", url: "./Sajjad-Ali-CV.pdf" }
      ]
    };
  }

  // 5. Attendance Log System (ALS)
  if (
    query.includes('attendance') ||
    query.includes('als') ||
    query.includes('geofenc') ||
    query.includes('gps') ||
    query.includes('mobile app') ||
    query.includes('spoof') ||
    query.includes('offline')
  ) {
    return {
      text: "**Attendance Log System (ALS)** is an enterprise workforce management platform engineered by Sajjad Ali:\n\n• **100m Sub-Meter Geofencing:** Mathematical Haversine verification enforcing check-ins within physical office boundaries.\n• **Hardware Anti-Spoofing:** Blocks Mock GPS, developer spoofing apps, and clock drift anomalies.\n• **Offline-First Resilience:** Encrypted local queue that syncs automatically when network restores.\n• **Admin Web Portal & Mobile Experience:** Executive dashboard, Leaflet GPS live map, automated leave/loan workflows, and localized salary slips.",
      chips: ["Core Tech Stack", "Other Projects", "Contact Sajjad"],
      links: [
        { label: "Live Admin Portal ↗", url: "https://sajjadali4441-web.github.io/attendance-log-system-portfolio/" },
        { label: "Live Mobile Web App (Instant) 📱", url: "https://sajjadali4441-web.github.io/attendance-log-system-portfolio/app.html" }
      ]
    };
  }

  // 6. Projects & Solutions
  if (
    query.includes('project') ||
    query.includes('portfolio') ||
    query.includes('pkmp') ||
    query.includes('hospital') ||
    query.includes('concierge') ||
    query.includes('branch')
  ) {
    return {
      text: "Here are Sajjad's highlighted enterprise projects:\n\n1. **Attendance Log System (ALS)**: Geofenced workforce attendance, anti-spoofing engine, and payroll automation.\n2. **Product Knowledge Measurement Portal (PKMP)**: Full-stack banking solution built for Allied Bank using React.js, .NET Web API, and SQL Server.\n3. **Hospital Management System**: Modular healthcare operations system with Power Apps, Power Automate, and Dataverse.\n4. **Branch Service Health Check & Migration**: Real-time banking operational monitoring and intranet migration.\n5. **Enterprise Concierge Portal**: Internal workplace service automation suite.",
      chips: ["Tell me about ALS", "Core Tech Stack", "Contact Sajjad"],
      links: [
        { label: "ALS Web Portal", url: "https://sajjadali4441-web.github.io/attendance-log-system-portfolio/" },
        { label: "ALS Mobile App", url: "https://sajjadali4441-web.github.io/attendance-log-system-portfolio/app.html" }
      ]
    };
  }

  // 7. Certifications & Badges
  if (
    query.includes('certificat') ||
    query.includes('pl-400') ||
    query.includes('pl-100') ||
    query.includes('pl-900') ||
    query.includes('microsoft') ||
    query.includes('badge') ||
    query.includes('hackathon') ||
    query.includes('award')
  ) {
    return {
      text: "Sajjad holds prestigious Microsoft and professional industry credentials:\n\n• **Microsoft Certified:** Power Platform Developer Associate (**PL-400**) — Official Microsoft certification for custom business logic, PCF controls, and Dataverse development.\n• **Microsoft AI Hackathon 2024 Contributor** — Applied intelligent agents and automated AI workflows to modern software solutions.\n• **Power Platform App Maker Associate (PL-100)**\n• **Power Platform Fundamentals (PL-900)**\n• **Microsoft Dynamics 365 Basics**\n• **Power Apps Essential Training**",
      chips: ["Enterprise Experience", "Core Tech Stack", "Contact Sajjad"],
      links: [
        { label: "Verify on LinkedIn", url: "https://www.linkedin.com/in/sajjad-ali-332503278/" }
      ]
    };
  }

  // 8. Education
  if (
    query.includes('education') ||
    query.includes('degree') ||
    query.includes('university') ||
    query.includes('college') ||
    query.includes('bscs') ||
    query.includes('ucp') ||
    query.includes('graduat')
  ) {
    return {
      text: "Sajjad graduated with a **Bachelor of Science in Computer Science (BSCS)** from the **University of Central Punjab** in Lahore, Pakistan (2018 – 2022).",
      chips: ["Enterprise Experience", "Core Tech Stack", "Microsoft Certifications"]
    };
  }

  // 9. Availability / Hire / Remote / Onsite
  if (
    query.includes('available') ||
    query.includes('hire') ||
    query.includes('notice') ||
    query.includes('remote') ||
    query.includes('onsite') ||
    query.includes('relocat') ||
    query.includes('contract') ||
    query.includes('full time')
  ) {
    return {
      text: "Sajjad is open to discussing high-impact engineering opportunities, both enterprise roles and specialized full-stack (.NET, React, AI Automation) technical engagements.\n\n• **Location:** Lahore, Pakistan (Open to hybrid, onsite, or remote positions)\n• **Availability:** Subject to professional notice period.\n• **Direct Inquiry:** You can email or connect directly on LinkedIn.",
      chips: ["Contact Sajjad", "Download CV", "Core Tech Stack"],
      links: [
        { label: "Email Sajjad", url: "mailto:sajjadali.4441@gmail.com" },
        { label: "LinkedIn Connection", url: "https://www.linkedin.com/in/sajjad-ali-332503278/" }
      ]
    };
  }

  // 10. Contact / Email / Phone / WhatsApp
  if (
    query.includes('contact') ||
    query.includes('email') ||
    query.includes('phone') ||
    query.includes('whatsapp') ||
    query.includes('reach') ||
    query.includes('call') ||
    query.includes('message') ||
    query.includes('github') ||
    query.includes('linkedin')
  ) {
    return {
      text: "You can reach Sajjad directly through any of the following channels:\n\n• **Email:** sajjadali.4441@gmail.com\n• **Phone / WhatsApp:** +92 304 7678275\n• **Location:** Lahore, Pakistan\n• **LinkedIn:** linkedin.com/in/sajjad-ali-332503278\n• **GitHub:** github.com/sajjadali4441-web",
      chips: ["30-Second Elevator Pitch", "Core Tech Stack", "Download CV"],
      links: [
        { label: "Send Email ✉️", url: "mailto:sajjadali.4441@gmail.com" },
        { label: "Connect on LinkedIn ↗", url: "https://www.linkedin.com/in/sajjad-ali-332503278/" }
      ]
    };
  }

  // Default Fallback
  return {
    text: "Thanks for your inquiry! Sajjad Ali is a Software Engineer specializing in scalable full-stack applications (.NET Core, React), intelligent automation, and AI-powered solutions. Feel free to explore his background or reach out to him directly:",
    chips: ["30-Second Elevator Pitch", "Core Tech Stack", "Attendance Log System (ALS)", "Contact Sajjad"],
    links: [
      { label: "Email Sajjad", url: "mailto:sajjadali.4441@gmail.com" },
      { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/sajjad-ali-332503278/" }
    ]
  };
}
