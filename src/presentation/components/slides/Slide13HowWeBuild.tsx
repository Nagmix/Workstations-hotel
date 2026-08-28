"use client";

import { motion } from "framer-motion";
import { BUILD_TIMELINE } from "../../data/slides";
import {
  SlideHeader,
  containerStagger,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 13 — How We Build (11-phase timeline)
 *
 * Horizontal flowing timeline of all 11 build phases. Each phase is a
 * compact card with a solid emerald numbered chip (pulse on the first
 * node), Arabic title, and English label. A dashed emerald track runs
 * behind the chips (lg+ only). Background uses ts-grid-bg for an
 * engineering / blueprint feel. Bottom callout is an emerald-tinted
 * accent card with a solid "ملاحظة" pill.
 */
export default function Slide13HowWeBuild() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage stage-top slide-pad relative"
      aria-roledescription="slide"
      aria-label="How we will build it"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 ts-grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-[1500px] mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="13"
            eyebrow="كيف نبنيها"
            eyebrowEn="How we will build it"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] max-w-3xl"
          >
            مراحل مترابطة، مع تحقق من كل جزء قبل البناء فوقه.
          </motion.h2>
        </div>

        {/* Horizontal timeline — 11 phases */}
        <div className="relative mt-2">
          {/* Connector track (behind chips, lg+ only) */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              show: {
                scaleX: 1,
                transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="absolute top-8 left-0 right-0 h-0 border-t border-dashed hidden lg:block origin-left"
            style={{ borderColor: "rgba(15, 118, 110, 0.4)" }}
          />

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-2.5">
            {BUILD_TIMELINE.map((phase, i) => (
              <motion.div
                key={phase.step}
                custom={i}
                variants={scaleIn}
                className="ts-card p-3 lg:p-3.5 flex flex-col items-center text-center"
              >
                <div className="relative mb-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ts-accent)] text-white text-xs font-semibold num shadow-[var(--ts-shadow-accent-soft)]">
                    {phase.step}
                  </div>
                  {i === 0 && (
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full border-2 border-[var(--ts-accent)]"
                    />
                  )}
                </div>
                <div className="text-[0.75rem] font-semibold text-[var(--ts-text-primary)] leading-tight mb-0.5">
                  {phase.title}
                </div>
                <div className="lat text-[0.5625rem] text-[var(--ts-text-muted)] tracking-wider">
                  {phase.en}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom callout — accent */}
        <motion.div
          variants={fadeUp}
          className="ts-card-accent px-5 py-3.5 flex items-center gap-3"
        >
          <span className="ts-pill-solid !py-1 !px-3 !text-[0.5625rem]">
            ملاحظة
          </span>
          <span className="text-sm text-[var(--ts-text-primary)] leading-relaxed">
            ترتيب التنفيذ التفصيلي والمدة والتكلفة تعتمد على النطاق النهائي
            والبيانات والتكاملات والأجهزة والاعتمادات.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
