"use client";

import { cn } from "@/lib/cn";
import {
  Computer,
  File,
  Filter,
  GalleryHorizontal,
  GalleryThumbnails,
  MedalIcon,
  Monitor,
  Moon,
  Phone,
  PictureInPictureIcon,
  Plus,
  Sun,
  Video,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  easeIn,
  easeOut,
} from "motion/react";
import { del } from "motion/react-client";

const CardMenu = () => {
    const [select, setSelect] = useState<number | null>(null);

  const add = [
    { icon: <File />, label: "Document" },
    { icon: <Video />, label: "Photos & Videos" },
    { icon: <Phone />, label: "Contacts" },
  ];

  const filter = [
    { icon: <GalleryHorizontal />, label: "Horizontal" },
    { icon: <GalleryThumbnails />, label: "Thumbnails" },
    { icon: <PictureInPictureIcon />, label: "PIP" },
    { icon: <MedalIcon />, label: "Awards" },
  ];

  const theme = [
    { icon: <Sun />, label: "Light" },
    { icon: <Moon />, label: "Dark" },
    { icon: <Monitor />, label: "System" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.05,
        ease: easeIn,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1, ease: easeOut },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 30, filter: "blur(2px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: -30, filter: "blur(2px)" },
  };
  return (
    <div className="flex flex-col gap-3 size-75 justify-end items-center text-black p-4">
      {/* Layout Wrapper */}
      <LayoutGroup>
        <AnimatePresence mode="popLayout">
          {/* ADD */}
          {select === 1 && (
            <motion.div
              key="add"
              layoutId="size" // ✅ Only card animates
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="border border-zinc-300/80 rounded-2xl flex flex-col gap-1 p-1 overflow-hidden bg-white "
            >
              {add.map((itemData) => (
                <motion.div
                  key={itemData.label}
                  variants={item}
                  onClick={() => {
                    setSelect(null);
                  }}
                  className="flex gap-3 bg-zinc-100/50 hover:bg-zinc-200/70  rounded-xl p-2.5 cursor-pointer"
                >
                  {itemData.icon}
                  <p>{itemData.label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* FILTER */}
          {select === 2 && (
            <motion.div
              key="filter"
              layoutId="size"
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="border border-zinc-300/80 rounded-2xl flex flex-col gap-1 p-1 overflow-hidden bg-white "
            >
              {filter.map((itemData) => (
                <motion.div
                  key={itemData.label}
                  variants={item}
                  onClick={() => {
                    setSelect(null);
                  }}
                  className="flex gap-3 bg-zinc-100/50 hover:bg-zinc-200/70  rounded-xl p-2.5 cursor-pointer"
                >
                  {itemData.icon}
                  <p>{itemData.label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* THEME */}
          {select === 3 && (
            <motion.div
              key="theme"
              layoutId="size"
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="border border-zinc-300/80 rounded-2xl flex gap-1 p-1 overflow-hidden bg-white "
            >
              {theme.map((itemData) => (
                <motion.div
                  key={itemData.label}
                  variants={item}
                  onClick={() => {
                    setSelect(null);
                  }}
                  className="bg-zinc-100/50 hover:bg-zinc-200/70  flex gap-3 items-center rounded-xl p-2 cursor-pointer"
                >
                  {itemData.icon}
                  <p className="text-lg">{itemData.label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>

      {/* Bottom Buttons */}
      <div className="border border-zinc-300/80 w-fit rounded-2xl flex gap-1.5 p-2 bg-white ">
        <Plus
          className={cn(
            "size-10 hover:bg-zinc-200/70  rounded-md p-2 transition cursor-pointer",
            select === 1 && "bg-zinc-200/70 ",
          )}
          onClick={() => setSelect((p) => (p === 1 ? null : 1))}
        />

        <Filter
          className={cn(
            "size-10 hover:bg-zinc-200/70  rounded-md p-2 transition cursor-pointer",
            select === 2 && "bg-zinc-200/70 ",
          )}
          onClick={() => setSelect((p) => (p === 2 ? null : 2))}
        />

        <Computer
          className={cn(
            "size-10 hover:bg-zinc-200/70  rounded-md p-2 transition cursor-pointer",
            select === 3 && "bg-zinc-200/70 ",
          )}
          onClick={() => setSelect((p) => (p === 3 ? null : 3))}
        />
      </div>
    </div>
  );
};

export default CardMenu;
