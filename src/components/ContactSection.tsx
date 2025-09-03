import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { 
  sanitizeString, 
  sanitizePhone, 
  contactFormSchema, 
  checkRateLimit, 
  generateCSRFToken, 
  validateCSRFToken, 
  getEmailConfig 
} from "@/lib/security";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    challenge: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCSRFToken] = useState<string>('');
  const { toast } = useToast();
  
  // Generate CSRF token on component mount
  useEffect(() => {
    setCSRFToken(generateCSRFToken());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      
      // CSRF token validation
      if (!validateCSRFToken(csrfToken)) {
        toast({
          title: "Erro de segurança",
          description: "Token de segurança inválido. Recarregue a página e tente novamente.",
          variant: "destructive"
        });
        return;
      }
      
      // Rate limiting check
      const userIP = 'user_' + Date.now(); // In production, use actual IP
      if (!checkRateLimit(userIP, 3, 900000)) {
        toast({
          title: "Muitas tentativas",
          description: "Aguarde 15 minutos antes de enviar outra mensagem.",
          variant: "destructive"
        });
        return;
      }
      
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeString(formData.name),
        company: sanitizeString(formData.company),
        email: formData.email.trim().toLowerCase(),
        phone: sanitizePhone(formData.phone),
        challenge: sanitizeString(formData.challenge)
      };
      
      // Validate form data
      const validation = contactFormSchema.safeParse(sanitizedData);
      if (!validation.success) {
        const errors = validation.error.errors.map(err => err.message).join(', ');
        toast({
          title: "Dados inválidos",
          description: errors,
          variant: "destructive"
        });
        return;
      }
      
      const config = getEmailConfig();
      
      const templateParams = {
        to_email: config.contactEmail,
        from_name: sanitizedData.name,
        from_email: sanitizedData.email,
        company: sanitizedData.company,
        phone: sanitizedData.phone,
        message: sanitizedData.challenge,
        csrf_token: csrfToken,
        timestamp: new Date().toISOString()
      };

      await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.userId
      );

      toast({
        title: "Mensagem enviada!",
        description: "Em até 24h nosso time responde com uma proposta inicial personalizada.",
      });

      // Reset form and generate new CSRF token
      setFormData({ name: '', company: '', email: '', phone: '', challenge: '' });
      setCSRFToken(generateCSRFToken());
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em alguns minutos. Se o problema persistir, entre em contato por WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Apply real-time sanitization based on field type
    let sanitizedValue = value;
    
    if (name === 'name' || name === 'company') {
      // Allow only letters, spaces, and common business characters
      sanitizedValue = value.replace(/[^a-zA-ZÀ-ÿ\s\.\-&]/g, '');
    } else if (name === 'phone') {
      // Allow only numbers, spaces, parentheses, hyphens, and plus sign
      sanitizedValue = value.replace(/[^\d\s\-\(\)\+]/g, '');
    } else if (name === 'email') {
      // Basic email character filtering
      sanitizedValue = value.replace(/[<>]/g, '');
    }
    
    // Limit length
    const maxLengths = {
      name: 100,
      company: 100,
      email: 100,
      phone: 20,
      challenge: 2000
    };
    
    sanitizedValue = sanitizedValue.substring(0, maxLengths[name as keyof typeof maxLengths] || 100);
    
    setFormData({
      ...formData,
      [name]: sanitizedValue
    });
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-section"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Contato
            </Badge>
            <h2 
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Vamos criar sua solução de IA?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Em até 24h nosso time responde com uma proposta inicial personalizada. <span className="text-primary font-semibold">Sem blá-blá-blá.</span>
            </p>
            <div className="flex justify-center">
              <Badge variant="outline" className="text-primary border-primary/20 animate-pulse">
                <span aria-hidden="true">🔥</span> Últimas 3 vagas de Setembro - Empresas Pequenas, Médias e Grandes
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
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome <span aria-label="campo obrigatório">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      placeholder="Seu nome completo"
                      className="border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa <span aria-label="campo obrigatório">*</span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      placeholder="Nome da sua empresa"
                      className="border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email <span aria-label="campo obrigatório">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      placeholder="seu@email.com"
                      className="border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Celular <span aria-label="campo obrigatório">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      placeholder="(11) 99999-9999"
                      className="border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-foreground mb-2">
                    Descreva sua dor/desafio <span aria-label="campo obrigatório">*</span>
                  </label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="Conte-nos sobre o desafio que sua empresa enfrenta e como podemos ajudar com IA..."
                    className="border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[120px]"
                  />
                </div>
                
                <input type="hidden" name="csrf_token" value={csrfToken} />
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full text-lg py-6 h-auto focus:ring-2 focus:ring-accent/20 focus:outline-none"
                  disabled={isSubmitting}
                  aria-describedby={isSubmitting ? "submitting-status" : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <span id="submitting-status">Enviando...</span>
                      <span className="sr-only">Formulário sendo enviado, aguarde</span>
                    </>
                  ) : (
                    <>
                      <span aria-hidden="true">🚀</span> Quero Meu Diagnóstico Gratuito
                    </>
                  )}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  <span aria-hidden="true">✅</span> Seus dados estão 100% seguros. Nada de SPAM. A LEGAL só fala com empresas.
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