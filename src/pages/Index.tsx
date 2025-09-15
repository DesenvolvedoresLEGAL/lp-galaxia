import { lazy, Suspense } from "react";
import GalaxiaNavbar from "@/components/GalaxiaNavbar";
import GalaxiaHeroSection from "@/components/GalaxiaHeroSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import DeliveriesSection from "@/components/DeliveriesSection";

// Lazy load components below the fold for better performance
const DiagnosisSection = lazy(() => import("@/components/DiagnosisSection"));
const DeliveryModelSection = lazy(() => import("@/components/DeliveryModelSection"));
const TechnologySection = lazy(() => import("@/components/TechnologySection"));
const SuccessCasesSection = lazy(() => import("@/components/SuccessCasesSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const GlossarySection = lazy(() => import("@/components/GlossarySection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <GalaxiaNavbar />
      <main id="main-content">
        <GalaxiaHeroSection />
        <TargetAudienceSection />
        <DeliveriesSection />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <DiagnosisSection />
          <DeliveryModelSection />
          <TechnologySection />
          <SuccessCasesSection />
          <FAQSection />
          <GlossarySection />
          <FinalCTASection />
          <ContactSection />
          <Footer />
          <WhatsAppFloat />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
