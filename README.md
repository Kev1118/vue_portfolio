# Kevin Morales – Portfolio

Modern, responsive developer portfolio built with **Vue 3** (Composition API, `<script setup>`), **Vite** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
```

Requires Node.js 18 or newer.

## Editing content

All text, skills, projects and links live in **`src/data/portfolio.js`**. Change it there and every section updates.

- Photo: replace `public/profile.jpg`
- Résumé download: replace `public/Kevin_Morales_Resume_ATS.docx` (and update the path in `portfolio.js` if you rename it)
- Colors / fonts: `src/style.css` (`@theme` block) and the gradient classes in components

## Features

- Responsive layout for mobile, tablet and desktop
- Light / dark mode with saved preference (defaults to dark)
- Typewriter role headline, scroll-reveal animations, animated skill bars
- Active-section highlighting in the navigation
- Contact form that opens the visitor's email app (no backend required)
- Respects `prefers-reduced-motion`

## Packages

| Package | Purpose |
| --- | --- |
| `vue` | UI framework (v3) |
| `tailwindcss`, `@tailwindcss/vite` | Styling |
| `@vueuse/core` | Dark-mode composable |
| `lucide-vue-next` | Icons |
| `vite`, `@vitejs/plugin-vue` | Dev server and build |

## Deploying

`npm run build`, then upload the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your current hosting for kevin-morales.com).
