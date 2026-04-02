"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "The quiz funnel completely changed how we handle leads. Every person who comes through feels like the system was built specifically for them. Booked calls went up immediately.",
    name: "Sarah M.",
    role: "Business Coach",
    initials: "SM",
  },
  {
    quote:
      "I was spending 15 hours a week on manual follow-ups. After the automation build that dropped to under 2 hours. Same revenue, 13 hours back in my week every single week.",
    name: "James R.",
    role: "Fitness Coach",
    initials: "JR",
  },
  {
    quote:
      "I had the leads but they kept going cold. The dynamic email system fixed that completely. Different messages for different people — it actually works.",
    name: "Priya K.",
    role: "Life Coach",
    initials: "PK",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-[100px]">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-content mx-auto px-6"
      >
        <motion.p
          variants={fadeInUp}
          className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.15em] text-center mb-4"
        >
          WHAT CLIENTS SAY
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[#0a0a0a] text-center mb-12"
        >
          Don&apos;t Take Our Word For It
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="bg-[#f3f0ff] rounded-2xl p-8"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#7c3aed] text-[20px]">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-satoshi font-light italic text-[16px] text-[#0a0a0a] leading-[1.8] mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-[rgba(124,58,237,0.15)] pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed] flex items-center justify-center">
                  <span className="font-satoshi font-medium text-white text-[13px]">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-satoshi font-medium text-[14px] text-[#0a0a0a]">
                    {t.name}
                  </p>
                  <p className="font-satoshi text-[13px] text-[#9ca3af]">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
