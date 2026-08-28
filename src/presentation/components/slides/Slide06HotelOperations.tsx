"use client";

import { motion } from "framer-motion";
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
      <div className="flex flex-col gap-7 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="06"
            eyebrow="إدارة الفندق"
            eyebrowEn="Hotel Operations"
          />
          <div className="flex items-end justify-between flex-wrap gap-3">
            <motion.h2
              variants={fadeUp}
              className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-2xl"
            >
              إدارة الإقامة والمنشأة من الحجز إلى المغادرة.
            </motion.h2>
            <motion.span
              variants={fadeUp}
              className="ts-pill"
            >
              PMS · Property Management System
            </motion.span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {HOTEL_OPERATIONS.map((item, i) => (
            <motion.article
              key={item.en}
              custom={i}
              variants={blurIn}
              className={`ts-card p-6 group ${
                i === HOTEL_OPERATIONS.length - 1
                  ? "lg:col-start-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--ts-border-strong)] bg-[var(--ts-accent-softer)] text-[var(--ts-accent)]">
                  <IconGlyph name={item.icon} size={20} />
                </div>
                <div>
                  <h3 className="ts-h3 text-[var(--ts-text-primary)] font-semibold">
                    {item.title}
                  </h3>
                  <div className="lat text-xs text-[var(--ts-text-muted)] tracking-wider">
                    {item.en}
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2.5">
                {item.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-sm text-[var(--ts-text-secondary)]"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--ts-accent)] shrink-0" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
