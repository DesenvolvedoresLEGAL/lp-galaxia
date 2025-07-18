import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MentalTriggersSection = () => {
  const triggers = [
    {
      question: "Já imaginou seu evento, operação ou área comercial operando 10x mais rápido com IA?",
      description: "Transforme processos manuais em automação inteligente"
    },
    {
      question: "Cansado de soluções engessadas e promessas vazias?",
      description: "Fale com quem faz de verdade, sem enrolação"
    },
    {
      question: "Só para empresas: não atendemos pessoa física",
      description: "Foco total em soluções B2B de alta performance"
    },
    {
      question: "Garantia LEGAL: se não entregar resultado, você não paga",
      description: "Assumimos o risco do seu projeto junto com você"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Perguntas Frequentes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respondemos as principais questões sobre nossos serviços de IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {triggers.map((trigger, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 border-border/50 group">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                  {trigger.question}
                </h3>
                <p className="text-muted-foreground">{trigger.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <span className="font-semibold">🎯 Aqui é execução de verdade, sem enrolação</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalTriggersSection;