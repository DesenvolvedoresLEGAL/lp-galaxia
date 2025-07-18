import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "Desenvolvimento de IA Customizada",
      description: "Modelos personalizados, bots inteligentes, automações e integrações sob medida",
      items: ["Modelos de ML", "Chatbots", "Automações", "Integrações API"]
    },
    {
      title: "Projetos Avançados",
      description: "NLP, Visão Computacional, Analytics e Machine Learning para casos complexos",
      items: ["Processamento de Linguagem", "Computer Vision", "Análise Preditiva", "Deep Learning"]
    },
    {
      title: "Soluções de Atendimento",
      description: "Chatbots, robôs de atendimento e sistemas de geração de leads inteligente",
      items: ["Atendimento 24/7", "Qualificação de Leads", "Suporte Automatizado", "CRM Integrado"]
    },
    {
      title: "Plataformas Completas",
      description: "Sistemas completos como Eventrix, LinkAI, FacePass, FitScore e Humanoid",
      items: ["Gestão de Eventos", "Reconhecimento Facial", "Análise de Performance", "Humanização IA"]
    },
    {
      title: "Consultoria Digital",
      description: "Estratégia e transformação digital para modernizar seus processos de negócio",
      items: ["Auditoria Digital", "Roadmap de IA", "Transformação Processos", "Capacitação Equipe"]
    },
    {
      title: "Soluções Setoriais",
      description: "Especializações para eventos, RH, vendas, atendimento, marketing e operações",
      items: ["Eventos Corporativos", "RH Tech", "Sales Intelligence", "Marketing Automation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que fazemos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de IA e automação para empresas que buscam resultados reais e mensuráveis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 border-border/50 group">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;