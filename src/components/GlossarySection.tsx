import { Card } from "@/components/ui/card";
import { BookOpen, Brain, MessageSquare, Settings, Database } from "lucide-react";

const GlossarySection = () => {
  const terms = [
    {
      icon: MessageSquare,
      term: "Agente Conversacional",
      definition: "IA que interage com clientes e colaboradores em linguagem natural, compreendendo contexto e respondendo de forma inteligente e personalizada."
    },
    {
      icon: Settings,
      term: "Agente Operacional", 
      definition: "IA que executa tarefas repetitivas e processos internos de forma autônoma, otimizando fluxos de trabalho e reduzindo erros manuais."
    },
    {
      icon: Brain,
      term: "Copiloto de IA",
      definition: "Assistente inteligente que apoia decisões de colaboradores, fornecendo insights, análises e recomendações baseadas em dados corporativos."
    },
    {
      icon: Database,
      term: "RAG (Retrieval-Augmented Generation)",
      definition: "Técnica que conecta IA a bases de dados corporativas, permitindo respostas precisas baseadas em informações específicas da empresa."
    },
    {
      icon: BookOpen,
      term: "Setup de IA",
      definition: "Fase inicial de implementação e customização do GalaxIA™, incluindo análise, planejamento e configuração da infraestrutura personalizada."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" id="glossary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-inter text-foreground mb-6">
            Termos que você vai ouvir no{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              GalaxIA™
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Entenda a linguagem da infraestrutura de IA que vai transformar sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 group border border-border/50 bg-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:shadow-galaxia transition-all duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold font-inter text-card-foreground mb-3">
                      {item.term}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional explanation */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-1 rounded-xl max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8">
              <h3 className="text-2xl font-bold font-inter text-foreground mb-4">
                Tecnologia Avançada, Linguagem Simples
              </h3>
              <p className="text-lg text-muted-foreground font-inter">
                Nossa equipe traduz <strong className="text-primary">complexidade técnica</strong> em soluções práticas que sua empresa pode implementar e usar imediatamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossarySection;