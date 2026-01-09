    "use client";

    import { Minus, Plus } from "lucide-react";
    import Link from "next/link";
    import React, { useState } from "react";
    import { motion, AnimatePresence } from "motion/react";

const Digit = ({ digit, prevDigit }: { digit: string; prevDigit: string | null }) => {
  const digitValue = parseInt(digit);
  const prevDigitValue = prevDigit !== null ? parseInt(prevDigit) : null;
  
  // Determine animation direction
  let animateFrom = -digitValue * 40;
  if (prevDigitValue !== null) {
    const diff = digitValue - prevDigitValue;
    if (diff === 1 || diff < -1) {
      // Incrementing (1->2 or 9->0)
      animateFrom = -(digitValue - 1) * 40 - 40;
    } else if (diff === -1 || diff > 1) {
      // Decrementing (2->1 or 0->9)
      animateFrom = -(digitValue + 1) * 40 + 40;
    }
  }

  return (
    <div className="relative h-10 w-6 overflow-hidden">
      <motion.div
        className="flex flex-col items-center"
        initial={{
          y: animateFrom,
        }}
        animate={{
          y: -digitValue * 40,
            }}
            transition={{
            type: "spring",
            stiffness: 220,
            damping: 22,
            mass: 0.6,
            filter: {
              duration: 0.7,
              ease: "easeOut",
            }
            }}
        >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <span
                key={num}
                className="h-10 w-6 flex items-center justify-center tabular-nums"
            >
                {num}
            </span>
            ))}
        </motion.div>
        </div>
    );
    };

    const Page = () => {
    const [value, setValue] = useState(1);
    const [prevValue, setPrevValue] = useState(1);
    const digits = value.toString().split("");
    const prevDigits = prevValue.toString().split("");

    const handleIncrement = () => {
        setPrevValue(value);
        setValue((v) => v + 1);
    };

    const handleDecrement = () => {
        setPrevValue(value);
        setValue((v) => Math.max(0, v - 1));
    };

    return (
        <div className="w-full flex items-center justify-center gap-4  relative p-4">

        {/* Counter */}
        <div className="flex items-center justify-center gap-4">
            {/* Minus */}
            <button
            onClick={handleDecrement}
            className="w-10 h-15 border border-zinc-700 flex justify-center items-center rounded-md text-zinc-100 bg-zinc-800
            shadow-[inset_3px_3px_8px_rgba(255,255,255,0.2),inset_-4px_-4px_4px_rgba(0,0,0,0.8)]
            active:shadow-[inset_-3px_-3px_8px_rgba(255,255,255,0.2),inset_4px_4px_4px_rgba(0,0,0,0.8)]"
            >
            <Minus />
            </button>

            {/* Number */}
            <div className="py-6 px-4 border border-zinc-400 font-mono text-3xl font-light flex justify-center items-center rounded-xl bg-zinc-100/90 text-zinc-700 shadow-[inset_2px_2px_6px_rgba(255,255,255,1),inset_-2px_-2px_6px_rgba(255,255,255,1)] min-w-20">
            <div className="flex">
                {digits.map((digit, index) => (
                <Digit 
                    key={index} 
                    digit={digit} 
                    prevDigit={prevDigits[index] || null}
                />
                ))}
            </div>
            </div>

            {/* Plus */}
            <button
            onClick={handleIncrement}
            className="w-10 h-15 border border-zinc-700 flex justify-center items-center rounded-md text-zinc-100 bg-zinc-800
            shadow-[inset_3px_3px_8px_rgba(255,255,255,0.2),inset_-4px_-4px_4px_rgba(0,0,0,0.8)]
            active:shadow-[inset_-3px_-3px_8px_rgba(255,255,255,0.2),inset_4px_4px_4px_rgba(0,0,0,0.8)]"
            >
            <Plus />
            </button>
        </div>
        </div>
    );
    };

    export default Page;
