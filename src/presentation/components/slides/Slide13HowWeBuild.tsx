"use client";

import { motion } from "framer-motion";
import { BUILD_TIMELINE } from "../../data/slides";
import {
  SlideHeader,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

export default function Slide13HowWeBuild() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage stage-top slide-pad"
      aria-roledescription="slide"
      aria-label="How we will build it"
    >
      <div className="flex flex-col gap-7 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="13"
            eyebrow="كيف نبنيها"
            eyebrowEn="How we will build it"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-3xl"
          >
            مراحل مترابطة، مع تحقق من كل جزء قبل البناء فوقه.
          </motion.h2>
        </div>

        {/* Horizontal timeline */}
        <div className="mt-2 overflow-x-auto ts-scroll pb-3 -mx-2 px-2">
          <div className="flex items-stretch gap-0 min-w-max lg:min-w-0 lg:justify-between">
            {BUILD_TIMELINE.map((phase, i) => (
              <div key={phase.step} className="contents">
                {/* Node */}
                <motion.div
                  custom={i}
                  variants={scaleIn}
                  className="relative flex flex-col items-center text-center w-32 lg:w-auto lg:flex-1"
                >
                  {/* Connector line (before this node, drawn first except for index 0) */}
                  {i > 0 && (
                    <svg
                      className="absolute top-5 right-[calc(100%+4px)] hidden lg:block"
                      width="100%"
                      height="2"
                      viewBox="0 0 100 2"
                      preserveAspectRatio="none"
                      style={{ transform: "scaleX(-1)" }}
                    >
                      <motion.line
                        x1="0"
                        y1="1"
                        x2="100"
                        y2="1"
                        stroke="var(--ts-border-strong)"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        variants={drawLine}
                        custom={i}
                      />
                    </svg>
                  )}

                  {/* Node dot */}
                  <div className="relative mb-4">
                    <motion.div
                      variants={scaleIn}
                      custom={i + 0.5}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ts-border-accent)] bg-[var(--ts-bg)] text-[var(--ts-accent)] ts-slide-index text-sm font-semibold"
                    >
                      {phase.step}
                    </motion.div>
                    {i === 0 && (
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full border border-[var(--ts-accent)]"
                      />
                    )}
                  </div>

                  {/* Phase label */}
                  <div className="ts-h3 text-sm font-semibold text-[var(--ts-text-primary)] mb-0.5 leading-tight">
                    {phase.title}
                  </div>
                  <div className="lat text-[0.625rem] text-[var(--ts-text-muted)] tracking-wider">
                    {phase.en}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <motion.div
          variants={fadeUp}
          className="mt-1 flex items-center gap-3 px-5 py-3.5 rounded-xl border border-[var(--ts-border)] bg-[rgba(255,255,255,0.015)] max-w-5xl"
        >
          <span className="ts-eyebrow text-[var(--ts-accent)] shrink-0">
            ملاحظة
          </span>
          <span className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
            ترتيب التنفيذ التفصيلي والمدة والتكلفة تعتمد على النطاق النهائي
            والبيانات والتكاملات والأجهزة والاعتمادات.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
