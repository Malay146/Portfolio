"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AppleClock() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const hourRef = useRef<SVGGElement | null>(null);
  const minuteRef = useRef<SVGGElement | null>(null);
  const secondRef = useRef<SVGPathElement | null>(null);
  const numbersRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const hourHand = hourRef.current;
    const minuteHand = minuteRef.current;
    const secondHand = secondRef.current;
    const numbersGroup = numbersRef.current;

    if (!svg || !hourHand || !minuteHand || !secondHand || !numbersGroup)
      return;

    /* ---------------- Numbers ---------------- */

    const centerX = 50;
    const centerY = 50;
    const radius = 36;

    numbersGroup.innerHTML = "";

    for (let i = 1; i <= 12; i++) {
      const angle = ((i * 30 - 90) * Math.PI) / 180;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text",
      );

      text.setAttribute("x", x.toString());
      text.setAttribute("y", y.toString());
      text.setAttribute("fill", "black");
      text.setAttribute("font-size", "12");
      text.setAttribute("stroke", "black");
      text.setAttribute("stroke-width", "0.3");
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "middle");

      text.textContent = i.toString();

      numbersGroup.appendChild(text);
    }

    /* ---------------- Hands Setup ---------------- */

    [hourHand, minuteHand, secondHand].forEach((hand) => {
      hand.style.transformOrigin = "50% 50%";
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let lastTime = 0;
    let running = true;

    /* ---------------- Animation ---------------- */

    function updateClock(time: number) {
      if (!running) return;

      if (prefersReducedMotion && time - lastTime < 1000) {
        requestAnimationFrame(updateClock);
        return;
      }

      lastTime = time;

      const now = new Date();

      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;

      const minutes = now.getMinutes() + seconds / 60;

      const hours = (now.getHours() % 12) + minutes / 60;

      const secondAngle = seconds * 6;
      const minuteAngle = minutes * 6;
      const hourAngle = hours * 30;

      if (secondHand) {
        secondHand.style.transform = `rotate(${secondAngle}deg)`;
      }
      if (minuteHand) {
        minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
      }
      if (hourHand) {
        hourHand.style.transform = `rotate(${hourAngle}deg)`;
      }

      requestAnimationFrame(updateClock);
    }

    requestAnimationFrame(updateClock);

    /* ---------------- Visibility ---------------- */

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
      } else {
        if (!running) {
          running = true;
          requestAnimationFrame(updateClock);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    /* ---------------- Cleanup ---------------- */

    return () => {
      running = false;
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div
      className="
                m-4
                p-0.5
                rounded-[38px]
                relative
                overflow-hidden
                after:content-['']
                after:absolute
                after:top-1/2
                after:left-1/2
                after:-translate-x-1/2
                after:-translate-y-1/2
              
                after:w-30
                after:h-80
              
                after:bg-linear-to-b after:from-zinc-200/50 after:via-zinc-400/40 after:to-zinc-200/50
                after:blur-2xl
                after:-rotate-30
              
                after:z-0
                after:will-change-transform

                after:animate-[spinPause_5s_cubic-bezier(0.5,0,0.2,1)_infinite]
              "
    >
      <div
        className="
                relative
                flex items-center justify-center
                p-4
                rounded-[36px]
                bg-linear-to-t
                from-black
                via-zinc-900
                to-zinc-800
                z-99
                overflow-hidden
             "
      >
        <svg
          ref={svgRef}
          width="200"
          height="200"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Face */}
          <circle cx="50" cy="50" r="50" fill="white" />

          {/* Numbers */}
          <g ref={numbersRef} />
          <g ref={minuteRef}>
            {/* Minute Marks */}
            {[...Array(60)].map((_, i) => {
              const angle = (i * 6 * Math.PI) / 180;
              const innerRadius = i % 5 === 0 ? 45 : 45;
              const outerRadius = 48;

              const x1 = 50 + innerRadius * Math.cos(angle);
              const y1 = 50 + innerRadius * Math.sin(angle);
              const x2 = 50 + outerRadius * Math.cos(angle);
              const y2 = 50 + outerRadius * Math.sin(angle);

              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={i % 5 === 0 ? "black" : "gray"}
                  strokeWidth={i % 5 === 0 ? 1.2 : 0.8}
                  strokeLinecap="round"
                />
              );
            })}
          </g>
          {/* Hands */}
          <g>
            {/* Hour */}
            <g ref={hourRef} className="filter drop-shadow-[0_0px_2px_rgba(0,0,0,0.2)]">
              <path
                stroke="black"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M50 50 L50 25"
              />
              <path
                stroke="black"
                strokeLinecap="round"
                strokeWidth="3.5"
                d="M50 43 L50 25"
              />
            </g>

            {/* Minute */}
            <g ref={minuteRef} className="filter drop-shadow-[0_0px_2px_rgba(0,0,0,0.2)]">
              <path
                stroke="black"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M50 50 L50 10"
              />
              <path
                stroke="black"
                strokeLinecap="round"
                strokeWidth="3.5"
                d="M50 43 L50 5"
              />
            </g>

            {/* Center */}
            <circle cx="50" cy="50" r="2.5" fill="black" />

            {/* Second */}
            <path
              ref={secondRef}
              stroke="#FF9230"
              strokeLinecap="round"
              strokeWidth="1"
              d="M50 57 L50 2"
            />

            <circle cx="50" cy="50" r="1.5" fill="#FF9230" />
            <circle cx="50" cy="50" r="0.8" fill="white" />
          </g>
        </svg>
      </div>
    </div>
  );
}
