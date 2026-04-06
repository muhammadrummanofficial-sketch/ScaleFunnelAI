"use client";

import { useState, FormEvent } from "react";

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section
      style={{ background: "#000000", padding: "80px 24px" }}
      className="recruit-hero"
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.7)",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          NOW RECRUITING
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(30px, 5vw, 48px)",
            fontWeight: "bold",
            color: "#ffffff",
            lineHeight: 1.2,
            margin: "0 auto",
          }}
        >
          Join Our Team of High-Performing Agents
        </h1>

        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.8,
            maxWidth: 560,
            margin: "24px auto 0",
          }}
        >
          We are looking for driven motivated agents ready to build a serious
          income. If you are ready to grow with a team that actually supports
          your success — we want to hear from you.
        </p>

        {/* Trust points */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px 32px",
            marginTop: 32,
          }}
        >
          {[
            "Uncapped Earning Potential",
            "Full Training and Support Provided",
            "Flexible Schedule — Work on Your Terms",
          ].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.9)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ color: "#ffffff" }}>&#10003;</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Benefits ───────────────────────── */
const benefits = [
  {
    title: "Real Earning Potential",
    body: "Our agents consistently earn above industry average. Your income is directly tied to your effort — no ceiling no cap.",
  },
  {
    title: "Training That Actually Works",
    body: "From day one you get access to proven scripts systems and mentorship from agents who are already winning.",
  },
  {
    title: "A Team That Has Your Back",
    body: "You will never feel like you are figuring it out alone. Our team is collaborative not competitive.",
  },
  {
    title: "Flexibility and Freedom",
    body: "Build your business around your life not the other way around. Work from anywhere on your own schedule.",
  },
];

function BenefitsSidebar() {
  return (
    <div>
      <h2
        style={{
          fontFamily: "Georgia, serif",
          fontSize: 28,
          fontWeight: "bold",
          color: "#000000",
          marginBottom: 32,
        }}
      >
        Why Agents Choose Us
      </h2>
      {benefits.map((b) => (
        <div
          key={b.title}
          style={{
            borderLeft: "3px solid #b50202",
            paddingLeft: 16,
            marginBottom: 24,
          }}
        >
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              color: "#000000",
              marginBottom: 4,
            }}
          >
            {b.title}
          </p>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              color: "#9b9b9b",
              lineHeight: 1.7,
            }}
          >
            {b.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────── Form Card ───────────────────────── */
interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
}

function FormCard() {
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (!values.name.trim()) e.name = "This field is required";
    if (!values.email.trim()) e.email = "This field is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Please enter a valid email";
    if (!values.phone.trim()) e.phone = "This field is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#ffffff",
          borderRadius: 12,
          padding: "48px 40px",
          textAlign: "center",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "#b50202",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 24,
            fontWeight: "bold",
            color: "#000000",
            marginTop: 20,
          }}
        >
          Application Received!
        </h3>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 15,
            color: "#9b9b9b",
            lineHeight: 1.8,
            maxWidth: 400,
            margin: "12px auto 0",
          }}
        >
          Thank you for your interest in joining our team. One of our
          recruitment managers will reach out to you within 24 hours to discuss
          the opportunity.
        </p>
      </div>
    );
  }

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    height: 48,
    background: "#f1f1f1",
    border: `1px solid ${hasError ? "#b50202" : "#e0e0e0"}`,
    borderRadius: 8,
    padding: "0 16px",
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
    color: "#000000",
    outline: "none",
    transition: "border 200ms",
    boxSizing: "border-box" as const,
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontWeight: 500,
    fontSize: 13,
    color: "#000000",
    display: "block",
    marginBottom: 6,
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    color: "#b50202",
    marginTop: 4,
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 12,
        padding: "clamp(24px, 4vw, 40px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      <h3
        style={{
          fontFamily: "Georgia, serif",
          fontSize: 22,
          fontWeight: "bold",
          color: "#000000",
          marginBottom: 8,
        }}
      >
        Apply to Join Our Team
      </h3>
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: 13,
          color: "#9b9b9b",
          marginBottom: 28,
        }}
      >
        Takes less than 60 seconds. We will be in touch within 24 hours.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={values.name}
            onChange={(e) =>
              setValues({ ...values, name: e.target.value })
            }
            onFocus={(e) =>
              (e.target.style.border = "1px solid #b50202")
            }
            onBlur={(e) =>
              (e.target.style.border = `1px solid ${errors.name ? "#b50202" : "#e0e0e0"}`)
            }
            style={inputStyle(!!errors.name)}
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={values.email}
            onChange={(e) =>
              setValues({ ...values, email: e.target.value })
            }
            onFocus={(e) =>
              (e.target.style.border = "1px solid #b50202")
            }
            onBlur={(e) =>
              (e.target.style.border = `1px solid ${errors.email ? "#b50202" : "#e0e0e0"}`)
            }
            style={inputStyle(!!errors.email)}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        {/* Phone */}
        <div style={{ marginBottom: 0 }}>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={values.phone}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9+\-() ]/g, "");
              setValues({ ...values, phone: val });
            }}
            onFocus={(e) =>
              (e.target.style.border = "1px solid #b50202")
            }
            onBlur={(e) =>
              (e.target.style.border = `1px solid ${errors.phone ? "#b50202" : "#e0e0e0"}`)
            }
            style={inputStyle(!!errors.phone)}
            aria-required="true"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            height: 52,
            background: "#b50202",
            color: "#ffffff",
            fontFamily: "Arial, sans-serif",
            fontSize: 16,
            fontWeight: 600,
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            marginTop: 24,
            transition: "background 200ms",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#990000")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#b50202")
          }
        >
          Apply Now — It Takes 60 Seconds
        </button>

        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 11,
            color: "#9b9b9b",
            textAlign: "center",
            marginTop: 12,
            lineHeight: 1.6,
          }}
        >
          By submitting this form you agree to be contacted by our recruitment
          team. We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
}

/* ─────────────────── Form Section ──────────────────────── */
function FormSection() {
  return (
    <section
      id="apply-form"
      style={{ background: "#f1f1f1", padding: "80px 24px" }}
      className="recruit-form-section"
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 40,
        }}
        className="recruit-form-grid"
      >
        <BenefitsSidebar />
        <FormCard />
      </div>
    </section>
  );
}

/* ────────────────── Social Proof Bar ───────────────────── */
const stats = [
  { number: "500+", label: "Active Agents" },
  { number: "Top 10%", label: "Industry Earning Potential" },
  { number: "24hrs", label: "Response Time" },
  { number: "5★", label: "Agent Satisfaction" },
];

function SocialProofBar() {
  return (
    <section style={{ background: "#000000", padding: "40px 24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
          textAlign: "center",
        }}
        className="recruit-stats-grid"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: "12px 0",
              borderRight:
                i % 2 === 0
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "none",
            }}
            className="recruit-stat-item"
          >
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: "bold",
                color: "#b50202",
                margin: 0,
              }}
            >
              {stat.number}
            </p>
            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 12,
                color: "#9b9b9b",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: 4,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────── Closing CTA ────────────────────────── */
function ClosingCTA() {
  return (
    <section style={{ background: "#000000", padding: "60px 24px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: "bold",
            color: "#ffffff",
            lineHeight: 1.2,
          }}
        >
          Ready to Take Control of Your Income?
        </h2>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.8)",
            marginTop: 16,
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          Spots are limited. Apply now and take the first step toward building
          the career you actually want.
        </p>
        <a
          href="#apply-form"
          style={{
            display: "inline-block",
            background: "#ffffff",
            color: "#b50202",
            fontFamily: "Arial, sans-serif",
            fontSize: 16,
            fontWeight: 700,
            borderRadius: 8,
            padding: "16px 36px",
            marginTop: 32,
            textDecoration: "none",
            transition: "background 200ms",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#f1f1f1")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#ffffff")
          }
        >
          Apply to Join Our Team &rarr;
        </a>
      </div>
    </section>
  );
}

/* ────────────────── Page Component ─────────────────────── */
export default function RecruitPage() {
  return (
    <>
      <style jsx global>{`
        /* Reset only for this page */
        .recruit-page * {
          box-sizing: border-box;
        }
        .recruit-page input::placeholder {
          color: #9b9b9b;
        }
        .recruit-page input:focus {
          border-color: #b50202 !important;
          outline: none;
        }
        /* Desktop grid */
        @media (min-width: 768px) {
          .recruit-form-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 60px !important;
          }
          .recruit-stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .recruit-stat-item {
            border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          .recruit-stat-item:last-child {
            border-right: none !important;
          }
        }
        @media (max-width: 767px) {
          .recruit-hero {
            padding: 48px 24px !important;
          }
          .recruit-form-section {
            padding: 48px 24px !important;
          }
        }
      `}</style>
      <div className="recruit-page" style={{ fontFamily: "Arial, sans-serif" }}>
        <Hero />
        <FormSection />
        <SocialProofBar />
        <ClosingCTA />
      </div>
    </>
  );
}
