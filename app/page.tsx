import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const FloatingCTA = dynamic(() => import("@/components/FloatingCTA"));
const LogoStrip = dynamic(() => import("@/components/LogoStrip"));
const ForYouIf = dynamic(() => import("@/components/ForYouIf"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const OwnerAbout = dynamic(() => import("@/components/OwnerAbout"));
const Services = dynamic(() => import("@/components/Services"));
const Results = dynamic(() => import("@/components/Results"));
const CaseStudy = dynamic(() => import("@/components/CaseStudy"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CompanyLogos = dynamic(() => import("@/components/CompanyLogos"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <FloatingCTA />
      <main>
        <Hero />
        <LogoStrip />
        <ForYouIf />
        <HowItWorks />
        <OwnerAbout />
        <Services />
        <Results />
        <CaseStudy />
        <Testimonials />
        <CompanyLogos />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
