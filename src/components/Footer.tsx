import { Badge } from "@/components/ui/badge";
const Footer = () => {
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">LEGAL</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Especialistas em Inteligência Artificial e Automação para empresas que buscam resultados reais.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-background/30 text-background/80">
                IA Customizada
              </Badge>
              <Badge variant="outline" className="border-background/30 text-background/80">
                Automação
              </Badge>
              <Badge variant="outline" className="border-background/30 text-background/80">
                Data Science
              </Badge>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li>Desenvolvimento de IA</li>
              <li>Chatbots Inteligentes</li>
              <li>Automação de Processos</li>
              <li>Consultoria Digital</li>
              <li>Visão Computacional</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-background/80">
              <li>📧 sos@operadora.legal</li>
              <li>📱 (11) 99957-2394</li>
              <li>🏢 100% B2B</li>
              <li>⚡ Resposta em 30min</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">© 2025 LEGAL - Todos os direitos reservados. Transformando empresas com IA desde 2024.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;