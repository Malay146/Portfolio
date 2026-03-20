"use client";
import { Download, Link2, Mail, QrCode } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const expandShare = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full flex items-center justify-center min-h-50 p-6 font-inter">
      <AnimatePresence>
        <motion.div
          onClick={() => setIsExpanded(!isExpanded)}
          layout
          transition={{ type: "spring", bounce: 0.5, duration: 1 }}
          whileTap={{ scale: 1.1 }}
          className={`px-6 py-4 flex items-center justify-center bg-neutral-200 text-black cursor-pointer ${isExpanded ? "rounded-full" : "rounded-4xl"} `}
        >
          {isExpanded ? (
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(2px)" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="font-semibold"
            >
              Share
            </motion.p>
          ) : (
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(2px)" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 w-full"
            >
              <div className="flex items-center justify-between gap-2 w-full">
                <Link2 className="size-5" />
                <p>Copy Link</p>
              </div>

              <div className="flex items-center justify-between gap-2 w-full">
                <Download className="size-5" />
                <p>Download</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <QrCode className="size-5" />
                <p>QR Code</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default expandShare;
