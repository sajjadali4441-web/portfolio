# Sajjad Ali — Software Engineer

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **"Hi, I'm Sajjad Ali, a Software Engineer passionate about building scalable applications, intelligent automation, and AI-powered solutions."**

A modern, responsive personal developer portfolio website inspired by the architectural blueprint aesthetic of Leland Jansen, engineered with React, TypeScript, and Tailwind CSS.

---

## 📐 Design & Visual Architecture

- **Architectural Blueprint Hero**: Deep technical blueprint canvas (`#0e2448` / `#123060`) with precision 10px / 50px drafting grid lines, engineering CAD projection guidelines, and hand-drafted sketch chalk typography.
- **Minimalist Content Body**: High-contrast transition to a crisp white layout emphasizing readability and professional presentation.
- **Interactive Experience Timeline**: Chronological career history highlighting enterprise work at **Allied Bank Limited** and **Stewart Pakistan**.
- **Filterable Projects Grid**: Category-filtered enterprise solutions across Full-Stack & .NET, Intelligent Automation, and Enterprise Systems.
- **Credentials & Certifications**: Featured **Microsoft Certified: Power Platform Developer Associate (PL-400)** official credential, **Microsoft AI Hackathon 2024 Contributor** recognition, and professional LinkedIn certifications.
- **Direct Resume Download**: Integrated one-click CV download action.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| **Core Framework** | React 18, TypeScript, Vite |
| **Styling & Theme** | Tailwind CSS, Custom SVG Drafting Grids, PostCSS, Autoprefixer |
| **Icons & Vectors** | Lucide React |
| **CI/CD & Hosting** | GitHub Actions (`deploy.yml`), GitHub Pages |

---

## 📁 Repository Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD deployment to GitHub Pages
├── public/
│   ├── avatar.jpg              # Profile picture
│   └── Sajjad-Ali-CV.pdf       # Curriculum Vitae download
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with mobile drawer
│   │   ├── BlueprintHero.tsx   # Signature blueprint hero canvas
│   │   ├── IntroSection.tsx    # Bio, avatar & vector social links
│   │   ├── EmploymentSection.tsx # Career timeline
│   │   ├── ProjectsSection.tsx # Filterable enterprise project cards
│   │   ├── ResumeCertificationsSection.tsx # Microsoft credentials & skills
│   │   └── AboutEducationSection.tsx       # Bio, degree & contact hub
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio data
│   ├── types/
│   │   └── portfolio.ts        # TypeScript schemas
│   ├── index.css               # Blueprint drafting classes & Tailwind
│   ├── App.tsx                 # Application layout coordinator
│   └── main.tsx                # React DOM entrypoint
├── index.html                  # HTML5 entry with OpenGraph SEO meta tags
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
- [Git](https://git-scm.com/)

### 1. Clone the repository
```bash
git clone https://github.com/sajjadali4441-web/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle is generated in the `dist/` directory.

---

## 🌐 Automated GitHub Pages Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`). 

Whenever changes are pushed to the `main` branch:
1. GitHub Actions automatically installs dependencies (`npm ci`).
2. Runs the TypeScript type-checker and production build (`npm run build`).
3. Deploys the static assets directly to **GitHub Pages** with free global SSL/HTTPS.

---

## 📬 Contact & Connect

- **LinkedIn**: [linkedin.com/in/sajjad-ali-332503278](https://www.linkedin.com/in/sajjad-ali-332503278/)
- **GitHub**: [github.com/sajjadali4441-web](https://github.com/sajjadali4441-web)
- **Email**: [sajjadali.4441@gmail.com](mailto:sajjadali.4441@gmail.com)
- **Location**: Lahore, Pakistan

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
