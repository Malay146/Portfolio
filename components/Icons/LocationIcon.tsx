import { cn } from "@/lib/cn";
import React from "react";

const LocationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <g clipPath="url(#clip0_280_44)">
        <path
          d="M17.5 8.75C17.5 14.875 10 20.125 10 20.125C10 20.125 2.5 14.875 2.5 8.75C2.5 6.66142 3.29018 4.65838 4.6967 3.18153C6.10322 1.70469 8.01088 0.875 10 0.875C11.9891 0.875 13.8968 1.70469 15.3033 3.18153C16.7098 4.65838 17.5 6.66142 17.5 8.75Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 11.375C11.3807 11.375 12.5 10.1997 12.5 8.75C12.5 7.30025 11.3807 6.125 10 6.125C8.61929 6.125 7.5 7.30025 7.5 8.75C7.5 10.1997 8.61929 11.375 10 11.375Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_280_44">
          <rect width="20" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LocationIcon;
