"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    stage: "Stage 01",
    title: "You Can't Get Consistent Leads",
    body: "You're posting content, showing up, doing the work — but the right coaches aren't finding you and nobody is reaching out consistently.",
  },
  {
    stage: "Stage 02",
    title: "Your Leads Ghost You",
    body: "People show interest then disappear. No automated follow-up means every cold lead is revenue you'll never recover.",
  },
  {
    stage: "Stage 03",
    title: "Your Business Is Running You",
    body: "You're spending 10+ hours a week on admin, onboarding and follow-ups. You can't grow without working more hours.",
  },
  {
    stage: "Stage 04",
    title: "You've Maxed Out 1-to-1",
    body: "Your income is capped by your time. You're ready to launch a group program or course but have no system to sell and deliver it at scale.",
  },
];

export default function ForYouIf() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-[100px]" id="for-you">
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
          WHO THIS IS FOR
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[#0a0a0a] text-center mb-12 max-w-[600px] mx-auto"
        >
          Every Coach Has a Different Problem.
          <br />
          We Solve All Four.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card) => (
            <motion.div
              key={card.stage}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-[#f3f0ff] rounded-2xl p-8"
            >
              <span className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.1em]">
                {card.stage}
              </span>
              <h3 className="text-[20px] text-[#0a0a0a] mt-3 mb-3">
                {card.title}
              </h3>
              <p className="font-satoshi text-[15px] text-[#9ca3af] leading-[1.7]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center">
          <p className="font-satoshi font-medium text-[17px] text-[#0a0a0a] mb-6">
            Whichever one{" "}
            <span className="underline decoration-[#7c3aed] underline-offset-4">
              sounds like you
            </span>{" "}
            — we&apos;ve built the exact system to fix it
          </p>
          <motion.a
            href="#final-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-[10px] px-7 py-3.5"
          >
            Find My Growth Blocker &rarr; Takes 2 Minutes
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
