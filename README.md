# Portfolio — Next-generation developer & designer

A Cursor-inspired portfolio built with **Next.js**, **Supabase**, and **Vercel**. Dark theme, green accents, and industry best practices.

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS 4**
- **Supabase** (projects table, optional)
- **TypeScript**

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site works **without Supabase** using built-in fallback project data.

### 3. (Optional) Connect Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run:
   - `supabase/migrations/001_create_projects.sql` — creates `projects` and `contact_leads` tables.
   - `supabase/seed.sql` — seeds sample projects (optional).
3. Copy **Project URL** and **anon public** key from **Settings → API**.
4. Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Restart the dev server. Projects will load from Supabase when env vars are set.

## Deploy on Vercel

1. Push this repo to **GitHub**.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Add environment variables (if using Supabase):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy. Vercel will build and deploy on every push.

## Project structure

```
src/
  app/           # App Router pages & layout
  components/    # Header, Hero, Features, Projects, Testimonials, CTA, Footer
  data/          # Fallback project data
  lib/           # Supabase client
supabase/
  migrations/    # SQL migrations for Supabase
  seed.sql       # Optional seed data
```

## Customize

- **Content**: Edit `src/data/projects.ts` for fallback projects, or manage in Supabase.
- **Copy**: Update hero, features, testimonials, and CTA in `src/components/`.
- **Contact**: Replace `hello@example.com` in `src/components/CTA.tsx` and footer links in `src/components/Footer.tsx`.

Built with ♥ and [Cursor](https://cursor.com).
