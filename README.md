# যাত্রা — Jatra Career Bootcamp LMS

Premium cohort-based career bootcamp platform for Bangladesh. Next.js 14 (App Router) + Prisma + SQLite + Tailwind. Bangla-first, dark + gold premium aesthetic.

## Run

```bash
npm install
npx prisma db push
npx tsx prisma/seed.ts
npm run dev
```

Open http://localhost:3000

## Demo accounts

- Student: `student@jatra.bd` / `password123`
- Admin: `admin@jatra.bd` / `admin123`

## Pages

| Path | Page |
|---|---|
| `/` | Homepage (Hero, Outcomes, Tracks, Mentors, Alumni, Pricing, FAQ, etc.) |
| `/bootcamps` | All bootcamps list |
| `/bootcamp/[slug]` | Bootcamp detail (10 tracks) |
| `/apply` | 7-step application form with screening |
| `/application/[id]` | Application status timeline |
| `/mentors`, `/mentors/[slug]` | Mentor list + detail (8 mentors) |
| `/alumni`, `/alumni/[slug]` | Alumni stories (9 alumni) |
| `/blog`, `/blog/[slug]` | Career insights blog |
| `/pricing` | Comparison table for all bootcamps |
| `/placement` | Job placement guarantee + hiring partners |
| `/about` | Mission, team, press |
| `/free` | Free resources |
| `/help` | Help center + FAQs |
| `/teach` | Become a mentor |
| `/login`, `/signup` | Auth |
| `/dashboard` | Student dashboard (today's schedule, leaderboard, tasks) |
| `/dashboard/live` | Live class interface |
| `/admin` | Admin (applications, users, stats) |
| `/legal/[doc]` | Terms, privacy, refund, guarantee, ISA |
| `404` | Premium not-found page |

## API

| Route | Methods | Purpose |
|---|---|---|
| `/api/auth/signup` | POST | Create user + session |
| `/api/auth/login` | POST | Login + session |
| `/api/auth/logout` | POST | Clear session |
| `/api/me` | GET | Current user |
| `/api/applications` | POST, GET | Submit / list applications |
| `/api/bootcamps` | GET | List bootcamps |
| `/api/subscribe` | POST | Newsletter signup |

## Stack

- **Next.js 14** — App Router, RSC, server actions, metadata
- **Prisma + SQLite** — file-based database (`prisma/dev.db`)
- **Tailwind CSS** — premium design system
- **JOSE** — JWT sessions in HTTP-only cookies
- **bcryptjs** — password hashing
- **Zod** — input validation
- **lucide-react** — icons
- **Google Fonts** — Hind Siliguri, Noto Serif Bengali, Plus Jakarta Sans, Fraunces, JetBrains Mono

## Design

- Direction A "Rajkumar" — deep midnight + warm gold
- Bangla serif headlines + Hind Siliguri body + JetBrains mono numerals
- Animations: stat counters, marquee logos, sticky storytelling, countdown
