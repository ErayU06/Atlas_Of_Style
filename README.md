# Atlas of Style

A travel and fashion guide app. Explore how people dress around the world, find the best time to visit each destination, build a packing list, and travel through more than a century of fashion history.

Built as a full-stack TypeScript app: a React frontend packaged for iOS and Android with Capacitor, and a Hono + tRPC backend on PostgreSQL.

**Status:** submitted to the App Store, awaiting review.

## Features

- **Country and city guides:** 19 countries and 23 cities, each with its local style, cultural character and the best months to visit
- **Packing assistant:** suggested packing lists for each destination
- **Time travel:** an interactive timeline of fashion from the 1900s to the 2020s
- **Style quiz and fashion passport:** a quiz that matches your style to destinations, with passport stamps to collect
- **Favorites and profile:** save countries and cities to your account
- **Six languages:** Turkish, English, Chinese, Hindi, Spanish and Arabic
- Light and dark themes

## Tech stack

| Layer | Tools |
| --- | --- |
| Frontend | React 19, TypeScript, Vite, React Router, Tailwind CSS, shadcn/ui (Radix) |
| Data fetching | tRPC with TanStack Query (end-to-end type-safe API) |
| Backend | Hono on Node.js, tRPC routers, Zod validation |
| Database | PostgreSQL with Drizzle ORM and versioned SQL migrations |
| Auth | Email and password sign-in with scrypt password hashing and JWT sessions (jose) |
| Mobile | Capacitor 8 for iOS and Android |
| Deployment | Docker image, hosted on Render, with `ping` and `health` endpoints for checking the deployed commit and database schema |
| Quality | ESLint, Prettier, TypeScript checks |

## Project structure

```
src/pages/        Screens: Home, Country, City, Packing, Time Travel, Quiz, Favorites, Profile
src/components/   Cards, era timeline, fashion passport, navigation and shared UI
src/data/         Country, city, packing, era and quiz content with translations
api/              Hono server, tRPC routers (auth, traveler data, health)
db/               Drizzle schema, migrations and seed scripts
android/, ios/    Capacitor native projects
```

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in the values (at minimum `DATABASE_URL` for a PostgreSQL database and `APP_SECRET`).

3. Apply the database migrations and start the dev server:

   ```bash
   npm run db:migrate
   npm run dev
   ```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the frontend and bundles the API server into `dist/` |
| `npm start` | Runs the production server |
| `npm run check` | Type-checks the project |

## Mobile builds

```bash
npm run build
npx cap sync
npx cap open ios      # or: npx cap open android
```

## Author

Eray Ulusoy · [erayulusoy.com](https://erayulusoy.com)
