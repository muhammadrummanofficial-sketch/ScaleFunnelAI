"use client";

import { motion } from "framer-motion";
import { heroStagger, heroItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center pt-[72px]">
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="max-w-content mx-auto px-6 text-center flex flex-col items-center py-20"
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
        <motion.h1 variants={heroItem} className="text-white mb-6">
          Find Out Exactly What&apos;s
          <br />
          Stopping Your Coaching
          <br />
          Business From <span className="text-[#7c3aed]">Growing</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={heroItem}
          className="font-satoshi text-[18px] md:text-[18px] text-[#9ca3af] max-w-[560px] leading-[1.8] mb-10"
        >
          Take our free 2-minute diagnostic and get a personalised growth plan
          built around your exact situation
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.a
            href="#final-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-[10px] px-7 py-3.5 text-center"
          >
            Diagnose My Business &rarr; Free
          </motion.a>
          <a
            href="#how-it-works"
            className="font-satoshi text-[15px] text-white border border-[rgba(255,255,255,0.2)] rounded-[10px] px-7 py-3.5 text-center hover:border-[rgba(255,255,255,0.5)] transition-colors duration-200"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 mt-12"
        >
          {[
            "50,000+ Leads Handled",
            "5-Star Rated on Upwork",
            "48hr Average Setup Time",
          ].map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && (
                <div className="hidden sm:block w-px h-4 bg-[#333333] mx-6" />
              )}
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mr-2" />
              <span className="font-satoshi text-[13px] text-[#9ca3af]">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
