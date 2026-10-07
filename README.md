<div align="center">

# alexcoronell.dev

**Personal portfolio of Alexander Coronell — Full Stack Developer**

[![CI Pipeline](https://github.com/alexcoronell/alexcoronell-dev/actions/workflows/ci.yml/badge.svg)](https://github.com/alexcoronell/alexcoronell-dev/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Astro](https://img.shields.io/badge/Astro-7.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Svelte](https://img.shields.io/badge/Svelte-5.x-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[Live Site](https://alexcoronell.dev) · [Versión en Español](./README.es.md)

</div>

---

## Overview

Static portfolio site built with **Astro 7** and **Svelte 5** Islands architecture. Features a custom retro aesthetic (scan lines + film grain), bilingual support (Spanish / English), contact modal with WhatsApp integration, and a full CI pipeline enforcing code quality on every pull request.

## Tech Stack

| Layer                                                                                                                               | Technology                                        |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| ![Astro](https://img.shields.io/badge/-Astro-FF5D01?logo=astro&logoColor=white&style=flat-square) **Framework**                     | Astro 7 — static output, partial hydration        |
| ![Svelte](https://img.shields.io/badge/-Svelte-FF3E00?logo=svelte&logoColor=white&style=flat-square) **UI**                         | Svelte 5 (runes: `$state`, `$derived`, `$effect`) |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square) **Language**       | TypeScript 6 throughout                           |
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square) **Styling**     | TailwindCSS 4 via Vite plugin                     |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square) **Bundler**                          | Vite 7                                            |
| ![Vitest](https://img.shields.io/badge/-Vitest-6E9F18?logo=vitest&logoColor=white&style=flat-square) **Unit Tests**                 | Vitest 4 + Testing Library                        |
| ![Playwright](https://img.shields.io/badge/-Playwright-45BA4B?logo=playwright&logoColor=white&style=flat-square) **E2E Tests**      | Playwright                                        |
| ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?logo=storybook&logoColor=white&style=flat-square) **Component Dev**     | Storybook 10                                      |
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&style=flat-square) **Linting**                    | ESLint 10 + Prettier 3                            |
| ![Husky](https://img.shields.io/badge/-Husky-000000?logo=git&logoColor=white&style=flat-square) **Git Hooks**                       | Husky 9 + commitlint + lint-staged                |
| ![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?logo=github-actions&logoColor=white&style=flat-square) **CI** | GitHub Actions (Node 24 + pnpm 12)                |
| ![Cloudflare](https://img.shields.io/badge/-Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white&style=flat-square) **Hosting**  | Cloudflare Pages                                  |

## Getting Started

**Prerequisites:** Node.js 24+, pnpm 12+

```bash
# Clone the repository
git clone git@github.com:alexcoronell/alexcoronell-dev.git
cd alexcoronell-dev

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available Scripts

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `pnpm dev`             | Start development server at `localhost:4321`     |
| `pnpm build`           | Type-check (`astro check`) then build to `dist/` |
| `pnpm preview`         | Preview the production build locally             |
| `pnpm check`           | Run Astro TypeScript check only                  |
| `pnpm lint`            | Run ESLint across all source files               |
| `pnpm format`          | Format all files with Prettier                   |
| `pnpm test`            | Run unit tests in watch mode (Vitest)            |
| `pnpm test:run`        | Run unit tests once (CI mode)                    |
| `pnpm test:e2e`        | Run end-to-end tests (Playwright)                |
| `pnpm test:e2e:ui`     | Run e2e tests with Playwright UI                 |
| `pnpm storybook`       | Launch Storybook at `localhost:6006`             |
| `pnpm build-storybook` | Build Storybook for static deployment            |

## Project Structure

```
alexcoronell-dev/
├── .github/
│   └── workflows/
│       └── ci.yml                  # CI pipeline (lint → type-check → commitlint → build)
├── .husky/
│   ├── commit-msg                  # commitlint validation hook
│   └── pre-commit                  # lint-staged (ESLint + Prettier)
├── .storybook/
│   ├── main.ts                     # Storybook configuration
│   └── preview.ts                  # Global decorators and parameters
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── profile/            # Profile picture assets
│   │       └── works/              # Portfolio project screenshots
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── assets/                     # SVG/image assets used in components
│   ├── components/
│   │   ├── home/                   # Page-level section components
│   │   │   ├── About.astro
│   │   │   ├── Contact.astro
│   │   │   ├── Experiences.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Skills.astro
│   │   │   └── Works.astro
│   │   ├── shared/                 # Reusable components (atoms / molecules)
│   │   │   ├── ContactModal.svelte # 🏝️ Island — contact modal with form
│   │   │   ├── ExperienceItem.astro
│   │   │   ├── FilmGrain.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Form.svelte         # 🏝️ Island — controlled contact form
│   │   │   ├── Header.astro
│   │   │   ├── Input.svelte        # 🏝️ Island — form input with runes
│   │   │   ├── Menu.astro
│   │   │   ├── ProfilePicture.astro
│   │   │   ├── ScanLines.astro
│   │   │   ├── Section.astro
│   │   │   ├── SocialMedia.astro
│   │   │   ├── TextArea.svelte     # 🏝️ Island — form textarea with runes
│   │   │   └── WorkItem.astro
│   │   └── ui/
│   │       └── icons/              # SVG icon components
│   ├── core/                       # Domain layer — framework-agnostic
│   │   ├── data/                   # Static data (works, experiences, about, personal)
│   │   ├── interfaces/             # TypeScript interfaces (Work, Experience, ContactMessage)
│   │   ├── types/                  # Branded types (statusWork, repoOrigin)
│   │   ├── utils/                  # Pure utility functions (WhatsApp link, contact message)
│   │   └── validators/             # Domain validators (email)
│   ├── i18n/
│   │   ├── ui.ts                   # All translated UI strings (es / en)
│   │   ├── utils.ts                # i18n helpers (getLangFromUrl, useTranslations)
│   │   └── index.ts
│   ├── layouts/
│   │   └── Layout.astro            # Root layout with SEO, fonts, and global styles
│   ├── pages/
│   │   ├── index.astro             # Spanish home page (default locale)
│   │   └── en/
│   │       └── index.astro         # English home page
│   ├── stories/                    # Storybook component stories
│   │   ├── ContactModal.stories.svelte
│   │   ├── Form.stories.svelte
│   │   ├── Icons.stories.svelte
│   │   ├── Input.stories.svelte
│   │   └── TextArea.stories.svelte
│   ├── stores/
│   │   └── contactModal.store.ts   # Nanostores — contact modal open/close state
│   └── styles/
│       └── global.css              # Global styles, custom fonts, TailwindCSS base
├── tests/                          # Playwright e2e test files
├── astro.config.mjs                # Astro config (site, i18n, integrations)
├── commitlint.config.mjs           # Conventional commits rules
├── eslint.config.mjs               # ESLint flat config
├── playwright.config.ts            # Playwright configuration
├── svelte.config.js                # Svelte preprocessor config
├── tsconfig.json                   # TypeScript path aliases (@data, @stores, etc.)
├── vitest.config.ts                # Vitest configuration
└── package.json
```

## Architecture

This project follows **Clean Architecture** principles adapted for a static Astro site.

```
┌────────────────────────────────────────────────┐
│  Framework Layer  (pages/, layouts/)           │
│  Astro routes and layouts — thin orchestrators │
├────────────────────────────────────────────────┤
│  UI Layer  (components/)                       │
│  Astro components (static) + Svelte Islands    │
│  Atomic design: atoms → molecules → organisms  │
├────────────────────────────────────────────────┤
│  State Layer  (stores/)                        │
│  Nanostores — shared reactive state            │
├────────────────────────────────────────────────┤
│  Domain Layer  (core/)                         │
│  Data, interfaces, types, validators, utils    │
│  Zero framework dependencies                   │
└────────────────────────────────────────────────┘
```

**Svelte Islands** hydrate only the interactive pieces (contact modal, form, inputs), keeping the rest of the page as zero-JS static HTML for optimal performance.

## Internationalization

The site ships with two locales managed by Astro's built-in i18n:

| Route | Locale         | Description                         |
| ----- | -------------- | ----------------------------------- |
| `/`   | `es` (default) | Spanish — default locale, no prefix |
| `/en` | `en`           | English — prefixed routes           |

All UI strings live in `src/i18n/ui.ts`. Content data (works, experiences, about) is stored in `src/core/data/` with separate Spanish/English exports.

## CI / CD Pipeline

Every push and pull request to `master` runs the full pipeline:

```
checkout → install → lint (ESLint) → type-check (astro check) → commitlint → build
```

Successful builds upload the `dist/` artifact (7-day retention). Deployment to **Cloudflare Pages** is triggered automatically on merge to `master`.

## Git Workflow

This project follows **GitHub Flow**:

- `master` is the single source of truth and is always deployable.
- All work is done on short-lived feature branches cut from `master`.
- Branch naming conventions:

| Prefix      | Purpose               | Example                      |
| ----------- | --------------------- | ---------------------------- |
| `feat/`     | New features          | `feat/contact-section`       |
| `fix/`      | Bug fixes             | `fix/mobile-menu`            |
| `docs/`     | Documentation only    | `docs/update-readme`         |
| `refactor/` | Code refactoring      | `refactor/experience-layout` |
| `chore/`    | Tooling, deps, config | `chore/astro-7-upgrade`      |
| `ci/`       | CI/CD changes         | `ci/add-vitest-step`         |

## Commit Conventions

All commits follow **Conventional Commits** enforced by commitlint + Husky:

```
<type>(<scope>): <description>

[optional body]
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

Maximum header length: 120 characters.

## Pre-commit Hooks

Husky enforces code quality before every commit:

| Hook         | What it runs                                    |
| ------------ | ----------------------------------------------- |
| `pre-commit` | lint-staged → ESLint + Prettier on staged files |
| `commit-msg` | commitlint → validates commit message format    |

## License

[MIT](./LICENSE) — © 2025 Alexander Coronell
