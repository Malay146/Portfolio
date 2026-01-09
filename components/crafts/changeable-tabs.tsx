"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";

const tabs = ["Home", "Products & resources", "Pricing", "About", "Documentation"];

export default function Page() {
  const [active, setActive] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 150);
  };

  const handleMouseEnter = (tab: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    } 
    setActive(tab);
  };

  return (
    <div className="w-full flex items-center justify-center p-4">

      {/* Tabs */}
      <div
        className="flex rounded-md sm:rounded-lg md:rounded-xl items-center justify-center cursor-pointer bg-zinc-800 p-0.5 sm:p-1 gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 overflow-x-auto"
        onMouseLeave={handleMouseLeave}
        >
        {tabs.map((tab) => (
          <div
          key={tab}
          className="relative px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3"
          onMouseEnter={() => handleMouseEnter(tab)}
          onClick={() => handleMouseEnter(tab)}
          >
            {/* Highlight */}
            {active === tab && (
              <motion.div
                layoutId="hover-indicator"
                className="absolute inset-x-0.5 inset-y-0.5 sm:inset-x-1 sm:inset-y-1 md:inset-x-1.5 md:inset-y-1 lg:inset-x-2 lg:inset-y-1.5 xl:inset-x-2.5 xl:inset-y-2 rounded sm:rounded-md bg-zinc-700 z-0"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 0.5,
                  layout: {
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }}
              />
            )}
            <span className="relative z-10 text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-zinc-100 cursor-pointer whitespace-nowrap">
              {tab}
            </span>

            {/* Tab text */}
          </div>
        ))}
      </div>
    </div>
  );
}
