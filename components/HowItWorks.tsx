"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, stepsFromLeft } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "They Take the Quiz",
    body: "A beautifully designed quiz segments every lead based on their niche, problem, and goals — automatically, in real time.",
  },
  {
    num: "02",
    title: "The System Qualifies Them",
    body: "Dynamic automations fire instantly. Each lead gets a personalised email sequence based on exactly what they told us in the quiz.",
  },
  {
    num: "03",
    title: "You Get Booked Calls",
    body: "Pre-qualified, warmed-up leads land on your calendar ready to buy. You show up and close. Nothing else.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#0a0a0a] py-[100px]" id="how-it-works">
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
          className="font-cabinet font-extrabold text-white text-center mb-16"
        >
          One System. Endless Personalisation.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={stepsFromLeft}
              className="relative"
            >
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
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
                {/* Background number */}
                <span className="absolute top-0 left-2 font-cabinet font-extrabold text-[96px] text-[rgba(243,240,255,0.04)] leading-none select-none pointer-events-none">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <span className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.1em]">
                    Step {step.num}
                  </span>
                  <h3 className="text-[20px] text-white mt-3 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-satoshi text-[15px] text-[#9ca3af] leading-[1.8]">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={stepsFromLeft} className="text-center">
          <motion.a
            href="#results"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-[10px] px-7 py-3.5"
          >
            See the System in Action
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
