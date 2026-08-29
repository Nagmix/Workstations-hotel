"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { GUEST_EXPERIENCE, PRESENTATION_META } from "../../data/slides";
import {
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
 * Slide 09 — Guest Experience (ENHANCED MODERN LIGHT)
 *
 * 2×2 grid but each card is HORIZONTAL (flex-row, icon on right in RTL +
 * content on left) — visually distinct from slide 08's vertical cards.
 *
 *  - All icons use ts-icon-chip-gradient (filled emerald gradient) at 52×52
 *    size — distinct from slide 08's outline chips.
 *  - Bullet list uses ts-icon-chip-info (small info-tinted) with ChevronLeft
 *    icons (pointing left = RTL forward direction) instead of dots.
 *  - Customer Agent callout at bottom: ts-card-deep (deep emerald gradient) +
 *    ts-icon-chip-gradient (BotMessageSquare) + ts-eyebrow-dot
 *    "Taj Saba Customer Agent" + ts-pill-solid "AI Layer" badge on the right +
 *    ts-corner-ornament
 *  - ts-blob-emerald mesh blob in top-left
 *  - Each card: Watermark "01"-"04" faint in background
 *  - Header: SectionHeading with ts-pill-dot "4 modules" counter
 */

export default function Slide09GuestExperience() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Guest Experience"
    >
      {/* Ambient: emerald blob top-left + aurora overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-65"
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-emerald ts-float-slow"
        style={{
          top: -120,
          left: -100,
          width: 380,
          height: 380,
          opacity: 0.5,
        }}
      />

      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-7">
        {/* Section heading */}
        <SectionHeading
          eyebrow="تجربة النزيل"
          eyebrowEn="Guest Experience"
          title={
            <>
              علاقة موحدة مع العميل،{" "}
              <span className="ts-gradient-text-emerald">
                قبل الإقامة وأثناءها وبعدها
              </span>
              .
            </>
          }
          subtitle="ملف موحد للنزيل، تواصل متعدد القنوات، ولاء مستهدف، وتطبيق ذو قيمة فعلية."
          pill={
            <StatusPill variant="dot">
              <span className="lat">{GUEST_EXPERIENCE.length}</span>
              <span>وحدات</span>
            </StatusPill>
          }
        />

        {/* 2×2 grid of HORIZONTAL cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {GUEST_EXPERIENCE.map((item, i) => {
            const cardIndex = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={item.en}
                custom={i}
                variants={blurIn}
                className="ts-bento ts-bento-accent p-5 lg:p-6 group flex flex-row gap-4 lg:gap-5 items-start relative overflow-hidden"
              >
                {/* Faint card-number watermark */}
                <Watermark
                  text={cardIndex}
                  className="-bottom-4 -right-2 text-[6.5rem] opacity-[0.05]"
                />

                {/* Icon chip on right (first in RTL flow) — gradient emerald 52×52 */}
                <span
                  className="ts-icon-chip-gradient shrink-0 relative"
                  style={{ width: 52, height: 52, borderRadius: 14 }}
                  aria-hidden="true"
                >
                  <IconGlyph name={item.icon} size={24} />
                </span>

                {/* Content fills remaining space */}
                <div className="relative flex-1 min-w-0 flex flex-col">
                  <div className="flex items-baseline justify-between gap-3 mb-3">
                    <h3 className="ts-h3 text-[var(--ts-text-primary)] font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <span
                      className="lat text-[11px] text-[var(--ts-text-muted)] tracking-wider shrink-0"
                      dir="ltr"
                    >
                      {item.en}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2 mt-1">
                    {item.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-sm text-[var(--ts-text-secondary)]"
                      >
                        <span
                          className="ts-icon-chip-info !w-5 !h-5 !rounded-md mt-0.5 shrink-0"
                          aria-hidden="true"
                        >
                          <ChevronLeft size={13} strokeWidth={2.5} />
                        </span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Customer Agent callout — deep emerald block with corner ornaments */}
        <motion.div
          variants={fadeUp}
          className="ts-card-deep ts-corner-ornament flex items-center gap-4 lg:gap-5 px-5 lg:px-6 py-4 lg:py-5 relative overflow-hidden"
        >
          {/* Inner subtle highlight (already provided by ::before) */}
          <span
            className="ts-icon-chip-gradient shrink-0"
            aria-hidden="true"
            style={{ width: 44, height: 44, borderRadius: 12 }}
          >
            <IconGlyph name="BotMessageSquare" size={20} />
          </span>
          <div className="flex-1 min-w-0 flex flex-col gap-1">
            <div
              className="ts-eyebrow-dot lat"
              dir="ltr"
              style={{ color: "#A7F3D0" }}
            >
              Taj Saba Customer Agent
            </div>
            <div className="text-sm text-white/85 leading-relaxed">
              طبقة تواصل ذكية مرتبطة ببيانات العملاء — لا مجرد Chatbot.
            </div>
          </div>
          <span
            className="ts-pill-solid shrink-0 hidden md:inline-flex"
            dir="ltr"
          >
            AI Layer
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
