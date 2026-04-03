"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-cabinet font-extrabold text-[28px] sm:text-[36px] text-[#7c3aed] leading-none">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const bars = [
  { label: "M1", height: 15 },
  { label: "M2", height: 28 },
  { label: "M3", height: 45 },
  { label: "M4", height: 72 },
  { label: "M5", height: 100 },
];

export default function CaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const barRef = useRef(null);
  const barsVisible = useInView(barRef, { once: true, margin: "-50px" });

  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-[100px]" id="case-study">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-content mx-auto px-6"
      >
        {/* Header */}
        <motion.p
          variants={fadeInUp}
          className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.15em] text-center mb-4"
        >
          CASE STUDY
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="font-cabinet font-extrabold text-white text-center mb-4 max-w-[700px] mx-auto leading-[1.2]"
        >
          How One Coach Went From Manual Chaos to 15,000 Leads — On Complete
          Autopilot
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="font-satoshi text-[14px] sm:text-[16px] text-[#9ca3af] text-center max-w-[560px] mx-auto mb-10 sm:mb-14"
        >
          A real coaching business. Real results. Zero paid ads. Just smart AI
          marketing automation doing the work.
        </motion.p>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Left — Coach card */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#111111] rounded-[20px] p-8 sm:p-10 flex flex-col items-center"
          >
            <div className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full bg-[rgba(124,58,237,0.15)] border-2 border-[#7c3aed] flex items-center justify-center mb-5">
              <span className="font-cabinet font-extrabold text-[32px] sm:text-[42px] text-[#7c3aed]">
                JD
              </span>
            </div>
            <h3 className="font-cabinet font-bold text-[18px] text-white mb-1">
              The Coach
            </h3>
            <p className="font-satoshi text-[14px] text-[#9ca3af] mb-6">
              Business Coach &middot; USA
            </p>

            {/* Quote card */}
            <div className="bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] rounded-xl p-5 w-full">
              <p className="font-satoshi font-light italic text-[13px] sm:text-[14px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-3">
                &ldquo;The system Muhammad built changed everything for my
                business. Leads started coming in automatically and every single
                one was followed up with personalised messages. My calendar has
                been full ever since.&rdquo;
              </p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#7c3aed] text-[16px]">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Results dashboard */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            {/* Three metric cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { target: 15, suffix: "K+", label: "Leads Handled" },
                { target: 340, suffix: "%", label: "Conversion Lift" },
                { target: 48, suffix: "hrs", label: "Setup Time" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 sm:p-5 text-center"
                >
                  <CountUp target={metric.target} suffix={metric.suffix} />
                  <p className="font-satoshi text-[10px] sm:text-[12px] text-[#9ca3af] uppercase tracking-[0.05em] mt-2">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div
              ref={barRef}
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 sm:p-6 flex-1"
            >
              <p className="font-satoshi font-medium text-[13px] text-[#9ca3af] mb-4">
                Lead Volume Growth
              </p>
              <div className="flex items-end gap-3 sm:gap-4 h-[140px] sm:h-[160px]">
                {bars.map((bar) => (
                  <div
                    key={bar.label}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div className="w-full relative" style={{ height: "100%" }}>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={
                          barsVisible
                            ? { height: `${bar.height}%` }
                            : { height: 0 }
                        }
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 rounded-t"
                        style={{
                          background:
                            "linear-gradient(to top, #7c3aed, #a855f7)",
                        }}
                      />
                    </div>
                    <span className="font-satoshi text-[11px] text-[#9ca3af]">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="flex items-center justify-between gap-2 px-2">
              <div className="flex items-center gap-2 flex-1">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] flex-shrink-0" />
                <span className="font-satoshi text-[11px] sm:text-[12px] text-[#9ca3af] whitespace-nowrap">
                  Week 1: System Built
                </span>
              </div>
              <div className="h-px bg-[#7c3aed] flex-1 opacity-30 hidden sm:block" />
              <div className="flex items-center gap-2 flex-1 justify-center">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] flex-shrink-0" />
                <span className="font-satoshi text-[11px] sm:text-[12px] text-[#9ca3af] whitespace-nowrap">
                  Week 2: Leads Flowing
                </span>
              </div>
              <div className="h-px bg-[#7c3aed] flex-1 opacity-30 hidden sm:block" />
              <div className="flex items-center gap-2 flex-1 justify-end">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] flex-shrink-0" />
                <span className="font-satoshi text-[11px] sm:text-[12px] text-[#9ca3af] whitespace-nowrap">
                  Month 5: 15K Leads
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="text-center">
          <motion.a
            href="#final-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full sm:w-auto font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-[10px] px-7 py-3.5 text-center"
          >
            Get the Same System for Your Business
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
