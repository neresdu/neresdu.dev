# neresdu.dev — Portfolio

Personal portfolio built with Astro, TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321/`. On the same Wi-Fi network, open the Network URL (also printed in the console) to test on mobile.

## Editing content

All professional data lives in a single file:

- **`src/data/profile.ts`** — stack, experiences, certifications, personal info. Edit here to update the site everywhere.

Translation strings:

- **`src/i18n/pt.ts`** — Portuguese (default language)
- **`src/i18n/en.ts`** — English

## Projects section

Projects are fetched automatically from GitHub at build time. The handle is set in `src/data/profile.ts` (`personal.handle`).

- Forks and archived repos are filtered out by default
- Sorted by stars first, then most recent update
- Max 6 shown on the page, rest linked via GitHub
- If the API is unreachable during build, the section falls back to "check my GitHub directly"

**Rebuild after pushing new repos** — the data is baked in at `npm run build`. On Cloudflare Pages this happens automatically on every deploy. You can also set up a scheduled rebuild (see Cloudflare Pages → Build deployments).

## Contact form

Uses [Web3Forms](https://web3forms.com) (free, no account required beyond getting a key by email).

### Setup

1. Go to https://web3forms.com/
2. Enter your email address → they send you an access key instantly
3. Create a `.env` file in the project root:
   ```
   PUBLIC_WEB3FORMS_KEY=your-key-here
   ```
4. Restart `npm run dev`

The form will automatically switch from "not configured" warning to active mode.

## Deploying to Cloudflare Pages

1. Push this project to a GitHub repo
2. Go to https://pages.cloudflare.com → Create a project → Connect to GitHub
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Environment variable: `PUBLIC_WEB3FORMS_KEY` → your key
6. Deploy

Your site will be live at `https://your-project-name.pages.dev` within minutes.

## Project structure

```
src/
├── components/       # Astro components (Header, Hero, Stack, etc.)
├── data/
│   ├── profile.ts    # Main data source: edit here
│   └── github.ts     # GitHub API integration
├── i18n/             # Translation files (pt, en) + utilities
├── layouts/          # BaseLayout wraps all pages
├── pages/
│   ├── index.astro   # Portuguese home (default)
│   └── en/index.astro # English home
└── styles/
    └── global.css    # CSS variables for theming
```

## Features

- Dark/light mode with system preference detection and localStorage persistence
- PT/EN language toggle
- Responsive navigation with mobile menu
- Timeline of career with active dot for current role
- Stack section with hybrid monochrome/colored icons on hover
- GitHub repos fetched at build time
- Contact form via Web3Forms
- All colors use CSS variables for consistent theming
- Accessibility: ARIA labels, focus rings, keyboard navigation, ESC to close menus

---

Built with ♥ in Curitiba, PR.
