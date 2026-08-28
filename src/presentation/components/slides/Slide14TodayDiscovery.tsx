"use client";

import { motion } from "framer-motion";
import { TODAY_DISCOVERY } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

/**
 * Slide 14 — Today's Discovery (9 categories)
 *
 * Clean 3x3 grid (lg) / 2-col (sm) / 1-col (mobile) of discovery
 * categories. Each card has an emerald-tinted icon chip, a slide
 * index marker in the corner, the Arabic title, and the English label.
 * A warm amber blob adds ambient depth without overpowering the grid.
 */
export default function Slide14TodayDiscovery() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative"
      aria-roledescription="slide"
      aria-label="Today's Discovery"
    >
      {/* Ambient warm blob */}
      <div className="ts-blob ts-blob-warm w-[440px] h-[440px] -top-32 -left-24" />

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-6xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="14"
            eyebrow="اكتشاف اليوم"
            eyebrowEn="Today's Discovery"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] max-w-3xl"
          >
            ماذا سنناقش اليوم؟
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="ts-body text-[var(--ts-text-secondary)] max-w-2xl"
          >
            هذه ليست قائمة الأسئلة، بل المحاور التي سنغطيها معًا — نستخدم
            أدوات الاكتشاف أثناء النقاش.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
          {TODAY_DISCOVERY.map((cat, i) => (
            <motion.div
              key={cat.en}
              custom={i}
              variants={blurIn}
              className="ts-card p-5 flex flex-col items-center gap-3 text-center group relative"
            >
              <div className="absolute top-3 right-3 ts-slide-index text-[var(--ts-text-faint)] text-[0.625rem]">
                0{i + 1}
              </div>
              <div className="ts-icon-chip mt-1">
                <IconGlyph name={cat.icon} size={22} />
              </div>
              <div>
                <div className="text-base font-semibold text-[var(--ts-text-primary)] leading-tight">
                  {cat.title}
                </div>
                <div className="lat text-[0.6875rem] text-[var(--ts-text-muted)] tracking-wider mt-1">
                  {cat.en}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
