"use client";

import { motion } from "framer-motion";
import {
  BIG_PICTURE_AFTER,
  BIG_PICTURE_BEFORE,
} from "../../data/slides";
import {
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
  scaleIn,
} from "../primitives";

export default function Slide04BigPicture() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad"
      aria-roledescription="slide"
      aria-label="The Big Picture"
    >
      <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="04"
            eyebrow="الصورة الكبرى"
            eyebrowEn="The Big Picture"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium mt-2 max-w-3xl"
          >
            من إجراءات متفرقة إلى منظومة موحدة، مترابطة، قابلة للقياس.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-6 lg:gap-10 items-center mt-2">
          {/* BEFORE — scattered systems */}
          <motion.div
            variants={blurIn}
            className="ts-card-raised p-6 lg:p-8 relative"
          >
            <div className="ts-eyebrow text-[var(--ts-text-muted)] mb-4">
              Before · واقع اليوم
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {BIG_PICTURE_BEFORE.map((label, i) => (
                <motion.div
                  key={label}
                  custom={i + 1}
                  variants={fadeUp}
                  className="px-3 py-2.5 rounded-md border border-[var(--ts-border)] bg-[rgba(255,255,255,0.015)] text-center"
                >
                  <span className="text-sm text-[var(--ts-text-secondary)]">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-xs text-[var(--ts-text-faint)] leading-relaxed">
              أنظمة منفصلة، إدخال يدوي مكرر، تقارير متأخرة، رؤية جزئية للأداء.
            </div>
          </motion.div>

          {/* Arrow connector */}
          <motion.div
            variants={scaleIn}
            className="flex items-center justify-center"
            dir="rtl"
          >
            <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              fill="none"
              className="hidden lg:block"
            >
              <motion.line
                x1="110"
                y1="20"
                x2="20"
                y2="20"
                stroke="url(#bg-arrow)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                variants={fadeUp}
              />
              <motion.path
                d="M 30 12 L 18 20 L 30 28"
                stroke="var(--ts-accent)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={fadeUp}
                custom={2}
              />
              <defs>
                <linearGradient
                  id="bg-arrow"
                  x1="0"
                  y1="0"
                  x2="120"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--ts-accent)" stopOpacity="0" />
                  <stop offset="0.5" stopColor="var(--ts-accent)" stopOpacity="0.6" />
                  <stop offset="1" stopColor="var(--ts-accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="lg:hidden flex flex-col items-center gap-2">
              <span className="text-[var(--ts-accent)] text-2xl">↓</span>
            </div>
          </motion.div>

          {/* AFTER — unified platform */}
          <motion.div
            variants={blurIn}
            className="relative p-6 lg:p-8 rounded-[var(--radius-lg)] border border-[var(--ts-border-accent)] bg-gradient-to-br from-[var(--ts-accent-softer)] to-transparent"
          >
            <div className="ts-eyebrow text-[var(--ts-accent)] mb-4">
              After · منصة موحدة
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="text-center">
                <div className="lat text-[var(--ts-accent-bright-text)] text-sm tracking-[0.2em] font-semibold">
                  TAJ SABA
                </div>
                <div className="lat text-[var(--ts-text-muted)] text-[0.625rem] tracking-[0.18em]">
                  SMART HOTEL PLATFORM
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {BIG_PICTURE_AFTER.map((p, i) => (
                <motion.div
                  key={p.label}
                  custom={i + 2}
                  variants={scaleIn}
                  className="flex flex-col items-center text-center p-4 rounded-xl border border-[var(--ts-border-strong)] bg-[rgba(255,255,255,0.02)]"
                >
                  <div className="lat text-sm font-semibold text-[var(--ts-text-primary)] tracking-wider mb-1">
                    {p.label}
                  </div>
                  <div className="text-xs text-[var(--ts-text-secondary)]">
                    {p.sub}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-xs text-[var(--ts-accent-bright-text)] leading-relaxed">
              منظومة واحدة تربط الإقامة والمطعم والمخزون والمالية والموارد
              البشرية وتجربة النزيل.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
