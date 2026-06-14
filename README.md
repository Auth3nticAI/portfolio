# Portfolio — tray-branch.dev

> Personal site. Hero, About, and a Projects page with a tag-filter that lets visitors slice by language or domain.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

---

![homepage](screenshots/homepage.png)

## What's here

- **Three pages** routed through the App Router — Home, About, Projects.
- **Projects page** renders from a typed `data/projects.ts` array via `.map()`, with category-tag filter buttons backed by `useState`.
- **Reusable `<ProjectCard>` component** so each project renders the same way and adding a new one is a single object in the array.
- Responsive at every breakpoint, no layout flickers; mobile-first padding and spacing.
- Avatar gradient component (currently initials, swappable to an image).

![projects page with filter active](screenshots/projects-filtered.png)

## Stack

- Next.js 16 App Router + TypeScript
- Tailwind 4 (CSS-based config)
- No state library, no fetcher — straight `useState` + a typed data file

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project layout

```
portfolio/
├── app/
│   ├── layout.tsx          # Shared nav + footer
│   ├── page.tsx            # Home / hero
│   ├── about/page.tsx      # Bio + skills + interests
│   └── projects/page.tsx   # Client component — useState filter
├── components/
│   └── ProjectCard.tsx     # Reusable project card with status + tech tags
├── data/
│   └── projects.ts         # Typed project array — single source of truth
```

## Background

Built as Mini Project 1 for **CSE552 — Fullstack Software Development in the Age of AI Agents**. Designed to double as a living portfolio site, not throwaway coursework.
