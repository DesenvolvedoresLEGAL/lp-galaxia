import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ValueProposition = () => {
  const propositions = [
    {
      title: "Soluções sob medida",
      description: "Inteligência Artificial, Data Science e Automação personalizadas",
      icon: "🎯"
    },
    {
      title: "100% B2B",
      description: "Atendimento exclusivo para empresas que precisam de inovação real, não promessas vazias",
      icon: "🏢"
    },
    {
      title: "Da ideia ao Go Live",
      description: "Especialistas cuidam de todo o processo — da arquitetura à implementação",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Proposta de Valor
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Por que escolher a LEGAL?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não somos apenas mais uma empresa de tecnologia. Somos especialistas em transformar ideias em soluções reais de IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-card transition-all duration-300 border-border/50">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{prop.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;