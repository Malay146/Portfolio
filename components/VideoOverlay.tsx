"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";

type VideoOverlayProps = {
  thumbnail?: string;
  videoSrc: string;
};

export default function VideoOverlay({
  thumbnail,
  videoSrc,
}: VideoOverlayProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        onClick={() => setOpen(true)}
        className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group border-3 border-gray-300/20 hover:border-gray-300/40 transition"
      >
        <img
          src={thumbnail}
          alt="Video preview"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-16 rounded-full bg-zinc-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
            <PlayIcon className="size-10 text-white/90" />
          </div>
        </div>
      </div>

      {/* Fullscreen Video Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[90%] max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-white/80 hover:text-white bg-zinc-800 rounded-full size-10 flex items-center justify-center cursor-pointer z-99 border-2 border-zinc-600 hover:border-zinc-400 transition"
            >
              <CloseIcon className="size-6" />
            </button>

            {/* Video */}
            <video
              src={videoSrc}
              autoPlay
              controls
              className="w-full h-full border-3 border-zinc-600 rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(
        "icon icon-tabler icons-tabler-filled icon-tabler-caret-right",
        className
      )}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "icon icon-tabler icons-tabler-outline icon-tabler-x",
        className
      )}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
