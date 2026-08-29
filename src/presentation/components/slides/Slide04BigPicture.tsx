"use client";

import { motion } from "framer-motion";
import { BIG_PICTURE_AFTER, BIG_PICTURE_BEFORE } from "../../data/slides";
import { SectionHeading, containerStagger, fadeUp, scaleIn } from "../primitives";

export default function Slide04BigPicture() {
  return (
    <motion.section initial="hidden" animate="show" exit="hidden" variants={containerStagger}
      className="slide-stage slide-pad relative overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_45%_60%_at_72%_50%,rgba(201,168,106,.09),transparent_68%)]" />
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <SectionHeading eyebrow="الصورة الكبرى" eyebrowEn="The Big Picture"
          title={<>من عمليات متفرقة إلى <span className="ts-gradient-text">منظومة موحدة</span>.</>} />

        <div className="mt-12 grid lg:grid-cols-[.75fr_auto_1.35fr] gap-8 items-center">
          <motion.div variants={fadeUp} className="relative min-h-[260px] flex flex-wrap content-center justify-center gap-3 p-8 border border-[var(--ts-border)] bg-white/[.025]">
            <div className="absolute top-5 right-6 ts-eyebrow text-[10px]">REALITY TODAY</div>
            {BIG_PICTURE_BEFORE.map((label, i) => <motion.span key={label} custom={i} variants={fadeUp}
              className="px-4 py-2 border border-white/10 rounded-full text-sm text-[var(--ts-text-muted)] bg-black/20">{label}</motion.span>)}
            <div className="absolute bottom-5 right-6 text-xs text-[var(--ts-text-faint)]">تكرار · فجوات · رؤية جزئية</div>
          </motion.div>

          <motion.div variants={scaleIn} className="flex flex-col items-center gap-3 px-2">
            <span className="lat text-[9px] tracking-[.25em] text-[var(--ts-accent)]">TRANSFORM</span>
            <div className="h-24 w-px bg-gradient-to-b from-transparent via-[var(--ts-accent)] to-transparent lg:hidden" />
            <div className="hidden lg:flex items-center gap-3 text-[var(--ts-accent)]"><span className="h-px w-20 bg-[var(--ts-accent)]/50"/><span className="text-2xl">←</span></div>
            <span className="text-[10px] text-[var(--ts-text-faint)] whitespace-nowrap">توحيد · ربط · قياس</span>
          </motion.div>

          <motion.div variants={fadeUp} className="relative min-h-[320px] p-8 border border-[var(--ts-border-accent)] bg-[linear-gradient(145deg,rgba(201,168,106,.075),rgba(255,255,255,.018))]">
            <div className="absolute top-5 right-6 ts-eyebrow text-[10px]">THE FUTURE STATE</div>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="relative flex items-center justify-center h-28 w-28 rounded-full border border-[var(--ts-accent)]/70 bg-[#0a0c10] shadow-[0_0_80px_rgba(201,168,106,.10)]">
                <div><div className="lat text-xl tracking-[.16em] text-[var(--ts-accent-bright)]">TAJ SABA</div><div className="lat text-[7px] tracking-[.22em] text-[var(--ts-text-muted)] mt-1">SMART HOTEL</div></div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {BIG_PICTURE_AFTER.map((p, i) => <motion.div key={p.label} variants={scaleIn} custom={i}
                  className="px-5 py-3 border border-[var(--ts-border)] bg-black/20 min-w-[125px]"><div className="lat text-sm text-[var(--ts-accent-bright)]">{p.label}</div><div className="text-xs text-[var(--ts-text-secondary)] mt-1">{p.sub}</div></motion.div>)}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-[var(--ts-text-muted)]"><span className="h-px w-16 bg-white/10"/><span>منظومة واحدة · بيانات مشتركة · قرارات أفضل</span><span className="h-px w-16 bg-white/10"/></div>
      </div>
    </motion.section>
  );
}
