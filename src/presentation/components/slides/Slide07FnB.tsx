"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { FNB_FLOW, PRESENTATION_META } from "../../data/slides";
import {
  ConnectorArrow,
  SectionHeading,
  SlideBrandChip,
  StatusPill,
  Watermark,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 07 — Food & Beverage (ENHANCED MODERN LIGHT)
 *
 * Pipeline panel:
 *  - ts-card-mesh outer panel with ts-grid-bg background + ts-aurora-bg overlay
 *    + right-edge ts-blob-emerald halo
 *  - ts-corner-ornament luxury corner brackets on the outer panel
 *  - 6 step cards (flex-1, ts-bento ts-bento-accent)
 *  - Each step number rendered inside ts-icon-chip-gradient (filled emerald
 *    gradient 44x44 chip)
 *  - Watermark of the step number "01"-"06" large and faint in card background
 *  - Two separate arrow connectors:
 *      HorizontalArrow (lg+ only, points left for RTL flow) using
 *        ts-arrow-connector chip + dashed motion.line + chevron motion.path
 *        with drawLine variants
 *      VerticalArrow (mobile only)
 *  - Each card: step number chip on the right (RTL), en label on the left,
 *    Arabic title (ts-h3), description (mt-auto)
 *  - Bottom narrative: 3 ts-bento panels each with ts-eyebrow-dot +
 *    small description
 *  - Header: SectionHeading with ts-pill-dot "6 steps" counter
 *  - SlideBrandChip top-right
 */

/* Horizontal arrow connector (used on lg+ when pipeline is horizontal) */
function HorizontalArrow({ index }: { index: number }) {
  return (
    <div
      className="hidden lg:flex items-center justify-center px-1 shrink-0"
      aria-hidden="true"
    >
      <span className="ts-arrow-connector">
        <svg
          width="22"
          height="14"
          viewBox="0 0 34 14"
          fill="none"
          aria-hidden="true"
        >
          <motion.line
            x1="32"
            y1="7"
            x2="8"
            y2="7"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray="3 3"
            variants={drawLine}
            custom={index}
          />
          <motion.path
            d="M 12 2 L 4 7 L 12 12"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawLine}
            custom={index + 0.5}
          />
        </svg>
      </span>
    </div>
  );
}

/* Vertical arrow connector (used on mobile when pipeline stacks vertically) */
function VerticalArrow({ index }: { index: number }) {
  return (
    <div
      className="flex lg:hidden items-center justify-center py-1 shrink-0"
      aria-hidden="true"
    >
      <span className="ts-arrow-connector">
        <svg
          width="14"
          height="22"
          viewBox="0 0 14 34"
          fill="none"
          aria-hidden="true"
        >
          <motion.line
            x1="7"
            y1="2"
            x2="7"
            y2="26"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray="3 3"
            variants={drawLine}
            custom={index}
          />
          <motion.path
            d="M 2 22 L 7 30 L 12 22"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawLine}
            custom={index + 0.5}
          />
        </svg>
      </span>
    </div>
  );
}

const NARRATIVE = [
  {
    k: "إرسال تلقائي",
    v: "POS يغذي المطبخ مباشرة عبر Kitchen Display.",
  },
  {
    k: "ربط بالوصفة",
    v: "كل بيع يستدعي استهلاكًا محسوبًا للمواد الخام.",
  },
  {
    k: "أثر مالي",
    v: "التكلفة والهامش والإيراد يدخلان دورة المالية.",
  },
];

export default function Slide07FnB() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Food and Beverage"
    >
      {/* Ambient layer: aurora + right-edge emerald halo blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-60"
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-emerald"
        style={{
          top: "20%",
          right: -120,
          width: 360,
          height: 360,
          opacity: 0.45,
        }}
      />

      {/* Brand lockup */}
      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-7">
        {/* Section heading with pill counter */}
        <SectionHeading
          eyebrow="المطاعم والضيافة"
          eyebrowEn="Food & Beverage"
          title={
            <>
              ليس نظام كاشير منفصل، بل{" "}
              <span className="ts-gradient-text-emerald">
                دورة تشغيل متكاملة
              </span>
              .
            </>
          }
          subtitle="POS · Kitchen · Recipe · Food Cost · Inventory — كل خطوة تغذي التالية مباشرة."
          pill={
            <StatusPill variant="dot">
              <span className="lat">{FNB_FLOW.length}</span>
              <span>خطوات</span>
            </StatusPill>
          }
        />

        {/* Pipeline panel — mesh card with grid + aurora + corner ornaments */}
        <motion.div
          variants={fadeUp}
          className="ts-card-mesh ts-corner-ornament relative p-4 lg:p-6"
        >
          {/* Inner grid background layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ts-grid-bg opacity-60 rounded-[var(--radius-lg)]"
          />
          {/* Right-edge emerald halo (already on outer slide; add inner halo) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 rounded-r-[var(--radius-lg)]"
            style={{
              background:
                "linear-gradient(270deg, rgba(15,118,110,0.07), transparent 70%)",
            }}
          />

          <div className="relative flex flex-col lg:flex-row items-stretch gap-3">
            {FNB_FLOW.map((node, i) => (
              <Fragment key={node.step}>
                <motion.article
                  custom={i}
                  variants={scaleIn}
                  className="flex-1 ts-bento ts-bento-accent p-4 lg:p-5 flex flex-col gap-3 relative overflow-hidden min-w-0"
                >
                  {/* Faint step-number watermark in background */}
                  <Watermark
                    text={node.step}
                    className="-bottom-3 -left-1 text-[5.5rem] opacity-[0.05]"
                  />

                  {/* Header row: en label on left, step chip on right (RTL) */}
                  <div className="relative flex items-center justify-between gap-2">
                    <span
                      className="lat text-[10px] text-[var(--ts-text-faint)] tracking-wider"
                      dir="ltr"
                    >
                      {node.en}
                    </span>
                    <span
                      className="ts-icon-chip-gradient !w-11 !h-11"
                      aria-hidden="true"
                    >
                      <span
                        className="lat text-sm font-bold"
                        dir="ltr"
                      >
                        {node.step}
                      </span>
                    </span>
                  </div>

                  <div className="relative ts-h3 text-[var(--ts-text-primary)] font-semibold leading-tight">
                    {node.title}
                  </div>
                  <div className="relative text-xs text-[var(--ts-text-secondary)] leading-relaxed mt-auto">
                    {node.desc}
                  </div>
                </motion.article>

                {i < FNB_FLOW.length - 1 && (
                  <>
                    <HorizontalArrow index={i + 1} />
                    <VerticalArrow index={i + 1} />
                  </>
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>

        {/* Bottom narrative — three insights as bento panels */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          {NARRATIVE.map((c, i) => (
            <motion.div
              key={c.k}
              custom={i}
              variants={fadeUp}
              className="ts-bento ts-bento-accent p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="ts-eyebrow-dot">{c.k}</span>
                <ConnectorArrow size={14} className="!w-6 !h-6 ml-auto" />
              </div>
              <div className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
                {c.v}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
