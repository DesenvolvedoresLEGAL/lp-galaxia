import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    challenge: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated form submission
    toast({
      title: "Mensagem enviada!",
      description: "Em até 24h nosso time responde com uma proposta inicial personalizada.",
    });
    setFormData({ name: '', company: '', email: '', phone: '', challenge: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Contato
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vamos criar sua solução de IA?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Em até 24h nosso time responde com uma proposta inicial personalizada. <span className="text-primary font-semibold">Sem blá-blá-blá.</span>
            </p>
            <div className="flex justify-center">
              <Badge variant="outline" className="text-primary border-primary/20 animate-pulse">
                🔥 Últimas 3 vagas de Janeiro - Empresas Enterprise
              </Badge>
            </div>
          </div>
          
          <Card className="shadow-card border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Garante seu Diagnóstico Gratuito</CardTitle>
              <p className="text-muted-foreground">
                Especialistas em IA para Eventos e Negócios 🏆
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Nome da sua empresa"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Celular *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 99999-9999"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-foreground mb-2">
                    Descreva sua dor/desafio *
                  </label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    placeholder="Conte-nos sobre o desafio que sua empresa enfrenta e como podemos ajudar com IA..."
                    className="border-border/50 focus:border-primary min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full text-lg py-6 h-auto"
                >
                  🚀 Quero Meu Diagnóstico Gratuito
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  ✅ Seus dados estão 100% seguros. Nada de SPAM. A LEGAL só fala com empresas.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;