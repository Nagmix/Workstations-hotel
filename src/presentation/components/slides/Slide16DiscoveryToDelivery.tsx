"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { BOARD_DECISIONS, DELIVERY_PIPELINE, PRESENTATION_META } from "../../data/slides";
import {
  CardIndex,
  ConnectorArrow,
  FloatingBadge,
  IconGlyph,
  SectionHeading,
  SlideBrandChip,
  StatusPill,
  Watermark,
  blurIn,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 16 — From Discovery to Delivery (pipeline + checklist)
 *
 * Two-section layout. Ambient ts-aurora-bg + ts-noise texture + a faint
 * "16" watermark in the background.
 *
 * TOP — 6-stage horizontal pipeline (RTL flow):
 *  - Stage 1 (Requirements): ts-card-deep (deep emerald gradient) +
 *    ts-corner-ornament + ts-floating-badge "Today · اليوم"
 *    (-top-3 right-4) + ts-icon-chip-gradient.
 *  - Stages 2-6: ts-bento ts-bento-accent + ts-icon-chip + CardIndex
 *    ("02"-"06").
 *  - Between stages: emerald arrow connectors (dashed line + chevron
 *    pointing LEFT = RTL forward direction), animated with drawLine
 *    variants, hidden on mobile. ConnectorArrow chips visualise the
 *    forward direction.
 *
 * BOTTOM — 8-item Board Decisions checklist in a 2-col grid. Each item
 * is a ts-bento with a ts-icon-chip-success (7×7 emerald-tinted numbered
 * circle) + decision text + a small ts-pill-dot status indicator.
 *
 * Section headers use ts-eyebrow-dot + (for decisions) a ts-pill-dot
 * "08 نقاط" counter. The slide-level SectionHeading uses SectionHeading
 * with a ts-pill-dot "06 stages" counter. SlideBrandChip top-right.
 */
export default function Slide16DiscoveryToDelivery() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage stage-top slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="From Discovery to Delivery"
    >
      {/* Aurora ambient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-70"
      />
      {/* Faint "16" watermark */}
      <Watermark
        text="16"
        className="-bottom-20 -left-6 text-[14rem] opacity-[0.04] hidden lg:block"
      />

      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 flex flex-col gap-7 w-full max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="من الاكتشاف إلى التنفيذ"
          eyebrowEn="From Discovery to Delivery"
          title={
            <>
              من مخرجات الاجتماع اليوم إلى{" "}
              <span className="ts-gradient-text-emerald">خطة تنفيذ موثقة</span>.
            </>
          }
          pill={
            <StatusPill variant="dot">
              <span className="lat">06</span> stages
            </StatusPill>
          }
        />

        {/* ============ TOP: Pipeline ============ */}
        <motion.div variants={fadeUp} className="flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="ts-eyebrow-dot lat" dir="ltr">
              خط الإنتاج · Delivery Pipeline
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-2">
            {DELIVERY_PIPELINE.map((stage, i) => {
              const isFocal = i === 0;
              const cardIndex = String(i + 1).padStart(2, "0");
              return (
                <Fragment key={stage.step}>
                  <motion.div
                    custom={i}
                    variants={isFocal ? scaleIn : blurIn}
                    className={`flex-1 relative p-4 lg:p-5 overflow-hidden ${
                      isFocal
                        ? "ts-card-deep ts-corner-ornament"
                        : "ts-bento ts-bento-accent"
                    }`}
                  >
                    {isFocal && (
                      <FloatingBadge className="!left-auto !right-4 !-top-3 !translate-x-0">
                        Today · اليوم
                      </FloatingBadge>
                    )}
                    {/* Top row: number + label */}
                    <div className="flex items-start justify-between gap-2">
                      {isFocal ? (
                        <span
                          className="ts-icon-chip-gradient"
                          aria-hidden="true"
                          style={{ width: 44, height: 44, borderRadius: 12 }}
                        >
                          <IconGlyph name="ClipboardList" size={20} />
                        </span>
                      ) : (
                        <span
                          className="ts-icon-chip"
                          aria-hidden="true"
                          style={{ width: 40, height: 40, borderRadius: 10 }}
                        >
                          <span className="lat text-sm font-semibold num">
                            {stage.step}
                          </span>
                        </span>
                      )}
                      {!isFocal && <CardIndex index={cardIndex} />}
                      {isFocal && (
                        <span
                          className="lat text-[0.6875rem] tracking-[0.18em] uppercase font-semibold"
                          style={{ color: "#A7F3D0" }}
                          dir="ltr"
                        >
                          اليوم
                        </span>
                      )}
                    </div>

                    {/* Title + en label */}
                    <div className="mt-3">
                      <div
                        className={`lat text-sm font-semibold tracking-wide ${
                          isFocal
                            ? "text-white"
                            : "text-[var(--ts-text-primary)]"
                        }`}
                        dir="ltr"
                      >
                        {stage.title}
                      </div>
                      <div
                        className={`lat text-[0.625rem] tracking-wider uppercase mt-0.5 ${
                          isFocal
                            ? "text-emerald-100/70"
                            : "text-[var(--ts-text-muted)]"
                        }`}
                        dir="ltr"
                      >
                        {stage.en}
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow connector (lg+ only) — pointing left = RTL forward */}
                  {i < DELIVERY_PIPELINE.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex items-center justify-center px-0.5 shrink-0"
                    >
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        className="text-[var(--ts-accent)]"
                        fill="none"
                      >
                        <motion.line
                          x1="24"
                          y1="8"
                          x2="6"
                          y2="8"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeDasharray="2 2"
                          variants={drawLine}
                          custom={i + 1}
                        />
                        <motion.path
                          d="M 10 3 L 4 8 L 10 13"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          variants={drawLine}
                          custom={i + 1.5}
                        />
                      </svg>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>

          {/* Mobile flow direction chip */}
          <div className="lg:hidden flex items-center justify-center gap-2 text-[var(--ts-text-muted)]">
            <span className="lat text-[0.625rem] tracking-wider uppercase">
              RTL flow · اليوم → الخطة
            </span>
            <ConnectorArrow size={18} />
          </div>
        </motion.div>

        {/* ============ BOTTOM: Board Decisions checklist ============ */}
        <motion.div variants={fadeUp} className="flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="ts-eyebrow-dot lat" dir="ltr">
              قرارات مطلوبة من المجلس · Board Decisions Required
            </span>
            <StatusPill variant="dot">
              <span className="lat">08</span> نقاط
            </StatusPill>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {BOARD_DECISIONS.map((d, i) => {
              const num = String(i + 1).padStart(2, "0");
              // Cycle status indicator color for visual variety
              const statusVariant =
                i % 4 === 0
                  ? "success"
                  : i % 4 === 1
                    ? "warning"
                    : i % 4 === 2
                      ? "info"
                      : "default";
              const statusLabel =
                statusVariant === "success"
                  ? "Required"
                  : statusVariant === "warning"
                    ? "Pending"
                    : statusVariant === "info"
                      ? "Review"
                      : "Note";
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={blurIn}
                  className="ts-bento ts-bento-accent p-3.5 flex items-center gap-3 relative"
                >
                  <span
                    className="ts-icon-chip-success shrink-0"
                    aria-hidden="true"
                    style={{ width: 28, height: 28, borderRadius: 9999 }}
                  >
                    <span className="lat text-xs font-semibold num">
                      {num}
                    </span>
                  </span>
                  <span className="text-sm text-[var(--ts-text-primary)] leading-snug flex-1">
                    {d}
                  </span>
                  <span className={`ts-pill-dot ${statusVariant} shrink-0`}>
                    <span className="lat text-[0.625rem]">{statusLabel}</span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
