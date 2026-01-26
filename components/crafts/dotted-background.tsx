"use client";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  phase: number;
}

const DottedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let animationId: number;

    const DOT_SIZE = 2;
    const GAP = 8;
    const SPEED = 0.0018;

    // Setup canvas + dots
    const setup = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Recreate dots
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

    // Animation loop
    const animate = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      // Glow
      ctx.shadowBlur = 6;
      ctx.shadowColor = "rgba(255,255,230,0.4)";

      dots.forEach((dot) => {
        const alpha =
          0.15 + 0.3 * Math.sin(performance.now() * SPEED + dot.phase);

        ctx.beginPath();
        ctx.fillStyle = `rgba(245,249,255,${alpha})`; // #F5F9FF

        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset glow
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(animate);
    };

    // Init
    setup();
    animate();

    // Handle resize
    window.addEventListener("resize", setup);

    // Cleanup
    return () => {
      window.removeEventListener("resize", setup);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="p-4 w-full h-full flex items-center justify-center">
      <div className="relative size-100 bg-black rounded-3xl border border-zinc-700 hover:border-zinc-500 transition-all duration-100 ease-in shadow-lg overflow-hidden flex items-center justify-center">
        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 text-center w-full h-full flex items-center justify-center flex-col">
          <div className="mx-auto mb-6 w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-xl">
            <VercelLogo className="size-18" />
          </div>

          <div className="flex justify-between w-full bg-black items-center px-4 py-3 absolute bottom-0">
            <p className="text-gray-400 text-sm tracking-wide">
              The Triangle Company
            </p>

            <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center  bg-black cursor-pointer text-white">
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

const VercelLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", className)}
    >
      <title>Vercel</title>
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
};
