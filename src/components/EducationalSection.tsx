import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Zap, ShoppingBag, Scale, Heart, Building2 } from "lucide-react";

const EducationalSection = () => {
  const components = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Agentes Conversacionais",
      description: "Sistemas de IA que interagem naturalmente com clientes e colaboradores",
      examples: [
        "Atendimento 24/7 no site e WhatsApp",
        "Qualificação automática de leads",
        "Suporte técnico inteligente",
        "FAQ automatizado com aprendizado"
      ],
      areas: ["Customer Experience", "Vendas", "Suporte"]
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Copilotos Internos",
      description: "Assistentes IA integrados aos sistemas existentes para acelerar processos",
      examples: [
        "Análise de dados em tempo real",
        "Geração de relatórios automática",
        "Sugestões de decisões estratégicas",
        "Automação de tarefas repetitivas"
      ],
      areas: ["Operações", "Back-office", "Gestão"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Automações Inteligentes",
      description: "Fluxos automatizados que se adaptam e otimizam conforme padrões identificados",
      examples: [
        "Processamento de documentos",
        "Roteamento inteligente de demandas",
        "Predição de necessidades do cliente",
        "Otimização de recursos e agenda"
      ],
      areas: ["Processos", "Logística", "RH"]
    }
  ];

  return (
    <section id="educational" className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Como Funciona
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Entenda cada componente do GalaxIA™
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada solução é desenvolvida sob medida para suas necessidades específicas, 
            integrando-se perfeitamente aos seus sistemas existentes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {components.map((component, index) => (
            <Card key={index} className="h-full border-border/50 hover:shadow-card transition-all">
              <CardContent className="p-6">
                <div className="mb-4">{component.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{component.title}</h3>
                <p className="text-muted-foreground mb-4">{component.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Exemplos práticos:</h4>
                  <ul className="space-y-1">
                    {component.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Áreas de aplicação:</h4>
                  <div className="flex flex-wrap gap-2">
                    {component.areas.map((area, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Applications - Modern Design */}
        <div className="space-y-6">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Setores Atendidos
            </Badge>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Aplicações por setor
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Soluções específicas desenvolvidas para atender as necessidades únicas de cada indústria
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Varejo */}
            <Card className="group relative overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-background to-background/80">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">Varejo</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Recomendação personalizada de produtos</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Predição de demanda inteligente</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Análise de comportamento de compra</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Gestão inteligente de estoque</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Jurídico */}
            <Card className="group relative overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-background to-background/80">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">Jurídico</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Análise automática de contratos</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Pesquisa jurisprudencial inteligente</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Classificação automática de processos</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Criação de petições automatizadas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Saúde */}
            <Card className="group relative overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-background to-background/80">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">Saúde</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Automação de autorizações</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Integração com planos de saúde</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Gestão automática de agenda</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Análise de exames médicos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Outros */}
            <Card className="group relative overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-background to-background/80">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">Outros</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Manutenção preditiva industrial</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Automação de processos fabris</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Prevenção de fraudes financeiras</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Suporte técnico interno</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;