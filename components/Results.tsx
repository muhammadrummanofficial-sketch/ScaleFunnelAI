"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-cabinet font-extrabold text-[52px] md:text-[52px] text-white leading-none">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const metrics = [
  { target: 50, suffix: "K+", label: "LEADS HANDLED FOR ONE COACH" },
  { target: 187, suffix: "%", label: "AVERAGE CONVERSION INCREASE" },
  { target: 48, suffix: "hrs", label: "AVERAGE SETUP TIME" },
  { target: 5, suffix: ".0★", label: "UPWORK RATING" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#0a0a0a] py-[100px]" id="results">
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
          RESULTS
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="font-cabinet font-extrabold text-white text-center mb-16"
        >
          Numbers That Actually Matter
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={fadeInUp}
              className="border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 text-center"
            >
              <AnimatedCounter
                target={metric.target}
                suffix={metric.suffix}
              />
              <p className="font-satoshi text-[13px] text-[#9ca3af] uppercase tracking-[0.1em] mt-3">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Case Study */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#f3f0ff] rounded-[20px] p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <span className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.1em]">
              Case Study
            </span>
            <h3 className="text-[24px] text-[#0a0a0a] mt-3 mb-4 leading-tight">
              How We Built the Automation System That Handled 50,000 Leads for
              One Coaching Business
            </h3>
            <p className="font-satoshi text-[15px] text-[#9ca3af] leading-[1.7]">
              Using a quiz funnel combined with dynamic behavioural email
              automation, we built a complete lead handling system capable of
              processing 50,000 leads — all running on autopilot.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "50,000 leads handled",
              "Full automation — zero manual input",
              "System built in 48 hours",
            ].map((stat) => (
              <div
                key={stat}
                className="bg-white rounded-xl px-5 py-4"
              >
                <span className="font-satoshi font-medium text-[14px] text-[#0a0a0a]">
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
