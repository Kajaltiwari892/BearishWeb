# Bearish Web

Marketing and landing site for **Bearish OS** — an intelligent, all-in-one workspace that replaces scattered productivity tools. The site introduces **BEBA**, Bearish’s AI agent, and walks visitors through product value, workflows, security, and pricing.

## What this project is

This repository is the public-facing marketing website for Bearish OS. It is a single-page marketing experience (locale-prefixed routes) built with modern React and Next.js. Content is driven by translation files so copy can ship in multiple languages without duplicating components.

## Product highlights (what the site communicates)

- **Unified workspace** — One place for work instead of jumping between dozens of apps.
- **BEBA AI agent** — Handles busy work, automates follow-ups, CRM updates, tasks, and workflows.
- **Intelligent connections** — Integrates with Jira, Microsoft Teams, Google Workspace, and 50+ enterprise tools.
- **End-to-end workflows** — From first contact through relationship intelligence, project orchestration, communications, and growth analytics.
- **Universal search** — Find documents, receipts, images, and tasks across the platform.
- **Security & privacy** — Enterprise-grade positioning with SOC2, ISO, GDPR, and CCPA messaging.
- **Flexible pricing story** — Seat-based pricing (from ~$39/seat/month) with locale- and region-aware display support.

## Site sections

| Section | Purpose |
|--------|---------|
| **Hero** | Primary value proposition, CTA, trusted-by logos |
| **Intelligent Connections** | Problem → flow state → crafted product narrative |
| **Intelligently Connect** | App consolidation and BEBA automation |
| **Business Growth** | Tabbed showcase: CRM, projects, communications, analytics |
| **Universal Search** | Cross-platform search story |
| **Private Foundation** | Security, scale, and compliance (nested under Universal Search) |
| **Complete Workflow** | Horizontal carousel of solution playbooks |
| **Unlimited Possibilities** | Pricing CTA and “start free” conversion block |
| **Footer** | Product, solutions, resources, and company links |

## Technical characteristics

- **Framework**: [Next.js 15](https://nextjs.org) (App Router) with [React 19](https://react.dev)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (e.g. Business Growth tab transitions)
- **Assets**: Optimized images via `next/image`; SVGs imported as React components via `@svgr/webpack`
- **Internationalization**: JSON locale files + middleware-based locale routing
- **Responsive UI**: Mobile, tablet, and desktop layouts across major sections (including Universal Search and Private Foundation)
- **Static generation**: Locale routes pre-rendered with `generateStaticParams`

## Supported locales

| Code | Language |
|------|----------|
| `en` | English |
| `ja` | Japanese |
| `ar` | Arabic |
| `es` | Spanish |
| `it` | Italian |
| `fr` | French |
| `ko` | Korean |

Locale is part of the URL (`/en`, `/ja`, …). Middleware redirects bare paths to a locale using `Accept-Language` when possible.

## Project structure

```
src/
├── app/
│   └── [locale]/          # Locale-scoped pages and layout
├── components/
│   ├── layout/            # Navbar, footer
│   ├── modals/            # Product dropdown modal
│   └── pages/HomePage/    # Landing sections
├── hooks/                 # e.g. region-based pricing (ipapi.co)
├── lib/                   # i18n hooks and utilities
└── locales/               # Per-language copy (en.json, ja.json, …)
middleware.ts              # Locale detection and redirects
public/                    # Images, icons, flags
```

## Getting started

### Prerequisites

- Node.js 20+
- npm, pnpm, or yarn

### Install

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You will be redirected to a locale path (e.g. `/en`).

### Build & production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Editing content

- **Copy / translations**: Update files in `src/locales/` (e.g. `en.json`). Keys map to sections like `hero`, `businessGrowth`, `universalSearch`, etc.
- **New language**: Add a JSON file, register the locale in `middleware.ts`, `src/app/[locale]/layout.tsx`, `src/app/[locale]/page.tsx`, and `LanguageDropdown.tsx`.
- **Section UI**: Components live under `src/components/pages/HomePage/`.

## Optional: region-based pricing

`src/hooks/languagePricing.ts` can fetch the visitor’s country (via ipapi.co) and format seat pricing in local currency. Wire this into pricing UI where needed (e.g. `LanguagePrice` component).

## Deployment

Standard Next.js deployment (Vercel, Docker, or any Node host). Ensure locale middleware runs on your platform and static assets under `public/` are served.

## License

Private project (`"private": true` in `package.json`). All rights reserved unless otherwise specified by the Bearish team.
