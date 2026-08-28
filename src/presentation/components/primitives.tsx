"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import {
  Gauge,
  Target,
  Layers,
  AlertTriangle,
  Plug,
  ShieldCheck,
  Telescope,
  Building2,
  CalendarCheck,
  ConciergeBell,
  Sparkles,
  Wrench,
  Package,
  Truck,
  Calculator,
  Users,
  UserCircle,
  MessageCircle,
  Award,
  Smartphone,
  BrainCircuit,
  BotMessageSquare,
  FileSearch,
  Boxes,
  TrendingUp,
  ShieldAlert,
  CreditCard,
  Fingerprint,
  KeyRound,
  Receipt,
  Mail,
  Globe,
  Building,
  Users2,
  ScrollText,
  Lock,
  DatabaseBackup,
  Activity,
  Workflow,
  Database,
  Server,
  ClipboardList,
  FileQuestion,
  HelpCircle,
  Ruler,
  Map,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------------------------------------
 * Icon registry — single source of truth so all slides share the
 * same icon system. Slides reference icons by string key in the
 * data file, this map resolves them.
 * --------------------------------------------------------------- */
const ICONS: Record<string, LucideIcon> = {
  Gauge,
  Target,
  Layers,
  AlertTriangle,
  Plug,
  ShieldCheck,
  Telescope,
  Building2,
  CalendarCheck,
  ConciergeBell,
  Sparkles,
  Wrench,
  Package,
  Truck,
  Calculator,
  Users,
  UserCircle,
  MessageCircle,
  Award,
  Smartphone,
  BrainCircuit,
  BotMessageSquare,
  FileSearch,
  Boxes,
  TrendingUp,
  ShieldAlert,
  CreditCard,
  Fingerprint,
  KeyRound,
  Receipt,
  Mail,
  Globe,
  Building,
  Users2,
  ScrollText,
  Lock,
  DatabaseBackup,
  Activity,
  Workflow,
  Database,
  Server,
  ClipboardList,
  FileQuestion,
  HelpCircle,
  Ruler,
  Map,
};

export function IconGlyph({
  name,
  className = "",
  size = 22,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Cmp = ICONS[name] ?? Layers;
  return <Cmp size={size} className={className} strokeWidth={1.5} />;
}

/* ---------------------------------------------------------------
 * Motion presets — cinematic but restrained.
 * --------------------------------------------------------------- */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.08 * i,
      ease: EASE_OUT,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: 0.06 * i, ease: EASE_SOFT },
  }),
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.85, delay: 0.08 * i, ease: EASE_OUT },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.08 * i, ease: EASE_OUT },
  }),
};

export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i: number = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.1, delay: 0.1 * i, ease: EASE_OUT },
      opacity: { duration: 0.3, delay: 0.1 * i },
    },
  }),
};

export const containerStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ---------------------------------------------------------------
 * Layout primitives
 * --------------------------------------------------------------- */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      variants={fadeUp}
      className={`ts-eyebrow-label ${className}`}
    >
      {children}
    </motion.span>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`ts-pill ${className}`}>{children}</span>;
}

export function SlideShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className={`slide-stage slide-pad ${className}`}
      aria-roledescription="slide"
    >
      {children}
    </motion.section>
  );
}

export function SlideHeader({
  index,
  eyebrow,
  eyebrowEn,
  align = "start",
}: {
  index: string;
  eyebrow: string;
  eyebrowEn: string;
  align?: "start" | "center";
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`flex items-center gap-4 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="ts-slide-index text-[var(--ts-accent)] text-sm">
        {index}
      </span>
      <span className="h-px w-8 bg-[var(--ts-border-strong)]" />
      <span className="ts-eyebrow text-[var(--ts-text-secondary)]">
        {eyebrow}
        <span className="mx-2 text-[var(--ts-text-faint)]">·</span>
        <span className="lat text-[var(--ts-text-muted)]">{eyebrowEn}</span>
      </span>
    </motion.div>
  );
}

export function FooterMeta() {
  return null;
}
