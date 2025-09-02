import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ValueProposition from "@/components/ValueProposition";

// Lazy load components below the fold for better performance
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const DifferentialsSection = lazy(() => import("@/components/DifferentialsSection"));
const CasesSection = lazy(() => import("@/components/CasesSection"));
const MentalTriggersSection = lazy(() => import("@/components/MentalTriggersSection"));
const DiagnosticoGratuito = lazy(() => import("@/components/DiagnosticoGratuito"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <ValueProposition />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <ServicesSection />
        <HowItWorksSection />
        <DifferentialsSection />
        <CasesSection />
        <MentalTriggersSection />
        <DiagnosticoGratuito />
        <ContactSection />
        <Footer />
        <WhatsAppFloat />
      </Suspense>
    </div>
  );
};

export default Index;
