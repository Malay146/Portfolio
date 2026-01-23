import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-auto p-4">
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase bg-neutral-800 text-white hover:bg-neutral-700/50 h-10 px-6 py-2.5 font-mono w-full">
        <span className="chroma-text-out chroma-text-out-animate">
          Text Gradient
        </span>
      </button>
    </ div>
  );
};

export default page;
