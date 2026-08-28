"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-7">
        {/* Decorative warm blob (amber) — different from slide 06's emerald */}
        <div
          className="ts-blob ts-blob-warm"
          style={{ bottom: -120, left: -80, width: 380, height: 380 }}
          aria-hidden
        />

        {/* Header */}
        <div className="relative flex flex-col gap-3">
          <SlideHeader
            index="08"
            eyebrow="إدارة الأعمال"
            eyebrowEn="Business Management"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-semibold max-w-3xl leading-tight"
          >
            المخزون والمشتريات والمالية والموارد البشرية في دورة واحدة
            مترابطة.
          </motion.h2>
        </div>

        {/* 2x2 grid — first card uses ts-card-accent to break monotony */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {BUSINESS_MANAGEMENT.map((item, i) => {
            const featured = i === 0;
            return (
              <motion.article
                key={item.en}
                custom={i}
                variants={blurIn}
                className={[
                  featured ? "ts-card-accent p-6 lg:p-7" : "ts-card p-5 lg:p-6",
                  "group flex flex-col",
                ].join(" ")}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={featured ? "ts-icon-chip-solid" : "ts-icon-chip"}>
                    <IconGlyph name={item.icon} size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="ts-h3 text-[var(--ts-text-primary)] font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <div
                      className="lat text-xs text-[var(--ts-text-muted)] tracking-wider mt-1"
                      dir="ltr"
                    >
                      {item.en}
                    </div>
                  </div>
                  <span
                    className="ts-slide-index text-[var(--ts-text-faint)] text-xs ml-auto"
                    dir="ltr"
                  >
                    0{i + 1}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 mt-auto">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-3 text-sm text-[var(--ts-text-secondary)]"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--ts-accent)] shrink-0"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom strip — relationship hint */}
        <motion.div
          variants={fadeUp}
          className="ts-card flex items-center gap-4 px-5 py-4"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--ts-accent-softer)] text-[var(--ts-accent)] shrink-0">
            <ArrowLeft size={16} strokeWidth={2} />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="ts-eyebrow-label text-[var(--ts-accent)] shrink-0">
              ربط العمليات
            </span>
            <span
              className="text-sm text-[var(--ts-text-secondary)] leading-relaxed"
              dir="rtl"
            >
              شراء ← تخزين ← استهلاك/تحويل ← بيع ← تكلفة ← إيراد ← نتيجة مالية.
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
