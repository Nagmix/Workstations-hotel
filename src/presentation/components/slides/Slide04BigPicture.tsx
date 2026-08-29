"use client";

import { motion } from "framer-motion";
import {
  BIG_PICTURE_AFTER,
  BIG_PICTURE_BEFORE,
} from "../../data/slides";
import {
  ConnectorArrow,
  SectionHeading,
  StatBlock,
  StatusPill,
  blurIn,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

/* Visual chaos for "before" chips — slight rotation + vertical offset */
const CHAOS_OFFSETS = [
  { rot: -2.5, y: 4 },
  { rot: 1.5, y: -3 },
  { rot: -1.5, y: 2 },
  { rot: 2.5, y: -4 },
  { rot: -2, y: 3 },
  { rot: 1, y: -2 },
  { rot: -1, y: 4 },
  { rot: 2.5, y: -3 },
  { rot: -2, y: 2 },
];

/**
 * Slide 04 — The Big Picture (ENHANCED MODERN LIGHT)
 * 3-col layout: Before · Arrow · After
 *  - Before: ts-card-raised with ts-dot-bg texture, ts-pill-danger counter,
 *    scattered chips with rotations, ts-pill-dot danger callouts
 *  - Arrow: animated SVG with drawLine + ts-arrow-connector chip + ts-eyebrow-dot
 *  - After: ts-card-deep (deep emerald gradient) with ts-corner-ornament,
 *    ts-dot-bg overlay, 3 ts-glass pillar cards inside, ts-floating-badge
 *  - Bottom: ts-stat-strip showing 9 → 1 reduction
 */
export default function Slide04BigPicture() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad justify-center relative overflow-hidden"
      aria-roledescription="slide"
      aria-label="The Big Picture"
    >
      {/* Subtle aurora background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-60"
      />

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeading
          eyebrow="الصورة الكبرى"
          eyebrowEn="The Big Picture"
          title={
            <>
              من إجراءات متفرقة إلى{" "}
              <span className="ts-gradient-text-emerald">منظومة موحدة</span>،
              مترابطة، قابلة للقياس.
            </>
          }
        />

        {/* Diagram: before → arrow → after */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.15fr] gap-6 lg:gap-8 items-stretch mt-2">
          {/* BEFORE — chaotic scattered systems */}
          <motion.div
            variants={blurIn}
            className="ts-card-raised p-6 lg:p-7 relative overflow-hidden ts-noise"
          >
            {/* Dot-grid texture behind the chaos */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 ts-dot-bg opacity-60"
            />

            <div className="relative flex items-center justify-between mb-5">
              <span className="ts-eyebrow-dot text-[var(--ts-text-muted)]">
                <span className="lat">Before</span>
                <span className="mx-1 text-[var(--ts-text-faint)]">·</span>
                <span>واقع اليوم</span>
              </span>
              <StatusPill variant="danger">
                <span className="lat">{BIG_PICTURE_BEFORE.length}</span>
                <span>أنظمة</span>
              </StatusPill>
            </div>

            {/* Chaotic scattered chips */}
            <div className="relative flex flex-wrap items-center justify-center gap-2.5 py-4 min-h-[150px]">
              {BIG_PICTURE_BEFORE.map((label, i) => {
                const o = CHAOS_OFFSETS[i % CHAOS_OFFSETS.length];
                return (
                  <motion.span
                    key={label}
                    custom={i + 1}
                    variants={fadeUp}
                    style={{
                      transform: `rotate(${o.rot}deg) translateY(${o.y}px)`,
                    }}
                    className="px-3 py-2 rounded-md border border-[var(--ts-border-strong)] bg-[var(--ts-surface)] text-[var(--ts-text-muted)] text-sm select-none ts-hover-lift"
                  >
                    {label}
                  </motion.span>
                );
              })}
            </div>

            <div className="relative mt-5 pt-4 border-t border-[var(--ts-border)] flex items-start gap-2.5">
              <StatusPill variant="dot" className="danger">
                <span>Fragmented</span>
              </StatusPill>
              <p className="text-xs text-[var(--ts-text-secondary)] leading-relaxed">
                أنظمة منفصلة، إدخال يدوي مكرر، تقارير متأخرة، رؤية جزئية
                للأداء.
              </p>
            </div>
          </motion.div>

          {/* Arrow connector (centered, RTL: points leftward toward "after") */}
          <motion.div
            variants={scaleIn}
            className="flex flex-col items-center justify-center gap-3 px-2 py-4"
            dir="rtl"
          >
            <span className="ts-eyebrow-dot hidden lg:flex">
              <span className="lat">TRANSFORM</span>
            </span>
            {/* Animated arrow (desktop) */}
            <svg
              width="140"
              height="48"
              viewBox="0 0 140 48"
              fill="none"
              className="hidden lg:block"
              aria-hidden="true"
            >
              <motion.line
                x1="130"
                y1="24"
                x2="20"
                y2="24"
                stroke="url(#bg-arrow-emerald)"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                variants={drawLine}
                custom={1}
              />
              <motion.path
                d="M 32 14 L 18 24 L 32 34"
                stroke="var(--ts-accent)"
                strokeWidth="1.75"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={drawLine}
                custom={2}
              />
              <circle
                cx="130"
                cy="24"
                r="3.5"
                fill="var(--ts-accent)"
                opacity="0.85"
              />
              <defs>
                <linearGradient
                  id="bg-arrow-emerald"
                  x1="0"
                  y1="0"
                  x2="140"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--ts-accent)" stopOpacity="0" />
                  <stop
                    offset="0.5"
                    stopColor="var(--ts-accent)"
                    stopOpacity="0.65"
                  />
                  <stop offset="1" stopColor="var(--ts-accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            {/* Mobile arrow */}
            <div className="lg:hidden flex flex-col items-center gap-2">
              <svg
                width="48"
                height="140"
                viewBox="0 0 48 140"
                fill="none"
                aria-hidden="true"
              >
                <motion.line
                  x1="24"
                  y1="10"
                  x2="24"
                  y2="120"
                  stroke="var(--ts-accent)"
                  strokeWidth="1.5"
                  strokeDasharray="4 5"
                  variants={drawLine}
                  custom={1}
                />
                <motion.path
                  d="M 14 108 L 24 122 L 34 108"
                  stroke="var(--ts-accent)"
                  strokeWidth="1.75"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={drawLine}
                  custom={2}
                />
              </svg>
            </div>
            {/* ts-arrow-connector chip */}
            <ConnectorArrow className="hidden lg:flex" size={20} />
            <span className="ts-eyebrow text-[var(--ts-text-faint)] hidden lg:flex">
              توحيد · ربط · قياس
            </span>
          </motion.div>

          {/* AFTER — unified deep-emerald platform with glass pillars */}
          <motion.div
            variants={blurIn}
            className="ts-card-deep ts-corner-ornament p-6 lg:p-7 relative overflow-hidden"
          >
            {/* White dot pattern on dark surface */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Floating "Today" badge above the card top edge */}
            <span className="ts-floating-badge lat" dir="ltr">
              Today · اليوم
            </span>

            <div className="relative flex items-center justify-between mb-5 mt-2">
              <span className="ts-eyebrow-dot text-white">
                <span className="lat">After</span>
                <span className="mx-1 text-white/50">·</span>
                <span>منصة موحدة</span>
              </span>
              <span className="ts-glass inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[0.6875rem] tracking-[0.18em] uppercase font-semibold">
                <span className="lat">{BIG_PICTURE_AFTER.length}</span>
                <span>محاور</span>
              </span>
            </div>

            {/* Brand hub line */}
            <div className="relative flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-white/30" />
              <div className="text-center">
                <div className="lat text-white text-base tracking-[0.18em] font-semibold">
                  TAJ SABA
                </div>
                <div className="lat text-white/55 text-[0.625rem] tracking-[0.22em] mt-0.5">
                  SMART HOTEL PLATFORM
                </div>
              </div>
              <span className="h-px w-8 bg-white/30" />
            </div>

            {/* 3 clean glass pillar cards */}
            <div className="relative grid grid-cols-3 gap-3">
              {BIG_PICTURE_AFTER.map((p, i) => (
                <motion.div
                  key={p.label}
                  custom={i + 2}
                  variants={scaleIn}
                  className="ts-glass relative flex flex-col items-center text-center p-4 rounded-xl"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-2 right-2 text-[0.625rem] text-white/40 lat"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="lat text-base font-semibold text-white tracking-wider mb-1">
                    {p.label}
                  </div>
                  <div className="text-xs text-white/70">{p.sub}</div>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-5 pt-4 border-t border-white/15 flex items-start gap-2.5">
              <StatusPill variant="dot" className="success">
                <span>Unified</span>
              </StatusPill>
              <p className="text-xs text-white/80 leading-relaxed">
                منظومة واحدة تربط الإقامة والمطعم والمخزون والمالية
                والموارد البشرية وتجربة النزيل.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip: "9 → 1" reduction KPI strip */}
        <motion.div
          variants={fadeUp}
          className="ts-stat-strip !grid-cols-4 mt-2"
        >
          <StatBlock
            value="9"
            label="أنظمة منفصلة"
            labelEn="Before"
            trend="PRE"
            trendVariant="danger"
          />
          <StatBlock
            value="→"
            label="توحيد وربط"
            labelEn="Transform"
            trend="FLOW"
            trendVariant="warning"
          />
          <StatBlock
            value="1"
            label="منصة موحدة"
            labelEn="After"
            trend="POST"
            trendVariant="success"
          />
          <StatBlock
            value="3"
            label="محاور تشغيلية"
            labelEn="Pillars"
            trend="SCOPE"
            trendVariant="info"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
