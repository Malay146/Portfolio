import { cn } from "@/lib/cn";
import React from "react";

const VercelIcon = ({className}: {className?: string}) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 23.4893L12.5 1.75L0 23.4893H25Z"
        fill="white"
      />
    </svg>
  );
};

export default VercelIcon;
