"use client";

import { useRef } from "react";
import { useAudio } from "@/contexts/AudioContext";

export const useHoverSound = (
  soundPath: string = "/sounds/subtle.mp3",
  volume = 0.07,
  delay = 0 // delay in ms
) => {
  const { isMuted } = useAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  if (!audioRef.current && typeof window !== "undefined") {
    audioRef.current = new Audio(soundPath);
    audioRef.current.volume = volume;
  }

  const play = () => {
    if (!audioRef.current || isMuted) return;

    // Clear previous delay (prevents stacking)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      audioRef.current!.currentTime = 0;
      audioRef.current!.play().catch(() => {});
    }, delay);
  };

  return { play };
};
