import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const GalaxiaHeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de agendar uma demonstração gratuita do GalaxIA™ para minha empresa.";
    const whatsappUrl = `https://wa.me/5511999572394?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-hero overflow-hidden">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Pular para o conteúdo principal
      </a>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-galaxia-light via-background to-galaxia-light opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-galaxia-cyan/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-galaxia-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20">
          <Sparkles className="w-4 h-4 mr-2" />
          Nova Era da IA Corporativa
        </Badge>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-inter mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Infraestrutura de IA
          </span>
          <br />
          <span className="text-foreground">personalizada para sua empresa</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-inter">
          Transforme seu negócio com o <strong className="text-primary font-bold">GalaxIA™</strong>, 
          a solução que integra agentes conversacionais, automações e copilotos internos sob medida 
          para empresas com faturamento <strong>acima de R$ 1 milhão</strong>.
        </p>
        
        {/* Benefits Highlight */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-3xl mx-auto">
          <div className="bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-semibold text-primary">
            ⚡ Economize até 30% do tempo operacional
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-semibold text-primary">
            📈 ROI em até 6 meses
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-semibold text-primary">
            🚀 Setup em 30 dias
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg shadow-button transition-all duration-300 hover:shadow-galaxia font-inter"
            >
              Agende uma demonstração gratuita
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="text-white border font-bold px-8 py-4 text-lg transition-all duration-300 font-inter"
              style={{ backgroundColor: '#4D2BFB', borderColor: '#4D2BFB' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3D1BEB'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4D2BFB'}
            >
              Fale agora no WhatsApp
            </Button>
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="font-semibold text-sm text-primary mr-2">
              🔥
            </span>
            <span className="font-semibold text-sm text-primary">
              Últimas 3 vagas de Setembro
            </span>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaHeroSection;