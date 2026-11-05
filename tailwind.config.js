/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueprint: {
          dark: '#081326',
          navy: '#0e2448',
          deep: '#123060',
          grid: '#1b4482',
          chalk: '#f8fafc',
          line: 'rgba(255, 255, 255, 0.25)',
        },
        microsoft: {
          power: '#742774',
          apps: '#893B89',
          flow: '#0066FF',
          dataverse: '#008272',
          dotnet: '#512BD4',
          sharepoint: '#038387',
          sql: '#CC292B',
          azure: '#0078D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        draft: ['Courier New', 'Space Mono', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': `
          linear-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'blueprint': '60px 60px, 60px 60px, 12px 12px, 12px 12px',
      }
    },
  },
  plugins: [],
}
