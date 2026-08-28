"use client";

import { motion } from "framer-motion";
import { AI_MODULES } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

export default function Slide10IntelligenceAI() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Intelligence and AI"
    >
      <div className="flex flex-col gap-7 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="10"
            eyebrow="الذكاء والأتمتة"
            eyebrowEn="Intelligence & AI"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-3xl"
          >
            طبقة AI تقترح وتحلل وتؤتمت — والقرار الحساس يبقى للمسؤول المخول.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {AI_MODULES.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              variants={blurIn}
              className="ts-card p-5 lg:p-6 group hover:border-[var(--ts-border-accent)] transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--ts-border-strong)] bg-[var(--ts-accent-softer)] text-[var(--ts-accent)]">
                  <IconGlyph name={item.icon} size={18} />
                </div>
                <h3 className="lat text-sm font-semibold text-[var(--ts-text-primary)] tracking-wide">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Governance rule */}
        <motion.div
          variants={fadeUp}
          className="mt-1 relative overflow-hidden rounded-2xl border border-[var(--ts-border-accent)] p-6 lg:p-7 max-w-5xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ts-accent-softer)] via-transparent to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--ts-border-accent)] bg-[var(--ts-bg)] text-[var(--ts-accent)] shrink-0">
              <IconGlyph name="ShieldCheck" size={22} />
            </div>
            <div>
              <div className="ts-eyebrow text-[var(--ts-accent)] mb-1.5">
                قاعدة حاكمة · Governance Rule
              </div>
              <p className="ts-body-lg text-[var(--ts-text-primary)] leading-relaxed">
                الذكاء الاصطناعي يقترح ويحلل ويؤتمت ما تسمح به السياسات؛ أما
                القرارات الحساسة — صرف الأموال أو مشاركة بيانات حساسة — فتظل
                محكومة بالاعتماد والصلاحيات والتكاملات الرسمية.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
