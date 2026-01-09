"use client";
import React, { useEffect, useRef, useState } from "react";
import VolumeIcon from "./Icons/VolumeIcon";
import MuteIcon from "./Icons/MuteIcon";
import { cn } from "@/lib/cn";
import { useHoverSound } from "@/hooks/useHoverSound";
import { useAudio } from "@/contexts/AudioContext";
import Link from "next/link";
import TransitionLink from "./Transition/TransitionLink";
import gsap from "gsap";

const Navbar = () => {
  const { play } = useHoverSound();
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Projects", href: "/projects" },
    { name: "Crafts", href: "/crafts" },
    { name: "Blog", href: "/blogs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
        gsap.to(navRef.current, {
          opacity: 0,
          filter: "blur(4px)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
        gsap.to(navRef.current, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.3,
          ease: "power2.out",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={cn(
        "px-4 py-2 bg-[#111111] text-white/60 font-inter border-2 border-[#555555] rounded-xl flex justify-between items-center gap-4 fixed bottom-8 left-1/2 transform -translate-x-1/2 z-99 shadow-[inset_3px_3px_6px_rgba(255,255,255,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.1)] leading-none",
        !isVisible && "pointer-events-none"
      )}
    >
      {navLinks.map((item, index) => (
        <TransitionLink key={index} href={item.href}>
          <p
            className="cursor-pointer hover:text-white text-sm font-inter tracking-tight"
            onMouseEnter={play}
          >
            {item.name}
          </p>
        </TransitionLink>
      ))}

      <span className="inline-block w-px h-5 rounded-2xl border-r border-white"></span>

      <div className="flex items-center gap-3">
        <div onMouseEnter={play}>
          <VolumeToggle className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const VolumeToggle = ({ className }: { className?: string }) => {
  const { isMuted, toggleMute } = useAudio();

  return (
    <button
      onClick={toggleMute}
      className={cn("rounded-lg", className)}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <MuteIcon className="size-6" />
      ) : (
        <VolumeIcon className="size-6" />
      )}
    </button>
  );
};
