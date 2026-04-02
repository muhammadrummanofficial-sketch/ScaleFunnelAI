"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    label: "QUIZ FUNNELS",
    title: "AI Quiz Funnels",
    body: "If your quiz shows a lead generation problem, we build multi-step diagnostic quizzes that segment your audience, qualify leads automatically, and route each person to the right offer \u2014 without a single manual touch.",
  },
  {
    label: "EMAIL AUTOMATION",
    title: "Dynamic Email Automation",
    body: "If your quiz reveals a follow-up gap, we create behavioural email sequences that adapt to what each lead told you. Different answers trigger different emails. Every person feels like you wrote to them personally.",
  },
  {
    label: "GHL SYSTEMS",
    title: "GHL Funnel Systems",
    body: "If your quiz identifies an operations bottleneck, we do full GoHighLevel buildouts \u2014 pipelines, automations, calendars, follow-up sequences, and CRM setup done for you from scratch.",
  },
  {
    label: "OPTIMISATION",
    title: "Conversion Optimisation",
    body: "If your quiz flags a conversion leak, we audit your existing funnel, find where leads are dropping off, and systematically fix every leak until your conversion rate can\u2019t help but improve.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-16 sm:py-[100px]" id="services">
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
          WHAT WE BUILD FOR YOU
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[#0a0a0a] text-center mb-10 sm:mb-12"
        >
          After the Quiz, Here&apos;s How We Fix It
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => (
            <motion.div
              key={service.label}
              variants={fadeInUp}
              className="bg-[#fafafa] border border-[#f3f0ff] rounded-2xl p-6 sm:p-8 border-t-[3px] border-t-[#7c3aed] hover:bg-[#f3f0ff] transition-colors duration-200"
            >
              <span className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.1em]">
                {service.label}
              </span>
              <h3 className="text-[16px] sm:text-[18px] text-[#0a0a0a] mt-3 mb-3">
                {service.title}
              </h3>
              <p className="font-satoshi text-[14px] sm:text-[15px] text-[#9ca3af] leading-[1.7] mb-4">
                {service.body}
              </p>
              <span className="text-[#7c3aed] text-lg" aria-hidden="true">
                &rarr;
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
