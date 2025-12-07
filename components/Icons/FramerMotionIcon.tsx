import { cn } from "@/lib/cn";
import React from "react";

const FramerMotionIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <g clipPath="url(#clip0_287_117)">
        <path
          d="M25 0V12.5L18.75 18.75L12.5 25L6.25 18.75L12.5 12.5L25 0Z"
          fill="#59529D"
        />
        <path d="M25 12.5V25L18.75 18.75L25 12.5Z" fill="#5271B4" />
        <path
          d="M12.5 12.5L6.25 18.75L0 25V0L6.25 6.25L12.5 12.5Z"
          fill="#BB4B96"
        />
      </g>
      <defs>
        <clipPath id="clip0_287_117">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FramerMotionIcon;
