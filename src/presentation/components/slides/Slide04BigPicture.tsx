"use client";

import { motion } from "framer-motion";
import {
  BIG_PICTURE_AFTER,
  BIG_PICTURE_BEFORE,
} from "../../data/slides";
import {
  SlideHeader,
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
 * Slide 04 — The Big Picture
 * Visual contrast: chaotic "before" chips on the right (RTL start) →
 * emerald transformation arrow → clean ordered "after" pillars on the left.
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
      <div className="relative z-10 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="04"
            eyebrow="الصورة الكبرى"
            eyebrowEn="The Big Picture"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium mt-2 max-w-3xl"
          >
            من إجراءات متفرقة إلى منظومة موحدة، مترابطة، قابلة للقياس.
          </motion.h2>
        </div>

        {/* Diagram: before → arrow → after */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.15fr] gap-6 lg:gap-8 items-stretch mt-2">
          {/* BEFORE — scattered systems (right side in RTL) */}
          <motion.div
            variants={blurIn}
            className="ts-card-raised p-6 lg:p-7 relative overflow-hidden"
          >
            {/* Dot-grid texture behind the chaos */}
            <div className="pointer-events-none absolute inset-0 ts-dot-bg opacity-60" />

            <div className="relative flex items-center justify-between mb-5">
              <span className="ts-eyebrow text-[var(--ts-text-muted)]">
                <span className="lat">Before</span>
                <span className="mx-2 text-[var(--ts-text-faint)]">·</span>
                واقع اليوم
              </span>
              <span className="ts-pill-neutral !py-1 !px-2.5">
                <span className="lat">{BIG_PICTURE_BEFORE.length}</span>
                <span>أنظمة</span>
              </span>
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
                    className="px-3 py-2 rounded-md border border-[var(--ts-border-strong)] bg-[var(--ts-surface)] text-[var(--ts-text-muted)] text-sm select-none"
                  >
                    {label}
                  </motion.span>
                );
              })}
            </div>

            <div className="relative mt-5 pt-4 border-t border-[var(--ts-border)] flex items-start gap-2.5">
              <span
                aria-hidden
                className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--ts-warm)] shrink-0"
              />
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
            <span className="ts-eyebrow text-[var(--ts-accent)] hidden lg:flex">
              TRANSFORM
            </span>
            {/* Animated arrow (desktop) */}
            <svg
              width="140"
              height="48"
              viewBox="0 0 140 48"
              fill="none"
              className="hidden lg:block"
              aria-hidden
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
                aria-hidden
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
            <span className="ts-eyebrow text-[var(--ts-text-faint)] hidden lg:flex">
              توحيد · ربط · قياس
            </span>
          </motion.div>

          {/* AFTER — unified platform (left side in RTL) */}
          <motion.div
            variants={blurIn}
            className="ts-card-inverse p-6 lg:p-7 relative overflow-hidden"
          >
            {/* Subtle dot pattern on dark surface */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative flex items-center justify-between mb-5">
              <span className="ts-eyebrow text-white/85">
                <span className="lat">After</span>
                <span className="mx-2 text-white/50">·</span>
                منصة موحدة
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[0.6875rem] tracking-[0.18em] uppercase font-semibold">
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

            {/* 3 clean pillars */}
            <div className="relative grid grid-cols-3 gap-3">
              {BIG_PICTURE_AFTER.map((p, i) => (
                <motion.div
                  key={p.label}
                  custom={i + 2}
                  variants={scaleIn}
                  className="relative flex flex-col items-center text-center p-4 rounded-xl bg-white/[0.07] border border-white/15 backdrop-blur-sm"
                >
                  <span
                    aria-hidden
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
              <span
                aria-hidden
                className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0"
              />
              <p className="text-xs text-white/80 leading-relaxed">
                منظومة واحدة تربط الإقامة والمطعم والمخزون والمالية
                والموارد البشرية وتجربة النزيل.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
