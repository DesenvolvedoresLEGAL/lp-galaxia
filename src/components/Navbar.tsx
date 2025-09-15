import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      requestAnimationFrame(() => {
        const navbarHeight = 64; // Height of the fixed navbar
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre as soluções de IA da LEGAL para minha empresa.";
    const whatsappUrl = `https://wa.me/5511999572394?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary" role="banner">LEGAL</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            <button
              onClick={() => scrollToSection('social-proof')}
              className="text-foreground hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1"
              role="menuitem"
              aria-label="Ir para seção Prova Social"
            >
              Prova Social
            </button>
            <button
              onClick={() => scrollToSection('value-proposition')}
              className="text-foreground hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1"
              role="menuitem"
              aria-label="Ir para seção Proposta de Valor"
            >
              Proposta de Valor
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1"
              role="menuitem"
              aria-label="Ir para seção Como Funciona"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1"
              role="menuitem"
              aria-label="Ir para seção Serviços"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('differentials')}
              className="text-foreground hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1"
              role="menuitem"
              aria-label="Ir para seção Diferenciais"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('cases')}
              className="text-foreground hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1"
              role="menuitem"
              aria-label="Ir para seção Cases"
            >
              Cases
            </button>
            <Button
              onClick={handleWhatsAppClick}
              variant="default"
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white focus:ring-2 focus:ring-green-300 focus:outline-none"
              aria-label="Entrar em contato via WhatsApp (abre em nova aba)"
            >
              <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:ring-2 focus:ring-primary focus:outline-none rounded-md"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-foreground h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`bg-foreground h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`bg-foreground h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border/50"
            role="menu"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('social-proof')}
                className="text-foreground hover:text-primary transition-colors text-left focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1"
                role="menuitem"
                aria-label="Ir para seção Prova Social"
              >
                Prova Social
              </button>
              <button
                onClick={() => scrollToSection('value-proposition')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Proposta de Valor
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('differentials')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Cases
              </button>
              <Button
                onClick={handleWhatsAppClick}
                variant="default"
                size="sm"
                className="w-fit bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;