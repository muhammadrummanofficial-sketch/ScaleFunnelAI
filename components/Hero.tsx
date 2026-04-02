"use client";

import { motion } from "framer-motion";
import { heroStagger, heroItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      {/* Atmospheric background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-content mx-auto px-6 text-center flex flex-col items-center py-20"
      >
        {/* Pill Badge */}
        <motion.div
          variants={heroItem}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.15)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
          <span className="font-satoshi font-medium text-xs text-[#7c3aed] uppercase tracking-[0.1em]">
            AI-Powered Quiz Funnels & Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={heroItem}
          className="text-white mb-6 max-w-[720px] break-words"
        >
          Your Coaching Business Is
          <br className="hidden sm:block" />
          {" "}Leaking Revenue Every Day
          <br className="hidden sm:block" />
          {" "}You Don&apos;t Fix <span className="text-[#7c3aed]">This</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={heroItem}
          className="font-satoshi text-base sm:text-[18px] text-[#9ca3af] max-w-[560px] leading-[1.8] mb-10 px-2"
        >
          Answer 5 quick questions. We&apos;ll tell you exactly where your leads
          are dropping off — and how to fix it in 48 hours. Free.
        </motion.p>

        {/* Single CTA */}
        <motion.div variants={heroItem} className="w-full sm:w-auto">
          <motion.a
            href="#final-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full sm:w-auto font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-[10px] px-7 py-3.5 text-center"
          >
            Diagnose My Business Free &rarr; Takes 2 Min
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
