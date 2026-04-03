"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const names = [
  "Alex Hormozi",
  "Patrick Bet-David",
  "Grant Cardone",
  "Gary Vaynerchuk",
  "Tony Robbins",
  "Russell Brunson",
  "Dean Graziosi",
  "Brendon Burchard",
  "Lewis Howes",
  "Ed Mylett",
];

function NameRow() {
  return (
    <>
      {names.map((name, i) => (
        <span key={`${name}-${i}`} className="flex items-center gap-6 sm:gap-12 shrink-0">
          <span className="font-satoshi font-medium text-[14px] sm:text-[16px] text-[rgba(255,255,255,0.35)] whitespace-nowrap">
            {name}
          </span>
          <span className="text-[#7c3aed] text-[14px] sm:text-[16px]">&middot;</span>
        </span>
      ))}
    </>
  );
}

export default function LogoStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-[#0a0a0a] border-t border-b border-[rgba(255,255,255,0.06)] py-10">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p
          variants={fadeInUp}
          className="font-satoshi font-medium text-[11px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.15em] text-center mb-6 px-6"
        >
          Systems Used By The World&apos;s Top Coaches
        </motion.p>

        {/* Scrolling ticker */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-scroll-left gap-6 sm:gap-12">
            <NameRow />
            <NameRow />
          </div>
        </div>

        <motion.p
          variants={fadeInUp}
          className="font-satoshi text-[13px] sm:text-[14px] text-[#9ca3af] text-center mt-5 px-6"
        >
          The same AI marketing automation systems — now available for your
          coaching business.
        </motion.p>
      </motion.div>
    </section>
  );
}
