"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const menuItems = ["Home", "About", "Projects", "Blogs", "Contact"];

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [widths, setWidths] = useState<number[]>([]);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    if (isOpen && textRefs.current.length > 0) {
      const newWidths = textRefs.current.map((ref) => ref?.offsetWidth || 100);
      setWidths(newWidths);
    }
  }, [isOpen]);

  return (
    <div className="w-full flex min-h-40 items-center justify-center p-2 sm:p-3 md:p-4">


      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
            initial={{ opacity: 0, scale: 0.8, x: 20, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.8,
              x: 20,
              y: 0,
              transition: { delay: 0.6, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
            }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="flex p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 bg-black filter blur-xs contrast-[20]">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item}
                  className="h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 bg-white rounded-full"
                  style={{ width: widths[index] || 100 }}
                  initial={{ scale: 0, x: 50 }}
                  animate={{ scale: 1, x: 0 }}
                  exit={{
                    scale: 0,
                    x: 50,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.3,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                  }}
                  transition={{
                    delay: 0.3 - index * 0.1,
                    duration: 0.3,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                ></motion.div>
              ))}
            </div>
            <div className="w-full text-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              {menuItems.map((item, index) => (
                <motion.h1
                  key={item}
                  ref={(el) => {
                    textRefs.current[index] = el;
                  }}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:scale-110 transition-transform px-1.5 sm:px-2 md:px-3 lg:px-4"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    x: 30,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.3,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                  }}
                  transition={{
                    delay: 0.35 + index * 0.1,
                    duration: 0.3,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  {item}
                </motion.h1>
              ))}
            </div>
          </motion.div>
        )}
        <motion.div
          key="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
          className="size-8 sm:size-9 md:size-10 rounded-full bg-white flex items-center justify-center cursor-pointer relative z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          layout
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
          exit={{
            rotate: 0,
            scale: 1,
          }}
          transition={{
            layout: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
            rotate: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
            scale: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="text-black size-4 sm:size-5 md:size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="text-black size-4 sm:size-4.5 md:size-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default page;
