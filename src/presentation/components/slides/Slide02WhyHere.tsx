"use client";

import { motion } from "framer-motion";
import { SlideHeader } from "../primitives";
import { blurIn, containerStagger, fadeUp } from "../primitives";

export default function Slide02WhyHere() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad justify-center"
      aria-roledescription="slide"
      aria-label="Why are we here"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
        <SlideHeader
          index="02"
          eyebrow="لماذا نجتمع اليوم"
          eyebrowEn="Why are we here"
        />

        <div className="mt-6 flex items-start gap-6">
          <motion.span
            variants={fadeUp}
            className="ts-eyebrow text-[var(--ts-accent)] mt-3 shrink-0"
          >
            DISCOVERY
          </motion.span>
          <motion.h2
            variants={blurIn}
            className="ts-h1 text-[var(--ts-text-primary)] font-medium leading-[1.15]"
          >
            نحن هنا لفهم طريقة عمل فندق تاج سبأ،
            <br />
            قبل تثبيت الحل النهائي.
          </motion.h2>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-6 ts-divider max-w-3xl"
        />

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl"
        >
          {[
            {
              k: "ليس عرضًا تقنيًا",
              v: "بل جلسة لفهم مجال الفندق واحتياجاته الحقيقية.",
            },
            {
              k: "ليس تثبيتًا للنطاق",
              v: "بل تحديد دقيق لما نحتاج بناءه فعليًا.",
            },
            {
              k: "ليس إجابة نيابة عن العميل",
              v: "بل اكتشاف مشترك للمتطلبات والقيود.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              variants={fadeUp}
              className="ts-card p-5"
            >
              <div className="ts-eyebrow text-[var(--ts-accent)] mb-2">
                {item.k}
              </div>
              <p className="ts-body text-[var(--ts-text-secondary)] leading-relaxed">
                {item.v}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
