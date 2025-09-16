import { lazy, Suspense } from "react";
import GalaxiaNavbar from "@/components/GalaxiaNavbar";
import GalaxiaHeroSection from "@/components/GalaxiaHeroSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import DeliveriesSection from "@/components/DeliveriesSection";
import SocialProofSection from "@/components/SocialProofSection";

// Lazy load components below the fold for better performance
const EnhancedDiagnosisSection = lazy(() => import("@/components/EnhancedDiagnosisSection"));
const EducationalSection = lazy(() => import("@/components/EducationalSection"));
const DeliveryModelSection = lazy(() => import("@/components/DeliveryModelSection"));
const TechnologySection = lazy(() => import("@/components/TechnologySection"));
const SuccessCasesSection = lazy(() => import("@/components/SuccessCasesSection"));
const VariedCTASection = lazy(() => import("@/components/VariedCTASection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const GlossarySection = lazy(() => import("@/components/GlossarySection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <GalaxiaNavbar />
      <main id="main-content">
        <GalaxiaHeroSection />
        <SocialProofSection />
        <TargetAudienceSection />
        <DeliveriesSection />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <EnhancedDiagnosisSection />
          <EducationalSection />
          <DeliveryModelSection />
          <TechnologySection />
          <SuccessCasesSection />
          <VariedCTASection />
          <FAQSection />
          <GlossarySection />
          <FinalCTASection />
          <Footer />
          <WhatsAppFloat />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
