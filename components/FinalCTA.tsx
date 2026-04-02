"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#7c3aed] py-16 sm:py-20" id="final-cta">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-content mx-auto px-6 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-cabinet font-extrabold text-[36px] sm:text-[48px] text-white mb-6 leading-tight"
        >
          Stop Guessing. Start Growing.
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="font-satoshi text-base sm:text-[18px] text-[rgba(255,255,255,0.75)] max-w-[560px] mx-auto mb-10 leading-[1.8]"
        >
          5 questions. 2 minutes. A complete diagnosis of what&apos;s actually
          stopping your coaching business from scaling — and a free plan to fix
          it.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full sm:w-auto font-cabinet font-bold text-[16px] text-[#7c3aed] bg-white rounded-[10px] px-8 py-4 text-center"
          >
            Take the Free Quiz Now &rarr;
          </motion.a>
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="font-satoshi text-[13px] text-[rgba(255,255,255,0.5)] mt-6"
        >
          No email required to start. Results in under 60 seconds.
        </motion.p>
      </motion.div>
    </section>
  );
}
