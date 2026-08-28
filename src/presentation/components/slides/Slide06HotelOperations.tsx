"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { HOTEL_OPERATIONS } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

export default function Slide06HotelOperations() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Hotel Operations"
    >
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-7">
        {/* Decorative emerald blob */}
        <div
          className="ts-blob ts-blob-emerald"
          style={{ top: -100, right: -60, width: 360, height: 360 }}
          aria-hidden
        />

        {/* Header */}
        <div className="relative flex flex-col gap-4">
          <SlideHeader
            index="06"
            eyebrow="إدارة الفندق"
            eyebrowEn="Hotel Operations"
          />
          <div className="flex items-end justify-between flex-wrap gap-3">
            <motion.h2
              variants={fadeUp}
              className="ts-h2 text-[var(--ts-text-primary)] font-semibold max-w-2xl leading-tight"
            >
              إدارة الإقامة والمنشأة من الحجز إلى المغادرة.
            </motion.h2>
            <motion.span variants={fadeUp} className="ts-pill" dir="ltr">
              <span className="lat">PMS</span>
              <span className="text-[var(--ts-text-faint)]">·</span>
              <span>Property Management System</span>
            </motion.span>
          </div>
        </div>

        {/* 5-card grid: featured first card spans 2 cols, the other 4 take 1 col each (6-col grid on lg). */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
          {HOTEL_OPERATIONS.map((item, i) => {
            const featured = i === 0;
            return (
              <motion.article
                key={item.en}
                custom={i}
                variants={blurIn}
                className={[
                  featured
                    ? "ts-card-accent lg:col-span-2 md:col-span-2 p-6 lg:p-7"
                    : "ts-card p-5 lg:p-6",
                  "group flex flex-col",
                ].join(" ")}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={featured ? "ts-icon-chip-solid" : "ts-icon-chip"}>
                    <IconGlyph name={item.icon} size={featured ? 22 : 20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="ts-h3 text-[var(--ts-text-primary)] font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <div
                      className="lat text-[11px] text-[var(--ts-text-muted)] tracking-wider mt-1"
                      dir="ltr"
                    >
                      {item.en}
                    </div>
                  </div>
                  {!featured && (
                    <span
                      className="ts-slide-index text-[var(--ts-text-faint)] text-xs ml-auto"
                      dir="ltr"
                    >
                      0{i + 1}
                    </span>
                  )}
                  {featured && (
                    <span className="ts-pill-solid ml-auto" dir="ltr">
                      Core
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-2.5 mt-auto">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-sm text-[var(--ts-text-secondary)]"
                    >
                      <span
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--ts-accent-softer)] text-[var(--ts-accent)]"
                        aria-hidden
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
      </div>
    </motion.section>
  );
}
