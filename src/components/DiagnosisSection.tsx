import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const DiagnosisSection = () => {
  const benefits = [
    "Análise personalizada em menos de 5 minutos",
    "Identificação de oportunidades reais de IA", 
    "Roadmap customizado para sua empresa",
    "Sem custo, sem compromisso"
  ];

  const handleFormClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScqgHd7hLjqZ7WiqJmpiuW5CLJmbpdO8vuffahp8Bd5_PV_yA/viewform?usp=sharing&ouid=100646885101843381079",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="py-20 px-4 bg-galaxia-light/30" id="diagnosis">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 shadow-glow border border-primary/20 bg-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black font-inter text-card-foreground mb-4">
              <span className="text-primary">🚀</span> Descubra se sua empresa está pronta para IA
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Preencha nosso diagnóstico gratuito e receba uma análise personalizada sobre como o GalaxIA™ pode transformar sua operação.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-card-foreground font-inter">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Emphasis */}
          <div className="bg-gradient-primary p-1 rounded-lg mb-8">
            <div className="bg-background rounded-md p-4 text-center">
              <p className="text-lg font-bold font-inter text-foreground">
                Só para empresas com faturamento acima de R$ 1 milhão
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg"
              onClick={handleFormClick}
              className="bg-gradient-primary hover:opacity-90 text-white font-bold px-8 py-4 text-xl shadow-button transition-all duration-300 hover:shadow-galaxia font-inter"
              aria-label="Acessar formulário de diagnóstico gratuito de IA (abre em nova aba)"
            >
              Quero meu Diagnóstico Gratuito de IA
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4 font-inter">
              ⏱️ Leva menos de 5 minutos para completar
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DiagnosisSection;