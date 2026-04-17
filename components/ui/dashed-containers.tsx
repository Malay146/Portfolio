import React from "react";
import { cn } from "@/lib/cn";
import TopLeft from "@/components/ui/corners/TopLeft";
import BottomRight from "@/components/ui/corners/BottomRight";

export const DashedLineContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30",
        className
      )}
    >
      {children}
    </div>
  );
};

export const DashedHeader = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "font-roboto-mono font-bold tracking-tighter text-[18px] md:text-[24px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default",
        className
      )}
    >
      {children}
      <TopLeft />
      <BottomRight />
    </h2>
  );
};

export const DashedContentBox = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
        "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1",
        className
      )}
    >
      {children}
    </div>
  );
};
