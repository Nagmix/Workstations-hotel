"use client";

import { motion } from "framer-motion";
import { DELIVERY_PIPELINE } from "../../data/slides";
import {
  SlideHeader,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
  blurIn,
} from "../primitives";

export default function Slide16DiscoveryToDelivery() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad justify-center"
      aria-roledescription="slide"
      aria-label="From Discovery to Delivery"
    >
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="16"
            eyebrow="من الاكتشاف إلى التنفيذ"
            eyebrowEn="From Discovery to Delivery"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-3xl"
          >
            من مخرجات الاجتماع اليوم إلى خطة تنفيذ موثقة.
          </motion.h2>
        </div>

        {/* Pipeline */}
        <div className="mt-6 flex flex-col lg:flex-row items-stretch gap-3">
          {DELIVERY_PIPELINE.map((stage, i) => (
            <div key={stage.step} className="contents">
              <motion.div
                custom={i}
                variants={blurIn}
                className={`flex-1 relative p-5 lg:p-6 rounded-2xl border ${
                  i === 0
                    ? "border-[var(--ts-border-accent)] bg-gradient-to-b from-[var(--ts-accent-softer)] to-transparent"
                    : "border-[var(--ts-border)] ts-card"
                }`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="ts-slide-index text-[var(--ts-accent)] text-lg font-semibold">
                    {stage.step}
                  </span>
                  {i === 0 && (
                    <span className="ts-pill !py-1 !px-2.5 !text-[0.625rem]">
                      اليوم
                    </span>
                  )}
                </div>
                <div className="lat text-base font-semibold text-[var(--ts-text-primary)] tracking-wide">
                  {stage.title}
                </div>
                <div className="lat text-[0.625rem] text-[var(--ts-text-muted)] tracking-wider mt-1">
                  {stage.en}
                </div>
              </motion.div>

              {i < DELIVERY_PIPELINE.length - 1 && (
                <div className="flex items-center justify-center lg:px-0.5">
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

        {/* Bottom statement */}
        <motion.div
          variants={fadeUp}
          className="mt-2 flex items-center gap-4"
        >
          <motion.span
            variants={scaleIn}
            className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-[var(--ts-accent)] to-transparent"
          />
          <p className="ts-body-lg text-[var(--ts-text-secondary)] text-center flex-1">
            كل مرحلة تبنى على ما قبلها — لا مفاجآت في التنفيذ.
          </p>
          <motion.span
            variants={scaleIn}
            className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-[var(--ts-accent)] to-transparent"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
