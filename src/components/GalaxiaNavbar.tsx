import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const GalaxiaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of fixed navbar
      const targetPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre o GalaxIA™ para minha empresa.";
    const whatsappUrl = `https://wa.me/5511999572394?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: "Para Quem é", id: "target-audience" },
    { label: "O que Entregamos", id: "deliveries" },
    { label: "Diagnóstico", id: "diagnosis" },
    { label: "Casos de Sucesso", id: "success-cases" },
    { label: "Tecnologia", id: "technology" },
    { label: "FAQ", id: "faq" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-black font-inter bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              aria-label="Voltar ao início"
            >
              GalaxIA™
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-inter font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={handleWhatsAppClick}
              className="font-inter font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button 
              onClick={() => scrollToSection('final-cta')}
              className="bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold"
            >
              Começar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border/50 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-inter font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3 border-t border-border/30">
                <Button
                  variant="outline"
                  onClick={handleWhatsAppClick}
                  className="w-full justify-center font-inter font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar no WhatsApp
                </Button>
                <Button 
                  onClick={() => scrollToSection('final-cta')}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold"
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GalaxiaNavbar;