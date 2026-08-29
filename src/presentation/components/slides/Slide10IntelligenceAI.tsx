"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { AI_MODULES, PRESENTATION_META } from "../../data/slides";
import {
  CardIndex,
  IconGlyph,
  SectionHeading,
  SlideBrandChip,
  StatusPill,
  Watermark,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

/**
 * Slide 10 — Intelligence & AI (ENHANCED MODERN LIGHT)
 *
 * Futuristic 3-col grid (lg:grid-cols-3, md:grid-cols-2, mobile 1-col):
 *  - Each card uses ts-card-mesh (mesh-tinted surface) with ts-icon-chip-gradient
 *  - Icons have a subtle continuous glow pulse (motion.div with animated
 *    boxShadow ring 0 → 8px emerald halo → 0, 2.6s, staggered delay per card)
 *  - Title rendered with ts-gradient-text-emerald partial ("AI" word in gradient)
 *  - Each card: Watermark "01"-"06" faint in background + ts-corner-ornament
 *  - Two decorative emerald blobs (top-right + bottom-left, different
 *    sizes/opacities) for futuristic depth — use ts-blob-mesh
 *  - Governance rule footnote at bottom uses ts-card-frosted (amber tint via
 *    ts-glass with warm bg) with ts-icon-chip-warning (ShieldCheck icon) —
 *    visually contrasts the emerald AI cards above to signal "caution/rules"
 *  - Includes the exact governance text from the brief as the caption body
 *  - Header: SectionHeading with ts-pill-dot "6 · AI Modules" counter
 *  - Add ts-aurora-bg ambient + ts-noise overlay
 */

export default function Slide10IntelligenceAI() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Intelligence and AI"
    >
      {/* Ambient: aurora + two emerald mesh blobs at opposite corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-70"
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-mesh ts-float-slow"
        style={{
          top: -140,
          right: -100,
          width: 460,
          height: 460,
          opacity: 0.55,
        }}
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-mesh"
        style={{
          bottom: -160,
          left: -120,
          width: 380,
          height: 380,
          opacity: 0.45,
        }}
      />

      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-6">
        {/* Section heading */}
        <SectionHeading
          eyebrow="الذكاء والأتمتة"
          eyebrowEn="Intelligence & AI"
          title={
            <>
              طبقة <span className="ts-gradient-text-emerald">AI</span> تقترح
              وتحلل وتؤتمت — والقرار الحساس يبقى للمسؤول المخوّل.
            </>
          }
          subtitle="ست وحدات ذكاء تنطبق على العمليات والمالية والعميل — لا قرار مالي حساس بدون اعتماد بشري."
          pill={
            <StatusPill variant="dot">
              <span className="lat">{AI_MODULES.length}</span>
              <span>·</span>
              <span className="lat">AI Modules</span>
            </StatusPill>
          }
        />

        {/* 6-card grid of mesh AI module cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {AI_MODULES.map((item, i) => {
            const cardIndex = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={item.title}
                custom={i}
                variants={blurIn}
                className="ts-card-mesh ts-corner-ornament p-5 lg:p-6 group flex flex-col gap-3 relative overflow-hidden"
              >
                {/* Faint card-number watermark */}
                <Watermark
                  text={cardIndex}
                  className="-bottom-3 -left-1 text-[6rem] opacity-[0.05]"
                />
                <CardIndex index={cardIndex} />

                <div className="relative flex items-center gap-3">
                  {/* Glowing icon chip — framer-motion pulse ring (animated boxShadow) */}
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
                    <span
                      className="ts-icon-chip-gradient"
                      aria-hidden="true"
                    >
                      <IconGlyph name={item.icon} size={22} />
                    </span>
                  </motion.div>
                  <h3
                    className="lat text-sm lg:text-[15px] font-semibold text-[var(--ts-text-primary)] tracking-tight leading-snug"
                    dir="ltr"
                  >
                    <span className="ts-gradient-text-emerald">AI</span>{" "}
                    {item.title.replace(/^AI\s+/, "")}
                  </h3>
                </div>
                <p className="relative text-sm text-[var(--ts-text-secondary)] leading-relaxed mt-1">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Governance rule footnote — frosted warm card to visually contrast
            the emerald AI grid above (signals "caution/rules") */}
        <motion.div
          variants={fadeUp}
          className="ts-card-frosted relative flex items-start gap-4 lg:gap-5 px-5 lg:px-6 py-4 lg:py-5 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(180, 83, 9, 0.07), rgba(255,255,255,0.85))",
            borderColor: "rgba(180, 83, 9, 0.22)",
          }}
        >
          {/* Warm tint halo in corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
            style={{
              background:
                "linear-gradient(90deg, rgba(180,83,9,0.10), transparent 70%)",
            }}
          />
          <span
            className="ts-icon-chip-warning shrink-0 relative"
            aria-hidden="true"
            style={{ width: 44, height: 44, borderRadius: 12 }}
          >
            <ShieldCheck size={22} strokeWidth={1.8} />
          </span>
          <div className="relative flex-1 min-w-0 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="ts-eyebrow-dot" style={{ color: "var(--ts-warm)" }}>
                قاعدة حاكمة
              </span>
              <span className="lat text-[0.6875rem] tracking-[0.22em] uppercase text-[var(--ts-text-muted)]">
                · Governance Rule
              </span>
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
