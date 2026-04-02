"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#fafafa] py-[100px]" id="about">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column */}
        <div>
          <motion.p
            variants={fadeInUp}
            className="font-satoshi font-medium text-[11px] text-[#7c3aed] uppercase tracking-[0.15em] mb-4"
          >
            WHO WE ARE
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-[#0a0a0a] mb-6">
            Built by Someone Who Has Actually Done It
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <p className="font-satoshi text-[17px] text-[#9ca3af] leading-[1.8] mb-4">
              We&apos;re not a big agency with account managers who have never
              touched GoHighLevel. ScaleFunnel AI was built by a GHL specialist
              who has personally built automation systems that have handled over
              50,000 leads for coaching businesses — and counting.
            </p>
            <p className="font-satoshi text-[17px] text-[#9ca3af] leading-[1.8] mb-8">
              Every system we build is custom. Every automation is designed to
              convert. And we don&apos;t stop until your funnel is working harder
              than you are.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <div className="bg-[#f3f0ff] rounded-lg px-4 py-2.5 inline-flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.5 4.5L6.5 11.5L2.5 7.5"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-satoshi font-medium text-[13px] text-[#7c3aed]">
                GoHighLevel Certified
              </span>
            </div>
            <div className="bg-[#f3f0ff] rounded-lg px-4 py-2.5 inline-flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.5 4.5L6.5 11.5L2.5 7.5"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-satoshi font-medium text-[13px] text-[#7c3aed]">
                5-Star Upwork Agency
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column — SVG Funnel Diagram */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#0a0a0a] rounded-[20px] p-10 flex items-center justify-center"
        >
          <svg
            width="280"
            height="340"
            viewBox="0 0 280 340"
            fill="none"
            className="w-full max-w-[280px]"
            aria-label="Funnel flow diagram showing Quiz leading to AI Segments Lead branching into Sequence A, B, and C"
          >
            {/* Quiz Box */}
            <rect
              x="80"
              y="10"
              width="120"
              height="44"
              rx="8"
              fill="#7c3aed"
            />
            <text
              x="140"
              y="38"
              textAnchor="middle"
              fill="white"
              fontSize="15"
              fontFamily="Satoshi, sans-serif"
              fontWeight="500"
            >
              Quiz
            </text>

            {/* Arrow Down */}
            <line
              x1="140"
              y1="54"
              x2="140"
              y2="100"
              stroke="#7c3aed"
              strokeWidth="2"
            />
            <polygon points="134,94 140,106 146,94" fill="#7c3aed" />

            {/* AI Segments Lead Box */}
            <rect
              x="50"
              y="110"
              width="180"
              height="44"
              rx="8"
              fill="transparent"
              stroke="#7c3aed"
              strokeWidth="2"
            />
            <text
              x="140"
              y="138"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontFamily="Satoshi, sans-serif"
              fontWeight="500"
            >
              AI Segments Lead
            </text>

            {/* Three arrows splitting */}
            <line
              x1="90"
              y1="154"
              x2="50"
              y2="210"
              stroke="#7c3aed"
              strokeWidth="2"
            />
            <line
              x1="140"
              y1="154"
              x2="140"
              y2="210"
              stroke="#7c3aed"
              strokeWidth="2"
            />
            <line
              x1="190"
              y1="154"
              x2="230"
              y2="210"
              stroke="#7c3aed"
              strokeWidth="2"
            />

            {/* Arrow tips */}
            <polygon points="44,204 50,216 56,204" fill="#7c3aed" />
            <polygon points="134,204 140,216 146,204" fill="#7c3aed" />
            <polygon points="224,204 230,216 236,204" fill="#7c3aed" />

            {/* Sequence A */}
            <rect
              x="10"
              y="220"
              width="80"
              height="40"
              rx="8"
              fill="transparent"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            <text
              x="50"
              y="245"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontFamily="Satoshi, sans-serif"
              fontWeight="400"
            >
              Sequence A
            </text>

            {/* Sequence B */}
            <rect
              x="100"
              y="220"
              width="80"
              height="40"
              rx="8"
              fill="transparent"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            <text
              x="140"
              y="245"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontFamily="Satoshi, sans-serif"
              fontWeight="400"
            >
              Sequence B
            </text>

            {/* Sequence C */}
            <rect
              x="190"
              y="220"
              width="80"
              height="40"
              rx="8"
              fill="transparent"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            <text
              x="230"
              y="245"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontFamily="Satoshi, sans-serif"
              fontWeight="400"
            >
              Sequence C
            </text>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
