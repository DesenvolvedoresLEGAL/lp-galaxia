import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle, FileText, ArrowRight } from "lucide-react";

const VariedCTASection = () => {
  const handleScheduleDemo = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de falar com um especialista em IA sobre as soluções do GalaxIA™.";
    const whatsappUrl = `https://wa.me/5511999572394?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDiagnosisClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScqgHd7hLjqZ7WiqJmpiuW5CLJmbpdO8vuffahp8Bd5_PV_yA/viewform?usp=sharing&ouid=100646885101843381079',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const ctaOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Fale com Especialista",
      description: "Tire dúvidas direto com nosso time técnico",
      action: "Falar Agora",
      onClick: handleWhatsAppClick,
      badge: "Resposta Rápida",
      variant: "secondary" as const,
      audience: "Para esclarecimentos técnicos"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Diagnóstico Gratuito",
      description: "Descubra oportunidades de IA no seu negócio",
      action: "Fazer Diagnóstico",
      onClick: handleDiagnosisClick,
      badge: "Sem Compromisso",
      variant: "outline" as const,
      audience: "Para explorar possibilidades"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Escolha como quer começar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada empresa tem seu ritmo. Selecione a opção que melhor se adequa ao seu momento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {ctaOptions.map((option, index) => (
            <Card key={index} className="relative h-full border-border/50 hover:shadow-card transition-all group">
              {option.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground px-3 py-1">
                    {option.badge}
                  </Badge>
                </div>
              )}
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="text-primary mb-4 flex justify-center">{option.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{option.description}</p>
                <p className="text-sm text-muted-foreground mb-6 italic">{option.audience}</p>
                <Button 
                  variant={option.variant}
                  onClick={option.onClick}
                  className="w-full group-hover:scale-105 transition-transform"
                >
                  {option.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-section rounded-2xl p-8 text-center border border-primary/20">
          <div className="mb-4">
            <span className="text-3xl">🛡️</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Garantia de Resultado
          </h3>
          <p className="text-muted-foreground">
            Se não conseguirmos cumprir com a tabela de ROI personalizada para sua empresa, devolvemos 100% do valor investido no SETUP!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VariedCTASection;