import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Zap } from "lucide-react";

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

        {/* Industry Examples */}
        <div className="bg-background rounded-2xl p-8 border border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Aplicações por setor
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">🎪 Empresas de Eventos</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Gestão automática de inscrições</li>
                <li>• Chatbot para dúvidas frequentes</li>
                <li>• Análise de feedback em tempo real</li>
                <li>• Automação de follow-up pós-evento</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">🏭 Indústrias</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Predição de manutenção de equipamentos</li>
                <li>• Otimização da cadeia de suprimentos</li>
                <li>• Controle de qualidade automatizado</li>
                <li>• Gestão inteligente de estoque</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">💻 Tech/Outros</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automação de onboarding</li>
                <li>• Análise de performance de produto</li>
                <li>• Suporte técnico automatizado</li>
                <li>• Gestão de conhecimento interno</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;