import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MentalTriggersSection = () => {
  const impactStories = [
    {
      impact: "Reduzimos o tempo de operação em 80% para uma das maiores indústrias do Brasil",
      detail: "Automação completa de processos críticos com IA e Machine Learning",
      icon: "🏭",
      metric: "80% faster"
    },
    {
      impact: "4x mais leads qualificados para a maior agência de eventos corporativos",
      detail: "Sistema inteligente de captura e qualificação automática",
      icon: "📊", 
      metric: "400% ROI"
    },
    {
      impact: "Zero erros operacionais em eventos com +5mil participantes",
      detail: "IA de reconhecimento facial e automação de check-in em tempo real",
      icon: "🎯",
      metric: "0% error"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Resultados Reais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quem faz de verdade, <span className="bg-gradient-primary bg-clip-text text-transparent">entrega resultados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cansado de soluções engessadas e promessas vazias? 
            <span className="text-primary font-semibold"> Veja os impactos reais que geramos.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {impactStories.map((story, index) => (
            <Card key={index} className="border-border/50 hover:shadow-card transition-all group bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {story.icon}
                </div>
                
                <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                  {story.metric}
                </Badge>
                
                <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
                  "{story.impact}"
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {story.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action Urgency */}
        <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            🚨 Já imaginou sua empresa operando 10x mais rápido com IA?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Só para empresas: não atendemos pessoa física. <br/>
            <span className="font-semibold">Garantia LEGAL: se não entregar resultado, você não paga.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              ⚡ Resposta em 24h
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              🎯 Zero enrolação
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              🛡️ Garantia de resultado
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalTriggersSection;