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

/**
 * Slide 15 — Discovery Outputs (8 deliverables)
 *
 * 4×2 card grid. The "Next Steps" card uses ts-card-accent + solid
 * emerald icon chip to act as the visual focal point. Other 7 cards
 * use the standard ts-card + emerald-tinted icon chip. Bottom strip is
 * a deep-emerald inverse block summarising the resulting artefact.
 */
export default function Slide15DiscoveryOutputs() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative"
      aria-roledescription="slide"
      aria-label="Discovery Outputs"
    >
      {/* Ambient emerald blob */}
      <div className="ts-blob ts-blob-emerald w-[440px] h-[440px] -bottom-32 -right-24" />

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="15"
            eyebrow="مخرجات الاكتشاف"
            eyebrowEn="Discovery Outputs"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] max-w-3xl"
          >
            ماذا سنخرج به من الاجتماع؟
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {DISCOVERY_OUTPUTS.map((item, i) => {
            const isAccent = item.title === "Next Steps";
            return (
              <motion.article
                key={item.title}
                custom={i}
                variants={blurIn}
                className={`relative p-5 lg:p-6 ${
                  isAccent ? "ts-card-accent" : "ts-card"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={
                      isAccent ? "ts-icon-chip-solid" : "ts-icon-chip"
                    }
                  >
                    <IconGlyph name={item.icon} size={20} />
                  </div>
                  <span className="ts-slide-index text-[var(--ts-text-faint)] text-xs">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="lat text-base font-semibold text-[var(--ts-text-primary)] tracking-wide mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
                {isAccent && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[var(--ts-accent-deep)] font-medium">
                    <span className="h-1 w-1 rounded-full bg-[var(--ts-accent)]" />
                    نقطة التركيز
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Footer note — inverse emerald */}
        <motion.div
          variants={fadeUp}
          className="ts-card-inverse px-6 py-4 flex items-center gap-4"
        >
          <span className="ts-eyebrow text-emerald-100 shrink-0">
            النتيجة
          </span>
          <span className="text-sm text-emerald-50/90 leading-relaxed">
            وثيقة متطلبات ونطاق وأولويات وقيود معتمدة — أساس للانتقال إلى خطة
            التنفيذ والجدول التجاري.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
