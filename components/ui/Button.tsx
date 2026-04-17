"use client";
import React from "react";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useHoverSound } from "@/hooks/useHoverSound";

const Button = ({
  children,
  className,
  href = "#",
  target,
  props,
}: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  props?: React.HTMLAttributes<HTMLAnchorElement>;
}) => {
  const { play } = useHoverSound();
  return (
    <div onMouseEnter={play}>
      <Link
        href={href || "#"}
        target={target || "_blank"}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cn(
          "px-2 py-1 bg-[#1F1F1F] rounded-lg border border-[#4E4E4E] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.15),inset_-1px_-1px_2px_rgba(255,255,255,0.15)] cursor-pointer flex items-center justify-center font-bold font-inter tracking-tight hover:bg-white/10 transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
