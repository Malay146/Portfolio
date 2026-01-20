"use client";
import { cn } from "@/lib/cn";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import Link from "next/link";

const InfiniteMenu = () => {
  const allItems = ["Button", "Cards", "Dialog", "Input", "Table", "Form"];
  const [visibleItems, setVisibleItems] = useState(allItems.slice(0, 4));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setVisibleItems((prev) => {
        const currentIndex = allItems.indexOf(prev[0]!);
        const nextIndex = (currentIndex + 1) % allItems.length;
        return [
          allItems[nextIndex]!,
          allItems[(nextIndex + 1) % allItems.length]!,
          allItems[(nextIndex + 2) % allItems.length]!,
          allItems[(nextIndex + 3) % allItems.length]!,
        ];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-90 h-55 bg-zinc-950 border border-zinc-800 rounded-lg p-4 relative z-10 shadow-lg m-4 md:scale-100 scale-90"
    >
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-50 h-1 bg-linear-to-r from-transparent via-red-500 to-transparent blur-[3px]" />
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-50 h-1 bg-linear-to-r from-transparent via-red-500/50 to-transparent blur-sm" />
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-50 h-px bg-linear-to-r from-transparent via-red-500 to-transparent " />
      <div className="flex items-center gap-3 px-3 py-2 border border-zinc-700 rounded-sm bg-zinc-800">
        <SearchIcon className="size-4 text-zinc-500" />
        <input
          type="text"
          placeholder="Search 1000+ UI Components..."
          className="text-xs outline-none w-full bg-transparent text-zinc-100 placeholder:text-zinc-400"
        />
      </div>
      <p className="text-zinc-500 text-xs m-1">
        Quick Actions
      </p>
      <div className="w-full flex flex-col mt-2 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((itemName, index) => (
            <motion.div
              key={itemName}
              layout
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                opacity: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
                y: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
                filter: { duration: 0.3, ease: "easeOut" },
                layout: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 0.5,
                },
              }}
              className="w-full flex items-center justify-between
                     text-zinc-300
                     text-xs font-semibold mb-1 px-4 py-1
                     rounded hover:bg-zinc-800/50 border border-zinc-800/50
                     cursor-pointer"
            >
              <p>{itemName}</p>
              <p className="px-1 py-px bg-zinc-700 rounded-xs">
                Enter
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InfiniteMenu;

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "icon icon-tabler icons-tabler-outline icon-tabler-search",
        className,
      )}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
};
