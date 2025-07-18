import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DifferentialsSection = () => {
  const differentials = [
    {
      title: "TechCo com DNA de inovação",
      description: "Velocidade de execução e zero enrolação. Aqui é entrega de verdade, sem promessas vazias.",
      icon: "⚡"
    },
    {
      title: "Squad de AI Experts",
      description: "Time próprio com 10+ anos de experiência real em projetos B2B de grande escala.",
      icon: "🧠"
    },
    {
      title: "Entrega rápida e suporte premium",
      description: "Acompanhamento consultivo e suporte 24/7 para garantir o sucesso do seu projeto.",
      icon: "🎯"
    },
    {
      title: "Infraestrutura segura e compliance",
      description: "Projetos 100% sob demanda com máxima segurança e conformidade regulatória.",
      icon: "🔒"
    }
  ];

  return (
    <section id="differentials" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Diferenciais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Por que a LEGAL?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não somos apenas desenvolvedores. Somos parceiros estratégicos na sua transformação digital.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((differential, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 border-border/50 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{differential.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {differential.title}
                    </h3>
                    <p className="text-muted-foreground">{differential.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;