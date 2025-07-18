import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Express",
      description: "Análise rápida da sua operação e identificação de oportunidades de IA",
      icon: "🔍",
      time: "24h"
    },
    {
      number: "02", 
      title: "Proposta Customizada",
      description: "Estratégia e arquitetura sob medida para resolver suas dores específicas",
      icon: "🎯",
      time: "48h"
    },
    {
      number: "03",
      title: "Implementação Ágil", 
      description: "Desenvolvimento e deploy com acompanhamento consultivo total",
      icon: "⚡",
      time: "2-8 semanas"
    },
    {
      number: "04",
      title: "Suporte Total",
      description: "Monitoramento 24/7, otimizações e evolução contínua do sistema",
      icon: "🛡️",
      time: "Sempre"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Como Funciona
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Da ideia ao Go Live em 4 passos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo consultivo, rápido e <span className="text-primary font-semibold">sem enrolação</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative text-center border-border/50 hover:shadow-card transition-all group">
              <CardContent className="p-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <div className="text-4xl mb-4 mt-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                
                <Badge variant="outline" className="text-primary border-primary/20">
                  ⏱️ {step.time}
                </Badge>
              </CardContent>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">Velocidade + Qualidade:</span> Nosso DNA de 10+ anos em projetos B2B
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;