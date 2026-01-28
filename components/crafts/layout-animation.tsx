"use client";
import { motion, AnimatePresence, Transition } from "motion/react";
import { useState, useEffect } from "react";
import SpringArrow from "../ui_components/SpringArrow";

interface ContentItem {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
}

const spring: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 35,
  mass: 0.6,
  restDelta: 0.001,
  restSpeed: 0.001,
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

const content: ContentItem[] = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/ddbpvv06y/image/upload/v1764147024/tailwindcss_ladjtu.png",
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that lets you build modern, responsive UIs directly in your HTML or JSX using small, composable classes—without writing custom CSS.",
  },
];

export default function Page() {
  const [open, setOpen] = useState<number | null>(null);

  // Keyboard support - ESC to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open !== null) {
        setOpen(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  const handleClose = () => setOpen(null);

  return (
    <div
      className="w-full flex items-center justify-center gap-4 relative p-4"
    >
      <div className="absolute top-1/2 -translate-y-1/2 -right-35 hidden md:flex items-center justify-center gap-4">
        <SpringArrow className="size-10 text-zinc-500 animate-bounce-slow rotate-270" />
        <p className="font-roboto-mono text-sm text-zinc-500 tracking-tight">Tap on it</p>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-70 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="popLayout">
        {open === null &&
          content.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={`card-${index}`}
              transition={spring}
              onClick={() => setOpen(index)}
              className="w-80 bg-zinc-800 rounded-2xl border border-zinc-700 cursor-pointer overflow-hidden z-70 hover:border-zinc-500 transition-colors"
              style={{ willChange: "transform" }}
            >
              <motion.div
                layoutId={`image-${index}`}
                transition={spring}
                className="relative aspect-video w-full bg-black"
              >
                <motion.img
                  transition={spring}
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}

        {open !== null && (
          <motion.div
            key="expanded"
            layoutId={`card-${open}`}
            transition={spring}
            className="w-120 max-w-2xl bg-zinc-800 rounded-4xl border border-zinc-700 overflow-hidden z-70 relative"
          >
            <motion.div
              layoutId={`image-${open}`}
              transition={spring}
              className="relative aspect-video w-full"
            >
              <motion.img
                transition={spring}
                src={content[open].imgUrl}
                alt={content[open].title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1,
              }}
            >
              <motion.h1 className="text-2xl font-bold text-zinc-100">
                {content[open].title}
              </motion.h1>

              <motion.p className="text-base text-zinc-300 leading-relaxed">
                {content[open].description}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}