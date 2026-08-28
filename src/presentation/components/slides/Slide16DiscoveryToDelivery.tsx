"use client";

import { motion } from "framer-motion";
import { BOARD_DECISIONS, DELIVERY_PIPELINE } from "../../data/slides";
import {
  SlideHeader,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
  blurIn,
} from "../primitives";

/**
 * Slide 16 — From Discovery to Delivery
 *
 * Top: horizontal RTL pipeline of 6 stages. Stage 1 (Requirements) is
 * highlighted with ts-card-accent + a solid "اليوم" pill. Animated
 * emerald arrow connectors between stages (dashed line + chevron, using
 * drawLine variants).
 *
 * Bottom: 8-item Board Decisions checklist laid out as a 2-column grid.
 * Each item is a ts-card with an emerald-tinted numbered chip.
 */
export default function Slide16DiscoveryToDelivery() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative"
      aria-roledescription="slide"
      aria-label="From Discovery to Delivery"
    >
      <div className="relative z-10 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="16"
            eyebrow="من الاكتشاف إلى التنفيذ"
            eyebrowEn="From Discovery to Delivery"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] max-w-3xl"
          >
            من مخرجات الاجتماع اليوم إلى خطة تنفيذ موثقة.
          </motion.h2>
        </div>

        {/* Pipeline — 6 stages, RTL flow */}
        <motion.div variants={fadeUp} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[var(--ts-accent)] rounded-full" />
            <span className="ts-eyebrow text-[var(--ts-accent)]">
              خط الإنتاج · Delivery Pipeline
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-2">
            {DELIVERY_PIPELINE.map((stage, i) => (
              <div key={stage.step} className="contents">
                <motion.div
                  custom={i}
                  variants={scaleIn}
                  className={`flex-1 relative p-4 lg:p-5 rounded-2xl ${
                    i === 0 ? "ts-card-accent" : "ts-card"
                  }`}
                >
                  {i === 0 && (
                    <span className="absolute -top-2 right-4 ts-pill-solid !py-0.5 !px-2 !text-[0.5625rem]">
                      اليوم
                    </span>
                  )}
                  <div className="ts-slide-index text-[var(--ts-accent)] text-2xl font-semibold num mb-1">
                    {stage.step}
                  </div>
                  <div className="lat text-sm font-semibold text-[var(--ts-text-primary)] tracking-wide">
                    {stage.title}
                  </div>
                  <div className="lat text-[0.625rem] text-[var(--ts-text-muted)] tracking-wider mt-0.5">
                    {stage.en}
                  </div>
                </motion.div>

                {i < DELIVERY_PIPELINE.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center lg:px-0.5">
                    <svg
                      width="22"
                      height="14"
                      viewBox="0 0 22 14"
                      className="text-[var(--ts-accent)]"
                      fill="none"
                    >
                      <motion.line
                        x1="20"
                        y1="7"
                        x2="4"
                        y2="7"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        variants={drawLine}
                        custom={i + 1}
                      />
                      <motion.path
                        d="M 8 2 L 2 7 L 8 12"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={drawLine}
                        custom={i + 1.5}
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Board decisions — 2-col checklist */}
        <motion.div variants={fadeUp} className="flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="w-1 h-5 bg-[var(--ts-accent)] rounded-full" />
            <span className="ts-eyebrow text-[var(--ts-accent)]">
              قرارات مطلوبة من المجلس · Board Decisions Required
            </span>
            <span className="ts-pill-neutral !py-0.5 !px-2 !text-[0.5625rem]">
              <span className="num lat">08</span> نقاط
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {BOARD_DECISIONS.map((d, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={blurIn}
                className="ts-card p-3.5 flex items-center gap-3"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--ts-border-accent)] bg-[var(--ts-accent-tint)] text-[var(--ts-accent)] shrink-0 ts-slide-index text-xs font-semibold num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-sm text-[var(--ts-text-primary)] leading-snug">
                  {d}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
