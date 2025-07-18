import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CasesSection = () => {
  const testimonials = [
    {
      quote: "A LEGAL revolucionou nossa operação com IA. Ganho de eficiência de 4x em apenas 90 dias.",
      author: "CEO de Multinacional",
      company: "Empresa do setor industrial"
    },
    {
      quote: "Implementaram chatbots que transformaram nosso atendimento. ROI positivo em 60 dias.",
      author: "Diretor de Operações",
      company: "Maior agência de eventos do Brasil"
    },
    {
      quote: "Automatizaram processos que demoravam dias. Agora levam minutos com precisão total.",
      author: "VP de Technology",
      company: "Empresa de tecnologia"
    }
  ];

  const clients = [
    "Agências de Eventos",
    "Indústrias Multinacionais",
    "Empresas de Tecnologia",
    "Companhias de Seguros",
    "Grupos de Varejo",
    "Startups Unicórnio"
  ];

  return (
    <section id="cases" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Cases & Resultados
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quem já confia na LEGAL
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais para empresas que escolheram inovar com inteligência artificial.
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 border-border/50">
              <CardContent className="p-8">
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-foreground italic mb-6">{testimonial.quote}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Client Types */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Atendemos as maiores empresas do Brasil
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {client}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;