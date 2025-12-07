import { cn } from "@/lib/cn";
import React from "react";

const BottomLeft = ({className}: {className?: string}) => {
  return (
    <span className={cn("absolute bottom-0 left-0 size-4 border-b border-l border-white", className)}></span>
  );
};

export default BottomLeft;
