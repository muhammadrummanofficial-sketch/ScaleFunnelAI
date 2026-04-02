"use client";

const metrics = [
  { highlight: "50K+", text: " Leads Handled for One Coach" },
  { highlight: "5.0\u2605", text: " Upwork Rating" },
  { highlight: "48hrs", text: " Average Setup" },
  { highlight: "4", text: " Coach Types Served" },
];

export default function SocialProof() {
  return (
    <section className="bg-[#0a0a0a] border-t border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-content mx-auto px-6 py-5 sm:py-0 sm:h-20 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-0">
          {metrics.map((metric, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <div className="hidden sm:block w-px h-4 bg-[rgba(255,255,255,0.08)] mx-6" />
              )}
              <span className="font-satoshi font-medium text-[13px] sm:text-[14px]">
                <span className="text-[#7c3aed]">{metric.highlight}</span>
                <span className="text-[#9ca3af]">{metric.text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
