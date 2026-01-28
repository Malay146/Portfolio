"use client";
import React, { useState } from "react";
import { Expand, ExpandIcon, MoreHorizontal, Split, View } from "lucide-react";

const VercelFilter = () => {
  const [expanded, setExpanded] = useState(false);
  const Icons = [
    { icon: <Expand className="size-5" />, label: "Expand" },
    { icon: <Split className="size-5" />, label: "Split" },
    { icon: <MoreHorizontal className="size-5" />, label: "MoreHorizontal" },
  ];

  // Handle tap/click for mobile
  const handleToggle = () => setExpanded((prev) => !prev);

  // Close on blur (for accessibility, optional)
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setExpanded(false);
    }
  };

  return (
    <div className="group p-4 select-none" tabIndex={-1} onBlur={handleBlur}>
      <div
        className={
          `w-fit flex gap-1 text-zinc-600 bg-zinc-50 rounded-full border border-zinc-300/80 px-1.5 py-1 transition-all ease-in-out duration-150 ` +
          `${expanded ? "scale-100 shadow-lg/5" : "scale-30"} ` +
          `group-hover:scale-100 group-hover:shadow-lg/5`
        }
        onClick={handleToggle}
        tabIndex={0}
        aria-expanded={expanded}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleToggle();
        }}
      >
        {Icons.map((item, index) => (
          <div
            key={index}
            className={
              `px-3 py-1.5 text-zinc-600 rounded-2xl flex items-center justify-center cursor-pointer transition-all ease-in-out duration-150 ` +
              `${expanded ? "scale-100 blur-none" : "scale-0 blur-sm"} ` +
              `group-hover:scale-100 group-hover:blur-none hover:bg-zinc-200/80`
            }
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VercelFilter;
