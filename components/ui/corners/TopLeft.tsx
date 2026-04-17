import { cn } from "@/lib/cn";
import React from "react";

const TopLeft = ({className}: {className?: string}) => {
  return (
    <span className={cn("absolute top-0 left-0 size-4 border-t border-l border-white", className)}></span>
  );
};

export default TopLeft;
