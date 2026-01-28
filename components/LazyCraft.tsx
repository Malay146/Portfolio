"use client";

import { useEffect, useRef, useState } from "react";

interface LazyCraftProps {
  children: React.ReactNode;
  rootMargin?: string;
}

const LazyCraft = ({
  children,
  rootMargin = "200px",
}: LazyCraftProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Load once
        }
      },
      {
        rootMargin,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className="">
      {visible ? children : <Placeholder />}
    </div>
  );
};

export default LazyCraft;

// Simple skeleton placeholder
const Placeholder = () => {
  return (
    <div className="w-full h-70 rounded-xl animate-pulse flex items-center justify-center">
      <span className="text-zinc-white text-sm font-mono">
        Loading craft...
      </span>
    </div>
  );
};