"use client";

import { motion } from "framer-motion";
import { PRESENTATION_META } from "../../data/slides";
import {
  IconBadge,
  SlideHeader,
  StatBlock,
  blurIn,
  containerStagger,
  fadeUp,
  scaleIn,
  Watermark,
  Divider,
} from "../primitives";

/**
 * Slide 02 — Why Here (ENHANCED MODERN LIGHT)
 * Quote treatment:
 *  - Headline wrapped in a ts-card-deep block-quote with corner ornament,
 *    serif quote glyph, accent bar, and ts-noise overlay
 *  - Below: 3 ts-bento cards with ts-bento-accent (top strip on hover),
 *    each with ts-icon-chip-gradient numeric badges (01/02/03)
 *  - Faint "WHY" watermark in the background
 *  - Bottom: stat strip with 3 key takeaways
 */
export default function Slide02WhyHere() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad justify-center relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Why are we here"
    >
      {/* Soft ambient emerald blob + mesh blob */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="ts-blob ts-blob-emerald h-[40vh] w-[40vh] -top-[6%] left-[12%] opacity-40" />
        <div className="ts-blob ts-blob-mesh h-[28vh] w-[28vh] bottom-[2%] right-[8%] opacity-40" />
      </div>

      {/* Faint "WHY" watermark in background for context depth */}
      <Watermark
        text="WHY"
        className="top-[20%] right-[4%] text-[14rem] opacity-[0.04]"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col gap-7">
        <SlideHeader
          index="02"
          eyebrow="لماذا نجتمع اليوم"
          eyebrowEn="Why are we here"
        />

        {/* Emphasized DEEP-emerald block quote with corner ornament */}
        <motion.div
          variants={blurIn}
          className="relative ts-card-deep ts-corner-ornament p-8 lg:p-12 rounded-[var(--radius-xl)] overflow-hidden"
        >
          {/* Decorative oversized serif quote glyph (RTL: appears on right) */}
          <span
            aria-hidden="true"
            className="lat absolute top-2 right-6 lg:top-4 lg:right-10 text-[8rem] lg:text-[10rem] leading-none font-serif text-white/15 select-none"
          >
            ”
          </span>

          {/* Vertical accent bar (right edge in RTL) */}
          <span
            aria-hidden="true"
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

        {/* Three principle bento cards with accent strip + gradient numeric badges */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2"
        >
          {[
            {
              k: "ليس عرضًا تقنيًا",
              v: "بل جلسة لفهم مجال الفندق واحتياجاته الحقيقية.",
              tag: "Listen",
            },
            {
              k: "ليس تثبيتًا للنطاق",
              v: "بل تحديد دقيق لما نحتاج بناءه فعليًا.",
              tag: "Define",
            },
            {
              k: "ليس إجابة نيابة عن العميل",
              v: "بل اكتشاف مشترك للمتطلبات والقيود.",
              tag: "Align",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              variants={scaleIn}
              className="ts-bento ts-bento-accent p-5 lg:p-6 group relative"
            >
              <div className="flex items-center gap-3 mb-3">
                <IconBadge variant="gradient" size="md">
                  <span className="lat text-[0.875rem] font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </IconBadge>
                <div className="ts-eyebrow text-[var(--ts-accent)]">
                  {item.k}
                </div>
                <span
                  className="ml-auto lat ts-pill-dot"
                  dir="ltr"
                >
                  <span className="lat">{item.tag}</span>
                </span>
              </div>
              <p className="ts-body text-[var(--ts-text-secondary)] leading-relaxed">
                {item.v}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom 3-stat strip with key takeaways */}
        <motion.div
          variants={fadeUp}
          className="ts-stat-strip !grid-cols-3 mt-2"
        >
          <StatBlock
            value="1"
            label="جلسة اكتشاف مشتركة"
            labelEn="Discovery"
            trend="START"
            trendVariant="success"
          />
          <StatBlock
            value="3"
            label="مبادئ توجيهية"
            labelEn="Principles"
            trend="GUIDE"
            trendVariant="info"
          />
          <StatBlock
            value="2"
            label="طرفان متعاونان"
            labelEn="Partners"
            trend="ALIGN"
            trendVariant="warning"
          />
        </motion.div>

        {/* Bottom lockup strip */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 mt-2 text-[var(--ts-text-muted)]"
        >
          <span className="h-px flex-1">
            <Divider variant="default" />
          </span>
          <span className="text-[0.6875rem] tracking-[0.18em] uppercase text-[var(--ts-text-faint)]">
            <span className="lat">{PRESENTATION_META.provider}</span>
            <span className="mx-2 text-[var(--ts-accent)]">×</span>
            <span>{PRESENTATION_META.client}</span>
          </span>
          <span className="h-px flex-1">
            <Divider variant="default" />
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
