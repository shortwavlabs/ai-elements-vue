# AI coding agent playbook

## Repo layout

- Turborepo managed with `pnpm@10.18.1`; apps live in `apps/` and shared libraries in `packages/`.
- `packages/elements`: Vue 3 component library grouped by domain (`actions/`, `artifact/`, `branch/`, `canvas/`, `chain-of-thought/`). Each folder exports from `index.ts`, so import via subpath (e.g. `@repo/elements/branch`).
- `packages/shadcn-ui`: Tailwind + shadcn-inspired primitives and utilities (`components/ui/**`, `lib/utils.ts`). Components are consumed directly from here by the element library.
- `apps/test`: Nuxt 4 sandbox that exercises the shared components via example pages under `app/pages/examples/`.

## Build & dev workflows

- Install once with `pnpm install`; Turborepo tasks route through workspace scripts.
- Run the Nuxt sandbox with `pnpm dev --filter test` (non-cached, persistent dev task) and open `http://localhost:3000`.
- Build the sandbox or packages via `pnpm build --filter <target>`; this produces `.nuxt` / `dist` artifacts per `turbo.json` outputs.
- Linting flows through `pnpm lint` which applies the custom configs in `packages/eslint-config-custom`.
- Formatting uses the Prettier config (`pnpm format`); Vue SFCs are auto-formatted by IDE tooling.

## Component library conventions

- Components are written as `<script setup lang="ts">` SFCs and expect Tailwind classes supplied by `@repo/shadcn-ui/src/styles/globals.css` (auto-included in the Nuxt app).
- Shared state is injected via Vue `provide`/`inject` contexts. Example: `branch-context.ts` drives navigation widgets and assumes `BranchMessages` children populate the branch array.
- Actions and artifact components rely on shadcn buttons + tooltips; pass Lucide icon components via `<component :is="Icon" />` just like the examples in `apps/test/app/pages/examples/`.
- When extending the library, add new domain folders with an `index.ts` re-export and update `package.json` exports if you need new subpaths.

## Styling & theming

- Tailwind is configured in `apps/test/tailwind.config.ts` to scan both the Nuxt app and the workspace packages. Use `cn` from `@repo/shadcn-ui/lib/utils` to merge class names.
- Color mode is handled by `@nuxtjs/color-mode`; prefer applying theme-aware classes (`text-muted-foreground`, etc.) instead of raw hex values.

## Integration tips

- Path aliases inside packages rely on `packages/elements/tsconfig.json` (`@repo/*`, `@/components/*`) and Nuxt's Vite TS config plugin—respect those when authoring imports.
- New UI primitives should live in `packages/shadcn-ui` so they can be shared; reference them from element components instead of duplicating Tailwind markup.
- Example pages under `apps/test/app/pages/examples` are the quickest regression check—update or add one when introducing a new element.

## Roadmap signals

- `packages/elements/src/chain-of-thought/ChainOfThought.vue` will eventually mimic the [AI SDK Chain of Thought element](https://ai-sdk.dev/elements/components/chain-of-thought); keep parity with that API when filling in the component.
- Automated testing isn't wired up yet, but plan to adopt Vitest for unit coverage once components start getting assertions—shape new tests to run via a future `pnpm test` script.
