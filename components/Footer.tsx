"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      <div className="max-w-content mx-auto px-6 py-10 flex flex-col items-center gap-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="ScaleFunnel AI Home">
          <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="12" width="4" height="6" rx="1" fill="#7c3aed" />
              <rect x="8" y="8" width="4" height="10" rx="1" fill="#7c3aed" />
              <rect x="14" y="3" width="4" height="15" rx="1" fill="#7c3aed" />
            </svg>
          </div>
          <span className="font-cabinet font-bold text-lg text-white">
            ScaleFunnel<span className="text-[#7c3aed]">AI</span>
          </span>
        </a>

        {/* Copyright */}
        <p className="font-satoshi text-[13px] text-[#9ca3af] text-center">
          &copy; 2026 ScaleFunnel AI. All rights reserved.
        </p>

        {/* Links */}
        <p className="font-satoshi text-[13px] text-[#9ca3af]">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          {" \u00B7 "}
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </a>
        </p>
      </div>
      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-16 md:h-0" />
    </footer>
  );
}
