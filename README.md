# TAJ SABA — Smart Hotel Platform · Executive Discovery Web Presentation

> منصة تاج سبأ الفندقية الذكية — عرض تنفيذي لاجتماع الاكتشاف
>
> Digital Planetx × Taj Saba

A custom-built, executive-grade **Web Presentation** (not a slide template) for
the board-level Discovery meeting of the Taj Saba Smart Hotel Platform project.

Built with **Next.js 16 · TypeScript · Tailwind CSS 4 · Framer Motion ·
Lucide icons**. The deck is fully client-side and works as a single-page
presentation.

---

## 1. Source documents

This presentation was built strictly from two source documents. **No
content was invented** — pricing, durations, room counts, integrations,
and AI capabilities that are not yet confirmed use the explicit
placeholders `TO BE CONFIRMED` / `DISCOVERY REQUIRED`.

| Document | Path |
| --- | --- |
| Taj Saba Smart Hotel Proposal | `upload/taj-saba-smart-hotel-proposal.md` |
| Taj Saba Discovery Questionnaire | `upload/taj-saba-discovery-questionnaire.md` |

---

## 2. Running the presentation

```bash
bun run dev
```

The app runs on the project's standard port (3000). Open the
**Preview Panel** on the right side of the IDE, or use **"Open in New
Tab"** for a separate browser tab.

> Do **not** navigate to `http://localhost:3000` directly — that address is
> internal to the sandbox. Use the **Preview Panel** instead.

### Production build (optional)

```bash
bun run build && bun run start
```

---

## 3. Operating the deck

| Input | Action |
| --- | --- |
| `ArrowLeft` / `ArrowUp` / `Space` / `PageDown` | Next slide |
| `ArrowRight` / `ArrowDown` / `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Toggle fullscreen (Fullscreen API) |
| Touch swipe (left → right) | Previous |
| Touch swipe (right → left) | Next |
| Mouse wheel (vertical / horizontal) | Previous / Next (throttled) |
| On-screen chevrons (bottom-right) | Previous / Next / Fullscreen |

The deck is **RTL-aware**. Arrow direction matches the Arabic reading
direction: the deck reads right-to-left, so "ArrowLeft" moves forward.

The bottom-right on-screen controls support:
- `>` previous
- `<` next
- `⤢` toggle fullscreen

A subtle progress bar appears in the bottom-left alongside the slide
index (`01 / 17`, always rendered LTR for clarity).

---

## 4. Presentation structure (17 slides)

```
01 COVER                     Taj Saba Smart Hotel Platform
02 WHY ARE WE HERE           We're in DISCOVERY — understand before locking scope
03 DISCOVERY OBJECTIVES      Operations · Priorities · Systems · Pain · Integrations · Constraints · Vision
04 BIG PICTURE               Fragmented systems → unified platform
05 HOTEL ECOSYSTEM           3 pillars (Hotel / Business / Guest) + AI layer + Integrations
06 HOTEL OPERATIONS          PMS · Reservations · Front Desk · Housekeeping · Maintenance
07 FOOD & BEVERAGE           Order → POS → Kitchen → Recipe → Cost → Inventory
08 BUSINESS MANAGEMENT       Inventory · Procurement · Finance · HR
09 GUEST EXPERIENCE          Guest 360 · CRM · Loyalty · Guest App
10 INTELLIGENCE & AI        6 AI modules + governance rule
11 INTEGRATION LANDSCAPE     Hub-and-spoke of external systems
12 SECURITY & GOVERNANCE    Roles · Audit · Data · Approvals · Backup · Monitoring
13 HOW WE WILL BUILD IT      11-phase implementation timeline
14 TODAY'S DISCOVERY         9 categories we'll cover in the meeting
15 DISCOVERY OUTPUTS         8 deliverables (Requirements → Next Steps)
16 DISCOVERY → DELIVERY      Requirements → PRD → UX/UI → Architecture → DB/API → Plan
17 CLOSING                   Core statement + 8 board decision points
```

---

## 5. Design system

The presentation ships with a coherent **Design System** layered on
top of Tailwind 4. All tokens are defined as CSS variables in
`src/app/globals.css`.

### Color tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--ts-bg` | `#080B10` | Page background |
| `--ts-surface` | `#111820` | Cards / panels |
| `--ts-surface-elevated` | `#151D26` | Raised cards |
| `--ts-text-primary` | `#F4F1E8` | Body / headlines |
| `--ts-text-secondary` | `#A7ADB6` | Secondary text |
| `--ts-text-muted` | `#6B7682` | Muted captions |
| `--ts-accent` | `#D4B06D` | Sophisticated gold accent |
| `--ts-accent-bright` | `#E3C386` | Hover / highlight |
| `--ts-border` | `rgba(255,255,255,.07)` | Fine dividers |
| `--ts-border-accent` | `rgba(212,176,109,.32)` | Accent borders |

### Typography

- **Arabic**: `IBM Plex Sans Arabic` (via `next/font/google`)
- **English / numerals**: `Inter`
- Tokens: `ts-display`, `ts-h1`, `ts-h2`, `ts-h3`, `ts-body-lg`,
  `ts-body`, `ts-caption`, `ts-eyebrow`

### Motion

- All entrance animations are **subtle** (fade, slide-up, blur-in,
  scale-in, line-draw).
- Slide transitions are **cinematic crossfade + blur + horizontal
  drift** (`cubic-bezier(0.16, 1, 0.3, 1)`, 0.55s).
- Honors `prefers-reduced-motion` — animations collapse to ~0ms.

---

## 6. File structure

```
src/
├── app/
│   ├── globals.css          ← Design tokens + typography + slide utilities
│   ├── layout.tsx           ← IBM Plex Sans Arabic + Inter, RTL, dark theme
│   └── page.tsx             ← Single-page presentation mount point
└── presentation/
    ├── data/
    │   └── slides.ts        ← Content map (single source of truth)
    ├── hooks/
    │   ├── usePrefersReducedMotion.ts
    │   └── usePresentationControls.ts   ← Keyboard + handler wiring
    └── components/
        ├── Presentation.tsx ← Engine: state, transitions, touch, wheel, fullscreen
        ├── Navigation.tsx   ← Progress bar + on-screen controls
        ├── primitives.tsx   ← Motion presets + icon registry + Eyebrow / Pill
        └── slides/
            ├── Slide01Cover.tsx
            ├── Slide02WhyHere.tsx
            ├── Slide03DiscoveryObjectives.tsx
            ├── Slide04BigPicture.tsx
            ├── Slide05Ecosystem.tsx
            ├── Slide06HotelOperations.tsx
            ├── Slide07FnB.tsx
            ├── Slide08BusinessManagement.tsx
            ├── Slide09GuestExperience.tsx
            ├── Slide10IntelligenceAI.tsx
            ├── Slide11IntegrationLandscape.tsx
            ├── Slide12Security.tsx
            ├── Slide13HowWeBuild.tsx
            ├── Slide14TodayDiscovery.tsx
            ├── Slide15DiscoveryOutputs.tsx
            ├── Slide16DiscoveryToDelivery.tsx
            └── Slide17Closing.tsx
```

---

## 7. Content / data separation

All slide content lives in `src/presentation/data/slides.ts`. Each slide
component imports the data it needs and renders it through the shared
primitives (`Eyebrow`, `Pill`, `IconGlyph`, motion variants). To edit
copy or reorder modules, edit the data file — the layout adapts.

---

## 8. Accessibility

- Semantic `role="region"` with `aria-roledescription="presentation"`
  on the deck root, and `aria-roledescription="slide"` on each slide.
- Full keyboard navigation.
- Visible focus ring (gold) on all interactive elements.
- `prefers-reduced-motion` honored.
- All text is HTML (selectable, searchable, accessible). No images of
  text. No emojis used as primary icons.

---

## 9. Browser support

Verified at:
- 1920×1080 (desktop / presentation screen)
- 1600×900
- 1366×768
- 1280×720
- 768×1024 (iPad portrait)
- 375×812 (iPhone portrait)

No layout overflow, no broken assets, no console errors.

---

## 10. Source of truth

This deck was built as **Visual Storytelling** for the Discovery phase,
not as a list of questions. The Discovery Questionnaire itself is the
tool the team uses during the discussion — the presentation only
explains *why, what, how, scope, discovery, and next steps*.

**Tagline:** _نبني التقنية حول طريقة عمل تاج سبأ، لا نفرض على تاج سبأ طريقة عمل جاهزة._

**Digital Planetx × Taj Saba — Building the Smart Hotel of the Future.**
