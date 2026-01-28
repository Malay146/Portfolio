"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/* ================================
   CONFIG — Change Things Here
================================ */

const DOT_CONFIG = {
  size: 2, // Dot radius
  gap: 9, // Distance between dots
  speed: 0.002, // Animation speed

  baseOpacity: 0.2,
  pulseOpacity: 0.5,

  background: "#000",

  color: "245,249,255", // RGB
  glow: {
    blur: 6,
    color: "rgba(255,255,230,0.4)",
  },

  pauseWhenHidden: true,

  mobile: {
    maxWidth: 768,
    glowBlur: 0, // Disable glow on mobile
    gap: 12,
  },
};

/* ================================
   TYPES
================================ */

interface Dot {
  x: number;
  y: number;
  phase: number;
}

/* ================================
   COMPONENT
================================ */

const DottedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let rafId: number | null = null;
    let isVisible = true;

    const isMobile =
      window.innerWidth <= DOT_CONFIG.mobile.maxWidth;

    const GAP = isMobile
      ? DOT_CONFIG.mobile.gap
      : DOT_CONFIG.gap;

    const GLOW_BLUR = isMobile
      ? DOT_CONFIG.mobile.glowBlur
      : DOT_CONFIG.glow.blur;

    /* ================================
       SETUP
    ================================ */

    const setup = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const { width, height } =
        parent.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];

      const cols = Math.floor(width / GAP);
      const rows = Math.floor(height / GAP);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          dots.push({
            x: x * GAP + GAP / 2,
            y: y * GAP + GAP / 2,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    /* ================================
       DRAW
    ================================ */

    const draw = (time: number) => {
      if (!isVisible) return;

      const width =
        canvas.width / (window.devicePixelRatio || 1);
      const height =
        canvas.height / (window.devicePixelRatio || 1);

      // Background
      ctx.fillStyle = DOT_CONFIG.background;
      ctx.fillRect(0, 0, width, height);

      // Glow
      ctx.shadowBlur = GLOW_BLUR;
      ctx.shadowColor = DOT_CONFIG.glow.color;

      const t = time * DOT_CONFIG.speed;

      for (const dot of dots) {
        const alpha =
          DOT_CONFIG.baseOpacity +
          DOT_CONFIG.pulseOpacity *
            Math.sin(t + dot.phase);

        ctx.beginPath();

        ctx.fillStyle = `rgba(${DOT_CONFIG.color},${alpha})`;

        ctx.arc(
          dot.x,
          dot.y,
          DOT_CONFIG.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.shadowBlur = 0;

      rafId = requestAnimationFrame(draw);
    };

    /* ================================
       VISIBILITY CONTROL
    ================================ */

    let observer: IntersectionObserver | null = null;

    if (DOT_CONFIG.pauseWhenHidden) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;

          if (isVisible && rafId === null) {
            rafId = requestAnimationFrame(draw);
          }

          if (!isVisible && rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        },
        { threshold: 0.05 }
      );

      observer.observe(canvas);
    }

    /* ================================
       INIT
    ================================ */

    setup();
    rafId = requestAnimationFrame(draw);

    window.addEventListener("resize", setup);

    /* ================================
       CLEANUP
    ================================ */

    return () => {
      window.removeEventListener("resize", setup);

      if (rafId !== null) cancelAnimationFrame(rafId);

      observer?.disconnect();
    };
  }, []);

  return (
    <div className="p-4 w-full h-full flex items-center justify-center">
      <div className="relative size-80 md:size-100 bg-black rounded-3xl border border-zinc-700 hover:border-zinc-500 transition-all duration-100 shadow-lg overflow-hidden flex items-center justify-center">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center">
          <div className="mx-auto mb-6 size-16 md:size-24 rounded-2xl bg-white flex items-center justify-center shadow-xl">
            <VercelLogo className="size-10 md:size-18" />
          </div>

          <div className="absolute bottom-0 flex items-center justify-between w-full bg-black px-4 py-3">
            <p className="text-gray-400 text-sm md:text-sm tracking-wide">
              The Triangle Company
            </p>

            <div className="size-8 md:size-10 rounded-full border border-zinc-700 flex items-center justify-center bg-black cursor-pointer text-white">
              →
            </div>
          </div>
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/60 to-black pointer-events-none" />
      </div>
    </div>
  );
};

export default DottedBackground;

/* ================================
   LOGO
================================ */

const VercelLogo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", className)}
    >
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
};
