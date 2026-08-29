"use client";

import { motion } from "framer-motion";
import {
  ConnectorArrow,
  IconBadge,
  IconGlyph,
  SectionHeading,
  StatusPill,
  blurIn,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

const PILLARS = [
  {
    icon: "Building2",
    label: "HOTEL",
    sub: "إدارة الفندق",
    items: ["PMS / Rooms", "Reservations", "Front Desk", "Housekeeping", "Maintenance"],
  },
  {
    icon: "Boxes",
    label: "BUSINESS",
    sub: "إدارة الأعمال",
    items: ["Finance", "Procurement", "Inventory", "HR & Payroll", "Reporting"],
  },
  {
    icon: "UserCircle",
    label: "GUEST",
    sub: "تجربة النزيل",
    items: ["Booking", "Payments", "Services", "Feedback", "Loyalty"],
  },
] as const;

/**
 * Slide 05 — Hotel Ecosystem (ENHANCED MODERN LIGHT)
 * Top-aligned tall slide with ts-grid-bg blueprint backdrop + ts-aurora-bg overlay
 * Center hub: ts-card-deep (deep emerald gradient) with ts-corner-ornament +
 * ts-rings concentric dashed rings around it + ts-pulse-ring on first node +
 * ts-noise overlay
 * 3 pillar branches: ts-card-mesh with ts-icon-chip-gradient + accent hairline +
 * sub-item chips
 * External integrations pill: ts-glass with ts-icon-chip (Plug)
 * AI pill (top): ts-pill-solid with ts-icon-chip-glow (BrainCircuit)
 * SVG connectors: drawn with drawLine, with ts-arrow-connector chips at endpoints
 */
export default function Slide05Ecosystem() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage stage-top slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Hotel Ecosystem"
    >
      {/* Layer 1: blueprint line-grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-grid-bg opacity-70"
      />
      {/* Layer 2: aurora overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-70"
      />
      {/* Layer 3: central emerald blob */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="ts-blob ts-blob-emerald h-[42vh] w-[42vh] top-[20%] left-1/2 -translate-x-1/2 opacity-35" />
      </div>

      <div className="relative z-10 flex flex-col gap-5 w-full max-w-7xl mx-auto">
        {/* Section heading */}
        <SectionHeading
          eyebrow="منظومة الفندق"
          eyebrowEn="Hotel Ecosystem"
          title={
            <>
              ثلاثة محاور تشغيلية تحت{" "}
              <span className="ts-gradient-text-emerald">طبقة ذكاء واحدة</span>.
            </>
          }
          pill={
            <StatusPill variant="dot">
              <span className="lat">3 + 1</span>
              <span>طبقات</span>
            </StatusPill>
          }
        />

        {/* Diagram body */}
        <div className="relative flex flex-col items-center gap-3 mt-1">
          {/* Layer 1 — AI + AUTOMATION pill with glow chip */}
          <motion.div
            variants={scaleIn}
            className="relative flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--ts-border-accent)] bg-gradient-to-r from-transparent via-[var(--ts-accent-tint)] to-transparent shadow-[var(--ts-shadow-accent-soft)]"
          >
            <span className="ts-icon-chip-glow !w-7 !h-7 !rounded-full">
              <IconGlyph name="BrainCircuit" size={14} />
            </span>
            <span className="ts-eyebrow text-[var(--ts-accent)] lat">AI</span>
            <span className="text-[var(--ts-text-faint)] text-xs">+</span>
            <span className="ts-eyebrow text-[var(--ts-accent)] lat">
              AUTOMATION
            </span>
            <span className="text-[var(--ts-text-muted)] text-xs hidden md:inline">
              طبقة ذكاء فوق العمليات والصلاحيات
            </span>
          </motion.div>

          {/* Connector: AI → Hub */}
          <svg width="2" height="20" viewBox="0 0 2 20" aria-hidden="true">
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="20"
              stroke="var(--ts-accent)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              variants={drawLine}
              custom={1}
            />
          </svg>

          {/* Center hub — TAJ SABA deep card with rings + pulse */}
          <motion.div
            variants={blurIn}
            className="relative ts-card-deep ts-corner-ornament px-8 py-4 rounded-[var(--radius-xl)] flex flex-col items-center text-center"
          >
            {/* Concentric dashed rings around the hub */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 ts-rings rounded-[var(--radius-xl)]"
            />
            {/* Pulse ring — animated emphasis on hub */}
            <span
              aria-hidden="true"
              className="ts-pulse-ring"
              style={{ borderRadius: "var(--radius-xl)" }}
            />
            <div
              aria-hidden="true"
              className="absolute -inset-px rounded-[var(--radius-xl)] pointer-events-none opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,255,255,0.25), transparent 60%)",
              }}
            />
            <div className="relative lat text-2xl lg:text-[1.75rem] font-semibold tracking-tight text-white">
              TAJ SABA
            </div>
            <div className="relative lat text-[0.6875rem] tracking-[0.32em] text-white/80 mt-1">
              SMART HOTEL PLATFORM
            </div>
            <div className="relative text-xs text-white/70 mt-1">
              طبقة تشغيل رقمية موحدة
            </div>
          </motion.div>

          {/* Connector: Hub → horizontal bus → 3 pillars */}
          <svg
            width="100%"
            height="28"
            viewBox="0 0 100 28"
            preserveAspectRatio="none"
            className="max-w-5xl"
            aria-hidden="true"
          >
            <motion.line
              x1="50"
              y1="0"
              x2="50"
              y2="8"
              stroke="var(--ts-accent)"
              strokeWidth="0.6"
              variants={drawLine}
              custom={1}
            />
            <motion.line
              x1="16.66"
              y1="8"
              x2="83.33"
              y2="8"
              stroke="var(--ts-accent)"
              strokeWidth="0.6"
              variants={drawLine}
              custom={2}
            />
            <motion.line
              x1="16.66"
              y1="8"
              x2="16.66"
              y2="28"
              stroke="var(--ts-accent)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
              variants={drawLine}
              custom={3}
            />
            <motion.line
              x1="50"
              y1="8"
              x2="50"
              y2="28"
              stroke="var(--ts-accent)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
              variants={drawLine}
              custom={3}
            />
            <motion.line
              x1="83.33"
              y1="8"
              x2="83.33"
              y2="28"
              stroke="var(--ts-accent)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
              variants={drawLine}
              custom={3}
            />
          </svg>

          {/* Three pillar branches — mesh cards with gradient icon chips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 w-full max-w-5xl">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                custom={i + 1}
                variants={scaleIn}
                className="ts-card-mesh p-5 lg:p-6 relative"
              >
                {/* Pillar header */}
                <div className="flex items-center gap-3 mb-4">
                  <IconBadge variant="gradient" size="md">
                    <IconGlyph name={p.icon} size={18} />
                  </IconBadge>
                  <div className="flex flex-col">
                    <span className="lat text-base font-bold tracking-[0.18em] text-[var(--ts-accent-deep)]">
                      {p.label}
                    </span>
                    <span className="text-sm text-[var(--ts-text-secondary)]">
                      {p.sub}
                    </span>
                  </div>
                  <span className="ml-auto ts-card-number lat text-[var(--ts-text-faint)] text-xs">
                    0{i + 1}
                  </span>
                </div>

                {/* Accent hairline divider */}
                <div className="h-px w-full ts-divider-accent mb-4" />

                {/* Sub-item chips */}
                <div className="flex flex-wrap gap-2">
                  {p.items.map((it) => (
                    <span
                      key={it}
                      className="lat inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--ts-border)] bg-[var(--ts-surface)] text-[var(--ts-text-secondary)] text-xs ts-hover-lift"
                      dir="ltr"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--ts-accent)]" />
                      {it}
                    </span>
                  ))}
                </div>

                {/* ts-arrow-connector chip at branch endpoint */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 ts-arrow-connector hidden md:flex">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                </span>
              </motion.div>
            ))}
          </div>

          {/* Connector: Pillars → bottom bus → External */}
          <svg
            width="100%"
            height="28"
            viewBox="0 0 100 28"
            preserveAspectRatio="none"
            className="max-w-5xl"
            aria-hidden="true"
          >
            <motion.line
              x1="16.66"
              y1="0"
              x2="16.66"
              y2="20"
              stroke="var(--ts-border-strong)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
              variants={drawLine}
              custom={1}
            />
            <motion.line
              x1="50"
              y1="0"
              x2="50"
              y2="20"
              stroke="var(--ts-border-strong)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
              variants={drawLine}
              custom={1}
            />
            <motion.line
              x1="83.33"
              y1="0"
              x2="83.33"
              y2="20"
              stroke="var(--ts-border-strong)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
              variants={drawLine}
              custom={1}
            />
            <motion.line
              x1="16.66"
              y1="20"
              x2="83.33"
              y2="20"
              stroke="var(--ts-border-strong)"
              strokeWidth="0.6"
              variants={drawLine}
              custom={2}
            />
            <motion.line
              x1="50"
              y1="20"
              x2="50"
              y2="28"
              stroke="var(--ts-border-strong)"
              strokeWidth="0.6"
              variants={drawLine}
              custom={3}
            />
          </svg>

          {/* Layer 4 — EXTERNAL INTEGRATIONS glass pill */}
          <motion.div
            variants={scaleIn}
            custom={2}
            className="ts-glass relative flex items-center gap-3 px-5 py-2.5 rounded-full"
          >
            <span className="ts-icon-chip !w-7 !h-7 !rounded-full">
              <IconGlyph name="Plug" size={14} />
            </span>
            <span className="ts-eyebrow text-[var(--ts-text-secondary)] lat">
              EXTERNAL INTEGRATIONS
            </span>
            <span className="text-[var(--ts-text-faint)] text-xs hidden md:inline">
              بنوك · بصمة · أقفال · جهات رسمية · فنادق أخرى
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
