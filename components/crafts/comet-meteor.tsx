"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef } from "react";

/* ------------------------------
   Configuration
-------------------------------*/
const METEOR_CONFIG = {
  count: 30,
  speed: {
    min: 0.0004,
    max: 0.0012,
  },
  length: {
    min: 60,
    max: 100,
  },
  trail: 0.15,
  glow: 18,
  opacity: {
    min: 0.3,
    max: 0.7,
  },
  // Spawn area as percentage of canvas (0-1)
  spawnArea: {
    widthPercent: 0.8,
    heightPercent: 0.6,
  },
  // Movement multiplier
  travelDistance: 1.7,
} as const;

const CARD_CONFIG = {
  title: "The Triangle Company",
  logo: VercelLogo,
  logoSize: "size-18",
  logoContainerSize: "w-24 h-24",
} as const;

/* ------------------------------
   Types
-------------------------------*/
interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  progress: number;
  opacity: number;
}

interface CanvasSize {
  width: number;
  height: number;
}

/* ------------------------------
   Utilities
-------------------------------*/
const easeOutQuint = (t: number): number => 1 - Math.pow(1 - t, 5);

const random = (min: number, max: number): number =>
  min + Math.random() * (max - min);

/* ------------------------------
   Meteor Animation Hook
-------------------------------*/
const useMeteorAnimation = (
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = window.devicePixelRatio || 1;
    const size: CanvasSize = { width: 0, height: 0 };
    const meteors: Meteor[] = [];
    let rafId: number | null = null;
    let isVisible = true;

    /* Resize Handler */
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      size.width = rect.width;
      size.height = rect.height;
      canvas.width = size.width * DPR;
      canvas.height = size.height * DPR;
      ctx.resetTransform();
      ctx.scale(DPR, DPR);
    };

    /* Create Meteor */
    const createMeteor = (): Meteor => ({
      x: random(
        (-size.width * METEOR_CONFIG.spawnArea.widthPercent) / 2,
        (size.width * METEOR_CONFIG.spawnArea.widthPercent) / 2,
      ),
      y: random(
        (-size.height * METEOR_CONFIG.spawnArea.heightPercent) / 2,
        (size.height * METEOR_CONFIG.spawnArea.heightPercent) / 2,
      ),
      length: random(METEOR_CONFIG.length.min, METEOR_CONFIG.length.max),
      speed: random(METEOR_CONFIG.speed.min, METEOR_CONFIG.speed.max),
      progress: Math.random(),
      opacity: random(METEOR_CONFIG.opacity.min, METEOR_CONFIG.opacity.max),
    });

    /* Draw Meteor */
    const drawMeteor = (meteor: Meteor) => {
      const t = easeOutQuint(meteor.progress);
      const dx = size.width * METEOR_CONFIG.travelDistance * t;
      const dy = size.height * METEOR_CONFIG.travelDistance * t;
      const startX = meteor.x + dx;
      const startY = meteor.y + dy;
      const endX = startX - meteor.length;
      const endY = startY - meteor.length;
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
      gradient.addColorStop(
        0.7,
        `rgba(200, 220, 255, ${meteor.opacity * 0.7})`,
      );
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.6;
      ctx.shadowBlur = METEOR_CONFIG.glow;
      ctx.shadowColor = "rgba(180, 210, 255, 0.7)";
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    /* Animation Loop */
    const animate = () => {
      if (!isVisible) return;
      ctx.fillStyle = `rgba(0, 0, 0, ${METEOR_CONFIG.trail})`;
      ctx.fillRect(0, 0, size.width, size.height);
      meteors.forEach((meteor) => {
        meteor.progress += meteor.speed;
        if (meteor.progress >= 1) {
          Object.assign(meteor, createMeteor());
          meteor.progress = 0;
        } else {
          drawMeteor(meteor);
        }
      });
      rafId = requestAnimationFrame(animate);
    };

    /* IntersectionObserver to pause/resume animation */
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          if (rafId === null) animate();
        } else {
          if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    /* Initialize */
    handleResize();
    window.addEventListener("resize", handleResize);
    for (let i = 0; i < METEOR_CONFIG.count; i++) {
      meteors.push(createMeteor());
    }
    animate();

    /* Cleanup */
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [canvasRef]);
};

/* ------------------------------
   Main Component
-------------------------------*/
export default function MeteorCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useMeteorAnimation(canvasRef);

  return (
    <div className="flex flex-col border border-zinc-300 dark:border-zinc-700 bg-neutral-900 text-white rounded-3xl p-2 m-4 shadow-2xl">
      <div className="relative size-80 md:size-100 rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
        {/* Glass Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />

        {/* Meteor Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black pointer-events-none" />
      </div>

      <div className="p-4">
        <h1 className="text-2xl md:text-3xl font-mono font-bold tracking-tight">
          Comet Meteor
        </h1>
        <p className="w-70 md:w-80 text-sm md:text-md font-geist text-zinc-600 dark:text-zinc-400 mt-2">
          A smooth animated background with subtle trail and modern motion.
        </p>
        <button className="font-mono text-lg md:text-xl w-full bg-zinc-100 text-black py-2 md:py-3 rounded-2xl mt-4 tracking-tight cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}

/* ------------------------------
   Logo Component
-------------------------------*/
function VercelLogo({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", className)}
      aria-label="Vercel"
    >
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
}
