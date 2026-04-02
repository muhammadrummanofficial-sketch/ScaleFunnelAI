"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    q: "What happens after I take the quiz?",
    a: "You\u2019ll get a personalised growth report emailed to you within 60 seconds. It breaks down your #1 bottleneck and exactly what to do about it \u2014 no fluff, no generic advice.",
  },
  {
    q: "How long does the quiz take?",
    a: "Under 2 minutes. It\u2019s 5 questions. You\u2019ll spend more time reading the results than answering.",
  },
  {
    q: "Is this actually free?",
    a: "100% free. No credit card. No obligation. We built this to help coaches understand what\u2019s holding them back \u2014 and to show you what\u2019s possible when the right system is in place.",
  },
  {
    q: "What if I already know my problem?",
    a: "Then the quiz will either confirm it or surprise you. Most coaches think their issue is lead gen when it\u2019s actually follow-up \u2014 or vice versa. The data doesn\u2019t lie.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#f3f0ff]">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-satoshi font-medium text-[15px] sm:text-[17px] text-[#0a0a0a] pr-4">
          {faq.q}
        </span>
        <span className="text-[#7c3aed] text-xl flex-shrink-0 w-6 h-6 flex items-center justify-center">
          {open ? "\u2212" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="font-satoshi text-[14px] sm:text-[15px] text-[#9ca3af] leading-[1.8] pb-5 pt-1">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-16 sm:py-[100px]" id="faq">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-[720px] mx-auto px-6"
      >
        <motion.p
          variants={fadeInUp}
          className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.15em] text-center mb-4"
        >
          FAQ
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[#0a0a0a] text-center mb-10 sm:mb-12"
        >
          Questions We Get Asked A Lot
        </motion.h2>

        <motion.div variants={fadeInUp}>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
