"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BUSINESS_MANAGEMENT, PRESENTATION_META } from "../../data/slides";
import {
  CardIndex,
  ConnectorArrow,
  IconBadge,
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
 * Slide 08 — Business Management (ENHANCED MODERN LIGHT)
 *
 * 2x2 grid:
 *  - Card 1 (Smart Inventory): ts-card-deep (deep emerald gradient) +
 *    ts-icon-chip-gradient (large) + ts-corner-ornament to break monotony.
 *  - Cards 2-4: ts-bento ts-bento-accent + ts-icon-chip
 *  - Each card: icon chip top-right (RTL), title + en label,
 *    4-point bullet list using ts-icon-chip-success (small filled emerald
 *    Check chips)
 *  - Watermark of card number "01"-"04" large and faint in card background
 *  - Bottom strip: ts-card-mesh with ConnectorArrow icon (RTL flow direction)
 *    + ts-eyebrow-dot "ربط العمليات" + operational chain rendered with
 *    ConnectorArrow chips between each word
 *  - ts-blob-warm amber blob in bottom-left + ts-aurora-bg ambient
 *  - Header: SectionHeading
 */

const OPERATIONAL_CHAIN = [
  "شراء",
  "تخزين",
  "استهلاك/تحويل",
  "بيع",
  "تكلفة",
  "إيراد",
  "نتيجة مالية",
];

export default function Slide08BusinessManagement() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Business Management"
    >
      {/* Ambient: warm blob bottom-left + aurora overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-65"
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-warm ts-float-slow"
        style={{
          bottom: -140,
          left: -100,
          width: 420,
          height: 420,
          opacity: 0.55,
        }}
      />

      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-6">
        {/* Section heading */}
        <SectionHeading
          eyebrow="إدارة الأعمال"
          eyebrowEn="Business Management"
          title={
            <>
              المخزون والمشتريات والمالية والموارد البشرية في{" "}
              <span className="ts-gradient-text-emerald">
                دورة واحدة مترابطة
              </span>
              .
            </>
          }
          subtitle="من الطلب حتى الإيراد — كل عملية تترك أثرًا في المالية والرواتب."
          pill={
            <StatusPill variant="dot">
              <span className="lat">{BUSINESS_MANAGEMENT.length}</span>
              <span>محاور</span>
            </StatusPill>
          }
        />

        {/* 2×2 grid: featured + bento cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {BUSINESS_MANAGEMENT.map((item, i) => {
            const featured = i === 0;
            const cardIndex = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={item.en}
                custom={i}
                variants={blurIn}
                className={[
                  featured
                    ? "ts-card-deep ts-corner-ornament p-6 lg:p-7"
                    : "ts-bento ts-bento-accent p-5 lg:p-6",
                  "group flex flex-col relative overflow-hidden",
                ].join(" ")}
              >
                {/* Faint card-number watermark in background */}
                <Watermark
                  text={cardIndex}
                  className="-bottom-5 -left-2 text-[6.5rem] opacity-[0.05]"
                />

                {/* Header row: icon chip top-right (RTL = first in DOM order),
                    title + en label fills space, card index on the far side */}
                <div className="relative flex items-start gap-3 mb-5">
                  <div className="flex-1 min-w-0">
                    <h3
                      className="ts-h3 font-semibold leading-tight"
                      style={
                        featured
                          ? { color: "var(--ts-text-inverse)" }
                          : { color: "var(--ts-text-primary)" }
                      }
                    >
                      {item.title}
                    </h3>
                    <div
                      className={[
                        "lat text-xs tracking-wider mt-1",
                        featured
                          ? "text-white/70"
                          : "text-[var(--ts-text-muted)]",
                      ].join(" ")}
                      dir="ltr"
                    >
                      {item.en}
                    </div>
                  </div>
                  {featured ? (
                    <IconBadge variant="gradient" size="lg">
                      <IconGlyph name={item.icon} size={26} />
                    </IconBadge>
                  ) : (
                    <>
                      <span className="ts-icon-chip" aria-hidden="true">
                        <IconGlyph name={item.icon} size={22} />
                      </span>
                      <CardIndex index={cardIndex} />
                    </>
                  )}
                </div>

                <ul className="relative flex flex-col gap-2.5 mt-auto">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-sm"
                      style={
                        featured
                          ? { color: "rgba(255,255,255,0.88)" }
                          : { color: "var(--ts-text-secondary)" }
                      }
                    >
                      <span
                        className="ts-icon-chip-success !w-4 !h-4 !rounded-full mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom strip: ts-card-mesh with ConnectorArrow + operational chain */}
        <motion.div
          variants={fadeUp}
          className="ts-card-mesh relative p-5 lg:p-6"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 rounded-l-[var(--radius-lg)]"
            style={{
              background:
                "linear-gradient(90deg, rgba(15,118,110,0.06), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <span
                className="ts-icon-chip-gradient"
                aria-hidden="true"
              >
                <ConnectorArrow size={18} />
              </span>
              <div className="flex flex-col gap-1">
                <span className="ts-eyebrow-dot">ربط العمليات</span>
                <span className="lat text-[10px] text-[var(--ts-text-muted)] tracking-wider">
                  · Operational Chain
                </span>
              </div>
            </div>

            {/* Operational chain rendered with ConnectorArrow chips between */}
            <div
              className="flex flex-wrap items-center gap-1.5 md:gap-2 md:mr-auto"
              dir="rtl"
            >
              {OPERATIONAL_CHAIN.map((word, idx) => (
                <Fragment key={word}>
                  <span className="px-2.5 py-1 rounded-md border border-[var(--ts-border)] bg-[var(--ts-surface)] text-[var(--ts-text-secondary)] text-xs ts-hover-lift">
                    {word}
                  </span>
                  {idx < OPERATIONAL_CHAIN.length - 1 && (
                    <ConnectorArrow
                      size={14}
                      className="!w-5 !h-5 text-[var(--ts-accent)]"
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
