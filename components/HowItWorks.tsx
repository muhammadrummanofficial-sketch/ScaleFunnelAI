"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, stepsFromLeft } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "You Answer 5 Simple Questions",
    body: "We ask about your business model, your current lead flow, and where things feel stuck. Takes under 2 minutes.",
  },
  {
    num: "02",
    title: "We Pinpoint Your Growth Blocker",
    body: "Our system analyses your answers and identifies the exact bottleneck \u2014 whether it\u2019s lead gen, follow-up, conversion, or scale.",
  },
  {
    num: "03",
    title: "You Get a Custom Fix \u2014 Free",
    body: "A personalised action plan lands in your inbox showing you exactly what to build, fix, or automate to start growing again.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-[100px]" id="how-it-works">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-content mx-auto px-6"
      >
        <motion.p
          variants={stepsFromLeft}
          className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.15em] text-center mb-4"
        >
          THE SYSTEM
        </motion.p>
        <motion.h2
          variants={stepsFromLeft}
          className="font-cabinet font-extrabold text-white text-center mb-12 sm:mb-16"
        >
          Here&apos;s What Happens When You Take the Quiz
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={stepsFromLeft}
              className="relative"
            >
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m0 0l-6-6m6 6l-6 6"
                      stroke="#7c3aed"
                      strokeOpacity="0.3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              <div className="relative overflow-hidden p-6">
                <span className="absolute top-0 left-2 font-cabinet font-extrabold text-[72px] sm:text-[96px] text-[rgba(243,240,255,0.04)] leading-none select-none pointer-events-none">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <span className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.1em]">
                    Step {step.num}
                  </span>
                  <h3 className="text-[18px] sm:text-[20px] text-white mt-3 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-satoshi text-[14px] sm:text-[15px] text-[#9ca3af] leading-[1.8]">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={stepsFromLeft} className="text-center">
          <motion.a
            href="#final-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full sm:w-auto font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-[10px] px-7 py-3.5 text-center"
          >
            Start My Free Diagnosis &rarr;
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
