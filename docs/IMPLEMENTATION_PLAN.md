# Saidi Health Landing Page — Next.js Implementation Plan

> Surgical, step-by-step plan to convert 5 Stitch screens into a production Next.js site with proper routing, shared components, and pixel-accurate fidelity.

---

## Screen Inventory & Route Map

| # | Stitch Screen | Route | Purpose |
|---|--------------|-------|---------|
| 1 | Light Picasso (Floating Nav) | `/` | Homepage — hero, features bento grid, enterprise section, CTA |
| 2 | FAQ (Updated Nav) | `/faq` | FAQ page — search, category sidebar, accordion items, CTA |
| 3 | About Us (Light Picasso) | `/about` | About — hero, "What We Do", mission, "Why Saidi" cards, stats |
| 4 | CE Courses (Updated Nav) | `/courses` | Courses — hero, search/filter, 3-tier pricing cards, CTA |
| 5 | Light Picasso (Floating Nav) #2 | _Duplicate of #1_ | Identical to screen 1 — skip, use screen 1 as the homepage |

**Key observation:** Screens 1 and 5 are identical (same HTML). We only need 4 unique pages.

---

## Design System Extracted from Stitch

### Colors (Tailwind tokens)
```
primary:           #0d1240  (deep navy)
primary-container: #232855  (navy)
secondary:         #3b4bd2  (indigo/blue)
secondary-container: #5666ec
ocean:             #63d8da  (teal accent)
bloom:             #f35880  (pink accent)
lunar:             #e1ffa0  (lime accent)
violet:            #918de9  (purple accent)
surface:           #fcf8fd  (near-white background)
surface-container-low: #f6f2f7
on-surface:        #1b1b1f
on-surface-variant: #46464f
outline:           #777680
outline-variant:   #c7c5d0
```

### Typography
- **Font:** Figtree (Google Fonts) — weights 300–900
- **Icons:** Material Symbols Outlined (variable weight/fill)
- **Signature label:** `font-weight: 700; font-size: 0.75rem; uppercase; letter-spacing: 0.15em`

### Border Radius
- Default: `1rem` (16px)
- lg: `2rem` (32px)
- xl: `3rem` (48px)
- full: `9999px` (pill)

### Nav Variants
- **Homepage:** Floating pill nav (`fixed top-4`, rounded-full, glass blur, centered)
- **Interior pages (FAQ, About, Courses):** Full-width sticky header (`fixed top-0`, glass blur, h-20)

### Footer Variants
- **Homepage:** Dark footer (`bg-primary-container`, 4-col grid, rounded top corners)
- **Interior pages:** Light footer (`bg-surface-container-low`, 2-col simple layout)

---

## Implementation Steps

### Phase 1: Project Scaffolding

#### Step 1 — Initialize Next.js project
- `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- Uses App Router (app directory)
- TypeScript + Tailwind CSS out of the box

#### Step 2 — Configure Tailwind with the Stitch design tokens
- Update `tailwind.config.ts` with all custom colors from the Stitch theme (primary, secondary, ocean, bloom, lunar, violet, and all M3-style surface tokens)
- Set `fontFamily` to Figtree
- Set custom `borderRadius` values
- Configure `darkMode: "class"` (future-proof, designs are light only for now)

#### Step 3 — Set up global styles & fonts
- Add Figtree from Google Fonts via `next/font/google`
- Add Material Symbols Outlined via `<link>` in layout
- Create global CSS with `.signature-label`, `.glass-nav`, `.scroll-reveal`, and animation keyframes
- Set `scroll-behavior: smooth` and `selection` colors

#### Step 4 — Download and organize images
- Create `/public/images/` directory
- Download all `lh3.googleusercontent.com/aida-public/*` images referenced in the Stitch HTML
- Name them semantically: `hero-dashboard.jpg`, `hero-about.jpg`, `faq-doctor.jpg`, `cta-clinic.jpg`, `avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg`, `licensing-docs.jpg`, `learning-platform.jpg`
- Update all image references to use local paths via `next/image`

---

### Phase 2: Shared Components

#### Step 5 — `NavbarFloating` component (Homepage nav)
- Floating pill design: `fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl`
- Glass morphism: `bg-white/80 backdrop-blur-xl`
- Logo with icon + "Saidi Health" text
- Nav links: About Us, Saidi FAQ, Contact Us, Sign In
- Right side: shopping cart icon (with badge dot) + "CE Courses" CTA button
- Mobile: hide nav links, show on md+

#### Step 6 — `NavbarSticky` component (Interior pages nav)
- Full-width sticky: `fixed top-0 w-full h-20`
- Same glass blur style
- Nav links: Home, Solutions, About Us, FAQ/Resources, Contact
- Right side: Login text button + "Book Demo" CTA button
- Active state: bold + bottom border in secondary color

#### Step 7 — `FooterFull` component (Homepage footer)
- `bg-primary-container` with `rounded-t-[3rem]`
- 4-column grid: Brand + description + SOC2/HIPAA badges | Product links | Resources links | Contact info
- Bottom bar with copyright + social links (LinkedIn, Twitter, Status Page)

#### Step 8 — `FooterSimple` component (Interior pages footer)
- `bg-surface-container-low`
- 2-column: Brand name + copyright | Legal links (Privacy, Terms, Careers, Press Kit)

#### Step 9 — Shared UI primitives
- `Button` component with variants: `primary`, `secondary`, `outline`, `ghost`, `accent` (lunar)
- `SignatureLabel` component (uppercase tracked label)
- `SectionWrapper` for consistent max-width + padding
- `ScrollReveal` client component wrapping Intersection Observer logic

---

### Phase 3: Page-by-Page Build

#### Step 10 — Homepage (`/`) — `app/page.tsx`
Uses: `NavbarFloating` + `FooterFull`

**Sections to build (top to bottom):**

1. **Hero Section** — centered layout
   - Signature label "Seamless Workflow"
   - H1 "Medicare-ICHRA" + gradient text "Specialist Certification"
   - Subtitle paragraph
   - Two CTA buttons (Get Certified Now + View Curriculum)
   - Avatar stack with "2,400+ specialists" social proof
   - Product mockup image with glass overlay card (progress bar + "ICHRA Compliance Hub")
   - `reveal-animation` on mockup container

2. **Bento Grid Features** — `bg-surface-container-low`
   - Section header: "Comprehensive Ecosystem" / "The Modern Standard for Healthcare SaaS"
   - 4-column grid with mixed-size cards:
     - Intelligent Licensing (2-col span, with image)
     - Simplified Contracting (1-col)
     - Carrier Compliance (1-col, dark `bg-primary-container`)
     - CE Training Hub (4-col span, side-by-side text + image)
   - All cards use `scroll-reveal`

3. **Enterprise Intelligence Section**
   - 2-column grid: text left, abstract UI mockup right
   - Three feature rows: Centralized Data Fabric, Predictive Compliance, SOC2 Type II
   - Right side: nested card wireframe mockup

4. **Final CTA Section**
   - Dark gradient background (`from-primary to-primary-container`)
   - Carbon fiber texture overlay
   - "Join the new era" headline
   - Two CTA buttons (Start Certification + Book Demo)

#### Step 11 — About page (`/about`) — `app/about/page.tsx`
Uses: `NavbarSticky` + `FooterSimple`

**Sections to build:**

1. **Hero Section** — editorial 12-col grid
   - Left 7-col: signature label + massive H1 "About Saidi Academy - Achieve Your Goals" + subtitle + two buttons
   - Right 5-col: square image with blend mode + decorative blurred circles

2. **What We Do** — `bg-surface-container-low` rounded section
   - Left: label + heading "What We Do"
   - Right: large text block with italic secondary accent

3. **Our Mission** — centered
   - Icon circle + label + heading
   - Large blockquote-style mission statement with decorative quote mark

4. **Why Saidi — 3-card grid**
   - Clinical Excellence, Regulatory Confidence, Career Growth
   - Each: icon circle + heading + description
   - Hover effect: elevated shadow + icon background color change

5. **Stats Banner** — `bg-primary-container` with gradient overlay
   - 4-col grid: 15k+ / 98% / 50+ / 24/7
   - Teal accent numbers + uppercase labels

#### Step 12 — FAQ page (`/faq`) — `app/faq/page.tsx`
Uses: `NavbarSticky` + `FooterSimple`

**Sections to build:**

1. **Hero** — centered
   - Signature label + H1 "Saidi FAQ" + subtitle
   - Search input (rounded-full with search icon)

2. **Content Grid** — 12-col with sidebar
   - **Sidebar (3-col):**
     - Category filter buttons (Saidi Academy, Certifications, CE Credits, Platform Support)
     - Accent card: "Need direct help?" with Contact Support button (bloom pink)
   - **Main (9-col):** FAQ accordion items
     - 5 FAQ items with expand/collapse (client-side state)
     - Q: What is Saidi Academy? / What type of courses? / How do I get certified? / State-approved? / CE credits?
     - Expanded state: ring border + content visible
     - Collapsed state: hidden content

3. **CTA Banner** — `bg-secondary` (blue) with image
   - "Join the next generation of Medicare professionals"
   - Doctor image on right (hidden mobile)
   - "Explore Academy Courses" white button

#### Step 13 — CE Courses page (`/courses`) — `app/courses/page.tsx`
Uses: `NavbarSticky` + `FooterSimple`

**Sections to build:**

1. **Hero** — left-aligned with gradient blob
   - Badge pill "Professional Accreditation"
   - H1 "Master Your Certification"
   - Subtitle paragraph
   - Decorative gradient blur in background

2. **Search & Filter Bar** — `bg-surface-container-low` rounded card
   - Search input with icon
   - Filter buttons: All Courses (active/filled), Certification Tiers, On-Demand Modules

3. **Course Tiers** — 3-column pricing grid
   - **Tier 1 — ICHRA Fundamentals ($499):** white card, menu_book icon, 3 features, "Add to Cart"
   - **Tier 2 — Specialist Certification ($899):** dark `bg-primary-container`, elevated + ring, "Most Popular" badge (teal), 4 features, white "Add to Cart" button, slight y-offset upward
   - **Tier 3 — Enterprise Academy (Custom Quote):** white card, hub icon, 3 features, outline "Contact Sales" button

4. **CTA Section** — full-width image background with overlay
   - "Elevate Your Practice Performance"
   - Teal "View All Modules" button

---

### Phase 4: Interactivity & Polish

#### Step 14 — Client-side interactions
- **FAQ Accordion:** React state for open/closed items; toggle on click; animate height transition
- **Scroll Reveal:** Intersection Observer in a `useEffect` hook; add `.active` class when elements enter viewport
- **Hero Reveal Animation:** CSS `@keyframes fadeInUpScale` on the product mockup

#### Step 15 — Navigation routing
- Wire all nav links to correct routes using `next/link`:
  - About Us → `/about`
  - Saidi FAQ → `/faq`
  - CE Courses → `/courses`
  - Home → `/`
  - Contact Us → `/contact` (placeholder or scroll-to-footer)
  - Sign In → external link or `/signin` placeholder
- Active link styling based on `usePathname()`

#### Step 16 — SEO & Metadata
- Add `metadata` exports in each page's `page.tsx`:
  - Title: "Saidi Health | Medicare-ICHRA Specialist Certification"
  - Description per page
  - Open Graph tags
- Add favicon

---

### Phase 5: Production Readiness

#### Step 17 — Image optimization
- Use `next/image` with proper `width`, `height`, `alt` attributes
- Set `priority` on hero images for LCP
- Use `placeholder="blur"` where possible

#### Step 18 — Responsive QA
- Verify all pages at: 375px (mobile), 768px (tablet), 1280px (desktop), 1536px (2xl)
- The Stitch designs are desktop-first; ensure the existing responsive classes (`md:`, `lg:`, `sm:`) translate correctly

#### Step 19 — Performance & accessibility
- Ensure all images have `alt` text (pull from Stitch `data-alt` attributes)
- Keyboard navigation for FAQ accordion
- Proper heading hierarchy (h1 → h2 → h3)
- Add `aria-expanded` to FAQ items

#### Step 20 — Deploy
- Initialize git repo
- Push to GitHub (gabrielsaidi org)
- Deploy to Vercel
- Connect custom domain if ready

---

## File Structure (Final)

```
saidihealth-site/
├── public/
│   └── images/          # All downloaded Stitch images
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (fonts, global providers)
│   │   ├── page.tsx             # Homepage (/)
│   │   ├── about/
│   │   │   └── page.tsx         # About page (/about)
│   │   ├── faq/
│   │   │   └── page.tsx         # FAQ page (/faq)
│   │   ├── courses/
│   │   │   └── page.tsx         # CE Courses page (/courses)
│   │   └── globals.css          # Global styles + animations
│   └── components/
│       ├── NavbarFloating.tsx    # Homepage floating pill nav
│       ├── NavbarSticky.tsx      # Interior pages sticky nav
│       ├── FooterFull.tsx        # Homepage dark footer
│       ├── FooterSimple.tsx      # Interior pages light footer
│       ├── ScrollReveal.tsx      # Client component for scroll animations
│       ├── FaqAccordion.tsx      # Client component for FAQ expand/collapse
│       ├── SignatureLabel.tsx    # Reusable uppercase label
│       └── Button.tsx           # Reusable button with variants
├── tailwind.config.ts           # Full design token config
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Execution Order Summary

| Step | What | Est. Complexity |
|------|------|-----------------|
| 1 | Init Next.js project | Low |
| 2 | Tailwind design tokens | Low |
| 3 | Global styles & fonts | Low |
| 4 | Download & organize images | Low |
| 5 | NavbarFloating component | Medium |
| 6 | NavbarSticky component | Medium |
| 7 | FooterFull component | Medium |
| 8 | FooterSimple component | Low |
| 9 | Shared UI primitives | Low |
| 10 | Homepage page build | High |
| 11 | About page build | High |
| 12 | FAQ page build (+ accordion) | High |
| 13 | CE Courses page build | High |
| 14 | Client-side interactions | Medium |
| 15 | Navigation routing | Low |
| 16 | SEO & metadata | Low |
| 17 | Image optimization | Medium |
| 18 | Responsive QA | Medium |
| 19 | Accessibility pass | Medium |
| 20 | Deploy | Low |
