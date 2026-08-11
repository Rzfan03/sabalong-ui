# AGENTS.md

Fumadocs (Next.js 16) documentation site for **SabalongUI**, a React + Tailwind v4 UI library.

## Repo layout

- **Root** = docs site. Content lives in `content/docs/**` (MDX); routes are `app/`, layouts in `lib/`.
- **`packages/sabalongui/`** = the `sabalong-ui` npm package. Framework-agnostic React + Tailwind v4. Source in `src/`, built to `dist/` via `tsup`. Do **not** import from `next/*` here.
- **`packages/create-sabalong-ui/`** = separate CLI (`npm create sabalong-ui@latest`) that scaffolds starter projects from `template-vite/` and `template-next/`.
- Not an npm workspace: the root depends on the library via `"sabalong-ui": "file:../packages/sabalongui"`.

## Commands (root)

- `npm run dev` — Next dev server
- `npm run types:check` — `fumadocs-mdx && next typegen && tsc --noEmit` (the only check; no lint/test scripts exist)
- `npm run build` — production build
- `packages/sabalongui`: `npm run dev` (tsup watch) / `npm run build` (tsup → `dist/`). Its `postinstall` runs `scripts/welcome.js` (branded spinner + gradient wordmark; reads `version` from its own `package.json`).
- `packages/create-sabalong-ui`: `node index.js <name> --template template-vite|template-next --skip-install` (non-interactive; drop flags for prompts).

## Gotchas

- **`sabalong-ui` resolves to package `src/`, not `dist/`.** tsconfig maps `"sabalong-ui": ["./packages/sabalongui/src/index.tsx"]`, so edits to `packages/sabalongui/src/*` are picked up by `next dev` immediately. Rebuild `dist/` only when publishing the package.
- **`.source/` is generated, gitignored code** from `fumadocs-mdx` (runs on `postinstall` and `types:check`). If the `fumadocs-mdx:collections` module is missing (e.g. fresh clone skipped postinstall), run `npx fumadocs-mdx` before `next dev`/typecheck.
- **Docs demos wrap the real library, not parallel copies.** MDX pages render live previews by importing from `@/app/components/*` (all `"use client"`). Demo files import from `sabalong-ui` (resolves to package `src/`) and either re-export or compose the library component with local state. Adding or changing a component means touching `packages/sabalongui/src/`, a demo in `app/components/`, and `content/docs/components/*.mdx`.
- **MDX "Usage" code blocks are aspirational, not guaranteed to compile.** They show the intended public API (`import { Button } from "sabalong-ui"`), but the package has no default export — use named imports. Trust `packages/sabalongui/src/index.tsx` over the docs.
- **Tailwind v4 is configless** (`tailwind.config.js` is empty). `app/global.css` scans the library via `@source "../../packages/sabalongui/src/**/*.{tsx,ts}"`. Outside this repo, consumers must add their own `@source` pointing at the library `dist/` (Tailwind v4 skips `node_modules` by default) — the create-sabalong-ui templates already include this.
- Content schemas/nav are driven by `source.config.ts` and `meta.json` files in `content/docs/`.
