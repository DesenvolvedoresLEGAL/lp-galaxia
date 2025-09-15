import { Shield, Zap, TrendingUp, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const TechnologySection = () => {
  const techFeatures = [
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description: "Proteção de dados e compliance corporativo"
    },
    {
      icon: Zap,
      title: "Alta Performance",
      description: "Otimização para processamento em larga escala"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      description: "Cresce junto com sua demanda de negócio"
    },
    {
      icon: Database,
      title: "Integração Nativa",
      description: "Conecta com seus sistemas existentes"
    }
  ];

  const techLogos = [
    { name: "OpenAI", color: "text-galaxia-blue" },
    { name: "Supabase", color: "text-galaxia-green" },
    { name: "n8n", color: "text-galaxia-purple" },
    { name: "APIs", color: "text-galaxia-cyan" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-section" id="technology">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-inter text-foreground mb-6">
            Tecnologia que sustenta o{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              GalaxIA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter">
            O GalaxIA™ utiliza os melhores LLMs do mercado, RAG, vetores e machine learning para entregar soluções que realmente funcionam, com segurança e escalabilidade.
          </p>
        </div>

        {/* Technology Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-glow transition-all duration-300 group border border-border/50 bg-card"
              >
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-galaxia transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold font-inter text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Tech Stack Carousel */}
        <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
          <h3 className="text-2xl font-bold font-inter text-center text-card-foreground mb-8">
            Tecnologias que Potencializam o GalaxIA™
          </h3>
          
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {techLogos.map((tech, index) => (
              <div 
                key={index}
                className="flex items-center justify-center"
              >
                <div className={`px-6 py-3 rounded-lg bg-gradient-primary/10 border border-primary/20 hover:shadow-glow transition-all duration-300`}>
                  <span className={`text-xl font-bold font-inter ${tech.color}`}>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-gradient-primary p-1 rounded-lg inline-block">
              <div className="bg-background rounded-md px-6 py-3">
                <p className="text-sm font-bold font-inter text-foreground">
                  + Dezenas de outras ferramentas e APIs especializadas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-1 rounded-xl max-w-3xl mx-auto">
            <div className="bg-background rounded-lg p-8">
              <h3 className="text-2xl font-bold font-inter text-foreground mb-4">
                Stack Tecnológico de Nível Mundial
              </h3>
              <p className="text-lg text-muted-foreground font-inter">
                Combinamos as <strong className="text-primary">melhores ferramentas do mercado</strong> para criar uma infraestrutura de IA robusta, segura e escalável para sua empresa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;