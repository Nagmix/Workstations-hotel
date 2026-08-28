"use client";

import { motion } from "framer-motion";
import { SECURITY_PILLARS } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

export default function Slide12Security() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Security and Governance"
    >
      <div className="flex flex-col gap-7 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="12"
            eyebrow="الأمن والحوكمة"
            eyebrowEn="Security & Governance"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-3xl"
          >
            أقل صلاحية ممكنة، وموافقة صريحة لكل قرار حساس.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {SECURITY_PILLARS.map((item, i) => (
            <motion.article
              key={item.en}
              custom={i}
              variants={blurIn}
              className="ts-card p-5 lg:p-6 group hover:border-[var(--ts-border-accent)] transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--ts-border-strong)] bg-[var(--ts-accent-softer)] text-[var(--ts-accent)]">
                  <IconGlyph name={item.icon} size={20} />
                </div>
                <span className="ts-slide-index text-[var(--ts-text-faint)] text-xs ml-auto">
                  0{i + 1}
                </span>
              </div>
              <h3 className="ts-h3 text-[var(--ts-text-primary)] font-semibold mb-1">
                {item.title}
              </h3>
              <div className="lat text-xs text-[var(--ts-text-muted)] tracking-wider mb-3">
                {item.en}
              </div>
              <p className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          variants={fadeUp}
          className="mt-1 flex items-center gap-5 px-6 py-4 rounded-xl border border-[var(--ts-border)] bg-[rgba(255,255,255,0.015)] max-w-5xl"
        >
          <span className="ts-eyebrow text-[var(--ts-accent)] shrink-0">
            مبدأ أساسي
          </span>
          <span className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
            لا يتم صرف الأموال أو تحويل الرواتب أو مشاركة البيانات الحساسة
            بناءً على قرار AI وحده — كلها تخضع لمسار الاعتماد البشري.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
