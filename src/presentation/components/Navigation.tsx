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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-end justify-between p-4 md:p-6">
      {/* Bottom-left: progress + index */}
      <div className="pointer-events-auto flex items-center gap-3 md:gap-4">
        <div
          className="flex items-baseline gap-1.5 ts-slide-index"
          dir="ltr"
        >
          <span className="lat text-[var(--ts-text-primary)] text-sm font-semibold">
            {indexStr}
          </span>
          <span className="text-[var(--ts-text-faint)] text-xs">/</span>
          <span className="lat text-[var(--ts-text-muted)] text-xs">
            {totalStr}
          </span>
        </div>
        <div className="hidden md:block w-40 h-1 bg-[var(--ts-bg-warm)] rounded-full relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[var(--ts-accent)] rounded-full"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Center: brand (subtle) */}
      <div className="pointer-events-none hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2 bottom-5 text-[var(--ts-text-faint)]">
        <span className="lat text-[0.625rem] tracking-[0.24em] uppercase font-medium">
          {PRESENTATION_META.brand}
        </span>
        <span className="text-[var(--ts-accent)] text-[0.625rem]">·</span>
        <span className="lat text-[0.625rem] tracking-[0.24em] uppercase">
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
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--ts-border-strong)] bg-[var(--ts-surface)] text-[var(--ts-text-secondary)] shadow-[var(--ts-shadow-soft)] hover:text-[var(--ts-accent)] hover:border-[var(--ts-border-accent)] hover:shadow-[var(--ts-shadow-elevated)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
