"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimate, stagger } from "motion/react";
import Link from "next/link";

type State = "idle" | "loading" | "success";

// Advanced custom easing curves
const easeOutExpo = [0.19, 1, 0.22, 1] as const; // Exponential ease out
const easeInOutQuint = [0.83, 0, 0.17, 1] as const; // Quintic ease in-out
const easeOutBack = [0.34, 1.56, 0.64, 1] as const; // Back ease with overshoot
const easeOutCubic = [0.33, 1, 0.68, 1] as const; // Smooth cubic ease

const bgColors: Record<State, string> = {
  idle: "#2563EB", // Blue
  loading: "#F97316", // Orange
  success: "#16A34A", // Green
};

export default function PurchaseButton() {
  const [state, setState] = useState<State>("idle");
  const [expanded, setExpanded] = useState(false);
  const [scope, animate] = useAnimate();

  // Width logic based on state and expansion
  const getWidth = () => {
    if (state === "idle") return 176;
    if (state === "loading") return 56;
    if (state === "success") return 56; // Stay circular
    return 56;
  };

  const handleClick = () => {
    if (state !== "idle") return;

    setState("loading");

    // Fake async action
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  // Reset expanded when going to idle
  useEffect(() => {
    if (state === "idle") {
      setExpanded(false);
    }
  }, [state]);

  // Auto reset after success animation
  useEffect(() => {
    if (state === "success") {
      const timer = setTimeout(() => {
        setState("idle");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [state]);

  // Animation sequence for success state
  useEffect(() => {
    if (state !== "success") return;

    const sequence = async () => {
      // Wait for DOM to render
      await new Promise((resolve) => setTimeout(resolve, 100));

      // STEP 3: Draw checkmark (button stays circular - 56px)
      const checkmarkPath = scope.current?.querySelector(".checkmark-path");
      if (checkmarkPath) {
        await animate(
          checkmarkPath,
          { pathLength: 1, pathOffset: 0 },
          {
            duration: 0.7,
            ease: easeOutExpo,
          },
        );
      }

      // Between Step 3 & 4: Start confetti
      const confettiElements = scope.current?.querySelectorAll(".confetti");
      if (confettiElements && confettiElements.length > 0) {
        animate(
          Array.from(confettiElements),
          {
            scale: [0, 1, 0.8],
            opacity: [0, 1, 0],
          },
          { duration: 1, ease: easeOutCubic, delay: stagger(0.005) },
        );
      }

      // STEP 4: Expand to rectangle (140px) - Motion will handle width
      setExpanded(true);
    };

    sequence();
  }, [state, animate]);

  return (
    <div className="p-4">
      {/* Confetti pop - outside button */}
      <AnimatePresence>
        {state === "success" && (
          <div className="absolute">
            {[...Array(30)].map((_, i) => {
              const angle = (i * 2 * Math.PI) / 30;
              const distance = 60 + Math.random() * 40;
              const colors = [
                "#16A34A",
                "#22C55E",
                "#86EFAC",
                "#FDE047",
                "#FBBF24",
              ];
              return (
                <motion.span
                  key={i}
                  className="absolute h-2 w-2 rounded-full confetti"
                  style={{ backgroundColor: colors[i % colors.length] }}
                  initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                  }}
                  exit={{ opacity: 0 }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        className="relative h-14 rounded-full text-white font-medium tracking-wide overflow-hidden cursor-pointer"
        whileTap={{ scale: 0.96 }}
        animate={{
          backgroundColor: bgColors[state],
          width: getWidth(),
        }}
        transition={{
          backgroundColor: {
            duration: 0.45,
            ease: easeInOutQuint,
          },
          width: {
            duration: 0.6,
            ease: easeOutExpo,
          },
        }}
      >
        <AnimatePresence mode="wait">
          {/* PURCHASE TEXT */}
          {state === "idle" && (
            <motion.span
              key="text"
              initial={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.35, ease: easeOutCubic }}
              className="absolute inset-0 flex items-center justify-center"
            >
              Purchase
            </motion.span>
          )}

          {/* LOADER */}
          {state === "loading" && (
            <motion.div
              key="loader"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: easeOutBack }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  ease: "linear",
                }}
              />
            </motion.div>
          )}

          {/* SUCCESS */}
          {state === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                mass: 0.8,
              }}
              className="absolute inset-0 flex items-center justify-center gap-2"
            >
              {/* Checkmark */}
              <motion.svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  className="checkmark-path"
                  d="M20 6L9 17l-5-5"
                  style={{ pathLength: 0, pathOffset: 1 }}
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
