"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { FNB_FLOW } from "../../data/slides";
import {
  SlideHeader,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

/* Horizontal arrow connector (used on lg+ when pipeline is horizontal) */
function HorizontalArrow({ index }: { index: number }) {
  return (
    <div
      className="hidden lg:flex items-center justify-center px-1 shrink-0"
      aria-hidden
    >
      <svg
        width="34"
        height="14"
        viewBox="0 0 34 14"
        className="text-[var(--ts-accent)]"
        fill="none"
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
    </div>
  );
}

/* Vertical arrow connector (used on mobile when pipeline stacks vertically) */
function VerticalArrow({ index }: { index: number }) {
  return (
    <div
      className="flex lg:hidden items-center justify-center py-1 shrink-0"
      aria-hidden
    >
      <svg
        width="14"
        height="34"
        viewBox="0 0 14 34"
        className="text-[var(--ts-accent)]"
        fill="none"
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
    </div>
  );
}

export default function Slide07FnB() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Food and Beverage"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="07"
            eyebrow="المطاعم والضيافة"
            eyebrowEn="Food & Beverage"
          />
          <div className="flex items-end justify-between flex-wrap gap-3">
            <motion.h2
              variants={fadeUp}
              className="ts-h2 text-[var(--ts-text-primary)] font-semibold max-w-2xl leading-tight"
            >
              ليس نظام كاشير منفصل، بل دورة تشغيل متكاملة.
            </motion.h2>
            <motion.span variants={fadeUp} className="ts-pill" dir="ltr">
              <span className="lat">POS</span>
              <span className="text-[var(--ts-text-faint)]">·</span>
              <span>Kitchen</span>
              <span className="text-[var(--ts-text-faint)]">·</span>
              <span>Food Cost</span>
            </motion.span>
          </div>
        </div>

        {/* Pipeline panel with grid background */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-2xl border border-[var(--ts-border)] bg-[var(--ts-bg-soft)] ts-grid-bg overflow-hidden"
        >
          {/* subtle emerald halo on the right edge */}
          <div
            className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, rgba(15,118,110,0.05), transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row items-stretch gap-3">
              {FNB_FLOW.map((node, i) => (
                <Fragment key={node.step}>
                  <motion.div
                    custom={i}
                    variants={scaleIn}
                    className="flex-1 ts-card p-4 lg:p-5 flex flex-col gap-3 relative min-w-0"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="ts-icon-chip-solid" aria-hidden>
                        <span
                          className="lat text-sm font-semibold"
                          dir="ltr"
                        >
                          {node.step}
                        </span>
                      </div>
                      <span
                        className="lat text-[10px] text-[var(--ts-text-faint)] tracking-wider"
                        dir="ltr"
                      >
                        {node.en}
                      </span>
                    </div>
                    <div className="ts-h3 text-[var(--ts-text-primary)] font-semibold leading-tight">
                      {node.title}
                    </div>
                    <div className="text-xs text-[var(--ts-text-secondary)] leading-relaxed mt-auto">
                      {node.desc}
                    </div>
                  </motion.div>

                  {i < FNB_FLOW.length - 1 && (
                    <>
                      <HorizontalArrow index={i + 1} />
                      <VerticalArrow index={i + 1} />
                    </>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom narrative — three insights */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          {[
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
          ].map((c) => (
            <div
              key={c.k}
              className="ts-card p-4 flex flex-col gap-1.5"
            >
              <div className="ts-eyebrow-label text-[var(--ts-accent)]">
                {c.k}
              </div>
              <div className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
                {c.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
