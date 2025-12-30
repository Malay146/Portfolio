"use client";
import React from "react";
import { cn } from "@/lib/cn";
import { useHoverSound } from "@/hooks/useHoverSound";

const ToolTip = ({infoText="This is a tooltip", className, children="Hover me"} : {infoText?: string, className?: string, children?: React.ReactNode}) => {
  const { play } = useHoverSound();
  return (
      <button onMouseEnter={play} className={cn("relative cursor-pointer text-md group scale-97 hover:scale-100 transition-transform duration-200 active:scale-98 font-inter text-[14px]", className)}>
        {children}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[90%] pointer-events-none px-2 py-1 text-md text-white/80 whitespace-nowrap tracking-tight bg-zinc-900 border border-zinc-700 rounded-lg after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:border-10 after:border-x-transparent after:border-b-transparent after:border-t-zinc-900 after:top-6 after:rounded-md opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 transition-all duration-150">
          {infoText}
        </div>
      </button>
  );
};

export default ToolTip;
