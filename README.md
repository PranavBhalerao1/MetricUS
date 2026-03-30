# MetricUS

MetricUS is an interactive advocacy and education platform built to promote practical adoption of the International System of Units (SI / metric system) in the United States.

The site is designed as a modern, startup-style experience with motion, data visualization, and clear calls to action. It is fully static/client-side and deploys cleanly on Vercel with no backend.

## Purpose

The project helps users understand why metric adoption matters for:

- Science and engineering consistency
- Global commerce and manufacturing efficiency
- Education and STEM readiness
- Safety in high-stakes systems

It also gives visitors concrete tools to act: daily habit tracking, representative outreach, and social sharing.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui-style components (Card, Badge, Tabs, Accordion, Progress, Tooltip)
- Framer Motion
- Recharts
- next-themes (dark mode)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Production checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy on Vercel

### One-click flow

1. Push this repo to GitHub.
2. Import the repository in Vercel.
3. Keep defaults (Framework: Next.js).
4. Click **Deploy**.

No environment variables or backend services are required.

## Routes and Features

### `/` Home

- Hero with core advocacy message: "The US Is The Last One Standing"
- Animated world map graphic highlighting US, Myanmar, and Liberia in red
- Stats strip with citation tooltips and estimate notes
- CTA to the Why Metric page

### `/why`

- Tabbed interface: Science, Commerce, Education, Safety
- Three cards per tab with icon + explanation
- Recharts bar chart: countries using metric (195) vs not fully metric (3)

### `/units`

- Interactive cards for all seven SI base units
- Prefix reference (nano to tera) with desktop table + mobile accordion
- Live client-side converter:
  - Length
  - Mass
  - Temperature
  - Volume

### `/history`

- Vertical timeline of key US metrication milestones:
  - 1866 legalization
  - 1875 Metre Convention
  - 1975 Metric Conversion Act
  - 1982 US Metric Board disbanded
  - 1999 Mars Climate Orbiter loss
  - 2023-present renewed advocacy
- Impact badges (positive/negative/neutral)

### `/action`

- LocalStorage-based daily metric habit tracker
- Progress bar tied to completed habits
- Representative letter template with:
  - Copy button
  - Prefilled `mailto:` launch
- Social share actions for X and LinkedIn

### `/quiz`

- 10 hardcoded multiple-choice questions
- Client-side scoring and explanations
- Progress tracking and final score summary
- Quiz restart flow

## Project Structure

```text
app/
  action/
  history/
  quiz/
  units/
  why/
  globals.css
  layout.tsx
  page.tsx
components/
  action/
  history/
  home/
  layout/
  providers/
  quiz/
  ui/
  units/
  why/
lib/
  converter.ts
  site-data.ts
  types.ts
  utils.ts
public/
```

## Notes

- All data is static or client-side state; there is no API/database.
- Theme palette centers on deep blue (`#1e3a5f`), white, and metric green (`#22c55e`).
- The UI is responsive and optimized for desktop + mobile.
- Fact claims are paired with source references/tooltips and estimates are labeled accordingly.

