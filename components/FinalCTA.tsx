"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#7c3aed] py-20" id="final-cta">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-content mx-auto px-6 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-cabinet font-extrabold text-[48px] md:text-[48px] text-white mb-6 leading-tight"
        >
          Ready to Scale Without the Chaos?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="font-satoshi text-[18px] text-[rgba(255,255,255,0.75)] max-w-[560px] mx-auto mb-10 leading-[1.8]"
        >
          Take the free 2-minute growth audit and find out exactly what&apos;s
          holding your coaching business back.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block font-cabinet font-bold text-[16px] text-[#7c3aed] bg-white rounded-[10px] px-8 py-4"
          >
            Start the Free Audit &rarr;
          </motion.a>
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="font-satoshi text-[13px] text-[rgba(255,255,255,0.5)] mt-6"
        >
          No credit card. No commitment. Results in under 60 seconds.
        </motion.p>
      </motion.div>
    </section>
  );
}
