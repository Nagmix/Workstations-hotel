"use client";

import { motion } from "framer-motion";
import { FNB_FLOW } from "../../data/slides";
import {
  SlideHeader,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

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
      <div className="flex flex-col gap-7 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="07"
            eyebrow="المطاعم والضيافة"
            eyebrowEn="Food & Beverage"
          />
          <div className="flex items-end justify-between flex-wrap gap-3">
            <motion.h2
              variants={fadeUp}
              className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-2xl"
            >
              ليس نظام كاشير منفصل، بل دورة تشغيل متكاملة.
            </motion.h2>
            <motion.span variants={fadeUp} className="ts-pill">
              POS · Kitchen · Food Cost
            </motion.span>
          </div>
        </div>

        {/* Horizontal flow */}
        <div className="mt-2">
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            {FNB_FLOW.map((node, i) => (
              <div key={node.step} className="contents">
                <motion.div
                  custom={i}
                  variants={scaleIn}
                  className="flex-1 ts-card-raised p-5 flex flex-col gap-2 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="ts-slide-index text-[var(--ts-accent)] text-base">
                      {node.step}
                    </span>
                    <span className="text-[10px] text-[var(--ts-text-faint)] tracking-wider">
                      {node.en}
                    </span>
                  </div>
                  <div className="ts-h3 text-[var(--ts-text-primary)] font-semibold">
                    {node.title}
                  </div>
                  <div className="text-xs text-[var(--ts-text-secondary)] leading-relaxed">
                    {node.desc}
                  </div>
                </motion.div>

                {/* Arrow between nodes (RTL aware) */}
                {i < FNB_FLOW.length - 1 && (
                  <div className="flex items-center justify-center lg:px-0.5">
                    <svg
                      width="28"
                      height="14"
                      viewBox="0 0 28 14"
                      className="text-[var(--ts-accent)]"
                      fill="none"
                    >
                      <motion.line
                        x1="26"
                        y1="7"
                        x2="6"
                        y2="7"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeDasharray="3 3"
                        variants={drawLine}
                        custom={i + 1}
                      />
                      <motion.path
                        d="M 10 2 L 4 7 L 10 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
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
        </div>

        {/* Bottom narrative */}
        <motion.div
          variants={fadeUp}
          className="mt-1 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl"
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
              className="p-4 rounded-lg border border-[var(--ts-border)] bg-[rgba(255,255,255,0.015)]"
            >
              <div className="ts-eyebrow text-[var(--ts-accent)] mb-1.5">
                {c.k}
              </div>
              <div className="text-xs text-[var(--ts-text-secondary)] leading-relaxed">
                {c.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
