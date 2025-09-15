import { MessageCircle, Cog, Users, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const DeliveriesSection = () => {
  const deliveries = [
    {
      icon: MessageCircle,
      title: "Agentes Conversacionais",
      description: "Atendimentos e fluxos automatizados que compreendem contexto e respondem com precisão humana"
    },
    {
      icon: Cog,
      title: "Agentes Operacionais", 
      description: "Automação de tarefas críticas que executam processos complexos sem supervisão constante"
    },
    {
      icon: Users,
      title: "Copilotos Internos",
      description: "Suporte à decisão e produtividade que potencializam seus colaboradores estratégicos"
    },
    {
      icon: Brain,
      title: "Aprendizado de Máquina",
      description: "Modelos sob medida para sua realidade, treinados com seus dados e processos específicos"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" id="deliveries">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-inter text-foreground mb-6">
            Do setup à operação,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              cuidamos de tudo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Entregamos uma infraestrutura completa de IA, não apenas ferramentas isoladas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveries.map((delivery, index) => {
            const Icon = delivery.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-glow transition-all duration-300 group border border-border/50 bg-card"
              >
                <div className="bg-gradient-primary p-4 rounded-xl w-fit mx-auto mb-6 group-hover:shadow-galaxia transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold font-inter text-card-foreground mb-4">
                  {delivery.title}
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {delivery.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-1 rounded-xl max-w-2xl mx-auto">
            <div className="bg-background rounded-lg p-8">
              <p className="text-lg font-inter text-muted-foreground">
                <strong className="text-primary">Resultado:</strong> Uma infraestrutura de IA que cresce com sua empresa e gera valor desde o primeiro dia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveriesSection;