"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { PRESENTATION_META } from "../data/slides";

interface NavigationProps {
  current: number;
  total: number;
  isFullscreen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
}

export default function Navigation({
  current,
  total,
  isFullscreen,
  onPrev,
  onNext,
  onToggleFullscreen,
}: NavigationProps) {
  const progress = ((current + 1) / total) * 100;
  const indexStr = String(current + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-end justify-between p-5 md:p-7">
      {/* Bottom-left: progress + index */}
      <div className="pointer-events-auto flex items-center gap-3 md:gap-4">
        <div
          className="flex items-baseline gap-1.5 ts-slide-index"
          dir="ltr"
        >
          <span className="lat text-[var(--ts-text-primary)] text-base font-bold">
            {indexStr}
          </span>
          <span className="text-[var(--ts-text-faint)] text-sm font-medium">/</span>
          <span className="lat text-[var(--ts-text-muted)] text-sm font-semibold">
            {totalStr}
          </span>
        </div>
        <div className="hidden md:block w-44 h-1.5 bg-[var(--ts-surface-sunk)] rounded-full relative overflow-hidden border border-[var(--ts-border)]">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--ts-accent-bright), var(--ts-accent))",
              boxShadow: "0 0 8px rgba(14, 124, 112, 0.35)",
            }}
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Center: brand (subtle) */}
      <div className="pointer-events-none hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2 bottom-6 text-[var(--ts-text-faint)]">
        <span className="lat text-[0.6875rem] tracking-[0.28em] uppercase font-bold text-[var(--ts-text-secondary)]">
          {PRESENTATION_META.brand}
        </span>
        <span className="text-[var(--ts-accent)] text-xs">·</span>
        <span className="lat text-[0.6875rem] tracking-[0.24em] uppercase font-medium">
          {PRESENTATION_META.brandSub}
        </span>
      </div>

      {/* Bottom-right: controls */}
      <div className="pointer-events-auto flex items-center gap-2">
        <NavButton onClick={onPrev} disabled={current === 0} label="السابق">
          <ChevronRight size={16} />
        </NavButton>
        <NavButton onClick={onNext} disabled={current === total - 1} label="التالي">
          <ChevronLeft size={16} />
        </NavButton>
        <NavButton onClick={onToggleFullscreen} label="ملء الشاشة">
          {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
        </NavButton>
      </div>
    </div>
  );
}

function NavButton({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ts-border-strong)] bg-[var(--ts-surface)] text-[var(--ts-text-secondary)] shadow-[var(--ts-shadow-soft)] hover:text-[var(--ts-accent)] hover:border-[var(--ts-border-accent)] hover:shadow-[var(--ts-shadow-elevated)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[var(--ts-shadow-soft)]"
    >
      {children}
    </button>
  );
}
