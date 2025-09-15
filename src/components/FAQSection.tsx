import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é o GalaxIA?",
      answer: "O GalaxIA™ é uma infraestrutura de IA personalizada que integra agentes conversacionais, automações e copilotos internos para aumentar a eficiência e reduzir custos em empresas. Diferente de soluções genéricas, é 100% customizado para sua realidade específica."
    },
    {
      question: "Quanto custa implementar o GalaxIA?",
      answer: "O modelo é baseado em projeto fechado com setup inicial + mensalidade de suporte recorrente. O valor varia conforme a complexidade da empresa e escopo do projeto. Oferecemos diagnóstico gratuito para avaliar suas necessidades específicas."
    },
    {
      question: "Qual a diferença entre o GalaxIA e um chatbot comum?",
      answer: "O GalaxIA™ não é apenas um chatbot: é uma infraestrutura completa que conecta agentes conversacionais, automações operacionais e copilotos de IA. Utiliza machine learning, RAG e modelos avançados para compreender contexto e executar tarefas complexas."
    },
    {
      question: "Em quanto tempo uma empresa vê resultados?",
      answer: "Dependendo do projeto, empresas começam a perceber ganhos em produtividade e redução de custos entre 30 e 90 dias após a implementação. Nossa metodologia garante valor real desde as primeiras semanas."
    },
    {
      question: "O GalaxIA funciona com nossos sistemas existentes?",
      answer: "Sim. O GalaxIA™ é projetado para integração nativa com sistemas corporativos existentes. Utilizamos APIs e conectores para garantir que a infraestrutura funcione harmoniosamente com suas ferramentas atuais."
    },
    {
      question: "Que tipo de empresa pode usar o GalaxIA?",
      answer: "O GalaxIA™ é ideal para empresas com faturamento acima de R$ 1 milhão que buscam reduzir custos operacionais, aumentar eficiência ou acelerar a adoção de IA. Atendemos indústrias, tecnologia, eventos e diversos setores."
    },
    {
      question: "Como funciona o suporte recorrente?",
      answer: "Oferecemos monitoramento contínuo, otimizações, atualizações de modelos e suporte técnico especializado. O objetivo é garantir que sua infraestrutura de IA evolua constantemente e mantenha alta performance."
    },
    {
      question: "O GalaxIA é seguro para dados corporativos?",
      answer: "Absolutamente. Implementamos protocolos de segurança enterprise, compliance corporativo e proteção de dados. Sua infraestrutura é isolada e segue as melhores práticas de segurança da informação."
    }
  ];

  return (
    <section className="py-20 px-4 bg-galaxia-light/30" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-inter text-foreground mb-6">
            Perguntas Frequentes sobre o{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              GalaxIA™
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            Tire suas dúvidas sobre nossa infraestrutura de IA personalizada
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-card border border-border/50 p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/30">
                <AccordionTrigger className="text-left text-lg font-bold font-inter text-card-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-inter leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-primary p-1 rounded-lg inline-block">
            <div className="bg-background rounded-md px-6 py-3">
              <p className="text-sm font-bold font-inter text-foreground">
                💡 Não encontrou sua pergunta? Fale conosco para esclarecimentos personalizados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;