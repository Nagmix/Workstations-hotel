"use client";

import { motion } from "framer-motion";
import { SECURITY_PILLARS } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 12 — Security & Governance (6 pillars)
 *
 * 3-col card grid of pillars with filled emerald icon chips for authority.
 * Header carries a "Secured by Design" shield motif. Bottom callout is a
 * deep-emerald inverse card reinforcing the "human approval" principle.
 */
export default function Slide12Security() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative"
      aria-roledescription="slide"
      aria-label="Security and Governance"
    >
      {/* Ambient emerald blob */}
      <div className="ts-blob ts-blob-emerald w-[480px] h-[480px] -top-32 -right-24" />

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="12"
            eyebrow="الأمن والحوكمة"
            eyebrowEn="Security & Governance"
          />
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <motion.h2
              variants={fadeUp}
              className="ts-h2 text-[var(--ts-text-primary)] max-w-2xl"
            >
              أقل صلاحية ممكنة، وموافقة صريحة لكل قرار حساس.
            </motion.h2>
            <motion.div
              variants={scaleIn}
              custom={1}
              className="flex items-center gap-3"
            >
              <div className="ts-icon-chip-solid !w-12 !h-12 !rounded-xl">
                <IconGlyph name="ShieldCheck" size={24} />
              </div>
              <div className="flex flex-col">
                <div className="lat text-xs font-semibold text-[var(--ts-text-secondary)] tracking-[0.18em] uppercase">
                  Secured by Design
                </div>
                <div className="text-[0.625rem] text-[var(--ts-text-muted)]">
                  حماية مدمجة في التصميم
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 6-pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {SECURITY_PILLARS.map((item, i) => (
            <motion.article
              key={item.en}
              custom={i}
              variants={blurIn}
              className="ts-card p-5 lg:p-6 group relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="ts-icon-chip-solid">
                  <IconGlyph name={item.icon} size={22} />
                </div>
                <span className="ts-slide-index text-[var(--ts-text-faint)] text-xs">
                  0{i + 1}
                </span>
              </div>
              <h3 className="ts-h3 text-[var(--ts-text-primary)] mb-1">
                {item.title}
              </h3>
              <div className="lat text-xs text-[var(--ts-accent-bright-text)] tracking-wider mb-3">
                {item.en}
              </div>
              <div className="ts-divider mb-3" />
              <p className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom callout — inverse emerald block */}
        <motion.div
          variants={fadeUp}
          className="ts-card-inverse px-6 py-4 flex items-center gap-5"
        >
          <div className="flex items-center gap-3 shrink-0">
            <IconGlyph name="ShieldCheck" size={20} className="text-emerald-100" />
            <span className="ts-eyebrow text-emerald-100 shrink-0">
              مبدأ أساسي
            </span>
          </div>
          <span className="text-sm text-emerald-50/90 leading-relaxed">
            لا يتم صرف الأموال أو تحويل الرواتب أو مشاركة البيانات الحساسة
            بناءً على قرار AI وحده — كلها تخضع لمسار الاعتماد البشري.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
