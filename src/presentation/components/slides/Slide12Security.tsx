"use client";

import { motion } from "framer-motion";
import { SECURITY_PILLARS, PRESENTATION_META } from "../../data/slides";
import {
  CardIndex,
  IconGlyph,
  SectionHeading,
  SlideBrandChip,
  StatusPill,
  Watermark,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

/**
 * Slide 12 — Security & Governance (ENHANCED MODERN LIGHT)
 *
 * Ambient ts-blob-emerald top-right + ts-aurora-bg background.
 *
 * Header: SectionHeading with a "Secured by Design · حماية مدمجة في التصميم"
 * badge using ts-glass-emerald chip with ts-icon-chip-gradient (ShieldCheck)
 *
 * 6-pillar grid (md:grid-cols-2 lg:grid-cols-3); each card is
 * ts-bento ts-bento-accent with:
 *  - ts-icon-chip-gradient (filled emerald for authority feel)
 *  - corner CardIndex ("01"-"06")
 *  - Arabic ts-h3 title
 *  - English label in ts-accent-bright-text emerald-bright
 *  - ts-divider-dot divider
 *  - description
 *  - Watermark of pillar number faint in background
 *
 * Bottom callout = ts-card-deep (deep emerald gradient) block with
 * ts-corner-ornament + ts-icon-chip-gradient (ShieldCheck) + ts-eyebrow-dot
 * "مبدأ أساسي" + the no-AI-only-decisions principle.
 */

export default function Slide12Security() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Security and Governance"
    >
      {/* Ambient: aurora + emerald blob top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-70"
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-emerald ts-float-slow"
        style={{
          top: -150,
          right: -120,
          width: 480,
          height: 480,
          opacity: 0.55,
        }}
      />

      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        {/* Section heading with Secured-by-Design security motif badge */}
        <SectionHeading
          eyebrow="الأمن والحوكمة"
          eyebrowEn="Security & Governance"
          title={
            <>
              أقل صلاحية ممكنة، وموافقة صريحة لكل{" "}
              <span className="ts-gradient-text-emerald">قرار حساس</span>.
            </>
          }
          subtitle="ست ركائز حوكمة تضبط وصول البيانات والصلاحيات والنسخ والمراقبة."
          pill={
            <span className="ts-glass-emerald inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full">
              <span
                className="ts-icon-chip-gradient !w-7 !h-7 !rounded-full"
                aria-hidden="true"
              >
                <IconGlyph name="ShieldCheck" size={14} />
              </span>
              <span
                className="lat text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-[var(--ts-accent-deep-text)]"
                dir="ltr"
              >
                Secured by Design
              </span>
              <span className="text-[var(--ts-text-muted)] text-xs">·</span>
              <span className="text-[0.6875rem] text-[var(--ts-text-secondary)]">
                حماية مدمجة في التصميم
              </span>
            </span>
          }
        />

        {/* 6-pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {SECURITY_PILLARS.map((item, i) => {
            const cardIndex = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={item.en}
                custom={i}
                variants={blurIn}
                className="ts-bento ts-bento-accent p-5 lg:p-6 group relative overflow-hidden flex flex-col gap-3"
              >
                {/* Faint pillar-number watermark */}
                <Watermark
                  text={cardIndex}
                  className="-bottom-4 -left-2 text-[6.5rem] opacity-[0.05]"
                />

                {/* Top row: gradient icon + corner CardIndex */}
                <div className="relative flex items-start justify-between">
                  <span
                    className="ts-icon-chip-gradient"
                    aria-hidden="true"
                  >
                    <IconGlyph name={item.icon} size={22} />
                  </span>
                  <CardIndex index={cardIndex} />
                </div>

                {/* Title + en label */}
                <div className="relative">
                  <h3 className="ts-h3 text-[var(--ts-text-primary)]">
                    {item.title}
                  </h3>
                  <div
                    className="lat text-xs text-[var(--ts-accent-bright-text)] tracking-wider mt-1"
                    dir="ltr"
                  >
                    {item.en}
                  </div>
                </div>

                {/* Dot divider */}
                <div className="ts-divider-dot relative" />

                {/* Description */}
                <p className="relative text-sm text-[var(--ts-text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom callout — deep emerald block with corner ornaments */}
        <motion.div
          variants={fadeUp}
          className="ts-card-deep ts-corner-ornament px-5 lg:px-6 py-4 lg:py-5 flex items-center gap-4 lg:gap-5 relative overflow-hidden"
        >
          {/* Inner subtle emerald highlight (provided by ::before) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/3"
            style={{
              background:
                "linear-gradient(270deg, rgba(255,255,255,0.10), transparent 70%)",
            }}
          />
          <span
            className="ts-icon-chip-gradient shrink-0 relative"
            aria-hidden="true"
            style={{ width: 44, height: 44, borderRadius: 12 }}
          >
            <IconGlyph name="ShieldCheck" size={20} />
          </span>
          <div className="relative flex-1 min-w-0 flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="ts-eyebrow-dot lat"
                dir="ltr"
                style={{ color: "#A7F3D0" }}
              >
                مبدأ أساسي · Core Principle
              </span>
              <StatusPill variant="solid" className="!bg-white/15 !text-white">
                <span className="lat">Human Approval</span>
              </StatusPill>
            </div>
            <p className="ts-body text-white/90 leading-relaxed">
              لا يتم صرف الأموال أو تحويل الرواتب أو مشاركة البيانات الحساسة
              بناءً على قرار AI وحده — كلها تخضع لمسار الاعتماد البشري.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
