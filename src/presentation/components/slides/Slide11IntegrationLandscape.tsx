"use client";

import { motion } from "framer-motion";
import { INTEGRATIONS } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 11 — Integration Landscape (hub-and-spoke)
 *
 * Central deep-emerald hub (TAJ SABA PLATFORM) with 8 integration
 * nodes arranged radially around it. SVG spokes animate in with
 * drawLine, the hub uses ts-card-inverse, each node is a small ts-card
 * with an emerald-tinted icon chip.
 */
export default function Slide11IntegrationLandscape() {
  const positions = INTEGRATIONS.map((node, i) => {
    const angle = (i / INTEGRATIONS.length) * Math.PI * 2 - Math.PI / 2;
    const radius = 38;
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius;
    return { ...node, x, y, i };
  });

  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage stage-top slide-pad"
      aria-roledescription="slide"
      aria-label="Integration Landscape"
    >
      <div className="flex flex-col gap-5 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="11"
            eyebrow="منظومة التكاملات"
            eyebrowEn="Integration Landscape"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] max-w-3xl"
          >
            منصة مفتوحة التكامل مع الأنظمة والأجهزة المتوافقة.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 items-center">
          {/* Hub-and-spoke diagram (desktop) */}
          <motion.div
            variants={scaleIn}
            className="relative aspect-square w-full max-w-[540px] mx-auto hidden lg:block"
          >
            {/* Dot-grid background */}
            <div className="absolute inset-0 ts-dot-bg rounded-full opacity-60" />
            {/* Concentric guide rings */}
            <div className="absolute inset-[8%] rounded-full border border-dashed border-[var(--ts-border-faint)]" />
            <div className="absolute inset-[24%] rounded-full border border-dashed border-[var(--ts-border-faint)]" />

            {/* SVG spokes — emerald, animated */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {positions.map((p) => (
                <motion.line
                  key={`spoke-${p.en}`}
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke="var(--ts-accent)"
                  strokeWidth="0.25"
                  strokeOpacity="0.55"
                  strokeDasharray="1.2 1.4"
                  variants={drawLine}
                  custom={p.i + 1}
                />
              ))}
            </svg>

            {/* Central hub — deep emerald inverse card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                variants={scaleIn}
                custom={2}
                className="ts-card-inverse px-5 py-3.5 text-center rounded-2xl min-w-[140px]"
              >
                <div className="lat text-sm font-semibold tracking-[0.18em] text-white">
                  TAJ SABA
                </div>
                <div className="lat text-[0.6rem] text-emerald-100 tracking-[0.24em] mt-0.5">
                  PLATFORM
                </div>
                <div className="text-[0.5625rem] text-emerald-200/80 mt-1.5">
                  محور التكامل
                </div>
              </motion.div>
            </div>

            {/* External nodes — each a small ts-card */}
            {positions.map((p) => (
              <motion.div
                key={p.en}
                variants={scaleIn}
                custom={p.i + 3}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <div className="ts-card px-2.5 py-2.5 flex flex-col items-center gap-1.5 w-[104px] text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--ts-accent-tint)] border border-[var(--ts-border-accent)] text-[var(--ts-accent)]">
                    <IconGlyph name={p.icon} size={16} />
                  </div>
                  <div className="text-[0.6875rem] font-medium text-[var(--ts-text-primary)] leading-tight">
                    {p.title}
                  </div>
                  <div className="lat text-[0.5625rem] text-[var(--ts-text-muted)] tracking-wider whitespace-nowrap">
                    {p.en}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: grid fallback */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
            {INTEGRATIONS.map((node, i) => (
              <motion.div
                key={node.en}
                variants={scaleIn}
                custom={i + 1}
                className="ts-card p-4 flex flex-col items-center gap-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--ts-accent-tint)] border border-[var(--ts-border-accent)] text-[var(--ts-accent)]">
                  <IconGlyph name={node.icon} size={18} />
                </div>
                <div className="text-xs font-medium text-[var(--ts-text-primary)] leading-tight">
                  {node.title}
                </div>
                <div className="lat text-[0.5625rem] text-[var(--ts-text-muted)] tracking-wider">
                  {node.en}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column — narrative */}
          <motion.div variants={fadeUp} custom={2} className="flex flex-col gap-4">
            <motion.div variants={fadeUp} className="ts-card-accent p-5 lg:p-6">
              <div className="ts-eyebrow text-[var(--ts-accent)] mb-2">
                قابلية التكامل
              </div>
              <p className="ts-body text-[var(--ts-text-primary)] leading-relaxed">
                كل تكامل خارجي يعتمد على توفر API / SDK أو بروتوكول مناسب،
                وتوافق الجهاز، وموافقة المزود والجهة المالكة للبيانات.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={3} className="grid grid-cols-2 gap-3">
              {[
                { k: "مالية", v: "بوابات دفع وبنوك" },
                { k: "تشغيلية", v: "بصمة وأقفال وPOS" },
                { k: "اتصال", v: "بريد وإشعارات وSMS" },
                { k: "مؤسسية", v: "فنادق وجهات رسمية" },
              ].map((c) => (
                <div key={c.k} className="ts-card p-3.5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1 h-3 bg-[var(--ts-accent)] rounded-full" />
                    <span className="ts-eyebrow text-[var(--ts-accent)]">
                      {c.k}
                    </span>
                  </div>
                  <div className="text-xs text-[var(--ts-text-secondary)] leading-relaxed">
                    {c.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
