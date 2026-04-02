"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-200 ${
        scrolled
          ? "bg-[#ffffff]/95 backdrop-blur-md border-b border-[#f3f0ff]"
          : "bg-[#ffffff] border-b border-[#f3f0ff]"
      }`}
    >
      <div className="w-full max-w-content mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="ScaleFunnel AI Home">
          <div className="w-9 h-9 bg-[#0a0a0a] rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="12" width="4" height="6" rx="1" fill="#7c3aed" />
              <rect x="8" y="8" width="4" height="10" rx="1" fill="#7c3aed" />
              <rect x="14" y="3" width="4" height="15" rx="1" fill="#7c3aed" />
            </svg>
          </div>
          <span className="font-cabinet font-bold text-lg text-[#0a0a0a]">
            ScaleFunnel<span className="text-[#7c3aed]">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-satoshi font-medium text-[15px] text-[#9ca3af] hover:text-[#0a0a0a] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#final-cta"
          className="hidden md:inline-flex font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-lg px-5 py-2.5 hover:opacity-90 transition-opacity duration-200"
        >
          Book a Free Call
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-[#0a0a0a] transition-transform duration-200 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#0a0a0a] transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#0a0a0a] transition-transform duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[72px] left-0 right-0 bg-white border-b border-[#f3f0ff] md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-satoshi font-medium text-[15px] text-[#9ca3af] hover:text-[#0a0a0a] transition-colors duration-200 py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#final-cta"
                className="font-satoshi font-medium text-[15px] text-white bg-[#7c3aed] rounded-lg px-5 py-3 text-center hover:opacity-90 transition-opacity duration-200 mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
