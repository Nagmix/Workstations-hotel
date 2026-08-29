"use client";

import { motion } from "framer-motion";
import { PRESENTATION_META, VISION_TAGLINE } from "../../data/slides";
import { EASE_OUT, blurIn, containerStagger, fadeUp } from "../primitives";

export default function Slide01Cover() {
  return (
    <motion.section initial="hidden" animate="show" exit={{ opacity: 0 }} variants={containerStagger}
      className="slide-stage slide-pad relative min-h-full overflow-hidden flex items-center">
      <div className="ts-cover-cinema" aria-hidden="true" />
      <div className="ts-cover-vignette" aria-hidden="true" />
      <div className="ts-cover-line ts-cover-line-a" aria-hidden="true" />
      <div className="ts-cover-line ts-cover-line-b" aria-hidden="true" />

      <motion.div variants={fadeUp} className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-end">
        <div className="text-right">
          <div className="ts-eyebrow mb-7 flex items-center gap-3 justify-end">
            <span>EXECUTIVE DISCOVERY</span><span className="h-px w-12 bg-[var(--ts-accent)]/60" />
          </div>
          <motion.div variants={blurIn} transition={{ duration: 1, ease: EASE_OUT }} className="lat text-[clamp(4.5rem,11vw,10rem)] leading-[.82] font-semibold tracking-[-.07em] text-[var(--ts-text-primary)]">
            {PRESENTATION_META.brand}
          </motion.div>
          <div className="mt-7 h-px w-28 bg-[var(--ts-accent)]" />
          <motion.h1 variants={fadeUp} className="mt-7 ts-h1 text-[clamp(2rem,4vw,4.5rem)] font-semibold tracking-tight">
            منصة تاج سبأ<br /><span className="text-[var(--ts-accent-bright)]">الفندقية الذكية</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.3rem)] leading-8 text-[var(--ts-text-secondary)]">
            {VISION_TAGLINE}
          </motion.p>
        </div>

        <motion.div variants={fadeUp} className="hidden lg:block relative min-h-[48vh]">
          <div className="ts-cover-architecture" aria-hidden="true">
            <div className="ts-cover-orbit orbit-1" /><div className="ts-cover-orbit orbit-2" />
            <div className="ts-cover-core"><span>TS</span><small>SMART HOTEL<br />PLATFORM</small></div>
            <span className="ts-cover-node n1">PMS</span><span className="ts-cover-node n2">POS</span>
            <span className="ts-cover-node n3">CRM</span><span className="ts-cover-node n4">AI</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute z-10 bottom-8 left-8 right-8 flex items-center justify-between text-[10px] tracking-[.22em] text-[var(--ts-text-faint)] lat">
        <span>DIGITAL PLANETX × TAJ SABA</span><span>01 / 17 · 29.08.2026</span>
      </div>
    </motion.section>
  );
}
