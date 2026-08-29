"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { HOTEL_OPERATIONS } from "../../data/slides";
import {
  CardIndex,
  IconBadge,
  IconGlyph,
  Ribbon,
  SectionHeading,
  StatusPill,
  Watermark,
  blurIn,
  containerStagger,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 06 — Hotel Operations (ENHANCED MODERN LIGHT)
 * 4-col bento grid layout:
 *  - Card 1 (PMS — Core): ts-card-deep (deep emerald gradient) spanning
 *    2 cols × 1 row, with ts-corner-ornament, ts-icon-chip-gradient
 *    (large 56px), ts-ribbon "CORE" badge in corner, watermark "01"
 *  - Cards 2-5: ts-bento ts-bento-accent 1-col tiles with ts-icon-chip +
 *    CardIndex markers ("02" through "05")
 *  - Each card's bullet list: small ts-icon-chip-success (filled emerald
 *    Check icon) chips
 *  - Header: SectionHeading with ts-pill-dot "5 modules" counter
 *  - Background: ts-aurora-bg + decorative ts-blob-mesh in top-right corner
 */
export default function Slide06HotelOperations() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative overflow-hidden"
      aria-roledescription="slide"
      aria-label="Hotel Operations"
    >
      {/* Background: aurora + mesh blob in top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-70"
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-mesh"
        style={{ top: -120, right: -80, width: 380, height: 380, opacity: 0.4 }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-7">
        {/* Section heading */}
        <SectionHeading
          eyebrow="إدارة الفندق"
          eyebrowEn="Hotel Operations"
          title={
            <>
              إدارة الإقامة والمنشأة من{" "}
              <span className="ts-gradient-text-emerald">الحجز إلى المغادرة</span>.
            </>
          }
          subtitle="منظومة PMS واحدة تربط الغرفة، الحجز، الاستقبال، التدبير، والصيانة."
          pill={
            <StatusPill variant="dot">
              <span className="lat">{HOTEL_OPERATIONS.length}</span>
              <span>وحدات</span>
            </StatusPill>
          }
        />

        {/* 4-col bento grid: featured PMS card spans 2 cols × 1 row */}
        <motion.div
          variants={containerStagger}
          className="ts-bento-grid"
        >
          {HOTEL_OPERATIONS.map((item, i) => {
            const featured = i === 0;
            return (
              <motion.article
                key={item.en}
                custom={i}
                variants={featured ? scaleIn : blurIn}
                className={[
                  featured
                    ? "ts-card-deep ts-corner-ornament p-6 lg:p-7 lg:col-span-2 lg:row-span-2 relative overflow-hidden"
                    : "ts-bento ts-bento-accent p-5 lg:p-6 relative",
                  "group flex flex-col",
                ].join(" ")}
              >
                {/* Featured: faint watermark "01" */}
                {featured && (
                  <Watermark
                    text="01"
                    className="-bottom-6 -left-2 text-[7rem] opacity-[0.10]"
                  />
                )}

                {/* Ribbon "CORE" badge in featured corner */}
                {featured && (
                  <Ribbon>
                    <span className="lat">CORE</span>
                  </Ribbon>
                )}

                {/* Card index for non-featured */}
                {!featured && (
                  <CardIndex index={String(i + 1).padStart(2, "0")} />
                )}

                <div className="flex items-center gap-3 mb-5">
                  {featured ? (
                    <IconBadge variant="gradient" size="lg">
                      <IconGlyph name={item.icon} size={26} />
                    </IconBadge>
                  ) : (
                    <span className="ts-icon-chip">
                      <IconGlyph name={item.icon} size={20} />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
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
                        "lat text-[11px] tracking-wider mt-1",
                        featured
                          ? "text-white/70"
                          : "text-[var(--ts-text-muted)]",
                      ].join(" ")}
                      dir="ltr"
                    >
                      {item.en}
                    </div>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 mt-auto">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-sm text-[var(--ts-text-secondary)]"
                      style={featured ? { color: "rgba(255,255,255,0.85)" } : undefined}
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
        </motion.div>
      </div>
    </motion.section>
  );
}
