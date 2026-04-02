import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const SocialProof = dynamic(() => import("@/components/SocialProof"));
const ForYouIf = dynamic(() => import("@/components/ForYouIf"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Services = dynamic(() => import("@/components/Services"));
const Results = dynamic(() => import("@/components/Results"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const About = dynamic(() => import("@/components/About"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ForYouIf />
        <HowItWorks />
        <Services />
        <Results />
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
