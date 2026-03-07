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

## Cloudflare Deployments

This application uses @nuxt/content for content management and @nuxtjs/cloudflare for deployment to Cloudflare Workers.

When using Cloudflare deployment with Nuxt Content, the Nuxt Content expects a D1 binding named DB in that environment. 

We need to:

- create a D1 database
- bind it as DB
- deploy application

- This is the standard Cloudflare-side setup for D1-backed apps [1].

### How to install and configure the D1 database

#### 1. Create the D1 database

From the app directory, run:

``` bash
   pnpm exec wrangler d1 create content-db
```

Cloudflare will return output including:

- database name
- database_id

Save that database_id — you’ll need it.

Here is an example output:

```bash
Attempting to login via OAuth...
Opening a link in your default browser: https://dash.cloudflare.com/oauth2/auth?response_type=code&client_id=<uuid>...
Successfully logged in.
✅ Successfully created DB 'content-db' in region ENAM
Created your new D1 database.

To access your new D1 Database in your Worker, add the following snippet to your configuration file:
{
  "d1_databases": [
    {
      "binding": "content_db",
      "database_name": "content-db",
      "database_id": "19a4c8d0-2755-4727-a2d9-1a83d0a998f4"
    }
  ]
}
🪵  Logs were written to "/Users/MacbookUser/Library/Preferences/.wrangler/logs/wrangler-2026-03-07_20-39-21_745.log"
```
 
#### 2. Add a Wrangler config file

If you do not already have one, create app/wrangler.toml.

Use this shape:

``` toml
name = "APP_NAME"
compatibility_date = "2025-07-15"

[[d1_databases]]
binding = "DB"
database_name = "content-db"
database_id = "PRODUCTION_DB_ID"
```

Add `APP_NAME` and `PRODUCTION_DB_ID` values to your `.env` file, 
with the applicaton name and real ID from the create command.

Important
The binding name must be exactly:
``` toml
binding = "DB"
```

because your runtime is explicitly looking for DB.

