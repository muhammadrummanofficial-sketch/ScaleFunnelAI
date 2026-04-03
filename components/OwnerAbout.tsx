"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function OwnerAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-16 sm:py-[100px]" id="owner">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-stretch"
      >
        {/* Left Column — Photo Placeholder Card */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#0a0a0a] rounded-[20px] p-8 sm:p-10 flex flex-col items-center justify-center min-h-[300px] md:min-h-0"
        >
          {/* Avatar circle */}
          <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full bg-[#f3f0ff] border-2 border-[#7c3aed] flex items-center justify-center mb-5">
            <span className="font-cabinet font-extrabold text-[36px] sm:text-[48px] text-[#7c3aed]">
              MR
            </span>
          </div>

          <h3 className="font-cabinet font-bold text-[20px] text-white mb-1">
            Muhammad
          </h3>
          <p className="font-satoshi text-[14px] text-[#9ca3af] mb-6">
            Founder, ScaleFunnel AI
          </p>

          {/* Credential badges */}
          <div className="flex flex-col gap-2">
            {[
              "\u2713 GoHighLevel Certified",
              "\u2713 5-Star Upwork Agency",
              "\u2713 AI Marketing Automation Specialist",
            ].map((badge) => (
              <span
                key={badge}
                className="bg-[#f3f0ff] rounded-full px-4 py-1.5 font-satoshi font-medium text-[12px] text-[#7c3aed] text-center"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column — Message */}
        <motion.div variants={fadeInUp} className="flex flex-col justify-center">
          <p className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.15em] mb-4">
            FROM THE FOUNDER
          </p>

          <h2 className="font-cabinet font-bold text-[26px] sm:text-[32px] text-[#0a0a0a] leading-[1.2] mb-6">
            I Built This Because I Was Tired of Watching Great Coaches Fail at
            Marketing
          </h2>

          <div className="space-y-4 mb-6">
            <p className="font-satoshi text-[15px] sm:text-[16px] text-[#9ca3af] leading-[1.8]">
              I have spent years inside coaching businesses — building the
              funnels, automations, and systems that turn attention into revenue.
              I have seen what works and what does not.
            </p>
            <p className="font-satoshi text-[15px] sm:text-[16px] text-[#9ca3af] leading-[1.8]">
              The coaches who scale are not the ones who work harder. They are
              the ones who have an intelligent system working for them —
              qualifying leads, following up automatically, and booking calls
              while they sleep.
            </p>
            <p className="font-satoshi text-[15px] sm:text-[16px] text-[#9ca3af] leading-[1.8]">
              ScaleFunnel AI exists for one reason: to give every serious coach
              access to the same AI marketing systems that the world&apos;s top
              coaches use — without the agency price tag or the technical
              headache.
            </p>
          </div>

          <p className="font-satoshi font-light italic text-[15px] text-[#7c3aed] mb-8">
            — Muhammad, Founder
          </p>

          <div>
            <motion.a
              href="#final-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full sm:w-auto font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-lg px-7 py-3.5 text-center"
            >
              Take the Free Quiz Muhammad Built &rarr;
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
