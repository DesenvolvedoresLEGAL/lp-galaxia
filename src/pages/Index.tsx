import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CasesSection from "@/components/CasesSection";
import MentalTriggersSection from "@/components/MentalTriggersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <DifferentialsSection />
      <CasesSection />
      <MentalTriggersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
