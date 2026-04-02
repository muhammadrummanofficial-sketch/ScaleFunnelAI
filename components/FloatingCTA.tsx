"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Desktop: side floating pill */}
      <motion.a
        href="#final-cta"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 items-center gap-2 bg-[#7c3aed] text-white font-satoshi font-medium text-[14px] px-5 py-3 rounded-full"
        aria-label="Take the Free Quiz"
      >
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="flex items-center gap-2"
        >
          Take the Free Quiz &rarr;
        </motion.span>
      </motion.a>

      {/* Mobile: bottom sticky bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t border-[rgba(124,58,237,0.3)] px-4 py-2.5"
      >
        <a
          href="#final-cta"
          className="block w-full bg-[#7c3aed] text-white font-satoshi font-medium text-[14px] text-center py-3 rounded-lg"
          aria-label="Take the Free Quiz"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block"
          >
            Take the Free Quiz &rarr;
          </motion.span>
        </a>
      </motion.div>
    </>
  );
}
