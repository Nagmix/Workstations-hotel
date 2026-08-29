"use client";

import { motion } from "framer-motion";
import { SectionHeading, IconGlyph, containerStagger, fadeUp, scaleIn } from "../primitives";

const PILLARS = [
  { icon:"Building2", label:"HOTEL", sub:"إدارة الفندق", items:["PMS / Rooms","Reservations","Front Desk","Housekeeping","Maintenance"] },
  { icon:"Boxes", label:"BUSINESS", sub:"إدارة الأعمال", items:["Finance","Procurement","Inventory","HR & Payroll","Reporting"] },
  { icon:"UserCircle", label:"GUEST", sub:"تجربة النزيل", items:["Booking","Payments","Services","Feedback","Loyalty"] },
] as const;

export default function Slide05Ecosystem(){
  return <motion.section initial="hidden" animate="show" exit="hidden" variants={containerStagger}
    className="slide-stage slide-pad relative overflow-hidden flex items-center">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_48%,rgba(201,168,106,.09),transparent_34%)]"/>
    <div className="relative z-10 w-full max-w-7xl mx-auto">
      <SectionHeading eyebrow="منظومة الفندق" eyebrowEn="Hotel Ecosystem" title={<>كل نقطة تشغيلية تصب في <span className="ts-gradient-text">نواة رقمية واحدة</span>.</>}/>
      <div className="relative mt-10 min-h-[520px] flex items-center justify-center">
        <div className="absolute h-[430px] w-[430px] rounded-full border border-[var(--ts-accent)]/10"/>
        <div className="absolute h-[330px] w-[330px] rounded-full border border-[var(--ts-accent)]/15"/>
        <motion.div variants={scaleIn} className="relative z-20 h-36 w-36 rounded-full border border-[var(--ts-accent)]/70 bg-[#0a0c10] flex flex-col items-center justify-center text-center shadow-[0_0_90px_rgba(201,168,106,.10)]">
          <span className="lat text-2xl tracking-[.12em] text-[var(--ts-accent-bright)]">TAJ SABA</span><span className="lat mt-2 text-[7px] tracking-[.2em] text-[var(--ts-text-muted)]">SMART HOTEL PLATFORM</span>
        </motion.div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[340px]"><Pillar p={PILLARS[0]} index={0}/></div>
        <div className="absolute bottom-0 right-0 md:right-[7%] w-[280px] md:w-[340px]"><Pillar p={PILLARS[1]} index={1}/></div>
        <div className="absolute bottom-0 left-0 md:left-[7%] w-[280px] md:w-[340px]"><Pillar p={PILLARS[2]} index={2}/></div>
        <motion.div variants={fadeUp} className="absolute right-1/2 translate-x-1/2 -bottom-1 px-5 py-2 border border-[var(--ts-border-accent)] bg-[#0a0c10]/90 text-[10px] tracking-[.2em] text-[var(--ts-accent-bright)] lat">AI · ANALYTICS · INTEGRATIONS</motion.div>
      </div>
    </div>
  </motion.section>
}

function Pillar({p,index}:{p:typeof PILLARS[number];index:number}){
 return <motion.div variants={fadeUp} className="relative border border-[var(--ts-border)] bg-white/[.035] p-5 backdrop-blur-xl">
   <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--ts-border-accent)] text-[var(--ts-accent)]"><IconGlyph name={p.icon} size={17}/></span><div><div className="lat text-xs tracking-[.18em] text-[var(--ts-accent-bright)]">{p.label}</div><div className="text-sm text-[var(--ts-text-secondary)]">{p.sub}</div></div><span className="ml-auto lat text-[9px] text-[var(--ts-text-faint)]">0{index+1}</span></div>
   <div className="mt-4 flex flex-wrap gap-1.5">{p.items.map(x=><span key={x} className="lat rounded-full border border-white/10 px-2.5 py-1 text-[9px] text-[var(--ts-text-muted)]">{x}</span>)}</div>
 </motion.div>
}
