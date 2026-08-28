"use client";

import { motion } from "framer-motion";
import {
  SlideHeader,
  blurIn,
  containerStagger,
  drawLine,
  fadeUp,
  scaleIn,
} from "../primitives";

const PILLARS = [
  {
    label: "HOTEL",
    sub: "إدارة الفندق",
    items: ["PMS / Rooms", "Reservations", "Front Desk", "Housekeeping", "Maintenance"],
  },
  {
    label: "BUSINESS",
    sub: "إدارة الأعمال",
    items: ["Finance", "Procurement", "Inventory", "HR & Payroll", "Reporting"],
  },
  {
    label: "GUEST",
    sub: "تجربة النزيل",
    items: ["Booking", "Payments", "Services", "Feedback", "Loyalty"],
  },
];

export default function Slide05Ecosystem() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage stage-top slide-pad"
      aria-roledescription="slide"
      aria-label="Hotel Ecosystem"
    >
      <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="05"
            eyebrow="منظومة الفندق"
            eyebrowEn="Hotel Ecosystem"
          />
          <motion.h2
            variants={fadeUp}
            className="ts-h2 text-[var(--ts-text-primary)] font-medium mt-2"
          >
            ثلاثة محاور تشغيلية تحت طبقة ذكاء واحدة.
          </motion.h2>
        </div>

        <div className="relative flex-1 flex flex-col gap-4 mt-2">
          {/* Top layer: AI + Automation */}
          <motion.div
            variants={scaleIn}
            className="relative mx-auto w-full max-w-5xl px-6 py-3.5 rounded-full border border-[var(--ts-border-accent)] bg-gradient-to-r from-transparent via-[var(--ts-accent-softer)] to-transparent flex items-center justify-center gap-3"
          >
            <span className="ts-eyebrow text-[var(--ts-accent)]">AI</span>
            <span className="text-[var(--ts-text-muted)] text-xs">+</span>
            <span className="ts-eyebrow text-[var(--ts-accent)]">
              AUTOMATION
            </span>
            <span className="text-[var(--ts-text-faint)] text-[0.6875rem]">
              طبقة ذكاء فوق العمليات والصلاحيات
            </span>
          </motion.div>

          {/* Center: brand hub */}
          <motion.div
            variants={blurIn}
            className="relative mx-auto w-full max-w-3xl py-5 px-6 rounded-[var(--radius-xl)] border-2 border-[var(--ts-border-accent)] bg-gradient-to-b from-[var(--ts-surface-elevated)] to-[var(--ts-surface)] text-center"
          >
            <div className="lat text-2xl font-semibold tracking-tight text-[var(--ts-text-primary)]">
              TAJ SABA
            </div>
            <div className="lat text-xs tracking-[0.32em] text-[var(--ts-accent)] mt-1">
              SMART HOTEL PLATFORM
            </div>
            <div className="text-xs text-[var(--ts-text-muted)] mt-1">
              طبقة تشغيل رقمية موحدة
            </div>

            {/* Connector line downward to pillars */}
            <svg
              className="absolute -bottom-3 left-1/2 -translate-x-1/2"
              width="2"
              height="14"
              viewBox="0 0 2 14"
            >
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="14"
                stroke="var(--ts-border-accent)"
                strokeWidth="1.5"
                variants={drawLine}
              />
            </svg>
          </motion.div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                custom={i + 1}
                variants={scaleIn}
                className="ts-card p-5 lg:p-6"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="lat text-base font-semibold tracking-wider text-[var(--ts-accent-bright-text)]">
                    {p.label}
                  </span>
                  <span className="text-sm text-[var(--ts-text-secondary)]">
                    {p.sub}
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 text-sm text-[var(--ts-text-secondary)]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--ts-accent)]" />
                      <span className="lat">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom layer: External integrations */}
          <motion.div
            variants={scaleIn}
            custom={2}
            className="relative mx-auto w-full max-w-5xl px-6 py-3.5 rounded-full border border-[var(--ts-border-strong)] bg-[var(--ts-surface)]/60 flex items-center justify-center gap-3"
          >
            <span className="ts-eyebrow text-[var(--ts-text-secondary)]">
              EXTERNAL INTEGRATIONS
            </span>
            <span className="text-[var(--ts-text-faint)] text-[0.6875rem]">
              بنوك · بصمة · أقفال · جهات رسمية · فنادق أخرى
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
