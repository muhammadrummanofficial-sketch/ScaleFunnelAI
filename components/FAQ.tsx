"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    q: "How long does it take to set up?",
    a: "Most systems are fully built and live within 48 hours of our kick-off call. Complex multi-path quiz funnels may take 3-5 days.",
  },
  {
    q: "Do I need GoHighLevel already?",
    a: "No. We handle the full GHL setup as part of the service. You don't need any prior experience or tools.",
  },
  {
    q: "What makes your funnels different?",
    a: "Most funnels treat every lead the same. Ours don't. Every person gets a different experience based on their quiz answers — different emails, different offers, different sequences.",
  },
  {
    q: "How much does it cost?",
    a: "Every project is scoped based on what you need. Book a free strategy call and we'll give you a clear breakdown with no surprises.",
  },
  {
    q: "Do you work outside coaching?",
    a: "We started with coaches but the same system works for consultants, course creators, service businesses, and more.",
  },
  {
    q: "What results can I expect?",
    a: "Our systems consistently improve lead quality, increase booking rates, and reduce manual workload — often within the first 30 days.",
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
        <span className="font-satoshi font-medium text-[17px] text-[#0a0a0a] pr-4">
          {faq.q}
        </span>
        <span className="text-[#7c3aed] text-xl flex-shrink-0 w-6 h-6 flex items-center justify-center">
          {open ? "−" : "+"}
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
            <p className="font-satoshi text-[15px] text-[#9ca3af] leading-[1.8] pb-5 pt-1">
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
    <section className="bg-white py-[100px]" id="faq">
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
          className="text-[#0a0a0a] text-center mb-12"
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
