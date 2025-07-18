import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ValueProposition from "@/components/ValueProposition";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CasesSection from "@/components/CasesSection";
import MentalTriggersSection from "@/components/MentalTriggersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <ValueProposition />
      <ServicesSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <CasesSection />
      <MentalTriggersSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
