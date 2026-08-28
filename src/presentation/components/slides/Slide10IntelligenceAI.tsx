"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
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
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-7">
        {/* Decorative emerald blob — futuristic glow */}
        <div
          className="ts-blob ts-blob-emerald"
          style={{ top: -120, right: -100, width: 460, height: 460, opacity: 0.7 }}
          aria-hidden
        />
        <div
          className="ts-blob ts-blob-emerald"
          style={{ bottom: -160, left: -120, width: 380, height: 380, opacity: 0.5 }}
          aria-hidden
        />

        {/* Header */}
        <div className="relative flex flex-col gap-3">
          <SlideHeader
            index="10"
            eyebrow="الذكاء والأتمتة"
            eyebrowEn="Intelligence & AI"
          />
          <div className="flex items-end justify-between flex-wrap gap-3">
            <motion.h2
              variants={fadeUp}
              className="ts-h2 text-[var(--ts-text-primary)] font-semibold max-w-3xl leading-tight"
            >
              طبقة <span className="ts-gradient-text">AI</span> تقترح وتحلل
              وتؤتمت — والقرار الحساس يبقى للمسؤول المخوّل.
            </motion.h2>
            <motion.span variants={fadeUp} className="ts-pill" dir="ltr">
              <span>6</span>
              <span className="text-[var(--ts-text-faint)]">·</span>
              <span className="lat">AI Modules</span>
            </motion.span>
          </div>
        </div>

        {/* 6-card grid of emerald-tinted AI module cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {AI_MODULES.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              variants={blurIn}
              className="ts-card-accent p-5 lg:p-6 group flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                {/* Glowing icon chip — framer-motion pulse ring */}
                <motion.div
                  className="relative shrink-0"
                  initial={{ boxShadow: "0 0 0 0 rgba(15,118,110,0)" }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(15,118,110,0)",
                      "0 0 0 8px rgba(15,118,110,0.10)",
                      "0 0 0 0 rgba(15,118,110,0)",
                    ],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                >
                  <div className="ts-icon-chip-solid">
                    <IconGlyph name={item.icon} size={22} />
                  </div>
                </motion.div>
                <h3
                  className="lat text-sm lg:text-[15px] font-semibold text-[var(--ts-text-primary)] tracking-tight leading-snug"
                  dir="ltr"
                >
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--ts-text-secondary)] leading-relaxed mt-1">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Governance rule footnote — warm card to visually contrast the emerald AI grid */}
        <motion.div
          variants={fadeUp}
          className="ts-card-warm flex items-start gap-4 lg:gap-5 px-5 lg:px-6 py-4 lg:py-5"
        >
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--ts-warm-soft)] text-[var(--ts-warm)] border border-[rgba(180,83,9,0.25)]"
            aria-hidden
          >
            <ShieldCheck size={22} strokeWidth={1.8} />
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-1.5">
            <div className="ts-eyebrow-label text-[var(--ts-warm)]">
              قاعدة حاكمة
              <span className="lat text-[var(--ts-text-muted)] mx-2">·</span>
              <span className="lat text-[var(--ts-warm)]">Governance Rule</span>
            </div>
            <p className="ts-body text-[var(--ts-text-primary)] leading-relaxed">
              الذكاء الاصطناعي يقترح ويحلل ويؤتمت ما تسمح به السياسات؛
              القرارات الحساسة تبقى محكومة بالاعتماد البشري.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
