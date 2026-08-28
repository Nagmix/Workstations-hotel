"use client";

import { motion } from "framer-motion";
import { BUSINESS_MANAGEMENT } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

export default function Slide08BusinessManagement() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Business Management"
    >
      <div className="flex flex-col gap-7 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="08"
            eyebrow="إدارة الأعمال"
            eyebrowEn="Business Management"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-3xl"
          >
            المخزون والمشتريات والمالية والموارد البشرية في دورة واحدة
            مترابطة.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {BUSINESS_MANAGEMENT.map((item, i) => (
            <motion.article
              key={item.en}
              custom={i}
              variants={blurIn}
              className="ts-card p-5 lg:p-6 group hover:border-[var(--ts-border-accent)] transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
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
              <div className="lat text-xs text-[var(--ts-text-muted)] tracking-wider mb-4">
                {item.en}
              </div>
              <ul className="flex flex-col gap-2.5">
                {item.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-sm text-[var(--ts-text-secondary)]"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--ts-accent)] shrink-0" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Bottom strip — relationship hint */}
        <motion.div
          variants={fadeUp}
          className="mt-1 flex items-center gap-3 px-5 py-3.5 rounded-xl border border-[var(--ts-border)] bg-[rgba(255,255,255,0.015)] max-w-5xl"
        >
          <span className="ts-eyebrow text-[var(--ts-accent)] shrink-0">
            ربط العمليات
          </span>
          <span className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
            شراء → تخزين → استهلاك/تحويل → بيع → تكلفة → إيراد → نتيجة مالية.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
