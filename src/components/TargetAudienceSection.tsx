import { Factory, TrendingUp, Zap, Target } from "lucide-react";

const TargetAudienceSection = () => {
  const targetItems = [
    {
      icon: Factory,
      title: "Indústrias que querem reduzir custos operacionais",
      description: "Automação inteligente para processos industriais complexos"
    },
    {
      icon: TrendingUp,
      title: "Companhias com times inflados em busca de eficiência",
      description: "Otimização de recursos humanos com IA estratégica"
    },
    {
      icon: Zap,
      title: "Organizações que precisam acelerar a adoção de IA",
      description: "Implementação rápida e resultados mensuráveis"
    },
    {
      icon: Target,
      title: "Empresas que não podem perder tempo com projetos genéricos",
      description: "Soluções 100% customizadas para sua realidade específica"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-section" id="target-audience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-inter text-foreground mb-6">
            Feito para empresas que buscam{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              performance real
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            O GalaxIA™ foi desenvolvido especificamente para organizações que não aceitam soluções superficiais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {targetItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:shadow-galaxia transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-inter text-card-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;