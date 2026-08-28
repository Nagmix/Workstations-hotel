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

export default function Slide14TodayDiscovery() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Today's Discovery"
    >
      <div className="flex flex-col gap-7 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="14"
            eyebrow="اكتشاف اليوم"
            eyebrowEn="Today's Discovery"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-3xl"
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

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 lg:gap-3.5">
          {TODAY_DISCOVERY.map((cat, i) => (
            <motion.div
              key={cat.en}
              custom={i}
              variants={blurIn}
              className="ts-card p-3.5 lg:p-4 flex flex-col items-center gap-2.5 text-center group hover:border-[var(--ts-border-accent)] transition-colors duration-500"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--ts-border-strong)] bg-[var(--ts-accent-softer)] text-[var(--ts-accent)]">
                <IconGlyph name={cat.icon} size={18} />
              </div>
              <div>
                <div className="text-sm font-medium text-[var(--ts-text-primary)] leading-tight">
                  {cat.title}
                </div>
                <div className="lat text-[0.625rem] text-[var(--ts-text-muted)] tracking-wider mt-0.5">
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
