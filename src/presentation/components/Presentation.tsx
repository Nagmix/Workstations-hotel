"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./Navigation";
import { usePresentationControls } from "../hooks/usePresentationControls";
import { SLIDES } from "../data/slides";

import Slide01Cover from "./slides/Slide01Cover";
import Slide02WhyHere from "./slides/Slide02WhyHere";
import Slide03DiscoveryObjectives from "./slides/Slide03DiscoveryObjectives";
import Slide04BigPicture from "./slides/Slide04BigPicture";
import Slide05Ecosystem from "./slides/Slide05Ecosystem";
import Slide06HotelOperations from "./slides/Slide06HotelOperations";
import Slide07FnB from "./slides/Slide07FnB";
import Slide08BusinessManagement from "./slides/Slide08BusinessManagement";
import Slide09GuestExperience from "./slides/Slide09GuestExperience";
import Slide10IntelligenceAI from "./slides/Slide10IntelligenceAI";
import Slide11IntegrationLandscape from "./slides/Slide11IntegrationLandscape";
import Slide12Security from "./slides/Slide12Security";
import Slide13HowWeBuild from "./slides/Slide13HowWeBuild";
import Slide14TodayDiscovery from "./slides/Slide14TodayDiscovery";
import Slide15DiscoveryOutputs from "./slides/Slide15DiscoveryOutputs";
import Slide16DiscoveryToDelivery from "./slides/Slide16DiscoveryToDelivery";
import Slide17Closing from "./slides/Slide17Closing";

const SLIDE_COMPONENTS = [
  Slide01Cover,
  Slide02WhyHere,
  Slide03DiscoveryObjectives,
  Slide04BigPicture,
  Slide05Ecosystem,
  Slide06HotelOperations,
  Slide07FnB,
  Slide08BusinessManagement,
  Slide09GuestExperience,
  Slide10IntelligenceAI,
  Slide11IntegrationLandscape,
  Slide12Security,
  Slide13HowWeBuild,
  Slide14TodayDiscovery,
  Slide15DiscoveryOutputs,
  Slide16DiscoveryToDelivery,
  Slide17Closing,
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const total = SLIDES.length;

  const navigate = useCallback(
    (delta: number) => {
      setCurrent((c) => {
        const next = Math.min(total - 1, Math.max(0, c + delta));
        if (next !== c) {
          setDirection(delta > 0 ? 1 : -1);
        }
        return next;
      });
    },
    [total]
  );

  const goTo = useCallback(
    (i: number) => {
      setCurrent((c) => {
        const next = Math.min(total - 1, Math.max(0, c + i));
        if (next !== c) setDirection(i > 0 ? 1 : -1);
        return next;
      });
    },
    [total]
  );

  const toggleFullscreen = useCallback(() => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(() => {
        /* user denied */
      });
    } else {
      document.exitFullscreen?.().catch(() => {
        /* noop */
      });
    }
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  usePresentationControls({
    total,
    onNavigate: navigate,
    onFullscreenToggle: toggleFullscreen,
  });

  /* Touch swipe */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    if (Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx)) return;
    // RTL deck: swipe right = backward, swipe left = forward
    if (dx > 0) navigate(-1);
    else navigate(1);
  };

  /* Wheel — throttled vertical navigation */
  const wheelLock = useRef(false);
  const onWheel = (e: React.WheelEvent) => {
    if (wheelLock.current) return;
    if (Math.abs(e.deltaY) < 24 && Math.abs(e.deltaX) < 24) return;
    wheelLock.current = true;
    setTimeout(() => (wheelLock.current = false), 700);
    if (e.deltaY > 0 || e.deltaX > 0) navigate(1);
    else navigate(-1);
  };

  const CurrentSlide = SLIDE_COMPONENTS[current];

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onWheel={onWheel}
      role="region"
      aria-roledescription="presentation"
      aria-label="TAJ SABA Smart Hotel Platform — Executive Discovery"
    >
      {/* Slide stage */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction * 60,
              filter: "blur(8px)",
            }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{
              opacity: 0,
              x: direction * -60,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top-left: tiny slide indicator (section label) */}
      <div className="pointer-events-none fixed top-4 left-4 md:top-6 md:left-6 z-40 flex items-center gap-3">
        <span className="ts-slide-index text-[var(--ts-accent)] text-xs">
          {SLIDES[current].index}
        </span>
        <span className="h-px w-6 bg-[var(--ts-border-strong)]" />
        <span className="ts-eyebrow text-[var(--ts-text-muted)]">
          {SLIDES[current].eyebrowEn}
        </span>
      </div>

      {/* Navigation */}
      <Navigation
        current={current}
        total={total}
        isFullscreen={isFullscreen}
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}
