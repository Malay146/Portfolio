import { cn } from "@/lib/cn";
import React from "react";

const StripGridVertical = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-[88px] min-h-full border-x border-white bg-[repeating-linear-gradient(135deg,rgba(225,225,225,0.2)_0,rgba(225,225,225,0.3)_0.5px,transparent_0,transparent_50%)] bg-size-[15px_15px] bg-fixed", className)} />
  );
};

export default StripGridVertical;
