import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, FileText } from "lucide-react";

const FinalCTASection = () => {
  const handleScheduleDemo = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre o GalaxIA™ e como pode transformar minha empresa.";
    const whatsappUrl = `https://wa.me/5511999572394?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDiagnosisClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScqgHd7hLjqZ7WiqJmpiuW5CLJmbpdO8vuffahp8Bd5_PV_yA/viewform?usp=sharing&ouid=100646885101843381079",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-galaxia relative overflow-hidden" id="final-cta">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black font-inter mb-6">
          Pronto para conectar sua empresa{" "}
          <span className="text-galaxia-cyan">ao futuro?</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto font-inter opacity-90">
          Fale no WhatsApp ou solicite seu diagnóstico gratuito. 
          O primeiro passo para revolucionar sua empresa com IA está a um clique de distância.
        </p>

        {/* CTA Buttons */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="bg-galaxia-green p-4 rounded-full w-fit mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold font-inter mb-4">WhatsApp</h3>
            <p className="text-sm opacity-80 font-inter mb-6">
              Converse diretamente com nossos especialistas agora mesmo
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-galaxia-green hover:bg-galaxia-green/90 text-white font-bold py-3 border-galaxia-green font-inter"
            >
              Fale agora no WhatsApp
            </Button>
          </div>

          {/* Diagnosis */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="bg-accent p-4 rounded-full w-fit mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold font-inter mb-4">Diagnóstico</h3>
            <p className="text-sm opacity-80 font-inter mb-6">
              Análise gratuita e personalizada em menos de 5 minutos da sua companhia
            </p>
            <Button 
              onClick={handleDiagnosisClick}
              variant="outline"
              className="w-full bg-transparent border-white text-white hover:bg-white hover:text-foreground font-bold py-3 font-inter"
            >
              Quero meu Diagnóstico
            </Button>
          </div>
        </div>

        {/* Bottom guarantee */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold font-inter mb-4">
            🚀 Garantia de Resultados
          </h3>
          <p className="text-lg font-inter opacity-90">
            Se sua empresa não obtiver <strong>valor real mensurável</strong> em 90 dias, 
            trabalhamos sem custo adicional até atingir os resultados prometidos.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;