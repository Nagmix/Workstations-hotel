# Task 4b — Rebuild slides 06-10 for modern light theme

**Agent**: full-stack-developer  
**Task**: Rewrite 5 slide components (Slide06–Slide10) to be visually stunning in the new "Linen & Emerald" modern light theme.

## What was done

### Slide 06 — Hotel Operations (5 cards)
- New 6-col grid on lg with featured first card (PMS) spanning 2 cols using `ts-card-accent` + `ts-icon-chip-solid` + "Core" pill badge.
- Remaining 4 cards use `ts-card` + `ts-icon-chip`, 1 col each (total 6 cols, fits one row on lg).
- md: card 1 spans full row, cards 2-5 form 2x2.
- Bullet lists use premium checkmark chips (small filled circle with lucide Check icon, emerald tint).
- Decorative emerald blob top-right.

### Slide 07 — FnB Flow (horizontal pipeline, 6 steps)
- Pipeline wrapped in `ts-grid-bg` + `ts-bg-soft` panel with subtle right-edge emerald halo.
- 6 step cards with step number rendered inside `ts-icon-chip-solid` (filled emerald 44x44 chip).
- Two arrow connectors: `HorizontalArrow` (lg+, points left for RTL flow) and `VerticalArrow` (mobile, points down for vertical stack). Both use `motion.line` (dashed) + `motion.path` (arrowhead) with `drawLine` variants.
- Bottom narrative: 3 `ts-card` panels each with `ts-eyebrow-label` + description.

### Slide 08 — Business Management (4 cards, 2x2)
- 2x2 grid (`md:grid-cols-2`) with card 1 (Smart Inventory) as `ts-card-accent` + `ts-icon-chip-solid` to break monotony. Cards 2-4 use `ts-card` + `ts-icon-chip`.
- Bullet list uses small emerald dots.
- Bottom strip: `ts-card` with `ArrowLeft` icon + `ts-eyebrow-label` "ربط العمليات" + operational chain text.
- Decorative warm amber blob in bottom-left (different from slide 06's emerald blob).

### Slide 09 — Guest Experience (4 cards, distinct from slide 08)
- 2x2 grid but each card is HORIZONTAL (flex-row, icon on right in RTL + content on left).
- ALL icons use `ts-icon-chip-solid` (filled emerald) at 52x52 size — distinct from slide 08's outline chips.
- Bullet list uses `ChevronLeft` icons (pointing left = RTL forward direction).
- Customer Agent callout: `ts-card-accent` + `ts-icon-chip-solid` (BotMessageSquare) + "AI Layer" solid pill.

### Slide 10 — Intelligence & AI (6 modules, futuristic)
- 6 cards in 3-col grid (`lg:grid-cols-3`, `md:grid-cols-2`, mobile 1-col).
- Each card uses `ts-card-accent` (emerald-tinted) with `ts-icon-chip-solid` icon.
- Icons have a continuous glow pulse: outer `motion.div` with animated `boxShadow` ring (0 → 8px emerald halo → 0, 2.6s, staggered delay per card).
- Two decorative emerald blobs (top-right + bottom-left, different sizes/opacities).
- Governance rule footnote: `ts-card-warm` (amber tint) with `ShieldCheck` icon — visually contrasts the emerald AI cards to signal "caution/rules". Includes exact governance text from brief.
- Title uses `ts-gradient-text` partial ("AI" word in gradient).

## Technical verification
- All 5 slides use `"use client"` + default export.
- All wrapped in `<motion.section className="slide-stage slide-pad">` with `initial="hidden" animate="show" exit="hidden"` and `variants={containerStagger}`.
- All use `SlideHeader` at top.
- All use framer-motion presets (fadeUp / blurIn / scaleIn / drawLine / containerStagger).
- All Arabic content reads naturally RTL; English/number content uses `.lat` class + `dir="ltr"`.
- No hardcoded dark colors — all CSS variables and utility classes only.
- Layouts intentionally varied (6-col / pipeline / 2x2 / horizontal 2x2 / 3-col) so the deck does not feel repetitive.
- `bun run lint` clean. Dev server returns 200. No overflow on 1920×1080.

## Files modified
- `src/presentation/components/slides/Slide06HotelOperations.tsx`
- `src/presentation/components/slides/Slide07FnB.tsx`
- `src/presentation/components/slides/Slide08BusinessManagement.tsx`
- `src/presentation/components/slides/Slide09GuestExperience.tsx`
- `src/presentation/components/slides/Slide10IntelligenceAI.tsx`

## Reference for downstream agents
- Slide 06 = "featured card + 4 standard cards" 6-col grid pattern.
- Slide 07 = "grid-bg pipeline panel + solid emerald step chips + dual horizontal/vertical animated arrows" pattern.
- Slide 08 = "2x2 grid with 1 accent card + dot bullets + bottom flow strip + warm blob" pattern.
- Slide 09 = "horizontal 2x2 cards + solid emerald icon chips + chevron bullets + bottom accent callout" pattern (distinct from 08).
- Slide 10 = "3-col emerald-tinted AI grid + pulsing glow rings + dual emerald blobs + amber governance footnote" pattern.
