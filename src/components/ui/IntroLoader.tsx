"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950"
        >
          <div className="flex -translate-y-6 flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center"
            >
              <Image
                src="/brand/lumenix-logo.png"
                alt="LUMENIX"
                width={420}
                height={140}
                priority
                className="h-auto w-[260px] object-contain md:w-[300px]"
              />
            </motion.div>

            <div className="mt-4 h-1 w-56 overflow-hidden rounded-full bg-white/10 md:w-64">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-full w-1/2 rounded-full bg-white"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-4 text-sm text-slate-300"
            >
              Preparing portfolio experience...
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}