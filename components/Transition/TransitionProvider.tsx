"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { useEffect, useRef, createContext } from "react";
import { useLayoutEffect } from "react";

type TransitionContextType = {
  navigate: (href: string) => void;
};
export const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
});

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement[]>([]);
  const isAnimatingRef = useRef(false);
  const firstRenderRef = useRef(true);

  //Initial Setup
  useLayoutEffect(() => {
    gsap.set(containerRef.current, { y: "100%" });
  }, []);

  //Exit Animation
  const navigate = (href: string) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    gsap.fromTo(
      containerRef.current,
      {
        y: "100%",
      },
      {
        y: "0%",
        duration: 0.6,
        ease: "power2.inOut",
        stagger: { amount: 0.3, from: "center" },
        onComplete: () => {
          router.push(href);
          if (href === pathname) {
            requestAnimationFrame(() => runEnterAnimation());
          }
        },
      }
    );
  };

  //Enter Animation Function
  const runEnterAnimation = () => {
    gsap.fromTo(
      containerRef.current,
      { y: "0%" },
      {
        y: "100%",
        duration: 0.6,
        stagger: { amount: 0.3, from: "center" },
        ease: "power2.inOut",
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      }
    );
  };

  //Enter Animation
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    runEnterAnimation();
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <div className="fixed inset-0 flex z-9999 pointer-events-none">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            ref={(el) => {
              containerRef.current[i] = el!;
            }}
            key={i}
            className="flex-1 bg-zinc-800 m-0 p-0"
          />
        ))}
      </div>
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
