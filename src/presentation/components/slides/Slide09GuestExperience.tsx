"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { GUEST_EXPERIENCE } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

export default function Slide09GuestExperience() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="Guest Experience"
    >
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-7">
        {/* Decorative emerald blob */}
        <div
          className="ts-blob ts-blob-emerald"
          style={{ top: -100, left: -80, width: 360, height: 360 }}
          aria-hidden
        />

        {/* Header */}
        <div className="relative flex flex-col gap-3">
          <SlideHeader
            index="09"
            eyebrow="تجربة النزيل"
            eyebrowEn="Guest Experience"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-semibold max-w-3xl leading-tight"
          >
            علاقة موحدة مع العميل، قبل الإقامة وأثناءها وبعدها.
          </motion.h2>
        </div>

        {/* 2x2 grid of HORIZONTAL cards — distinct from slide 08's vertical layout.
            ALL icons use ts-icon-chip-solid (filled emerald) to distinguish. */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {GUEST_EXPERIENCE.map((item, i) => (
            <motion.article
              key={item.en}
              custom={i}
              variants={blurIn}
              className="ts-card p-5 lg:p-6 group flex flex-row gap-4 lg:gap-5 items-start"
            >
              {/* Icon chip on right (first in RTL flow) */}
              <div
                className="ts-icon-chip-solid shrink-0"
                style={{ width: 52, height: 52, borderRadius: 14 }}
                aria-hidden
              >
                <IconGlyph name={item.icon} size={24} />
              </div>

              {/* Content fills remaining space */}
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h3 className="ts-h3 text-[var(--ts-text-primary)] font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <span
                    className="lat text-[11px] text-[var(--ts-text-muted)] tracking-wider shrink-0"
                    dir="ltr"
                  >
                    {item.en}
                  </span>
                </div>

                <ul className="flex flex-col gap-2 mt-1">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-sm text-[var(--ts-text-secondary)]"
                    >
                      <span
                        className="mt-0.5 text-[var(--ts-accent)] shrink-0"
                        aria-hidden
                      >
                        <ChevronLeft size={14} strokeWidth={2.5} />
                      </span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Customer Agent callout — premium emerald-tinted card */}
        <motion.div
          variants={fadeUp}
          className="ts-card-accent flex items-center gap-5 px-5 lg:px-6 py-4"
        >
          <div
            className="ts-icon-chip-solid shrink-0"
            style={{ width: 44, height: 44, borderRadius: 12 }}
            aria-hidden
          >
            <IconGlyph name="BotMessageSquare" size={20} />
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-1">
            <div className="ts-eyebrow-label text-[var(--ts-accent)]" dir="ltr">
              Taj Saba Customer Agent
            </div>
            <div className="text-sm text-[var(--ts-text-secondary)] leading-relaxed">
              طبقة تواصل ذكية مرتبطة ببيانات العملاء — لا مجرد Chatbot.
            </div>
          </div>
          <span className="ts-pill-solid shrink-0 hidden md:inline-flex" dir="ltr">
            AI Layer
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
