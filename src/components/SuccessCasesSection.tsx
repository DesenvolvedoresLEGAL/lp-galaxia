import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Zap } from "lucide-react";

const SuccessCasesSection = () => {
  const cases = [
    {
      company: "Pipefy",
      icon: TrendingUp,
      title: "Automação de fluxos complexos",
      description: "Implementação de agentes operacionais para otimização de processos internos, resultando em 40% de redução no tempo de aprovações.",
      results: ["40% redução tempo", "Processos automatizados", "Zero erros manuais"],
      color: "bg-galaxia-blue"
    },
    {
      company: "Expo Center Norte", 
      icon: Users,
      title: "Agentes de suporte em tempo real",
      description: "Sistema de atendimento inteligente com agentes conversacionais para eventos corporativos de grande escala.",
      results: ["24/7 disponibilidade", "Satisfação 95%", "Múltiplos idiomas"],
      color: "bg-galaxia-purple"
    },
    {
      company: "Mercado Livre",
      icon: Zap,
      title: "Copilotos internos para eficiência",
      description: "Assistentes de IA para equipes de vendas e suporte, potencializando produtividade e tomada de decisões estratégicas.",
      results: ["60% mais produtivo", "Decisões data-driven", "ROI em 30 dias"],
      color: "bg-galaxia-cyan"
    }
  ];

  const handleContactClick = () => {
    const message = "Quero melhorar minha operação com a IA da LEGAL";
    const whatsappUrl = `https://wa.me/5511999572394?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4 bg-background" id="success-cases">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-inter text-foreground mb-6">
            Histórias de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              transformação com IA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Empresas que já transformaram seus negócios com a infraestrutura GalaxIA™
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {cases.map((case_, index) => {
            const Icon = case_.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-glow transition-all duration-300 group border border-border/50 bg-card"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`${case_.color} p-3 rounded-lg group-hover:shadow-galaxia transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold font-inter text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {case_.company}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-inter text-card-foreground mb-4">
                  {case_.title}
                </h3>
                
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  {case_.description}
                </p>

                {/* Results */}
                <div className="space-y-2">
                  <p className="text-sm font-bold font-inter text-card-foreground mb-3">
                    Resultados principais:
                  </p>
                  {case_.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-inter">{result}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-primary p-1 rounded-xl max-w-2xl mx-auto mb-8">
            <div className="bg-background rounded-lg p-8">
              <h3 className="text-2xl font-bold font-inter text-foreground mb-4">
                Sua empresa pode ser a próxima
              </h3>
              <p className="text-lg text-muted-foreground font-inter">
                Transforme sua operação com a <strong className="text-primary">mesma infraestrutura</strong> que essas empresas usam
              </p>
            </div>
          </div>

          <Button 
            size="lg"
            onClick={handleContactClick}
            className="bg-gradient-primary hover:opacity-90 text-white font-bold px-8 py-4 text-lg shadow-button transition-all duration-300 hover:shadow-galaxia font-inter"
          >
            Fale com nossos especialistas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;