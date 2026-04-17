import { cn } from "@/lib/cn";
import React from "react";

const StripGridHorizontal = ({ className }: { className?: string }    ) => {
  return (
    <div className={cn("w-full h-10 border-y border-white bg-[repeating-linear-gradient(135deg,rgba(225,225,225,0.3)_0,rgba(225,225,225,0.5)_0.5px,transparent_0,transparent_50%)] bg-size-[15px_15px] bg-fixed", className)} />
  );
};

export default StripGridHorizontal;
