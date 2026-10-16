# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Fetch ENV vars

```shell
aws ssm get-parameter --region us-east-1 \
	--name /andrewalba/app/.env.<envrironment> \
	--profile default \
	--query Parameter.Value \
	--with-decryption \
	--output text > ./.env.<envrironment>
```

If you need to make changes to the file, be sure to push the changes back to AWS. You can modify this command to push a
new revision to AWS SSM.

```shell
aws ssm put-parameter \
    --region us-east-1 \
    --name /andrewalba/app/.env.<enviornment> \
    --profile default \
    --value file://.env.<enviornment> \
--type "SecureString" \
--overwrite
```

## Cloudflare Deployments (static hosting)

This app uses **static site generation** on Cloudflare Pages:

- **Content** is prerendered at build time (`pnpm build` → `nuxt build` with `routeRules` + `nitro.prerender`). Client-side navigation uses Nuxt Content’s **WASM SQLite** and the bundled SQL dumps—**no D1** on read paths.
- **Only** `/api/*` runs as a Pages Function (contact form → Resend). `_routes.json` is generated with `"include": ["/api/*"]`.

### Build and deploy

From `app/`:

```bash
pnpm install
pnpm build
# deploy dist/ via Cloudflare Pages (build command: pnpm build, output directory: dist)
```

### Cloudflare project settings

1. **Build command:** `pnpm build` (runs `nuxt build`, prerendering content into `dist/`)
2. **Build output directory:** `dist`
3. **Environment variables:** set `RESEND_API_KEY` (secret) and the public vars already in `wrangler.toml` if not using Wrangler deploy config
4. **Remove D1 bindings** from the Pages project if they were configured for an older SSR/D1 setup—they are not used anymore

### Local preview with Wrangler

```bash
pnpm wrangler:dev
```

Uses `.env.local` for secrets when generating, then `wrangler pages dev dist`.

### Pure static output (no Pages Function)

`pnpm build:generate` runs `nuxt generate` for a fully static `dist/` (no `/api/send` unless you add a separate function).

### Legacy SSR + D1

Restore D1 bindings in `wrangler.toml` and the Cloudflare dashboard, remove the static `content.database` / `nitro.cloudflare.pages.routes` settings, and drop the `nitro:config` hook override in `nuxt.config.ts`.

