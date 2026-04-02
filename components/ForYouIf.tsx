"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const cards = [
  {
    stage: "Stage 01",
    title: "You\u2019re Invisible Online",
    body: "You post. You show up. You do everything the gurus say. But your DMs are empty and your calendar has tumbleweeds. The right people can\u2019t find you.",
  },
  {
    stage: "Stage 02",
    title: "Leads Show Interest Then Vanish",
    body: "Someone fills out your form or replies to your story. Then silence. No follow-up system means every warm lead goes cold \u2014 and that\u2019s money gone forever.",
  },
  {
    stage: "Stage 03",
    title: "You ARE the Business (And It\u2019s Crushing You)",
    body: "10+ hours a week on admin, onboarding, chasing invoices. You didn\u2019t start a coaching business to become a full-time operations manager.",
  },
  {
    stage: "Stage 04",
    title: "You\u2019ve Hit the 1-on-1 Ceiling",
    body: "Your income is capped by your hours. You know you need to scale to groups or courses, but you have no system to sell, deliver, or automate any of it.",
  },
];

export default function ForYouIf() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-16 sm:py-[100px]" id="for-you">
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
          DO ANY OF THESE SOUND FAMILIAR?
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[#0a0a0a] text-center mb-10 sm:mb-12 max-w-[640px] mx-auto"
        >
          You&apos;re Working Harder Than Ever. But Growth Has Flatlined.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {cards.map((card) => (
            <motion.div
              key={card.stage}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-[#f3f0ff] rounded-2xl p-6 sm:p-8"
            >
              <span className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.1em]">
                {card.stage}
              </span>
              <h3 className="text-[18px] sm:text-[20px] text-[#0a0a0a] mt-3 mb-3">
                {card.title}
              </h3>
              <p className="font-satoshi text-[14px] sm:text-[15px] text-[#9ca3af] leading-[1.7]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center">
          <motion.a
            href="#final-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full sm:w-auto font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-[10px] px-7 py-3.5 text-center"
          >
            Find Out What&apos;s Holding You Back &rarr; Free Quiz
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
