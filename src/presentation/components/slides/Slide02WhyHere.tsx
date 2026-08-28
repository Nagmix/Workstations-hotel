"use client";

import { motion } from "framer-motion";
import { PRESENTATION_META } from "../../data/slides";
import {
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 02 — Why Here (statement)
 * A powerful narrative slide. The headline is presented inside an
 * emphasized inverse (emerald-gradient) block quote with an accent
 * quote-mark and three supporting principle cards beneath.
 */
export default function Slide02WhyHere() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad justify-center relative overflow-hidden"
      aria-roledescription="slide"
      aria-label="Why are we here"
    >
      {/* Soft ambient emerald blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ts-blob ts-blob-emerald h-[40vh] w-[40vh] -top-[6%] left-[12%] opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col gap-8">
        <SlideHeader
          index="02"
          eyebrow="لماذا نجتمع اليوم"
          eyebrowEn="Why are we here"
        />

        {/* Emphasized inverse block quote */}
        <motion.div
          variants={blurIn}
          className="relative ts-card-inverse p-8 lg:p-12 rounded-[var(--radius-xl)] overflow-hidden"
        >
          {/* Decorative oversized quote glyph (RTL: appears on right) */}
          <span
            aria-hidden
            className="lat absolute top-2 right-6 lg:top-4 lg:right-10 text-[8rem] lg:text-[10rem] leading-none font-serif text-white/15 select-none"
          >
            ”
          </span>
          {/* Vertical accent bar (right edge in RTL) */}
          <span
            aria-hidden
            className="absolute right-0 top-6 bottom-6 w-1 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.7), transparent)",
            }}
          />

          <div className="relative flex items-start gap-5">
            <span className="lat ts-eyebrow text-white/70 shrink-0 mt-3 hidden sm:inline-flex">
              DISCOVERY
            </span>
            <h2
              dir="rtl"
              className="ts-h1 text-white font-medium leading-[1.15]"
              style={{ letterSpacing: "-0.01em" }}
            >
              نحن هنا لفهم طريقة عمل فندق تاج سبأ،
              <br />
              قبل تثبيت الحل النهائي.
            </h2>
          </div>

          {/* Footnote line inside the quote card */}
          <div className="relative mt-6 pt-5 border-t border-white/15 flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span className="text-sm text-white/75 leading-relaxed">
              ليست جلسة بيع، وليست تثبيتًا لنطاق — بل اكتشاف مشترك لما
              نحتاجه قبل أن نبنيه.
            </span>
          </div>
        </motion.div>

        {/* Three principle cards beneath */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2"
        >
          {[
            {
              k: "ليس عرضًا تقنيًا",
              v: "بل جلسة لفهم مجال الفندق واحتياجاته الحقيقية.",
            },
            {
              k: "ليس تثبيتًا للنطاق",
              v: "بل تحديد دقيق لما نحتاج بناءه فعليًا.",
            },
            {
              k: "ليس إجابة نيابة عن العميل",
              v: "بل اكتشاف مشترك للمتطلبات والقيود.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              variants={scaleIn}
              className="ts-card p-5 lg:p-6 group"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="ts-icon-chip !w-7 !h-7 !rounded-md">
                  <span className="lat text-[0.6875rem] font-semibold text-[var(--ts-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <div className="ts-eyebrow text-[var(--ts-accent)]">
                  {item.k}
                </div>
              </div>
              <p className="ts-body text-[var(--ts-text-secondary)] leading-relaxed">
                {item.v}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom lockup strip */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 mt-2 text-[var(--ts-text-muted)]"
        >
          <span className="h-px flex-1 ts-divider" />
          <span className="text-[0.6875rem] tracking-[0.18em] uppercase text-[var(--ts-text-faint)]">
            <span className="lat">{PRESENTATION_META.provider}</span>
            <span className="mx-2 text-[var(--ts-accent)]">×</span>
            <span>{PRESENTATION_META.client}</span>
          </span>
          <span className="h-px flex-1 ts-divider" />
        </motion.div>
      </div>
    </motion.section>
  );
}
