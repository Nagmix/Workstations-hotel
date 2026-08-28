"use client";

import { motion } from "framer-motion";
import {
  DISCOVERY_OBJECTIVES,
} from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

export default function Slide03DiscoveryObjectives() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Discovery Objectives"
    >
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="03"
            eyebrow="أهداف جلسة الاكتشاف"
            eyebrowEn="Discovery Objectives"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium mt-2"
          >
            ما الذي نريد خروجه من الاجتماع؟
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {DISCOVERY_OBJECTIVES.map((item, i) => (
            <motion.article
              key={item.en}
              custom={i}
              variants={blurIn}
              className="ts-card p-5 lg:p-6 group hover:border-[var(--ts-border-accent)] transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--ts-border-strong)] bg-[var(--ts-accent-softer)] text-[var(--ts-accent)]">
                  <IconGlyph name={item.icon} size={20} />
                </div>
                <span className="ts-slide-index text-[var(--ts-text-faint)] text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="ts-h3 text-[var(--ts-text-primary)] font-semibold mb-1">
                {item.title}
              </h3>
              <div className="lat text-xs text-[var(--ts-text-muted)] mb-3 tracking-wider">
                {item.en}
              </div>
              <p className="ts-caption text-[var(--ts-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
