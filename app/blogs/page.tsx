"use client";
import BottomRight from "@/components/Lcorner/BottomRight";
import TopLeft from "@/components/Lcorner/TopLeft";
import StripGridHorizontal from "@/components/StripGridHorizontal";
import { cn } from "@/lib/cn";
import { MacCodeBlock } from "@/components/MacCodeBlock";
import VideoOverlay from "@/components/VideoOverlay";
import Link from "next/link";

// const page = () => {
//   return (
//     <div className="w-full border-x border-white flex flex-col lg:border-x-0">
//       <div className=" py-3 md:py-6 flex flex-col gap-3 md:gap-4">
//         {/* Blog Title */}
//         <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
//           <h2 className="font-roboto-mono font-bold tracking-tighter text-[18px] md:text-[24px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
//             Blogs
//             <TopLeft />
//             <BottomRight />
//           </h2>
//         </div>
//         {/* Blog options */}
//         <div className="text-white/70 flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30 p-1">
//           <Link href="/blogs/nextjs-page-transition-gsap" className="leading-none font-roboto-mono tracking-tighter text-[12px] md:text-[16px] font-light hover:bg-white/10 hover:text-white hover:font-medium transition-all duration-100 cursor-pointer">
//             - Next.js page transition with entry and exit animations using GSAP
//           </Link>
//           <Link href="/blogs/testing" className="leading-none font-roboto-mono tracking-tighter text-[12px] md:text-[16px] font-light hover:bg-white/10 hover:text-white hover:font-medium transition-all duration-100 cursor-pointer mt-1">
//             - testing blog link
//           </Link>
//           <Link href="/blogs" className="leading-none font-roboto-mono tracking-tighter text-[12px] md:text-[16px] font-light hover:bg-white/10 hover:text-white hover:font-medium transition-all duration-100 cursor-pointer mt-1">
//             - more coming soon...
//           </Link>
//         </div>
//         <StripGridHorizontal className="h-10 md:h-12" />

//         {/* Blog Entry 1 */}
//         <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
//           <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
//             Next.js page transition with entry and exit animations using GSAP
//             <TopLeft />
//             <BottomRight />
//           </h2>
//         </div>

//         {/* Blog Content 1 */}
//         <div
//           className={cn(
//             "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
//             "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
//           )}
//         >
//           <p className="font-medium text-white/80 hover:bg-white/10 transition-all duration-100">
//             Page transitions can instantly make your Next.js app feel smoother
//             and more professional.In this guide, we’ll build a clean and simple
//             overlay-based page transition:
//           </p>
//           <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
//             <li>Exit animation runs before navigation</li>
//             <li>Entry animation runs after navigation</li>
//             <li>Works across all routes</li>
//             <li>No styling — pure logic only</li>
//           </ul>
//         </div>
//         <StripGridHorizontal className="h-4 md:h-6" />

//         {/* Blog Entry 2 */}
//         <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
//           <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
//             1.How it Works
//             <TopLeft />
//             <BottomRight />
//           </h2>
//         </div>
//         <div className="flex flex-col">
//           <div
//             className={cn(
//               "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
//               "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
//             )}
//           >
//             <p className="hover:bg-white/10 transition-all duration-100 text-white font-bold">
//               1. A Transition Provider
//             </p>
//             <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
//               <li>Renders overlay</li>
//               <li>Runs GSAP animations</li>
//               <li>
//                 Exposes a {spanTag({ text: "navigate()" })} function through
//                 React Context
//               </li>
//             </ul>
//           </div>

//           <div
//             className={cn(
//               "text-white flex flex-col justify-between px-4 md:px-16 border-b border-dashed border-white/30",
//               "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
//             )}
//           >
//             <p className="hover:bg-white/10 transition-all duration-100 text-white font-bold">
//               2. A Transition Link
//             </p>
//             <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
//               <li>
//                 Calls {spanTag({ text: "navigate()" })} instead of directly
//                 routing
//               </li>
//             </ul>
//           </div>

//           <div
//             className={cn(
//               "text-white flex flex-col justify-between px-4 md:px-16 border-b border-dashed border-white/30",
//               "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
//             )}
//           >
//             <p className="hover:bg-white/10 transition-all duration-100 text-white font-bold">
//               3. Wrapping the entire app
//             </p>
//             <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
//               <li>So transitions run between all page</li>
//             </ul>
//           </div>

//           <div
//             className={cn(
//               "text-white flex flex-col justify-between px-4 md:px-16 border-b border-dashed border-white/30",
//               "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
//             )}
//           >
//             <p className="text-white font-medium font-roboto-mono">
//               This approach works with the App Router.
//             </p>
//           </div>
//         </div>
//         <StripGridHorizontal className="h-4 md:h-6" />

//         <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
//           <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
//             2.The Transition Provider (Core Logic)
//             <TopLeft />
//             <BottomRight />
//           </h2>
//         </div>

//         <div
//           className={cn(
//             "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
//             "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
//           )}
//         >
//           <p className="text-md hover:bg-white/10 transition-all duration-100 text-white font-bold">
//             This component controls:
//           </p>
//           <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
//             <li>Initial GSAP setup</li>
//             <li>Exit animation</li>
//             <li>Navigation</li>
//             <li>Entry animation</li>
//           </ul>
//         </div>

//         <div
//           className={cn(
//             "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
//             "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
//           )}
//         >
//           <p className="text-white font-medium font-roboto-mono">
//             Transition Provider:
//           </p>
//           <MacCodeBlock
//             className="m-2"
//             code={`"use client";

// import { useRouter, usePathname } from "next/navigation";
// import gsap from "gsap";
// import React, {
//   createContext,
//   useRef,
//   useLayoutEffect,
//   useEffect,
// } from "react";

// export const TransitionContext = createContext<{ navigate: (href: string) => void }>({ navigate: () => {} });

// const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const containerRef = useRef<HTMLDivElement>(null);
//   const isAnimating = useRef(false);
//   const firstLoad = useRef(true);

//   // Start off-screen
//   useLayoutEffect(() => {
//     gsap.set(containerRef.current, { y: "100%" });
//   }, []);

//   // Exit animation → navigate
//   const navigate = (href: string) => {
//     if (isAnimating.current) return;
//     isAnimating.current = true;

//     gsap.fromTo(containerRef.current,
//       { y: "100%" },
//       {
//         y: "0%",
//         duration: 0.6,
//         ease: "power2.inOut",
//         onComplete: () => {
//           router.push(href);
//           if (href === pathname) {
//             requestAnimationFrame(() => enter());
//           }
//         },
//       }
//     );
//   };

//   // Entry animation
//   const enter = () => {
//     gsap.fromTo(containerRef.current,
//       { y: "0%" },
//       {
//         y: "100%",
//         duration: 0.6,
//         ease: "power2.inOut",
//         onComplete: () => {
//           isAnimating.current = false;
//         },
//       }
//     );
//   };

//   // Run entry on every route change except first load
//   useEffect(() => {
 
//     if (firstLoad.current) {
//       firstLoad.current = false;
//       return;
//     }
//     enter();
//   }, [pathname]);

//   return (
//     <TransitionContext.Provider value={{ navigate }}>
//       {children}

//       {/* Overlay*/}
//       <div ref={containerRef} className="fixed inset-0 flex pointer-events-none bg-zinc-900 min-h-screen w-full" />
//     </TransitionContext.Provider>
//   );
// };

// export default TransitionProvider;
// `}
//           />
//         </div>

//         <StripGridHorizontal className="h-4 md:h-6" />

//         <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
//           <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
//             3.Transition Link Component
//             <TopLeft />
//             <BottomRight />
//           </h2>
//         </div>

//         <div
//           className={cn(
//             "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
//             "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
//           )}
//         >
//           <p className="text-white/80 font-medium text-md hover:bg-white/10 transition-all duration-100">
//             This replaces {spanTag({ text: "<Link>" })} so we can run animations
//             before navigating.
//           </p>
//         </div>

//         <div
//           className={cn(
//             "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
//             "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
//           )}
//         >
//           <p className="text-white font-medium font-roboto-mono">
//             Transition Link:
//           </p>
//           <MacCodeBlock
//             className="m-2"
//             code={`"use client";

// import { useContext } from "react";
// import { TransitionContext } from "./TransitionProvider";

// const TransitionLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
//   const { navigate } = useContext(TransitionContext);

//   return (
//     <button onClick={() => navigate(href)}>
//       {children}
//     </button>
//   );
// };

// export default TransitionLink;
// `}
//           />
//         </div>

//         <StripGridHorizontal className="h-4 md:h-6" />

//         <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
//           <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
//             4.Wrap Your App with the Provider
//             <TopLeft />
//             <BottomRight />
//           </h2>
//         </div>

//         <div
//           className={cn(
//             "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
//             "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
//           )}
//         >
//           <p className="text-white/80 font-medium text-md hover:bg-white/10 transition-all duration-100">
//             Wrap your app with the provider. This makes transitions work
//             globally.
//           </p>
//         </div>

//         <div
//           className={cn(
//             "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
//             "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
//           )}
//         >
//           <p className="text-white font-medium font-roboto-mono">layout.tsx:</p>
//           <MacCodeBlock
//             className="m-2"
//             code={`import TransitionProvider from "@/components/Transition/TransitionProvider";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <TransitionProvider>{children}</TransitionProvider>
//       </body>
//     </html>
//   );
// }

// `}
//           />
//         </div>

//         <StripGridHorizontal className="h-4 md:h-6" />

//         <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
//           <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
//             5.Example Usage on a Page
//             <TopLeft />
//             <BottomRight />
//           </h2>
//         </div>

//         <div
//           className={cn(
//             "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
//             "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
//           )}
//         >
//           <p className="text-white font-medium font-roboto-mono">page.tsx:</p>
//           <MacCodeBlock
//             className="m-2"
//             code={`import TransitionLink from "@/components/Transition/TransitionLink";

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <TransitionLink href="/about">Go to About</TransitionLink>
//     </div>
//   );
// }
// `}
//           />
//         </div>

//         <StripGridHorizontal className="h-4 md:h-6" />

//         <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
//           <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
//             Final Result
//             <TopLeft />
//             <BottomRight />
//           </h2>
//         </div>

//         <div
//           className={cn(
//             "text-white grid grid-cols-1 md:grid-cols-2 pl-4 md:pl-16 border-y border-dashed border-white/30",
//             "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light"
//           )}
//         >
//           <div className="flex flex-col w-full h-full md:border-r md:border-dashed border-white/30 px-2 py-2 ">
//             <h2 className="font-medium text-white/70 hover:bg-white/10 transition-all duration-100">
//               With just a small setup, you now have:
//             </h2>
//             <div className="hover:bg-white/10 transition-all duration-100">
//               <p>✔ Simple overlay page transitions</p>
//               <p>✔ Smooth exit + entry animations</p>
//               <p>
//                 ✔ Reusable{" "}
//                 <span className="inline-block">{`<TransitionLink>`}</span>
//               </p>
//               <p>✔ No complex styling required</p>
//               <p>✔ Automatically works across all routes</p>
//             </div>
//             <h2 className="text-white font-bold mt-2 hover:bg-white/10 transition-all duration-100">
//               This is a minimal, clean, production-ready GSAP transition system
//               for Next.js App Router.
//             </h2>
//           </div>
//           <div className="flex items-center justify-center p-2">
//             <div className="relative w-[85%] aspect-video">
//               <VideoOverlay
//                 thumbnail="/PT.png"
//                 videoSrc="/PageTransition.mp4"
//               ></VideoOverlay>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

// export const spanTag = ({
//   className,
//   text,
// }: {
//   className?: string;
//   text: string;
// }) => {
//   return (
//     <span className="inline-block px-0.5 md:px-2 rounded-sm md:rounded-md bg-zinc-800 border border-zinc-500 text-white font-bold">
//       {text}
//     </span>
//   );
// };

import React from 'react'

const page = () => {
  return (
    <div className="w-full border-x border-white flex flex-col lg:border-x-0">
       <div className=" py-3 md:py-6 flex flex-col gap-3 md:gap-4">
        {/* Blog Title */}
       
        <StripGridHorizontal className="h-10 md:h-12" />

        {/* Blog Entry 1 */}
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            Next.js page transition with entry and exit animations using GSAP
            <TopLeft />
            <BottomRight />
          </h2>
        </div>

        {/* Blog Content 1 */}
        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
          )}
        >
          <p className="font-medium text-white/80 hover:bg-white/10 transition-all duration-100">
            Page transitions can instantly make your Next.js app feel smoother
            and more professional.In this guide, we’ll build a clean and simple
            overlay-based page transition:
          </p>
          <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
            <li>Exit animation runs before navigation</li>
            <li>Entry animation runs after navigation</li>
            <li>Works across all routes</li>
            <li>No styling — pure logic only</li>
          </ul>
        </div>
        <StripGridHorizontal className="h-4 md:h-6" />

        {/* Blog Entry 2 */}
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            1.How it Works
            <TopLeft />
            <BottomRight />
          </h2>
        </div>
        <div className="flex flex-col">
          <div
            className={cn(
              "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
              "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
            )}
          >
            <p className="hover:bg-white/10 transition-all duration-100 text-white font-bold">
              1. A Transition Provider
            </p>
            <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
              <li>Renders overlay</li>
              <li>Runs GSAP animations</li>
              <li>
                Exposes a {spanTag({ text: "navigate()" })} function through
                React Context
              </li>
            </ul>
          </div>

          <div
            className={cn(
              "text-white flex flex-col justify-between px-4 md:px-16 border-b border-dashed border-white/30",
              "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
            )}
          >
            <p className="hover:bg-white/10 transition-all duration-100 text-white font-bold">
              2. A Transition Link
            </p>
            <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
              <li>
                Calls {spanTag({ text: "navigate()" })} instead of directly
                routing
              </li>
            </ul>
          </div>

          <div
            className={cn(
              "text-white flex flex-col justify-between px-4 md:px-16 border-b border-dashed border-white/30",
              "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
            )}
          >
            <p className="hover:bg-white/10 transition-all duration-100 text-white font-bold">
              3. Wrapping the entire app
            </p>
            <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
              <li>So transitions run between all page</li>
            </ul>
          </div>

          <div
            className={cn(
              "text-white flex flex-col justify-between px-4 md:px-16 border-b border-dashed border-white/30",
              "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
            )}
          >
            <p className="text-white font-medium font-roboto-mono">
              This approach works with the App Router.
            </p>
          </div>
        </div>
        <StripGridHorizontal className="h-4 md:h-6" />

        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            2.The Transition Provider (Core Logic)
            <TopLeft />
            <BottomRight />
          </h2>
        </div>

        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
          )}
        >
          <p className="text-md hover:bg-white/10 transition-all duration-100 text-white font-bold">
            This component controls:
          </p>
          <ul className="list-disc text-white/80 mt-2 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
            <li>Initial GSAP setup</li>
            <li>Exit animation</li>
            <li>Navigation</li>
            <li>Entry animation</li>
          </ul>
        </div>

        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
          )}
        >
          <p className="text-white font-medium font-roboto-mono">
            Transition Provider:
          </p>
          <MacCodeBlock
            className="m-2"
            code={`"use client";

import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import React, {
  createContext,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";

export const TransitionContext = createContext<{ navigate: (href: string) => void }>({ navigate: () => {} });

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const firstLoad = useRef(true);

  // Start off-screen
  useLayoutEffect(() => {
    gsap.set(containerRef.current, { y: "100%" });
  }, []);

  // Exit animation → navigate
  const navigate = (href: string) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    gsap.fromTo(containerRef.current,
      { y: "100%" },
      {
        y: "0%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          router.push(href);
          if (href === pathname) {
            requestAnimationFrame(() => enter());
          }
        },
      }
    );
  };

  // Entry animation
  const enter = () => {
    gsap.fromTo(containerRef.current,
      { y: "0%" },
      {
        y: "100%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          isAnimating.current = false;
        },
      }
    );
  };

  // Run entry on every route change except first load
  useEffect(() => {
 
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    enter();
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      {/* Overlay*/}
      <div ref={containerRef} className="fixed inset-0 flex pointer-events-none bg-zinc-900 min-h-screen w-full" />
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
`}
          />
        </div>

        <StripGridHorizontal className="h-4 md:h-6" />

        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            3.Transition Link Component
            <TopLeft />
            <BottomRight />
          </h2>
        </div>

        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
          )}
        >
          <p className="text-white/80 font-medium text-md hover:bg-white/10 transition-all duration-100">
            This replaces {spanTag({ text: "<Link>" })} so we can run animations
            before navigating.
          </p>
        </div>

        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
          )}
        >
          <p className="text-white font-medium font-roboto-mono">
            Transition Link:
          </p>
          <MacCodeBlock
            className="m-2"
            code={`"use client";

import { useContext } from "react";
import { TransitionContext } from "./TransitionProvider";

const TransitionLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const { navigate } = useContext(TransitionContext);

  return (
    <button onClick={() => navigate(href)}>
      {children}
    </button>
  );
};

export default TransitionLink;
`}
          />
        </div>

        <StripGridHorizontal className="h-4 md:h-6" />

        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            4.Wrap Your App with the Provider
            <TopLeft />
            <BottomRight />
          </h2>
        </div>

        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2"
          )}
        >
          <p className="text-white/80 font-medium text-md hover:bg-white/10 transition-all duration-100">
            Wrap your app with the provider. This makes transitions work
            globally.
          </p>
        </div>

        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
          )}
        >
          <p className="text-white font-medium font-roboto-mono">layout.tsx:</p>
          <MacCodeBlock
            className="m-2"
            code={`import TransitionProvider from "@/components/Transition/TransitionProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

`}
          />
        </div>

        <StripGridHorizontal className="h-4 md:h-6" />

        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            5.Example Usage on a Page
            <TopLeft />
            <BottomRight />
          </h2>
        </div>

        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1"
          )}
        >
          <p className="text-white font-medium font-roboto-mono">page.tsx:</p>
          <MacCodeBlock
            className="m-2"
            code={`import TransitionLink from "@/components/Transition/TransitionLink";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TransitionLink href="/about">Go to About</TransitionLink>
    </div>
  );
}
`}
          />
        </div>

        <StripGridHorizontal className="h-4 md:h-6" />

        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            Final Result
            <TopLeft />
            <BottomRight />
          </h2>
        </div>

        <div
          className={cn(
            "text-white grid grid-cols-1 md:grid-cols-2 pl-4 md:pl-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light"
          )}
        >
          <div className="flex flex-col w-full h-full md:border-r md:border-dashed border-white/30 px-2 py-2 ">
            <h2 className="font-medium text-white/70 hover:bg-white/10 transition-all duration-100">
              With just a small setup, you now have:
            </h2>
            <div className="hover:bg-white/10 transition-all duration-100">
              <p>✔ Simple overlay page transitions</p>
              <p>✔ Smooth exit + entry animations</p>
              <p>
                ✔ Reusable{" "}
                <span className="inline-block">{`<TransitionLink>`}</span>
              </p>
              <p>✔ No complex styling required</p>
              <p>✔ Automatically works across all routes</p>
            </div>
            <h2 className="text-white font-bold mt-2 hover:bg-white/10 transition-all duration-100">
              This is a minimal, clean, production-ready GSAP transition system
              for Next.js App Router.
            </h2>
          </div>
          <div className="flex items-center justify-center p-2">
            <div className="relative w-[85%] aspect-video">
              <VideoOverlay
                thumbnail="/PT.png"
                videoSrc="/PageTransition.mp4"
              ></VideoOverlay>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

export const spanTag = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  return (
    <span className="inline-block px-0.5 md:px-2 rounded-sm md:rounded-md bg-zinc-800 border border-zinc-500 text-white font-bold">
      {text}
    </span>
  );
};
