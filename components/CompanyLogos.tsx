"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const brands = ["Brand 01", "Brand 02", "Brand 03", "Brand 04", "Brand 05"];

export default function CompanyLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-16 sm:py-[100px]">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-content mx-auto px-6"
      >
        <motion.p
          variants={fadeInUp}
          className="font-satoshi font-medium text-[11px] text-[#9ca3af] uppercase tracking-[0.15em] text-center mb-8"
        >
          BRANDS AND BUSINESSES WE HAVE WORKED WITH
        </motion.p>

        {/* Logo grid */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 max-w-[700px] mx-auto mb-8"
        >
          {/* Replace placeholder logos with actual brand logos in the image assets */}
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-[#f3f0ff] rounded-lg border border-[rgba(124,58,237,0.1)] hover:border-[#7c3aed] transition-colors duration-200 flex items-center justify-center h-12 px-4"
            >
              <span className="font-satoshi font-medium text-[12px] sm:text-[13px] text-[#9ca3af] whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA link */}
        <motion.div variants={fadeInUp} className="text-center">
          <a
            href="#final-cta"
            className="font-satoshi font-medium text-[15px] text-[#7c3aed] hover:underline transition-all duration-200"
          >
            Join These Businesses — Take the Quiz
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
