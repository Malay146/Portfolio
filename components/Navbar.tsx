"use client";
import VolumeIcon from "./Icons/VolumeIcon";
import MuteIcon from "./Icons/MuteIcon";
import { cn } from "@/lib/cn";
import { useHoverSound } from "@/hooks/useHoverSound";
import { useAudio } from "@/contexts/AudioContext";
import TransitionLink from "./Transition/TransitionLink";

const Navbar = () => {
  const { play } = useHoverSound();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Crafts", href: "/crafts" },
    { name: "Blog", href: "/blogs" },
  ];

  return (
    <div
      className={cn(
        "px-2 py-2 sm:px-4 bg-white text-zinc-800 font-inter font-medium border-2 border-zinc-500 rounded-lg sm:rounded-xl flex justify-between items-center gap-2 sm:gap-4 fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-99 shadow-[inset_3px_3px_9px_rgba(0,0,0,0.3),inset_-3px_-3px_9px_rgba(0,0,0,0.3)] leading-none max-w-[calc(100vw-2rem)] sm:max-w-none",
      )}
    >
      {navLinks.map((item, index) => (
        <TransitionLink key={index} href={item.href}>
          <p
            className="cursor-pointer hover:text-black text-xs sm:text-sm font-inter tracking-tight"
            onMouseEnter={play}
          >
            {item.name}
          </p>
        </TransitionLink>
      ))}

      <span className="inline-block w-[0.5px] h-5 sm:h-6 rounded-2xl border border-black/60"></span>

      <div className="flex items-center gap-2 sm:gap-3">
        <div onMouseEnter={play}>
          <VolumeToggle className="cursor-pointer hover:text-black" />
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
        <MuteIcon className="size-5 sm:size-6" />
      ) : (
        <VolumeIcon className="size-5 sm:size-6" />
      )}
    </button>
  );
};
