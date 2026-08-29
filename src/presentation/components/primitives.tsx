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
      <span className="ts-slide-index lat text-[var(--ts-accent)] text-sm font-bold tracking-widest">
        {index}
      </span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--ts-accent)] opacity-70" />
      <span className="ts-eyebrow text-[var(--ts-text-secondary)] font-semibold">
        {eyebrow}
        <span className="mx-2 text-[var(--ts-text-faint)]">·</span>
        <span className="lat text-[var(--ts-text-muted)] font-medium">{eyebrowEn}</span>
      </span>
    </motion.div>
  );
}

export function FooterMeta() {
  return null;
}

/* ---------------------------------------------------------------
 * ENHANCED PRIMITIVES — Modern 2025 patterns
 * KPI blocks, status pills, icon badges, section headings
 * --------------------------------------------------------------- */

/* Status pill with semantic variants */
type PillVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "solid"
  | "dot";

const PILL_CLASS: Record<PillVariant, string> = {
  default: "ts-pill",
  success: "ts-pill-success",
  warning: "ts-pill-warning",
  danger: "ts-pill-danger",
  info: "ts-pill-info",
  neutral: "ts-pill-neutral",
  solid: "ts-pill-solid",
  dot: "ts-pill-dot",
};

export function StatusPill({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: PillVariant;
  className?: string;
}) {
  return (
    <span className={`${PILL_CLASS[variant]} ${className}`}>{children}</span>
  );
}

/* Section heading — eyebrow + title + optional pill, all in one block */
export function SectionHeading({
  eyebrow,
  eyebrowEn,
  title,
  subtitle,
  pill,
  align = "start",
}: {
  eyebrow: string;
  eyebrowEn?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  pill?: ReactNode;
  align?: "start" | "center";
}) {
  const isCenter = align === "center";
  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start"
      }`}
    >
      <div className="flex items-center gap-3 flex-wrap">
        <span className="ts-eyebrow-dot">{eyebrow}</span>
        {eyebrowEn && (
          <span className="lat text-[0.6875rem] tracking-[0.22em] uppercase text-[var(--ts-text-muted)] font-semibold">
            · {eyebrowEn}
          </span>
        )}
        {pill && <span>{pill}</span>}
      </div>
      <motion.h2
        variants={fadeUp}
        className="ts-h2 text-[var(--ts-text-primary)] ts-text-balance max-w-3xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`ts-body-lg text-[var(--ts-text-secondary)] max-w-2xl leading-relaxed ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

/* Stat block — KPI metric with optional trend pill */
export function StatBlock({
  value,
  label,
  labelEn,
  trend,
  trendVariant = "success",
  icon,
  className = "",
}: {
  value: string;
  label: string;
  labelEn?: string;
  trend?: string;
  trendVariant?: "success" | "warning" | "danger" | "info";
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`ts-card ts-card-accent-bar p-5 flex flex-col gap-3 ${className}`}
    >
      <div className="flex items-center justify-between">
        {icon ? <span>{icon}</span> : <span className="h-8 w-8" />}
        {trend && (
          <span className={`ts-pill-dot ${trendVariant}`}>
            <span className="lat text-[0.6875rem] font-semibold">{trend}</span>
          </span>
        )}
      </div>
      <div className="ts-kpi-sm ts-gradient-text-emerald lat">{value}</div>
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-sm font-semibold text-[var(--ts-text-primary)]">
          {label}
        </span>
        {labelEn && (
          <span className="lat text-xs text-[var(--ts-text-muted)]">
            · {labelEn}
          </span>
        )}
      </div>
    </motion.div>
  );
}

/* Floating badge ("Most Popular" style — sits above a card edge) */
export function FloatingBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`ts-floating-badge ${className}`}>{children}</span>
  );
}

/* Ribbon badge (top-right corner) */
export function Ribbon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`ts-ribbon ${className}`}>{children}</span>;
}

/* Icon badge — large decorative with optional floating accent */
export function IconBadge({
  children,
  size = "md",
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "solid" | "gradient" | "glow";
  className?: string;
}) {
  const sizeClass =
    size === "lg" ? "ts-icon-chip-lg" : size === "sm" ? "" : "";
  const variantClass =
    variant === "solid"
      ? "ts-icon-chip-solid"
      : variant === "gradient"
        ? "ts-icon-chip-gradient"
        : variant === "glow"
          ? "ts-icon-chip-glow"
          : "ts-icon-chip";
  return (
    <span className={`${variantClass} ${sizeClass} ${className}`}>
      {children}
    </span>
  );
}

/* Gradient text — reusable */
export function GradientText({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "emerald" | "warm" | "mesh" | "animated";
  className?: string;
}) {
  const cls =
    variant === "emerald"
      ? "ts-gradient-text-emerald"
      : variant === "warm"
        ? "ts-gradient-text-warm"
        : variant === "mesh"
          ? "ts-gradient-text-mesh"
          : variant === "animated"
            ? "ts-gradient-animated"
            : "ts-gradient-text";
  return <span className={`${cls} ${className}`}>{children}</span>;
}

/* Card index marker (corner) */
export function CardIndex({
  index,
  className = "",
}: {
  index: string;
  className?: string;
}) {
  return (
    <span className={`ts-card-number lat ${className}`} dir="ltr">
      {index}
    </span>
  );
}

/* Watermark (large faint number in background) */
export function Watermark({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`ts-watermark lat ${className}`}
      aria-hidden="true"
      dir="ltr"
    >
      {text}
    </span>
  );
}

/* Divider — with center ornament */
export function Divider({
  variant = "default",
  className = "",
  children,
}: {
  variant?: "default" | "dot" | "x" | "accent";
  className?: string;
  children?: ReactNode;
}) {
  if (variant === "x") {
    return (
      <div className={`ts-divider-x ${className}`}>
        <span className="text-[var(--ts-accent)] text-sm">×</span>
      </div>
    );
  }
  if (variant === "dot") {
    return <div className={`ts-divider-dot ${className}`} />;
  }
  if (variant === "accent") {
    return <div className={`ts-divider-accent ${className}`} />;
  }
  return <div className={`ts-divider ${className}`} />;
}

/* Connector arrow chip (for RTL flow direction) */
export function ConnectorArrow({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span className={`ts-arrow-connector ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </span>
  );
}

/* Bento card wrapper */
export function BentoCard({
  children,
  className = "",
  accent = false,
  index,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  index?: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      className={`ts-bento ${accent ? "ts-bento-accent" : ""} p-5 lg:p-6 ${
        index ? "relative" : ""
      } ${className}`}
    >
      {index && <CardIndex index={index} />}
      {children}
    </motion.div>
  );
}

/* Slide top brand chip — small lockup for slide top corners */
export function SlideBrandChip({
  brand,
  date,
}: {
  brand: string;
  date: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="absolute top-6 right-6 lg:top-8 lg:right-8 z-20 flex items-center gap-3"
    >
      <span className="lat text-[0.6875rem] tracking-[0.24em] uppercase font-bold text-[var(--ts-text-primary)]">
        {brand}
      </span>
      <span className="h-3 w-px bg-[var(--ts-border-strong)]" />
      <span className="lat text-[0.6875rem] tracking-[0.18em] text-[var(--ts-text-muted)] ts-mono font-medium">
        {date}
      </span>
    </motion.div>
  );
}
