import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Target, TrendingUp } from "lucide-react";

const EnhancedDiagnosisSection = () => {
  const benefits = [
    {
      icon: <Target className="w-5 h-5 text-primary" />,
      title: "Identificação de Oportunidades",
      description: "Mapeamos processos com potencial de até 70% de automação"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      title: "Projeção de ROI",
      description: "Calculamos o retorno esperado em 6-18 meses"
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: "Economia de Tempo",
      description: "Estimamos horas economizadas por semana/mês"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      title: "Plano de Implementação",
      description: "Roadmap personalizado com prioridades definidas"
    }
  ];

  const discoveries = [
    "Processos que consomem 40% do tempo da equipe",
    "Gargalos operacionais não identificados", 
    "Oportunidades de redução de custos em até R$ 50mil/mês",
    "Áreas com potencial de automação imediata"
  ];

  const handleFormClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScqgHd7hLjqZ7WiqJmpiuW5CLJmbpdO8vuffahp8Bd5_PV_yA/viewform?usp=sharing&ouid=100646885101843381079',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section 
      id="diagnosis"
      className="py-16 px-4 bg-secondary/20"
      aria-labelledby="diagnostico-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Diagnóstico Gratuito
          </Badge>
          <h2 
            id="diagnostico-heading"
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            <span aria-hidden="true">🚀</span> Descubra o potencial de IA no seu negócio
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            Em apenas 5 minutos, identifique oportunidades reais de aplicar IA na sua empresa 
            e receba um relatório detalhado com projeções de ROI e economia operacional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Benefits */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">O que você vai descobrir:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  {benefit.icon}
                  <div>
                    <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Discoveries */}
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Descobertas típicas do diagnóstico:
              </h3>
              <ul className="space-y-3">
                {discoveries.map((discovery, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{discovery}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary font-semibold">
                  💡 Empresas que fizeram o diagnóstico economizaram em média 
                  R$ 25.000/mês em processos operacionais
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-background rounded-2xl p-8 shadow-sm border max-w-2xl mx-auto">
            <Button 
              size="lg" 
              onClick={handleFormClick}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-8 py-3 text-lg focus:ring-2 focus:ring-primary/20 focus:outline-none w-full sm:w-auto"
            >
              Quero meu Diagnóstico Gratuito de IA
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ⏱️ 5 minutos • 🎯 Sem compromisso • 🏢 Exclusivo para empresas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedDiagnosisSection;