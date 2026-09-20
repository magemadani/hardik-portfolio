# Hardik Madani — Portfolio

Single-page portfolio for a Magento 2 / Adobe Commerce developer.
React + Vite + Tailwind + Framer Motion, deployed to GitHub Pages.

**Live:** https://magemadani.github.io/hardik-portfolio/

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173/hardik-portfolio/
npm run build      # production build into dist/
npm run preview    # serve the build
```

## Deploy

`.github/workflows/deploy.yml` builds and publishes on every push to `main`. It
derives the base path from the repo name at build time, so nothing needs editing
when the repo is renamed or forked.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

### Serving from a root domain

A custom domain or a `<username>.github.io` repo serves from `/`, so the base
path has to change:

```bash
BASE_PATH=/ npm run build
```

For a custom domain, also add `public/CNAME` containing the domain and set it
under Settings → Pages.

## Editing the content

All copy lives in **`src/data.js`** — hero, stats, industries, philosophy, tech
stack, case studies and the career timeline. No component edits needed to change
text, add a project or reorder the list.

Still blank in there:

| What | Where |
|---|---|
| LinkedIn + GitHub URLs | `profile.linkedin`, `profile.github` — empty strings hide the footer icons |
| Case-study metrics | `results: []` on each project — only add numbers you can back up |

Project screenshots go in `public/images/` as `project-<id>.jpg` and are wired
up via the `image` field on each project. A project with `image: ''` falls back
to a dark panel with its initials.

## Structure

```
src/
├── data.js                 all site content
├── index.css               Tailwind layers + component classes (.card, .btn-*, .shell)
├── App.jsx
├── main.jsx
└── components/
    ├── Header.jsx          sticky nav, scroll-spy, mobile menu
    ├── Hero.jsx            banner artwork, stats, industries
    ├── About.jsx           philosophy + radial diagram
    ├── TechStack.jsx       technology landscape cards
    ├── Projects.jsx        project grid + case-study modal
    ├── Journey.jsx         vertical career timeline
    ├── Contact.jsx         CTA banner + footer
    ├── Reveal.jsx          shared scroll-in animation wrapper
    └── Icons.jsx           inline SVG icons

design/                     source artwork (not shipped in the build)
```

## Notes

- No router — one page of anchor sections, which sidesteps the 404-on-refresh
  problem GitHub Pages has with client-side routing.
- Case studies open in a modal: Escape closes it, focus lands on the close
  button, and background scroll is locked while it's open.
- The nav highlights the current section via `IntersectionObserver`.
- Framer Motion runs under `MotionConfig reducedMotion="user"`, so animations
  are reduced when the OS asks for it.
- The hero's laptop composition is a single WebP; everything layered around it
  (code card, capability cards, stats, industries) is real markup, so it stays
  crisp and selectable.
