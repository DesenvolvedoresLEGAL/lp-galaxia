import { ArrowRight, Settings, Rocket, HeadphonesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const DeliveryModelSection = () => {
  const phases = [
    {
      icon: Settings,
      title: "Setup",
      description: "Análise completa, planejamento estratégico e configuração inicial da infraestrutura",
      duration: "2-4 semanas",
      color: "bg-galaxia-blue"
    },
    {
      icon: Rocket,
      title: "Implementação", 
      description: "Desenvolvimento, integração e deploy das soluções de IA personalizadas",
      duration: "4-8 semanas",
      color: "bg-galaxia-purple"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Contínuo",
      description: "Monitoramento, otimização e evolução constante da sua infraestrutura de IA",
      duration: "Mensal",
      color: "bg-galaxia-cyan"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" id="delivery-model">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-inter text-foreground mb-6">
            Solução customizada,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              suporte recorrente
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter mb-8">
            Projetos fechados com setup inicial + mensalidade de suporte. Zero burocracia, total previsibilidade.
          </p>
          
          <div className="bg-gradient-primary p-1 rounded-xl max-w-2xl mx-auto">
            <div className="bg-background rounded-lg p-6">
              <p className="text-lg font-bold font-inter text-foreground">
                💡 Modelo híbrido: Investimento inicial + recorrência para crescimento sustentável
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-6 h-6 bg-galaxia-blue rounded-full"></div>
              <div className="flex-1 h-1 bg-gradient-to-r from-galaxia-blue via-galaxia-purple to-galaxia-cyan mx-4"></div>
              <div className="w-6 h-6 bg-galaxia-purple rounded-full"></div>
              <div className="flex-1 h-1 bg-gradient-to-r from-galaxia-purple to-galaxia-cyan mx-4"></div>
              <div className="w-6 h-6 bg-galaxia-cyan rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10 pt-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Icon */}
                  <div className={`${phase.color} p-4 rounded-xl mb-6 shadow-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Card */}
                  <Card className="p-6 text-center hover:shadow-card transition-all duration-300 w-full border border-border/50 bg-card">
                    <h3 className="text-2xl font-bold font-inter text-card-foreground mb-3">
                      {phase.title}
                    </h3>
                    
                    <div className="bg-muted rounded-lg p-2 mb-4 inline-block">
                      <span className="text-sm font-bold font-inter text-muted-foreground">
                        {phase.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {phase.description}
                    </p>
                  </Card>

                  {/* Arrow for mobile */}
                  {index < phases.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4 mb-4">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-1 rounded-xl max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8">
              <h3 className="text-2xl font-bold font-inter text-foreground mb-4">
                Resultado Garantido
              </h3>
              <p className="text-lg text-muted-foreground font-inter">
                <strong className="text-primary">Nossa metodologia</strong> garante que você tenha uma infraestrutura de IA funcionando e gerando valor real em menos de 3 meses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryModelSection;