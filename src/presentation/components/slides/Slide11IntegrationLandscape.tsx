"use client";

import { motion } from "framer-motion";
import { INTEGRATIONS, PRESENTATION_META } from "../../data/slides";
import {
  CardIndex,
  IconGlyph,
  SectionHeading,
  SlideBrandChip,
  StatusPill,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 11 — Integration Landscape (ENHANCED MODERN LIGHT)
 *
 * Top-aligned 2-col layout. Left = square hub-and-spoke diagram, Right = narrative.
 *
 * Hub diagram:
 *  - ts-dot-bg circular background + ts-rings (two concentric dashed guide rings)
 *  - 8 emerald SVG spokes animated with drawLine
 *  - Central hub: ts-card-deep (deep emerald gradient) with ts-corner-ornament +
 *    ts-pulse-ring + center text "TAJ SABA / PLATFORM / محور التكامل"
 *  - 8 external nodes (each ~104×87) using ts-bento ts-bento-accent with
 *    ts-icon-chip emerald-tinted icon + Arabic title + English label + CardIndex
 *
 * Mobile collapses to a 2/3-col ts-bento grid.
 *
 * Right column = ts-card-mesh principle card + 2×2 mini-card grid classifying
 * integrations into مالية / تشغيلية / اتصال / مؤسسية — use ts-pill-dot
 * success/warning/info/danger for status variants.
 *
 * Background: ts-aurora-bg + ts-noise
 * Header: SectionHeading
 */

const INTEGRATION_CLASSES = [
  {
    k: "مالية",
    v: "بوابات دفع وبنوك",
    variant: "success" as const,
    label: "Financial",
  },
  {
    k: "تشغيلية",
    v: "بصمة وأقفال وPOS",
    variant: "info" as const,
    label: "Operational",
  },
  {
    k: "اتصال",
    v: "بريد وإشعارات وSMS",
    variant: "warning" as const,
    label: "Communication",
  },
  {
    k: "مؤسسية",
    v: "فنادق وجهات رسمية",
    variant: "danger" as const,
    label: "Enterprise",
  },
];

export default function Slide11IntegrationLandscape() {
  const positions = INTEGRATIONS.map((node, i) => {
    const angle = (i / INTEGRATIONS.length) * Math.PI * 2 - Math.PI / 2;
    const radius = 38;
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius;
    return { ...node, x, y, i };
  });

  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage stage-top slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Integration Landscape"
    >
      {/* Ambient: aurora background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-70"
      />
      {/* Subtle mesh blob behind the diagram */}
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-mesh"
        style={{
          top: "20%",
          left: "10%",
          width: 420,
          height: 420,
          opacity: 0.35,
        }}
      />

      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 flex flex-col gap-5 w-full max-w-7xl mx-auto">
        {/* Section heading */}
        <SectionHeading
          eyebrow="منظومة التكاملات"
          eyebrowEn="Integration Landscape"
          title={
            <>
              منصة مفتوحة التكامل مع الأنظمة والأجهزة{" "}
              <span className="ts-gradient-text-emerald">المتوافقة</span>.
            </>
          }
          subtitle="كل تكامل خارجي يعتمد على توفر API / SDK، وتوافق الجهاز، وموافقة المزود ومالك البيانات."
          pill={
            <StatusPill variant="dot">
              <span className="lat">{INTEGRATIONS.length}</span>
              <span>تكاملات</span>
            </StatusPill>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
          {/* Hub-and-spoke diagram (desktop) */}
          <motion.div
            variants={scaleIn}
            className="relative aspect-square w-full max-w-[540px] mx-auto hidden lg:block"
          >
            {/* Dot-grid circular background */}
            <div
              aria-hidden="true"
              className="absolute inset-0 ts-dot-bg rounded-full opacity-60"
            />
            {/* Concentric dashed guide rings via ts-rings */}
            <div
              aria-hidden="true"
              className="absolute inset-[8%] rounded-full border border-dashed border-[var(--ts-border-faint)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[24%] rounded-full border border-dashed border-[var(--ts-border-faint)]"
            />

            {/* SVG spokes — emerald, animated with drawLine */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {positions.map((p) => (
                <motion.line
                  key={`spoke-${p.en}`}
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke="var(--ts-accent)"
                  strokeWidth="0.25"
                  strokeOpacity="0.55"
                  strokeDasharray="1.2 1.4"
                  variants={drawLine}
                  custom={p.i + 1}
                />
              ))}
            </svg>

            {/* Central hub — deep emerald card with corner ornament + pulse ring */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                variants={scaleIn}
                custom={2}
                className="relative ts-card-deep ts-corner-ornament px-5 py-3.5 text-center rounded-2xl min-w-[150px]"
              >
                <span
                  aria-hidden="true"
                  className="ts-pulse-ring"
                  style={{ borderRadius: 16 }}
                />
                <div className="relative lat text-sm font-semibold tracking-[0.18em] text-white">
                  TAJ SABA
                </div>
                <div className="relative lat text-[0.6rem] text-emerald-100 tracking-[0.24em] mt-0.5">
                  PLATFORM
                </div>
                <div className="relative text-[0.5625rem] text-emerald-200/80 mt-1.5">
                  محور التكامل
                </div>
              </motion.div>
            </div>

            {/* External nodes — each a small bento card */}
            {positions.map((p) => (
              <motion.div
                key={p.en}
                variants={scaleIn}
                custom={p.i + 3}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <div className="ts-bento ts-bento-accent px-2.5 py-2.5 flex flex-col items-center gap-1.5 w-[104px] text-center relative">
                  <CardIndex
                    index={String(p.i + 1).padStart(2, "0")}
                    className="!top-1 !right-1 !text-[0.5625rem]"
                  />
                  <span
                    className="ts-icon-chip !w-8 !h-8 !rounded-md"
                    aria-hidden="true"
                  >
                    <IconGlyph name={p.icon} size={16} />
                  </span>
                  <div className="text-[0.6875rem] font-medium text-[var(--ts-text-primary)] leading-tight">
                    {p.title}
                  </div>
                  <div
                    className="lat text-[0.5625rem] text-[var(--ts-text-muted)] tracking-wider whitespace-nowrap"
                    dir="ltr"
                  >
                    {p.en}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: grid fallback (2/3-col bento grid) */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
            {INTEGRATIONS.map((node, i) => (
              <motion.div
                key={node.en}
                variants={scaleIn}
                custom={i + 1}
                className="ts-bento ts-bento-accent p-4 flex flex-col items-center gap-2 text-center relative"
              >
                <CardIndex
                  index={String(i + 1).padStart(2, "0")}
                  className="!top-1 !right-1 !text-[0.5625rem]"
                />
                <span className="ts-icon-chip" aria-hidden="true">
                  <IconGlyph name={node.icon} size={18} />
                </span>
                <div className="text-xs font-medium text-[var(--ts-text-primary)] leading-tight">
                  {node.title}
                </div>
                <div
                  className="lat text-[0.5625rem] text-[var(--ts-text-muted)] tracking-wider"
                  dir="ltr"
                >
                  {node.en}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column — narrative principle card + 2×2 classification */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex flex-col gap-4"
          >
            {/* Principle mesh card */}
            <motion.div
              variants={fadeUp}
              className="ts-card-mesh ts-corner-ornament p-5 lg:p-6 relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 rounded-r-[var(--radius-lg)]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(15,118,110,0.07), transparent 70%)",
                }}
              />
              <div className="relative flex items-center gap-2 mb-2">
                <span className="ts-eyebrow-dot">قابلية التكامل</span>
                <span className="lat text-[0.6875rem] tracking-[0.22em] uppercase text-[var(--ts-text-muted)]">
                  · Integration Principle
                </span>
              </div>
              <p className="relative ts-body text-[var(--ts-text-primary)] leading-relaxed">
                كل تكامل خارجي يعتمد على توفر{" "}
                <span className="lat text-[var(--ts-accent-bright-text)]">
                  API / SDK
                </span>{" "}
                أو بروتوكول مناسب، وتوافق الجهاز، وموافقة المزود والجهة
                المالكة للبيانات.
              </p>
            </motion.div>

            {/* 2×2 classification grid — colored dot pills for status variants */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="grid grid-cols-2 gap-3"
            >
              {INTEGRATION_CLASSES.map((c) => (
                <div key={c.k} className="ts-card p-3.5 relative">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <StatusPill variant="dot" className={c.variant}>
                      {c.k}
                    </StatusPill>
                    <span
                      className="lat text-[0.5625rem] tracking-[0.18em] uppercase text-[var(--ts-text-muted)]"
                      dir="ltr"
                    >
                      {c.label}
                    </span>
                  </div>
                  <div className="text-xs text-[var(--ts-text-secondary)] leading-relaxed">
                    {c.v}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stat strip — short numbers */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="ts-stat-strip"
            >
              {[
                { v: "8", l: "تكاملات", e: "Integrations" },
                { v: "4", l: "تصنيفات", e: "Categories" },
                { v: "API", l: "متطلب أساسي", e: "Required" },
                { v: "1", l: "محور مركزي", e: "Hub" },
              ].map((s) => (
                <div
                  key={s.e}
                  className="ts-card p-3.5 flex flex-col gap-1 items-start"
                >
                  <span className="ts-kpi-sm ts-gradient-text-emerald lat">
                    {s.v}
                  </span>
                  <span className="text-xs font-medium text-[var(--ts-text-primary)]">
                    {s.l}
                  </span>
                  <span
                    className="lat text-[0.5625rem] text-[var(--ts-text-muted)] tracking-wider"
                    dir="ltr"
                  >
                    · {s.e}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
