import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-ai-background.webp";
import emailjs from '@emailjs/browser';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const scrollToContact = () => {
    requestAnimationFrame(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const handleQuickCapture = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
    const CONTACT_EMAIL = 'sos@operadora.legal';
    const EMAILJS_SERVICE_ID = 'service_wi3kvx7';
    const EMAILJS_TEMPLATE_ID = 'template_5l2767r';
    const EMAILJS_USER_ID = 'oLw9xvmdczE218mGh';

    const templateParams = {
      to_email: CONTACT_EMAIL,
      from_email: email,
      message: `Encaminho meu e-mail para contato! Aguardando humanóides em ${email}.`
      };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

toast({
        title: "Email capturado!",
        description: "Em breve você receberá nossa consultoria gratuita sobre IA.",
      });

      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Mensagem não enviada!",
        description: "Erro ao enviar o email, confira os dados e tente novamente.",
      })
    }

    toast({
      title: "Mensagem enviada!",
      description: "Em até 24h nosso time responde com uma proposta inicial personalizada.",
    });
    }
  };

  return (
    <main>
      {/* Skip Link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Pular para conteúdo principal
      </a>
      
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Fundo com elementos de inteligência artificial"
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center" id="main-content">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 animate-pulse">
              <span aria-hidden="true">🔥</span> Últimas 3 vagas de Setembro - Empresas Pequenas, Médias e Grandes
            </Badge>
            
            <h1 
              id="hero-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Cansado de promessa de IA no PPT? <span className="bg-gradient-primary bg-clip-text text-transparent">Aqui é execução de verdade!</span>
            </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Projetos de Inteligência Artificial e Automação criados do zero para as demandas do seu negócio. 
            <span className="text-primary font-semibold"> Mais performance e eficiência.</span>
          </p>
          
          {/* Diagnóstico Gratuito */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-8 max-w-lg mx-auto">
            <h2 className="font-semibold text-foreground mb-4">
              <span aria-hidden="true">🚀</span> Diagnóstico Gratuito de IA
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Descubra em menos de 5 minutos oportunidades reais para aplicar IA no seu negócio.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScqgHd7hLjqZ7WiqJmpiuW5CLJmbpdO8vuffahp8Bd5_PV_yA/viewform?usp=sharing&ouid=100646885101843381079"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
              aria-label="Acessar formulário de diagnóstico gratuito de IA (abre em nova aba)"
            >
              <Button variant="cta" className="w-full focus:ring-2 focus:ring-accent/20 focus:outline-none">
                Quero meu Diagnóstico Gratuito
              </Button>
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              <span aria-hidden="true">✅</span> Diagnóstico em menos de 5 minutos. Sem custo, sem compromisso. Só para empresas.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="text-base px-6 py-4 h-auto focus:ring-2 focus:ring-primary/20 focus:outline-none"
              aria-label="Sou Empresa de Eventos - ir para seção de contato"
            >
              <span aria-hidden="true">📅</span> Sou Empresa de Eventos
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="text-base px-6 py-4 h-auto border-primary/50 hover:bg-primary/10 focus:ring-2 focus:ring-primary/20 focus:outline-none"
              aria-label="Sou Indústria - ir para seção de contato"
            >
              <span aria-hidden="true">🏭</span> Sou Indústria
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              onClick={scrollToContact}
              className="text-base px-6 py-4 h-auto focus:ring-2 focus:ring-secondary/20 focus:outline-none"
              aria-label="Sou Tech/Outros - ir para seção de contato"
            >
              <span aria-hidden="true">💻</span> Sou Tech/Outros
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl" aria-hidden="true"></div>
    </section>
    </main>
  );
};

export default HeroSection;