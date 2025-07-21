import { Button } from "@/components/ui/button";

const DiagnosticoGratuito = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-background rounded-2xl p-8 shadow-sm border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            🚀 Diagnóstico Gratuito de IA
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Descubra, em menos de 5 minutos, oportunidades reais para aplicar Inteligência Artificial no seu negócio.
            <br />
            Sem custo, sem compromisso. Só para empresas.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScqgHd7hLjqZ7WiqJmpiuW5CLJmbpdO8vuffahp8Bd5_PV_yA/viewform?usp=sharing&ouid=100646885101843381079"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-8 py-3 text-lg">
              Quero meu Diagnóstico Gratuito de IA
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticoGratuito;