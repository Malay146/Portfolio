// "use client";

// import React from "react";
// import { useRouter, usePathname } from "next/navigation";
// import gsap from "gsap";
// import { useEffect, useRef, createContext } from "react";
// import { useLayoutEffect } from "react";

// type TransitionContextType = {
//   navigate: (href: string) => void;
// };
// export const TransitionContext = createContext<TransitionContextType>({
//   navigate: () => {},
// });

// const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const containerRef = useRef<HTMLDivElement[]>([]);
//   const isAnimatingRef = useRef(false);
//   const firstRenderRef = useRef(true);

//   //Initial Setup
//   useLayoutEffect(() => {
//     gsap.set(containerRef.current, { y: "100%" });
//   }, []);

//   //Exit Animation
//   const navigate = (href: string) => {
//     if (isAnimatingRef.current) return;
//     isAnimatingRef.current = true;

//     gsap.fromTo(
//       containerRef.current,
//       {
//         y: "100%",
//       },
//       {
//         y: "0%",
//         duration: 0.6,
//         ease: "power2.inOut",
//         stagger: { amount: 0.3, from: "center" },
//         onComplete: () => {
//           router.push(href);
//           if (href === pathname) {
//             requestAnimationFrame(() => runEnterAnimation());
//           }
//         },
//       }
//     );
//   };

//   //Enter Animation Function
//   const runEnterAnimation = () => {
//     gsap.fromTo(
//       containerRef.current,
//       { y: "0%" },
//       {
//         y: "100%",
//         duration: 0.6,
//         stagger: { amount: 0.3, from: "center" },
//         ease: "power2.inOut",
//         onComplete: () => {
//           isAnimatingRef.current = false;
//         },
//       }
//     );
//   };

//   //Enter Animation
//   useEffect(() => {
//     if (firstRenderRef.current) {
//       firstRenderRef.current = false;
//       return;
//     }
//     runEnterAnimation();
//   }, [pathname]);

//   return (
//     <TransitionContext.Provider value={{ navigate }}>
//       {children}

//       <div className="fixed inset-0 flex z-9999 pointer-events-none">
//         {Array.from({ length: 9 }).map((_, i) => (
//           <div
//             ref={(el) => {
//               containerRef.current[i] = el!;
//             }}
//             key={i}
//             className="flex-1 bg-zinc-800 m-0 p-0"
//           />
//         ))}
//       </div>
//     </TransitionContext.Provider>
//   );
// };

// export default TransitionProvider;


"use client";

import React, { useState, useEffect, useRef, createContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

type TransitionContextType = {
  navigate: (href: string) => void;
};

export const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
});

const TILE_SIZE = 60;

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isAnimatingRef = useRef(false);
  const firstRenderRef = useRef(true);

  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  // Calculate grid based on screen
  useEffect(() => {
    const calculateGrid = () => {
      setGrid({
        cols: Math.ceil(window.innerWidth / TILE_SIZE),
        rows: Math.ceil(window.innerHeight / TILE_SIZE),
      });
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  // Hide blocks initially
  useEffect(() => {
    gsap.set(blocksRef.current, { visibility: "hidden" });
  }, [grid.cols, grid.rows]);

  // EXIT animation
  const navigate = (href: string) => {
    if (isAnimatingRef.current || href === pathname) return;
    isAnimatingRef.current = true;

    gsap.to(blocksRef.current, {
      visibility: "visible",
      duration: 0,
      stagger: {
        grid: "auto",
        from: "random",
        each: 0.01,
      },
      onComplete: () => {
        router.push(href);
      },
    });
  };

  // ENTER animation
  const runEnterAnimation = () => {
    gsap.to(blocksRef.current, {
      visibility: "hidden",
      duration: 0,
      stagger: {
        grid: "auto",
        from: "random",
        each: 0.01,
      },
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
  };

  // Run enter animation on route change
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

      {/* Pixel Overlay */}
      <div
        className="fixed inset-0 grid pointer-events-none z-9999"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
          gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
        }}
      >
        {Array.from({ length: grid.cols * grid.rows }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) blocksRef.current[i] = el;
            }}
            className="bg-zinc-950 w-full h-full flex-1 p-0 m-0 border border-dashed border-zinc-800 box-border"
          />
        ))}
      </div>
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
