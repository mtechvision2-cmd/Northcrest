# Northcrest Construction Group

A marketing website for Northcrest Construction Group, a commercial and residential contractor based in Raleigh, North Carolina, building across the Carolinas since 1998.

Built with Next.js 16, React 19, Tailwind CSS 4 and Prisma (SQLite). All pages are hash routed (`/#/about`, `/#/services`, `/#/projects`, `/#/contact`), so the site runs on any host without extra server routing rules.

## Pages

- Home: hero slider, services overview, stats, why choose us, recent projects, testimonials, FAQ, call to action
- About: company story, values, team, licensing and insurance
- Services: civil construction, commercial, residential, interiors, equipment and specialty work
- Projects: filterable project gallery with case details
- Contact: quote request form, service areas, direct contact details

## Running locally

```bash
npm install
npm run db:push     # creates the SQLite database for contact form storage
npm run dev         # http://localhost:3000
```

## Deploying to Netlify

1. Push this repository to GitHub.
2. In Netlify, choose "Add new site" then "Import an existing project" and pick the repository.
3. Leave the build settings as they are. The included `netlify.toml` already sets the build command (`npx prisma generate && npm run build`), the publish directory (`.next`) and the official Next.js runtime plugin.
4. Deploy. No environment variables are required.

## Deploying to Vercel

The same repository works on Vercel with zero configuration. Import the repo, accept the detected Next.js settings and deploy. `netlify.toml` is ignored by Vercel.

## Contact form storage

The form posts to `/api/contact`.

- On the z.ai sandbox or a self-hosted server, messages are stored in SQLite (`db/custom.db`) through Prisma.
- On serverless hosts such as Netlify or Vercel there is no writable database, so each lead is written to the function logs instead. In Netlify, view them under "Logs" in the site dashboard; look for lines starting with `[contact-lead]`. To store leads in a real database later, set a `DATABASE_URL` environment variable on the host.

## Project structure

```
src/
  app/
    page.tsx              entry point with the hash router
    layout.tsx            fonts, metadata, global styles
    api/contact/route.ts  quote request endpoint
  components/site/        header, hero, footer, page sections
  lib/
    site-data.ts          all text and image content for the site
    db.ts                 Prisma client
public/
  fonts/                  self-hosted Barlow and Barlow Condensed
  logo.svg, favicon.svg
prisma/schema.prisma      ContactMessage model
```
