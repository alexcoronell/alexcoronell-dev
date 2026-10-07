<div align="center">

# alexcoronell.dev

**Portafolio personal de Alexander Coronell — Desarrollador Full Stack**

[![CI Pipeline](https://github.com/alexcoronell/alexcoronell-dev/actions/workflows/ci.yml/badge.svg)](https://github.com/alexcoronell/alexcoronell-dev/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Astro](https://img.shields.io/badge/Astro-7.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Svelte](https://img.shields.io/badge/Svelte-5.x-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[Sitio en Vivo](https://alexcoronell.dev) · [English Version](./README.md)

</div>

---

## Descripción General

Sitio de portafolio estático construido con **Astro 7** y arquitectura de **Svelte 5 Islands**. Presenta una estética retro personalizada (scan lines + film grain), soporte bilingüe (español / inglés), modal de contacto con integración de WhatsApp y un pipeline de CI completo que garantiza la calidad del código en cada pull request.

## Stack Tecnológico

| Capa                                                                                                                                        | Tecnología                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| ![Astro](https://img.shields.io/badge/-Astro-FF5D01?logo=astro&logoColor=white&style=flat-square) **Framework**                             | Astro 7 — salida estática, hidratación parcial    |
| ![Svelte](https://img.shields.io/badge/-Svelte-FF3E00?logo=svelte&logoColor=white&style=flat-square) **UI**                                 | Svelte 5 (runes: `$state`, `$derived`, `$effect`) |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square) **Lenguaje**               | TypeScript 6 en todo el proyecto                  |
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square) **Estilos**             | TailwindCSS 4 vía plugin de Vite                  |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square) **Bundler**                                  | Vite 7                                            |
| ![Vitest](https://img.shields.io/badge/-Vitest-6E9F18?logo=vitest&logoColor=white&style=flat-square) **Tests Unitarios**                    | Vitest 4 + Testing Library                        |
| ![Playwright](https://img.shields.io/badge/-Playwright-45BA4B?logo=playwright&logoColor=white&style=flat-square) **Tests E2E**              | Playwright                                        |
| ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?logo=storybook&logoColor=white&style=flat-square) **Desarrollo de Componentes** | Storybook 10                                      |
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&style=flat-square) **Linting**                            | ESLint 10 + Prettier 3                            |
| ![Husky](https://img.shields.io/badge/-Husky-000000?logo=git&logoColor=white&style=flat-square) **Git Hooks**                               | Husky 9 + commitlint + lint-staged                |
| ![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?logo=github-actions&logoColor=white&style=flat-square) **CI**         | GitHub Actions (Node 24 + pnpm 12)                |
| ![Cloudflare](https://img.shields.io/badge/-Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white&style=flat-square) **Hosting**          | Cloudflare Pages                                  |

## Inicio Rápido

**Requisitos previos:** Node.js 24+, pnpm 12+

```bash
# Clonar el repositorio
git clone git@github.com:alexcoronell/alexcoronell-dev.git
cd alexcoronell-dev

# Instalar dependencias
pnpm install

# Iniciar el servidor de desarrollo
pnpm dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## Scripts Disponibles

| Comando                | Descripción                                               |
| ---------------------- | --------------------------------------------------------- |
| `pnpm dev`             | Inicia el servidor de desarrollo en `localhost:4321`      |
| `pnpm build`           | Valida tipos (`astro check`) y genera la build en `dist/` |
| `pnpm preview`         | Previsualiza la build de producción localmente            |
| `pnpm check`           | Ejecuta solo el chequeo de TypeScript de Astro            |
| `pnpm lint`            | Ejecuta ESLint en todos los archivos fuente               |
| `pnpm format`          | Formatea todos los archivos con Prettier                  |
| `pnpm test`            | Ejecuta tests unitarios en modo watch (Vitest)            |
| `pnpm test:run`        | Ejecuta tests unitarios una sola vez (modo CI)            |
| `pnpm test:e2e`        | Ejecuta tests end-to-end (Playwright)                     |
| `pnpm test:e2e:ui`     | Ejecuta tests e2e con la UI de Playwright                 |
| `pnpm storybook`       | Lanza Storybook en `localhost:6006`                       |
| `pnpm build-storybook` | Genera Storybook estático para despliegue                 |

## Estructura del Proyecto

```
alexcoronell-dev/
├── .github/
│   └── workflows/
│       └── ci.yml                  # Pipeline de CI (lint → type-check → commitlint → build)
├── .husky/
│   ├── commit-msg                  # Hook de validación con commitlint
│   └── pre-commit                  # lint-staged (ESLint + Prettier)
├── .storybook/
│   ├── main.ts                     # Configuración de Storybook
│   └── preview.ts                  # Decoradores y parámetros globales
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── profile/            # Imágenes de perfil
│   │       └── works/              # Capturas de proyectos del portafolio
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── assets/                     # Recursos SVG/imagen usados en componentes
│   ├── components/
│   │   ├── home/                   # Componentes de sección a nivel de página
│   │   │   ├── About.astro
│   │   │   ├── Contact.astro
│   │   │   ├── Experiences.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Skills.astro
│   │   │   └── Works.astro
│   │   ├── shared/                 # Componentes reutilizables (átomos / moléculas)
│   │   │   ├── ContactModal.svelte # 🏝️ Island — modal de contacto con formulario
│   │   │   ├── ExperienceItem.astro
│   │   │   ├── FilmGrain.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Form.svelte         # 🏝️ Island — formulario de contacto controlado
│   │   │   ├── Header.astro
│   │   │   ├── Input.svelte        # 🏝️ Island — input de formulario con runes
│   │   │   ├── Menu.astro
│   │   │   ├── ProfilePicture.astro
│   │   │   ├── ScanLines.astro
│   │   │   ├── Section.astro
│   │   │   ├── SocialMedia.astro
│   │   │   ├── TextArea.svelte     # 🏝️ Island — textarea de formulario con runes
│   │   │   └── WorkItem.astro
│   │   └── ui/
│   │       └── icons/              # Componentes de iconos SVG
│   ├── core/                       # Capa de dominio — sin dependencias de framework
│   │   ├── data/                   # Datos estáticos (works, experiences, about, personal)
│   │   ├── interfaces/             # Interfaces TypeScript (Work, Experience, ContactMessage)
│   │   ├── types/                  # Tipos de marca (statusWork, repoOrigin)
│   │   ├── utils/                  # Funciones utilitarias puras (WhatsApp link, mensajes)
│   │   └── validators/             # Validadores de dominio (email)
│   ├── i18n/
│   │   ├── ui.ts                   # Todas las cadenas UI traducidas (es / en)
│   │   ├── utils.ts                # Helpers i18n (getLangFromUrl, useTranslations)
│   │   └── index.ts
│   ├── layouts/
│   │   └── Layout.astro            # Layout raíz con SEO, fuentes y estilos globales
│   ├── pages/
│   │   ├── index.astro             # Página principal en español (locale por defecto)
│   │   └── en/
│   │       └── index.astro         # Página principal en inglés
│   ├── stories/                    # Stories de componentes para Storybook
│   │   ├── ContactModal.stories.svelte
│   │   ├── Form.stories.svelte
│   │   ├── Icons.stories.svelte
│   │   ├── Input.stories.svelte
│   │   └── TextArea.stories.svelte
│   ├── stores/
│   │   └── contactModal.store.ts   # Nanostores — estado open/close del modal de contacto
│   └── styles/
│       └── global.css              # Estilos globales, fuentes personalizadas, TailwindCSS base
├── tests/                          # Archivos de tests e2e de Playwright
├── astro.config.mjs                # Configuración de Astro (site, i18n, integraciones)
├── commitlint.config.mjs           # Reglas de Conventional Commits
├── eslint.config.mjs               # Configuración plana de ESLint
├── playwright.config.ts            # Configuración de Playwright
├── svelte.config.js                # Configuración del preprocesador de Svelte
├── tsconfig.json                   # Alias de rutas TypeScript (@data, @stores, etc.)
├── vitest.config.ts                # Configuración de Vitest
└── package.json
```

## Arquitectura

El proyecto sigue los principios de **Clean Architecture** adaptados a un sitio estático en Astro.

```
┌────────────────────────────────────────────────────┐
│  Capa de Framework  (pages/, layouts/)             │
│  Rutas y layouts de Astro — orquestadores delgados │
├────────────────────────────────────────────────────┤
│  Capa de UI  (components/)                         │
│  Componentes Astro (estáticos) + Svelte Islands    │
│  Diseño atómico: átomos → moléculas → organismos  │
├────────────────────────────────────────────────────┤
│  Capa de Estado  (stores/)                         │
│  Nanostores — estado reactivo compartido           │
├────────────────────────────────────────────────────┤
│  Capa de Dominio  (core/)                          │
│  Data, interfaces, tipos, validadores, utils       │
│  Sin dependencias de framework                     │
└────────────────────────────────────────────────────┘
```

Las **Svelte Islands** hidratan únicamente las piezas interactivas (modal de contacto, formulario, inputs), manteniendo el resto de la página como HTML estático sin JS para máximo rendimiento.

## Internacionalización

El sitio incluye dos locales gestionados por el i18n nativo de Astro:

| Ruta  | Locale             | Descripción                               |
| ----- | ------------------ | ----------------------------------------- |
| `/`   | `es` (por defecto) | Español — locale por defecto, sin prefijo |
| `/en` | `en`               | Inglés — rutas con prefijo                |

Todas las cadenas de UI se centralizan en `src/i18n/ui.ts`. Los datos de contenido (works, experiences, about) se encuentran en `src/core/data/` con exports separados para español e inglés.

## Pipeline de CI / CD

Cada push y pull request hacia `master` ejecuta el pipeline completo:

```
checkout → install → lint (ESLint) → type-check (astro check) → commitlint → build
```

Los builds exitosos suben el artefacto `dist/` (retención de 7 días). El despliegue a **Cloudflare Pages** se activa automáticamente al hacer merge a `master`.

## Flujo de Trabajo Git

El proyecto sigue **GitHub Flow**:

- `master` es la única fuente de verdad y siempre está lista para desplegarse.
- Todo el trabajo se realiza en ramas de corta duración creadas desde `master`.
- Convenciones de nombres de rama:

| Prefijo     | Propósito                  | Ejemplo                      |
| ----------- | -------------------------- | ---------------------------- |
| `feat/`     | Nuevas funcionalidades     | `feat/contact-section`       |
| `fix/`      | Corrección de bugs         | `fix/mobile-menu`            |
| `docs/`     | Solo documentación         | `docs/update-readme`         |
| `refactor/` | Refactorización            | `refactor/experience-layout` |
| `chore/`    | Herramientas, deps, config | `chore/astro-7-upgrade`      |
| `ci/`       | Cambios en CI/CD           | `ci/add-vitest-step`         |

## Convenciones de Commits

Todos los commits siguen **Conventional Commits** aplicados por commitlint + Husky:

```
<tipo>(<alcance>): <descripción>

[cuerpo opcional]
```

Tipos permitidos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

Longitud máxima de cabecera: 120 caracteres.

## Hooks de Pre-commit

Husky garantiza la calidad del código antes de cada commit:

| Hook         | Qué ejecuta                                                   |
| ------------ | ------------------------------------------------------------- |
| `pre-commit` | lint-staged → ESLint + Prettier sobre los archivos en staging |
| `commit-msg` | commitlint → valida el formato del mensaje de commit          |

## Licencia

[MIT](./LICENSE) — © 2025 Alexander Coronell
