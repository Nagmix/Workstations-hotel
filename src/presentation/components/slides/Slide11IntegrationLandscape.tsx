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
 * Architecture-style hub-and-spoke visualization:
 *   central platform → 8 external systems arranged radially.
 *
 * On wide screens, an SVG draws animated dashed spokes from the centre to
 * each external node. On narrow screens we collapse to a simple grid.
 */
export default function Slide11IntegrationLandscape() {
  // 8 nodes around a hub. Angle in degrees starting from top (0),
  // going clockwise. Each node positioned with CSS via --x/--y.
  const positions = INTEGRATIONS.map((node, i) => {
    const angle = (i / INTEGRATIONS.length) * Math.PI * 2 - Math.PI / 2;
    const radius = 42; // percentage from center
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius;
    return { ...node, x, y, angle, i };
  });

  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Integration Landscape"
    >
      <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="11"
            eyebrow="منظومة التكاملات"
            eyebrowEn="Integration Landscape"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-3xl"
          >
            منصة مفتوحة التكامل مع الأنظمة والأجهزة المتوافقة.
          </motion.h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 mt-2 items-center">
          {/* Hub-and-spoke diagram */}
          <motion.div
            variants={scaleIn}
            className="relative aspect-square w-full max-w-[560px] mx-auto hidden lg:block"
          >
            {/* Background grid */}
            <div className="absolute inset-0 ts-grid-bg rounded-full opacity-30" />

            {/* SVG spokes */}
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
                  stroke="var(--ts-border-strong)"
                  strokeWidth="0.25"
                  strokeDasharray="1.2 1.2"
                  variants={drawLine}
                  custom={p.i + 1}
                />
              ))}
            </svg>

            {/* Central hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
              <motion.div
                variants={scaleIn}
                custom={2}
                className="px-5 py-3 rounded-full border-2 border-[var(--ts-border-accent)] bg-[var(--ts-bg)]"
              >
                <div className="lat text-sm font-semibold text-[var(--ts-text-primary)] tracking-wider">
                  TAJ SABA
                </div>
                <div className="lat text-[0.625rem] text-[var(--ts-accent)] tracking-[0.22em]">
                  PLATFORM
                </div>
              </motion.div>
            </div>

            {/* External nodes */}
            {positions.map((p) => (
              <motion.div
                key={p.en}
                variants={scaleIn}
                custom={p.i + 3}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--ts-border-strong)] bg-[var(--ts-surface-elevated)] text-[var(--ts-accent)] group-hover:border-[var(--ts-border-accent)] transition-colors">
                    <IconGlyph name={p.icon} size={20} />
                  </div>
                  <div className="lat text-[0.625rem] text-[var(--ts-text-secondary)] tracking-wider whitespace-nowrap">
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--ts-border-strong)] bg-[var(--ts-accent-softer)] text-[var(--ts-accent)]">
                  <IconGlyph name={node.icon} size={18} />
                </div>
                <div className="lat text-[0.625rem] text-[var(--ts-text-secondary)] tracking-wider">
                  {node.en}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column — narrative */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex flex-col gap-5"
          >
            <motion.div
              variants={fadeUp}
              className="ts-card p-6"
            >
              <div className="ts-eyebrow text-[var(--ts-accent)] mb-2">
                قابلية التكامل
              </div>
              <p className="ts-body text-[var(--ts-text-secondary)] leading-relaxed">
                كل تكامل خارجي يعتمد على توفر API / SDK أو بروتوكول مناسب،
                وتوافق الجهاز، وموافقة المزود والجهة المالكة للبيانات.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { k: "مالية", v: "بوابات دفع وبنوك" },
                { k: "تشغيلية", v: "بصمة وأقفال وPOS" },
                { k: "اتصال", v: "بريد وإشعارات وSMS" },
                { k: "مؤسسية", v: "فنادق وجهات رسمية" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="p-3.5 rounded-lg border border-[var(--ts-border)] bg-[rgba(255,255,255,0.015)]"
                >
                  <div className="ts-eyebrow text-[var(--ts-accent)] mb-1">
                    {c.k}
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
