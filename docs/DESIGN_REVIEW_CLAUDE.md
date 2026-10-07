# Schedence website redesign specification

I haven't seen the live site, so the audit works from the structure you described. Where I flag a likely problem, check it against what's actually deployed.

---

## 1. SENIOR DESIGN AUDIT

### What feels professional (keep)
- **Restrained palette**: white, navy and slate with one blue and a muted green is the right register for registrars and deans.
- **Thin borders and quiet shadows**: they read as "software," not "marketing."
- **A conceptual timetable visual**: showing the product, even conceptually, is the right instinct.
- **Privacy and Terms pages**: a real signal of a company, so keep them.

### Findings

| Severity | Finding | Why it hurts | Action |
|---|---|---|---|
| **HIGH** | Claude has its own full section, at the same weight as the product | Inverts the hierarchy. A buyer reads "AI wrapper," and it looks like a startup-program application | Demote it to a supporting capability under "Understand" |
| **HIGH** | The fictional timetable is probably not labeled as sample data | Unlabeled mock data is the biggest credibility risk on the page. Administrators will spot invented data immediately | Label it clearly (section 7) |
| **HIGH** | "Early Access" framing | Signals an unfinished product. Institutional buyers expect "Request a demo" or "Request a quotation" | Change the CTA language and the contact section's role |
| **HIGH** | Repeated centered eyebrow, heading, paragraph and card grid | The strongest template and AI-generated tell. It makes every section look equally important | Alternate compositions (section 10) |
| **MEDIUM** | Generic feature cards with icons | Interchangeable with any SaaS page. They describe features, not how scheduling work actually flows | Replace with three workflow-anchored pillars |
| **MEDIUM** | Problem section as a grid of pain-point cards | Looks like a template. Cards imply equal weight | Make it an editorial list with hairline rules |
| **MEDIUM** | "How It Works" as numbered circles | Default SaaS pattern | Redesign as a full-width timeline band |
| **MEDIUM** | About section risk | With no team to show, it either feels empty or tempts fabrication | Write it as a statement of focus and approach, with no invented people or numbers |
| **MEDIUM** | Nothing explains the private-deployment model | Your real differentiator is "built around your institution," and a buyer can't see it | Add a dedicated Institutional Deployment section |
| **LOW** | Gradients, glows and pill badges (if present) | Consumer-startup styling | Remove |
| **LOW** | Too many nav anchors | Dilutes the single conversion action | Five links plus one CTA |

### Remove
- The standalone Claude section and any "Powered by Claude" badge or logo.
- Any stats, counters or "trusted by" strips.
- Pill badges, gradient text and decorative blobs.
- "Early Access" wording.

### More prominent
- The product visual, now large and honest.
- Institution-specific rules and customization.
- Conflict detection, because it's the most concrete buyer value.
- A single clear "Request a demo" path.

---

## 2. NEW WEBSITE INFORMATION ARCHITECTURE

| # | Section | Composition | Why here |
|---|---|---|---|
| 1 | Navbar | Sticky, minimal | One conversion action always visible |
| 2 | Hero | Text left, product right | A buyer must see what the product is within one screen |
| 3 | Problem | Heading left, rows right | It frames the pain *after* the product is visible, which is more credible than leading with pain |
| 4 | Platform and three pillars (Generate, Manage, Understand) | One bordered 3-column block | The structured answer to "what does it do." "Platform" is merged into this section's header, not a separate section |
| 5 | Institutional deployment | Diagram left, text right | Your differentiator, placed right after the buyer knows what the product does |
| 6 | Product workflow | Full-width navy band | The one dark section creates a pacing break and shows how a term runs end to end |
| 7 | AI-assisted explanations | Text left, product right | It explains outputs, so it must come *after* generation and workflow make sense |
| 8 | For colleges and universities | Compact role rows | Lets deans, chairs, registrars and scheduling staff recognize themselves |
| 9 | About Schedence | Narrow two-column | Short and factual |
| 10 | Request demo | Compact centered panel | The only centered composition on the page, so it reads as the closing action |
| 11 | Footer | Four columns | Utility and legal |

Changes from your proposal:
- **"Schedence platform" is folded into the pillars** instead of being its own section. Two consecutive intro sections would repeat the hero.
- **Claude moves later and shrinks.** It explains outcomes, so it follows the workflow.
- **"For colleges & universities" is a compact role list**, not a full section. It gives wayfinding without a page of generic benefits.
- **A thin capability strip is added under the hero.** It uses plain mono labels, not fake logos.

---

## 3. ABOVE-THE-FOLD DESIGN

**Positioning decision:** use **"Academic scheduling software built around your institution."**

- It names the category and states the differentiator, which is customization and private deployment.
- "Without spreadsheet chaos" is a negative frame, a bit casual, and every competitor can say it. It works better as the first row of the Problem section.

| Element | Exact value |
|---|---|
| Eyebrow | `Academic scheduling and faculty workload software` |
| Headline | `Academic scheduling software built around your institution.` |
| Supporting copy | `Schedence generates timetables and manages faculty workloads against your institution's own rules, including availability, room constraints and designation load reductions. Conflicts are flagged before a schedule is published.` |
| Primary CTA | `Request a demo` |
| Secondary CTA | `See how it works` (anchors to `#workflow`) |
| Navbar CTA | `Request a demo` |
| Microcopy under CTAs | `Each institution is deployed separately and privately.` |

**Desktop (1024px and up)**
- 12-column grid with text in 5 columns and product visual in 7, vertically centered.
- Max width 1200px.
- Padding is `pt-24 pb-24`.
- Column gap is 48px.
- The capability strip sits below the hero in a full-width bordered band with four mono labels.

**Mobile**
- Single column: eyebrow, headline, copy, stacked full-width CTAs, then the visual.
- Padding is `pt-12 pb-16`.
- Headline is 38–40px.
- The visual shows three weekdays, not five (section 7).

**Do not**
- Use underlined or highlighted headline words.
- Put gradient backgrounds behind the hero.
- Add floating badges around the visual.
- Add a "trusted by" row.

---

## 4. DESIGN SYSTEM

### Colors

| Token | Value | Use |
|---|---|---|
| `page` | `#FAFBFC` | Page background |
| `surface` | `#FFFFFF` | Cards, frames |
| `sunken` | `#F3F5F8` | Muted surfaces, hover |
| `ink` | `#0B1B33` | Primary text, dark band |
| `body` | `#475569` | Secondary text |
| `muted` | `#5B6B82` | Meta text (about 5.4:1 on page) |
| `line` | `#E2E8F0` | Borders |
| `line-strong` | `#CBD5E1` | Emphasized borders, secondary buttons |
| `brand` | `#1F4FD8` | Primary blue |
| `brand-hover` | `#1A41B8` | Primary hover |
| `brand-subtle` | `#EEF3FE` | Subtle blue background |
| `brand-line` | `#C7D6FB` | Blue-tinted border |
| `ok` | `#1F7A4D` | Success status only |
| `ok-subtle` | `#EAF5EE` | Success background |
| `warn` | `#B45309` | Conflicts |
| `warn-subtle` | `#FEF3E2` | Conflict background |

Use green only for status ("no conflicts"), never as a decorative second accent.

**Tailwind v4 (`app/globals.css`)**
```css
@import "tailwindcss";

@theme {
  --color-page: #FAFBFC;
  --color-surface: #FFFFFF;
  --color-sunken: #F3F5F8;
  --color-ink: #0B1B33;
  --color-body: #475569;
  --color-muted: #5B6B82;
  --color-line: #E2E8F0;
  --color-line-strong: #CBD5E1;
  --color-brand: #1F4FD8;
  --color-brand-hover: #1A41B8;
  --color-brand-subtle: #EEF3FE;
  --color-brand-line: #C7D6FB;
  --color-ok: #1F7A4D;
  --color-ok-subtle: #EAF5EE;
  --color-warn: #B45309;
  --color-warn-subtle: #FEF3E2;

  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace;

  --shadow-card: 0 1px 2px rgb(11 27 51 / 0.04);
  --shadow-frame: 0 1px 2px rgb(11 27 51 / 0.05), 0 12px 32px -12px rgb(11 27 51 / 0.14);
}

html { scroll-behavior: smooth; scroll-padding-top: 5rem; }
body { background: var(--color-page); color: var(--color-ink); }
```
**Tailwind v3:** put the same names under `theme.extend.colors` and `theme.extend.boxShadow`, with `card` and `frame` shadow keys. Class names in the snippets stay identical.

### Typography (Geist Sans and Geist Mono via `next/font`)

| Role | Classes |
|---|---|
| Hero | `text-[38px] sm:text-5xl lg:text-[46px] xl:text-[50px] font-semibold leading-[1.06] tracking-[-0.03em]` |
| H2 | `text-[28px] sm:text-[32px] lg:text-[38px] font-semibold leading-[1.15] tracking-[-0.02em]` |
| H3 | `text-[20px] font-semibold leading-snug tracking-[-0.01em]` |
| Body large | `text-[17px] lg:text-[18px] leading-[1.65] text-body` |
| Body | `text-[15px] leading-[1.7] text-body` |
| Label | `text-[13px] font-medium` |
| Mono / meta | `font-mono text-[11px] uppercase tracking-[0.08em] text-muted` |

### Spacing

| Token | Value |
|---|---|
| Section padding | `py-20 lg:py-28` |
| Max width | `max-w-[1200px]` with `px-5 sm:px-8` |
| Prose max width | `max-w-[34rem]` or `max-w-[62ch]` |
| Card padding | `p-6 lg:p-8` |
| Grid gaps | `gap-6 lg:gap-8`; hero and split sections `gap-12 lg:gap-14` |

### Borders and shadows
- **Radius:** buttons `rounded-md` (6px), cards `rounded-lg` (8px), large frames `rounded-xl` (12px). Never use `rounded-2xl` or larger.
- **Borders:** `border-line` by default, `border-line-strong` for secondary buttons and emphasis.
- **Shadows:** `shadow-card` for resting surfaces and `shadow-frame` for the product visual only.

---

## 5. COMPONENT DESIGN SPECIFICATION

**Navbar**
- *Desktop:* 64px tall, logo left, five text links centered, `Request a demo` (small primary button) right. Sticky with `bg-page/90 backdrop-blur` and a bottom hairline.
- *Mobile:* logo plus menu button. The panel opens full-width below the bar with 48px-tall link rows and a full-width CTA at the bottom.
- *Hierarchy:* the CTA is the only filled element.
- *Interaction:* links go slate to navy on hover. No underline animations.
- *Don't:* add a login button, a dropdown mega-menu or a second CTA.

**Hero**
- See section 3. *Hierarchy:* headline, then CTAs, then visual, then capability strip.
- *Interaction:* none beyond button states.
- *Don't:* add animation, gradients, a badge above the eyebrow, or a "trusted by" strip.

**Product visual (frame)**
- *Desktop:* a white 12px-radius frame with `shadow-frame` and a header bar reading "Schedule review" plus a `Sample data` marker.
- *Mobile:* three day columns, with the conflict panel stacked below.
- *Interaction:* none. Don't make fake data look clickable.
- *Don't:* float cards over it, show real names, or add performance metrics.

**Problem**
- *Desktop:* heading in the left 5 columns, sticky. Four rows on the right (title, then description) separated by hairlines.
- *Mobile:* heading, then rows.
- *Hierarchy:* row titles in navy semibold, descriptions in slate.
- *Interaction:* none.
- *Don't:* use icons, cards, red warning colors or "pain" language.

**Product pillars**
- *Desktop:* one bordered container split into three equal columns with vertical dividers.
- *Mobile:* stacked with horizontal dividers.
- *Hierarchy:* icon box and mono number, pillar name, one-sentence description, three capability lines.
- *Interaction:* static, because the pillars aren't links.
- *Don't:* give each pillar its own shadowed card, use gradient icon tiles, or add "Learn more" links to nowhere.

**Institutional deployment**
- *Desktop:* diagram in the left 6 columns, text in the right 6.
- *Mobile:* text first, then the diagram.
- *Hierarchy:* H2, paragraph, six configuration items in a 2×3 list, then a text link.
- *Interaction:* the link arrow nudges 2px on hover.
- *Don't:* name any real institution or show logos.

**Workflow**
- *Desktop:* full-width navy band with a horizontal five-step timeline on a single hairline.
- *Mobile:* vertical timeline with a left rail.
- *Hierarchy:* mono step number, step title, one sentence.
- *Interaction:* static.
- *Don't:* use big numbered circles or connect steps with arrows.

**Claude explanation**
- *Desktop:* text left, pipeline plus sample explanation right.
- *Mobile:* text, then pipeline, then sample.
- *Hierarchy:* H2, two short paragraphs, a status note ("in development"), then the visual.
- *Interaction:* static.
- *Don't:* show a chat bubble, sparkles, an Anthropic or Claude logo, or a "Powered by" badge.

**About**
- *Desktop:* heading left, two short paragraphs right.
- *Mobile:* stacked.
- *Don't:* add team photos, headcount, "founded in" claims, or a mission-statement collage.

**Contact / demo CTA**
- *Desktop and mobile:* a compact centered panel with one H2, one paragraph, two buttons, then the existing form directly below.
- *Don't:* add a newsletter field, social proof, or a countdown.

**Footer**
- *Desktop:* brand and descriptor in 5 columns, then three link columns.
- *Mobile:* stacked, with link groups in two columns.
- *Don't:* add a social icon row unless the accounts are active and professional.

---

## 6. ACTUAL CODE SNIPPETS

These snippets use the token class names from section 4 (`bg-page`, `text-ink`, `border-line`, `bg-brand` and so on).

### Shared helpers

```ts
// lib/ui.ts
const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-page'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-hover',
  secondary: 'border border-line-strong bg-surface text-ink hover:bg-sunken',
} as const

const sizes = {
  md: 'h-11 px-5 text-[15px]',
  sm: 'h-9 px-4 text-[14px]',
} as const

export const btn = (
  variant: keyof typeof variants = 'primary',
  size: keyof typeof sizes = 'md',
) => `${base} ${variants[variant]} ${sizes[size]}`
```

```tsx
// components/ui/container.tsx
export function Container({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}

// components/ui/eyebrow.tsx
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-brand">
      {children}
    </p>
  )
}
```

### A. Navbar

```tsx
// components/layout/navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { btn } from '@/lib/ui'

const NAV = [
  { href: '#platform', label: 'Platform' },
  { href: '#deployment', label: 'Deployment' },
  { href: '#workflow', label: 'How it works' },
  { href: '#explanations', label: 'Explanations' },
  { href: '#about', label: 'About' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Schedence home" className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <rect width="24" height="24" rx="6" className="fill-ink" />
            <rect x="5" y="5" width="6" height="6" rx="1.5" className="fill-white" />
            <rect x="13" y="5" width="6" height="6" rx="1.5" className="fill-white/40" />
            <rect x="5" y="13" width="6" height="6" rx="1.5" className="fill-white/40" />
            <rect x="13" y="13" width="6" height="6" rx="1.5" className="fill-brand" />
          </svg>
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
            Schedence
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-body transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="#contact" className={btn('primary', 'sm')}>
            Request a demo
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-sunken md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-page md:hidden">
          <ul className="mx-auto max-w-[1200px] px-5 py-1 sm:px-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center border-b border-line text-[15px] font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 pt-4 sm:px-8">
            <Link href="#contact" onClick={() => setOpen(false)} className={`${btn('primary')} w-full`}>
              Request a demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
```

### B. Hero

```tsx
// components/sections/hero.tsx
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { btn } from '@/lib/ui'
import { TimetablePreview } from '@/components/product/timetable-preview'

const SCOPE = [
  'Faculty workload',
  'Timetable generation',
  'Constraint management',
  'Conflict detection',
]

export function Hero() {
  return (
    <section className="border-b border-line bg-page">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-24 lg:pt-24">
        <div className="lg:col-span-5">
          <p className="text-[13px] font-medium text-brand">
            Academic scheduling and faculty workload software
          </p>
          <h1 className="mt-5 text-balance text-[38px] font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[46px] xl:text-[50px]">
            Academic scheduling software built around your institution.
          </h1>
          <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.65] text-body lg:text-[18px]">
            Schedence generates timetables and manages faculty workloads against
            your institution&apos;s own rules, including availability, room
            constraints and designation load reductions. Conflicts are flagged
            before a schedule is published.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className={btn('primary')}>
              Request a demo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="#workflow" className={btn('secondary')}>
              See how it works
            </Link>
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Each institution is deployed separately and privately.
          </p>
        </div>

        <div className="lg:col-span-7">
          <TimetablePreview />
        </div>
      </div>

      <div className="border-t border-line bg-surface">
        <ul className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-x-6 gap-y-3 px-5 py-5 sm:px-8 lg:grid-cols-4">
          {SCOPE.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-[1px] bg-brand/60" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
```

### C. Product pillars

```tsx
// components/sections/pillars.tsx
import { CalendarRange, Scale, SearchCheck, Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'

type Point = { text: string; status?: string }

const PILLARS: {
  n: string
  name: string
  icon: typeof CalendarRange
  summary: string
  points: Point[]
}[] = [
  {
    n: '01',
    name: 'Generate',
    icon: CalendarRange,
    summary: "Build timetables from your institution's own scheduling rules.",
    points: [
      { text: 'Faculty availability and academic assignments' },
      { text: 'Room specialization and subject-room constraints' },
      { text: 'Constraint-based timetable generation' },
    ],
  },
  {
    n: '02',
    name: 'Manage',
    icon: Scale,
    summary: 'Keep faculty workloads and schedule changes under review.',
    points: [
      { text: 'Teaching load with administrative designation reductions' },
      { text: 'Conflict review and assignment adjustments' },
      { text: 'Schedule review and publication' },
    ],
  },
  {
    n: '03',
    name: 'Understand',
    icon: SearchCheck,
    summary: 'See exactly why a conflict occurred or a schedule changed.',
    points: [
      { text: 'Conflict detection with specific causes' },
      { text: 'Plain-language explanations of outcomes', status: 'In development' },
    ],
  },
]

export function Pillars() {
  return (
    <section id="platform" className="bg-page py-20 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>The platform</Eyebrow>
            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
              One scheduling system, built for three jobs.
            </h2>
          </div>
          <p className="max-w-[34rem] text-[17px] leading-[1.65] text-body lg:col-span-6 lg:col-start-7 lg:pt-9 lg:text-[18px]">
            Schedence keeps timetable generation, faculty workload and conflict
            review in a single system, so scheduling decisions are made against
            one set of rules.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-xl border border-line bg-surface shadow-card lg:mt-16 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col border-t border-line p-6 first:border-t-0 lg:border-l lg:border-t-0 lg:p-8 lg:first:border-l-0"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-line bg-brand-subtle text-brand">
                  <p.icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <span className="font-mono text-[11px] text-muted">{p.n}</span>
              </div>
              <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.01em] text-ink">
                {p.name}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-body">{p.summary}</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {p.points.map((pt) => (
                  <li key={pt.text} className="flex items-start gap-3 text-[14px] leading-6 text-ink">
                    <Check className="mt-[5px] h-3.5 w-3.5 shrink-0 text-brand" aria-hidden />
                    <span>
                      {pt.text}
                      {pt.status && (
                        <span className="ml-2 inline-block rounded border border-line px-1.5 py-0.5 align-middle font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                          {pt.status}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

### D. Institutional deployment

```tsx
// components/sections/deployment.tsx
import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock, DoorOpen, Link2, SlidersHorizontal, UserCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'

const CONFIG = [
  { icon: CalendarDays, label: 'Academic calendar and terms' },
  { icon: DoorOpen, label: 'Room types and specializations' },
  { icon: Link2, label: 'Subject-room constraints' },
  { icon: Clock, label: 'Faculty availability' },
  { icon: SlidersHorizontal, label: 'Workload and designation rules' },
  { icon: UserCheck, label: 'Review and publication roles' },
]

export function Deployment() {
  return (
    <section id="deployment" className="border-y border-line bg-surface py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Diagram: left on desktop, below text on mobile */}
          <div className="lg:order-1 lg:col-span-6" aria-hidden>
            <div className="rounded-xl border border-line bg-page p-5 sm:p-7">
              <div className="rounded-lg border border-line bg-surface p-5 shadow-card">
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  Schedence platform
                </p>
                <p className="mt-2 text-[15px] font-medium text-ink">
                  Scheduling engine, constraint management, conflict detection
                </p>
              </div>

              <div className="mx-auto h-7 w-px bg-line-strong" />

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-brand-line bg-brand-subtle p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brand">
                    Private deployment
                  </p>
                  <p className="mt-2 text-[15px] font-medium text-ink">Your institution</p>
                  <p className="mt-1 text-[13px] leading-5 text-body">
                    Your rules, rooms, roles and data
                  </p>
                </div>
                <div className="rounded-lg border border-dashed border-line-strong p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                    Separate deployments
                  </p>
                  <p className="mt-2 text-[15px] font-medium text-body">Other institutions</p>
                  <p className="mt-1 text-[13px] leading-5 text-muted">
                    Each configured independently
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:order-2 lg:col-span-6">
            <Eyebrow>Institutional deployment</Eyebrow>
            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
              Configured to how your institution schedules.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.65] text-body">
              Every institution has its own rules: which rooms support which
              subjects, how designations reduce teaching load, who reviews a
              schedule before it is published. Schedence is deployed separately
              for each institution and configured around those rules.
            </p>

            <ul className="mt-8 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {CONFIG.map((c) => (
                <li key={c.label} className="flex items-center gap-3 border-b border-line py-3.5 text-[14px] text-ink">
                  <c.icon className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {c.label}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-brand hover:text-brand-hover"
            >
              Discuss your requirements
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
```

### E. Workflow timeline

```tsx
// components/sections/workflow.tsx
import { Container } from '@/components/ui/container'

const STEPS = [
  { title: 'Configure', body: 'Set up rooms, terms, faculty availability and the rules your institution schedules by.' },
  { title: 'Generate', body: 'Produce a timetable that satisfies those constraints.' },
  { title: 'Resolve', body: 'Review detected conflicts and adjust assignments.' },
  { title: 'Review', body: 'Check faculty workloads, including designation load reductions.' },
  { title: 'Publish', body: 'Release the approved schedule.' },
]

export function Workflow() {
  return (
    <section id="workflow" className="bg-ink py-20 text-white lg:py-28">
      <Container>
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-slate-400">
          How it works
        </p>
        <h2 className="mt-4 max-w-[22ch] text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[32px] lg:text-[38px]">
          From institutional rules to a published schedule.
        </h2>

        <ol className="relative mt-14 grid gap-10 border-l border-white/15 pl-8 lg:mt-16 lg:grid-cols-5 lg:gap-8 lg:border-l-0 lg:pl-0 lg:before:absolute lg:before:inset-x-0 lg:before:top-[5px] lg:before:h-px lg:before:bg-white/15">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative lg:pt-9">
              <span
                aria-hidden
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-ink lg:left-0 lg:top-0"
              />
              <p className="font-mono text-[11px] tracking-[0.08em] text-slate-400">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.01em]">{s.title}</h3>
              <p className="mt-2 max-w-[28ch] text-[14px] leading-6 text-slate-300">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
```

### F. AI scheduling explanation section

This implements the copy and architecture in section 8.

```tsx
// components/sections/explanations.tsx
import { Cog, Info, ListChecks, MessageSquareText, TriangleAlert, UserCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'

const STEPS = [
  { icon: ListChecks, title: 'Scheduling rules', note: 'Availability, rooms, load limits', tag: 'Rules-based', tone: 'base' },
  { icon: Cog, title: 'Constraint engine', note: 'Applies every rule to every assignment', tag: 'Rules-based', tone: 'base' },
  { icon: TriangleAlert, title: 'Conflict or result', note: 'A specific, checkable outcome', tag: 'Rules-based', tone: 'base' },
  { icon: MessageSquareText, title: 'Claude explanation', note: 'Plain-language summary of that outcome', tag: 'Language', tone: 'ai' },
  { icon: UserCheck, title: 'Administrator review', note: 'A person confirms or adjusts', tag: 'Human', tone: 'base' },
] as const

export function Explanations() {
  return (
    <section id="explanations" className="bg-page py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Eyebrow>Understand</Eyebrow>
            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
              Understand why a schedule changed.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-body">
              When a timetable changes or a conflict appears, administrators need
              more than an error code. Schedence&apos;s scheduling engine produces
              the result. Claude, Anthropic&apos;s AI model, helps turn that result
              into a plain-language explanation your staff can read, question and
              act on.
            </p>
            <p className="mt-4 text-[17px] leading-[1.65] text-body">
              Claude does not generate or alter timetables. Explanations are
              drafted from the engine&apos;s own output, and an administrator
              makes the decision.
            </p>
            <p className="mt-6 flex items-start gap-2 text-[13px] leading-5 text-muted">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              Claude-assisted explanations are in development and are not yet part
              of production deployments.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-line bg-surface p-5 shadow-card sm:p-7">
              <ol>
                {STEPS.map((s) => (
                  <li
                    key={s.title}
                    className="relative flex items-center gap-4 pb-5 last:pb-0 after:absolute after:bottom-0 after:left-[17px] after:top-9 after:w-px after:bg-line-strong last:after:hidden"
                  >
                    <span
                      className={`z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${
                        s.tone === 'ai'
                          ? 'border-brand-line bg-brand-subtle text-brand'
                          : 'border-line bg-surface text-ink'
                      }`}
                    >
                      <s.icon className="h-[18px] w-[18px]" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-medium text-ink">{s.title}</p>
                      <p className="text-[13px] text-muted">{s.note}</p>
                    </div>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.08em] text-muted sm:block">
                      {s.tag}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="mt-4 rounded-lg border border-line bg-surface p-5 shadow-card">
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                Sample explanation · illustrative
              </figcaption>
              <blockquote className="mt-3 text-[15px] leading-[1.7] text-ink">
                CS 301 can&apos;t be placed in Room 204 on Tuesday and Thursday at
                9:00. This subject requires a laboratory, and Room 204 is a lecture
                room. Two laboratory rooms are free at that time: LAB 1 and LAB 2.
              </blockquote>
              <p className="mt-4 border-t border-line pt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                Awaiting administrator review
              </p>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  )
}
```

### G. Request demo CTA

```tsx
// components/sections/request-demo.tsx
import Link from 'next/link'
import { btn } from '@/lib/ui'
import { Eyebrow } from '@/components/ui/eyebrow'

export function RequestDemo() {
  return (
    <section id="contact" className="bg-page py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[960px] px-5 sm:px-8">
        <div className="rounded-xl border border-line bg-surface px-6 py-12 text-center shadow-card sm:px-12 sm:py-16">
          <div className="flex justify-center">
            <Eyebrow>Request a demo</Eyebrow>
          </div>
          <h2 className="mx-auto mt-4 max-w-[24ch] text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
            See Schedence on your institution&apos;s scheduling rules.
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-body">
            Tell us how your institution schedules today. We&apos;ll walk through
            the platform and discuss what a deployment would involve.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="#inquiry" className={btn('primary')}>Request a demo</Link>
            <Link href="#inquiry" className={btn('secondary')}>Request a quotation</Link>
          </div>
        </div>

        {/* Keep the existing, working contact form here as <div id="inquiry">.
            Add an "Inquiry type" select: Demo / Quotation / General question. */}
      </div>
    </section>
  )
}
```

### H. Footer

```tsx
// components/layout/footer.tsx
import Link from 'next/link'
import { Container } from '@/components/ui/container'

const GROUPS = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '#platform' },
      { label: 'Deployment', href: '#deployment' },
      { label: 'How it works', href: '#workflow' },
      { label: 'Explanations', href: '#explanations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Request a demo', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[17px] font-semibold tracking-[-0.02em] text-ink">Schedence</p>
            <p className="mt-3 max-w-[32ch] text-[14px] leading-6 text-body">
              Academic scheduling and faculty workload software for colleges and universities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {GROUPS.map((g) => (
              <nav key={g.title} aria-label={g.title}>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{g.title}</p>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-[14px] text-body transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-[13px] text-muted">
          © {new Date().getFullYear()} Schedence. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
```

---

## 7. PRODUCT VISUAL DIRECTION

### What it should show
- **One week view** for a single instructor or room, with 4–6 schedule blocks.
- **One flagged conflict**, shown in amber with a short side-panel explanation. This is your most credible and differentiating feature.
- **A "Draft" status marker.**
- **A header** that says "Schedule review."
- **A visible "Sample data" label** inside the frame.
- **Generic names only**: "Instructor A," "CS 301," "RM 204," "LAB 1."

### What it should NOT show
- Real university, faculty or student names, or any logo.
- Percentages, scores or efficiency numbers.
- Charts or dashboards of "hours saved."
- A Claude chat window, sparkles or an "AI-generated" badge.
- Notification bubbles, avatars or fake collaborators.

### Fake metrics to avoid
"98% conflict-free," "generated in 2.3s," "40 hours saved," "1,200 sections scheduled," "trusted by N institutions," and any "accuracy" figure.

### Marking sample data
- A `Sample data` marker in the frame header.
- A caption under the frame: *"Illustrative interface using sample data."*
- When real screenshots exist, replace the component but keep the caption's pattern for any demo environment.

### Detail level
Enough to look like software, not enough to look like a screenshot of one: a single week grid, one conflict and one status. Fewer than 10 text nodes of data.

### Mobile
Three weekday columns (Mon–Wed) instead of five, with the conflict panel stacked underneath. The frame never scrolls horizontally.

```tsx
// components/product/timetable-preview.tsx
import { TriangleAlert } from 'lucide-react'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const START_HOUR = 7
const HOURS = [7, 8, 9, 10, 11, 12]
const ROW = 44 // px per hour

type Block = { day: number; start: number; dur: number; code: string; room: string; conflict?: boolean }

const BLOCKS: Block[] = [
  { day: 0, start: 7.5, dur: 1.5, code: 'CS 101', room: 'RM 204' },
  { day: 0, start: 10, dur: 2, code: 'CS 214 Lab', room: 'LAB 1' },
  { day: 1, start: 9, dur: 1.5, code: 'CS 301', room: 'RM 204', conflict: true },
  { day: 2, start: 7.5, dur: 1.5, code: 'CS 101', room: 'RM 204' },
  { day: 2, start: 10, dur: 2, code: 'CS 214 Lab', room: 'LAB 1' },
  { day: 3, start: 9, dur: 1.5, code: 'CS 301', room: 'RM 204', conflict: true },
]

export function TimetablePreview() {
  return (
    <figure>
      <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-frame">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-warn" aria-hidden />
            <p className="text-[13px] font-medium text-ink">
              Schedule review <span className="text-muted">· Instructor A · Draft</span>
            </p>
          </div>
          <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
            Sample data
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_200px]">
          <div className="p-3 sm:p-4">
            <div className="grid grid-cols-[32px_repeat(3,1fr)] gap-x-1 sm:grid-cols-[36px_repeat(5,1fr)]">
              <div />
              {DAYS.map((d, i) => (
                <p
                  key={d}
                  className={`pb-2 text-center font-mono text-[10px] uppercase tracking-[0.08em] text-muted ${i > 2 ? 'hidden sm:block' : ''}`}
                >
                  {d}
                </p>
              ))}

              <div className="relative" style={{ height: HOURS.length * ROW }}>
                {HOURS.map((h, i) => (
                  <span
                    key={h}
                    className="absolute -translate-y-1/2 font-mono text-[10px] text-muted"
                    style={{ top: i * ROW }}
                  >
                    {h}:00
                  </span>
                ))}
              </div>

              {DAYS.map((d, di) => (
                <div
                  key={d}
                  className={`relative border-l border-line ${di > 2 ? 'hidden sm:block' : ''}`}
                  style={{
                    height: HOURS.length * ROW,
                    backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${ROW - 1}px, var(--color-line) ${ROW - 1}px, var(--color-line) ${ROW}px)`,
                  }}
                >
                  {BLOCKS.filter((b) => b.day === di).map((b) => (
                    <div
                      key={`${b.code}-${b.day}`}
                      className={`absolute inset-x-0.5 overflow-hidden rounded-md border px-1.5 py-1 ${
                        b.conflict
                          ? 'border-warn/40 bg-warn-subtle'
                          : 'border-brand-line bg-brand-subtle'
                      }`}
                      style={{ top: (b.start - START_HOUR) * ROW + 1, height: b.dur * ROW - 2 }}
                    >
                      <p className="truncate text-[11px] font-medium leading-4 text-ink">{b.code}</p>
                      <p className="truncate font-mono text-[10px] leading-4 text-body">{b.room}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <aside className="border-t border-line bg-sunken p-4 md:border-l md:border-t-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Conflicts · 1</p>
            <div className="mt-3 rounded-md border border-warn/30 bg-surface p-3">
              <p className="flex items-center gap-1.5 text-[12px] font-medium text-warn">
                <TriangleAlert className="h-3.5 w-3.5" aria-hidden />
                Room requirement
              </p>
              <p className="mt-1.5 text-[12px] leading-[1.5] text-body">
                CS 301 · Tue, Thu 9:00. Assigned room is not a laboratory.
              </p>
            </div>
          </aside>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[12px] text-muted">
        Illustrative interface using sample data.
      </figcaption>
    </figure>
  )
}
```

Colors in the frame are fixed (blue for normal, amber for conflict), and green isn't used at all. Add a green "No conflicts" state later, when you have a resolved view to show.

---

## 8. CLAUDE SECTION POSITIONING

### How the architecture is presented
A five-step vertical pipeline, with the first three steps visibly rules-based and the fourth, Claude, the only blue-tinted node:

**Scheduling rules → Constraint engine → Conflict or result → Claude explanation → Administrator review**

The pipeline reads as "the engine decides, Claude explains, a person approves." Claude is one step in five, a language layer on top of the product's output.

### Positioning decisions
- **Heading is about the user outcome** ("Understand why a schedule changed"), not the AI.
- **It sits inside the "Understand" pillar**, so the pillars card carries a small "In development" tag on the explanation line.
- **Claude is named in text twice** and never in a logo, badge or "powered by" treatment. Using Anthropic or Claude marks is subject to Anthropic's brand guidelines, so keep it to plain text.
- **No production claim.** The status note says explanations are in development.
- **The sample is labeled "illustrative"** and uses generic data that matches the hero visual (CS 301, Room 204, LAB 1), which ties the two together.

### Exact marketing copy

- **Eyebrow:** Understand
- **H2:** Understand why a schedule changed.
- **Paragraph 1:** When a timetable changes or a conflict appears, administrators need more than an error code. Schedence's scheduling engine produces the result. Claude, Anthropic's AI model, helps turn that result into a plain-language explanation your staff can read, question and act on.
- **Paragraph 2:** Claude does not generate or alter timetables. Explanations are drafted from the engine's own output, and an administrator makes the decision.
- **Status note:** Claude-assisted explanations are in development and are not yet part of production deployments.

The component is snippet **6F** above and uses this copy verbatim.

---

## 9. COPY REWRITE

### Hero
See section 3.

### Problem
- **Eyebrow:** The problem
- **H2:** Scheduling rules live in too many places.
- **Rows:**
  1. **Rules live in spreadsheets and in people's heads.** Availability, room limits and load policies are tracked separately and re-checked by hand each term.
  2. **Conflicts surface late.** Double-booked rooms and overloaded faculty are often found only after a schedule has circulated.
  3. **Workload and timetable are reconciled separately.** Teaching assignments, designations and load reductions are calculated apart from the schedule itself.
  4. **Changes are hard to explain.** When a schedule shifts, staff reconstruct the reason from memory and email.

### Product pillars
- **Eyebrow:** The platform
- **H2:** One scheduling system, built for three jobs.
- **Intro:** Schedence keeps timetable generation, faculty workload and conflict review in a single system, so scheduling decisions are made against one set of rules.
- **Generate:** Build timetables from your institution's own scheduling rules.
- **Manage:** Keep faculty workloads and schedule changes under review.
- **Understand:** See exactly why a conflict occurred or a schedule changed.

Capability lines are in snippet 6C.

### Institutional deployments
- **Eyebrow:** Institutional deployment
- **H2:** Configured to how your institution schedules.
- **Body:** Every institution has its own rules: which rooms support which subjects, how designations reduce teaching load, who reviews a schedule before it is published. Schedence is deployed separately for each institution and configured around those rules.
- **Link:** Discuss your requirements

### Workflow
- **Eyebrow:** How it works
- **H2:** From institutional rules to a published schedule.
- **Steps:** Configure, Generate, Resolve, Review, Publish (see 6E).

### AI explanation
See section 8.

### For colleges and universities (role rows)
- **Registrars:** One place to confirm that published timetables satisfy institutional rules.
- **Deans and department chairs:** Visibility into faculty workload and designation load reductions.
- **Scheduling staff:** Generate, check and adjust timetables without rebuilding them by hand.
- **Administrators:** Review specific conflicts and decide how to resolve them.

### About
- **Eyebrow:** About Schedence
- **H2:** A focused company building scheduling software for higher education.
- **Paragraph 1:** Schedence is an early-stage software company focused on one problem: academic scheduling and faculty workload at colleges and universities. We build the scheduling technology and deploy it separately for each institution.
- **Paragraph 2:** Our approach is informed by an initial institutional implementation. We design around the way institutions actually schedule, including room constraints, availability, designations and review, instead of asking institutions to adapt to a fixed template.

Keep paragraph 2 only if it's accurate. Don't name the institution without written permission. A named, accountable person (real name and role) would strengthen About, so add one when you're comfortable. I haven't invented any team details.

### Request demo CTA
- **Eyebrow:** Request a demo
- **H2:** See Schedence on your institution's scheduling rules.
- **Body:** Tell us how your institution schedules today. We'll walk through the platform and discuss what a deployment would involve.
- **Buttons:** Request a demo, Request a quotation

---

## 10. VISUAL RHYTHM

| # | Section | Composition | Background |
|---|---|---|---|
| 1 | Hero | Text left (5), product right (7) | `page` |
| 2 | Capability strip | Four inline mono labels | `surface` |
| 3 | Problem | Heading left (sticky), rows right | `page` |
| 4 | Pillars | One full-width bordered 3-column block | `page` |
| 5 | Deployment | **Diagram left**, text right | `surface` |
| 6 | Workflow | **Full-width timeline band** | `ink` (dark) |
| 7 | Explanations | Text left, pipeline right | `page` |
| 8 | Roles | Compact 4-column rows | `surface` |
| 9 | About | Narrow two-column, heading left | `page` |
| 10 | Request demo | **Compact centered panel** | `page` |
| 11 | Footer | Four columns | `surface` |

Rules that keep the rhythm intact:
- **Only the final CTA is centered.** Everything else is left-aligned, which removes the repeated centered stack.
- **Never put two card grids back to back.** The pillars block is the only grid of boxes on the page.
- **Alternate the product side** (hero right, deployment left, explanations right).
- **Use exactly one dark section**, the workflow, as the visual pivot.
- **Alternate `page` and `surface` backgrounds** with hairline borders between them.

---

## 11. WHAT TO IMPLEMENT NOW VS LATER

### IMPLEMENT NOW
- The new section order and the demoted Claude section.
- The design tokens, typography and button helpers.
- The new hero, navbar and "Request a demo" CTA language.
- The honest sample-data timetable preview with its caption.
- The three-pillar block and the Institutional Deployment section.
- The dark workflow band, the roles list, the About copy and the footer.
- Removal of fake or unprovable claims, stats and badges.
- Basic accessibility checks: focus rings, contrast, `aria` on the menu, heading order.
- Page metadata and Open Graph text using the new positioning.

### IMPLEMENT AFTER MVP EXISTS
- Replace the timetable component with real Schedence screenshots in the same frame, keeping the "sample data" convention for any demo environment.
- A pilot case study, only with written permission from the institution.
- Institution logos or testimonials, only with explicit permission.
- A security and data-handling page once you have real practices to describe.
- A pricing or subscription page.
- Documentation or a resources section.
- A live, interactive explanation demo once the Claude integration ships.
- A short product walkthrough video.
- Metrics, only when they are real and verifiable.

---

## 12. ANTIGRAVITY IMPLEMENTATION BRIEF

```
ANTIGRAVITY IMPLEMENTATION BRIEF — Schedence public website

CONTEXT
Schedence (schedence.xyz) is a B2B academic scheduling and faculty-workload
software company for colleges and universities. The public site is a company/
sales site (Next.js App Router, TypeScript, Tailwind, Lucide React, Geist,
Vercel). Audience: registrars, deans, chairs, scheduling staff. Transform the
EXISTING site progressively. Preserve working functionality (contact form,
Privacy, Terms, routing, metadata). Do NOT rewrite the repo wholesale.

TRUTHFULNESS (hard rules)
No invented customers, logos, testimonials, stats, awards, team members,
funding or usage numbers. Do not call any university a customer. No university
logos. No "powered by Claude" badge or Anthropic/Claude logos; plain text only.
Claude explanations are IN DEVELOPMENT: never claim production use.

VISUAL SYSTEM
Add tokens to globals.css (@theme, or tailwind.config extend for v3):
page #FAFBFC, surface #FFFFFF, sunken #F3F5F8, ink #0B1B33, body #475569,
muted #5B6B82, line #E2E8F0, line-strong #CBD5E1, brand #1F4FD8,
brand-hover #1A41B8, brand-subtle #EEF3FE, brand-line #C7D6FB, ok #1F7A4D,
warn #B45309, warn-subtle #FEF3E2. Green = status only.
Radius: buttons rounded-md, cards rounded-lg, frames rounded-xl (never larger).
Shadows: shadow-card (resting), shadow-frame (product visual only).
Typography: Geist Sans + Geist Mono; mono only for small uppercase meta labels.
Create lib/ui.ts (btn helper), components/ui/container.tsx, components/ui/eyebrow.tsx.

SECTION ORDER (target)
Navbar > Hero > capability strip > Problem > Pillars (Generate/Manage/Understand)
> Institutional Deployment > Workflow (dark band) > Explanations > Roles >
About > Request Demo > Footer.

MODIFY
- Navbar: 5 anchors + "Request a demo" CTA; accessible mobile menu.
- Hero: text left/product right. Eyebrow "Academic scheduling and faculty
  workload software"; H1 "Academic scheduling software built around your
  institution."; CTAs "Request a demo" / "See how it works". No underline text.
- Problem: convert cards into editorial rows (heading left, hairline rows right).
- How It Works: convert to the dark full-width 5-step timeline.
- About: short two-column factual copy; no team photos/headcount.
- Early Access/Contact: relabel to "Request a demo"; KEEP the existing form and
  add an "Inquiry type" select (Demo / Quotation / General).
- Footer: four-column layout; keep Privacy and Terms links.

COMBINE
- Feature cards + "platform" intro -> one Pillars section (single bordered
  3-column block).

REMOVE / DEMOTE
- Standalone Claude section -> replace with the compact Explanations section
  (pipeline + labeled sample). Remove any badges, stats, gradients, pills,
  "Early Access" wording, trusted-by strips.

CREATE
components/product/timetable-preview.tsx (sample-data week view with one
conflict, "Sample data" marker, caption "Illustrative interface using sample
data."); components/sections/{pillars,deployment,workflow,explanations,
request-demo}.tsx; roles list inside an existing section file.

COPY
Use the copy from the design spec verbatim for Hero, Problem, Pillars,
Deployment, Explanations, About and Request Demo. Avoid "revolutionary",
"seamless", "cutting-edge", and any unprovable claim.

PATTERNS TO FOLLOW
Snippets A–H of the design spec: class names, spacing, responsive behavior,
icon sizes (h-4/h-[18px]), grid proportions (hero 5/7, deployment 6/6).
Only the final CTA is centered; no two card grids back to back.

DO NOT OVERENGINEER
No animation libraries, no CMS, no new dependencies beyond lucide-react and
geist. No dark mode this round. No new routes except those that already exist.
Static server components except the Navbar (client, for the mobile menu).

ORDER OF WORK (one commit each; verify build and responsive behavior at 375,
768 and 1280px after each)
1 tokens + ui helpers  2 navbar + hero + preview  3 pillars + problem
4 deployment + workflow  5 explanations (remove old Claude section)
6 about + request demo + footer  7 copy/metadata pass + accessibility check

ACCEPTANCE
Build and lint pass; no horizontal scroll at 375px; visible focus rings; WCAG AA
text contrast; heading order h1>h2>h3; the sample-data label is visible; no
unverifiable claims remain anywhere on the site.
```