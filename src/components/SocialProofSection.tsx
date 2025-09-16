import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const SocialProofSection = () => {
  const stats = [
    { number: "+50", label: "Projetos de IA entregues", icon: "🚀" },
    { number: "+R$ 15M", label: "Em resultados gerados", icon: "💰" },
    { number: "24h", label: "Resposta Garantida", icon: "⚡" },
    { number: "5x", label: "Ganho médio de eficiência", icon: "📈" }
  ];

  const badges = [
    "Garantia de Resultado",
    "ROI em até 6 meses", 
    "Setup em 30 dias",
    "100% B2B",
    "Especialistas em IA",
    "Suporte Dedicado"
  ];

  return (
    <section id="social-proof" className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Prova Social
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Atendemos as maiores empresas do Brasil
          </h2>
          <p className="text-muted-foreground">
            Top 5 agências de eventos • Indústrias multinacionais • Empresas de tecnologia
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border/50 hover:shadow-card transition-all">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-2">
              ✅ {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;