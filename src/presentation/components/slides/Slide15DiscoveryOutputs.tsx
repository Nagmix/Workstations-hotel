"use client";

import { motion } from "framer-motion";
import { DISCOVERY_OUTPUTS } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

export default function Slide15DiscoveryOutputs() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Discovery Outputs"
    >
      <div className="flex flex-col gap-7 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="15"
            eyebrow="مخرجات الاكتشاف"
            eyebrowEn="Discovery Outputs"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-3xl"
          >
            ماذا سنخرج به من الاجتماع؟
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {DISCOVERY_OUTPUTS.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              variants={blurIn}
              className="ts-card p-5 lg:p-6 group hover:border-[var(--ts-border-accent)] transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--ts-border-strong)] bg-[var(--ts-accent-softer)] text-[var(--ts-accent)]">
                  <IconGlyph name={item.icon} size={18} />
                </div>
                <span className="ts-slide-index text-[var(--ts-text-faint)] text-xs">
                  0{i + 1}
                </span>
              </div>
              <h3 className="lat text-sm font-semibold text-[var(--ts-text-primary)] tracking-wide mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-[var(--ts-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          variants={fadeUp}
          className="mt-1 flex items-center gap-3 px-5 py-3.5 rounded-xl border border-[var(--ts-border)] bg-[rgba(255,255,255,0.015)] max-w-5xl"
        >
          <span className="ts-eyebrow text-[var(--ts-accent)] shrink-0">
            النتيجة
          </span>
          <span className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
            وثيقة متطلبات ونطاق وأولويات وقيود معتمدة — أساس للانتقال إلى خطة
            التنفيذ والجدول التجاري.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
