import { Button } from "@/components/ui/button";
import { Bot, Sparkles, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-gradient-primary shadow-glow">
            <Bot className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          Smart Responder Kit
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Create intelligent virtual agents that understand and respond like humans. 
          Leverage advanced NLP to handle customer inquiries, provide support, and engage users naturally.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="min-w-[200px]">
            <Sparkles className="w-5 h-5" />
            Try Demo
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px]">
            <MessageCircle className="w-5 h-5" />
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
            <Bot className="w-8 h-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Natural Language Processing</h3>
            <p className="text-sm text-muted-foreground">Advanced AI understands context and intent</p>
          </div>
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
            <MessageCircle className="w-8 h-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Multi-Platform Deploy</h3>
            <p className="text-sm text-muted-foreground">Works on websites, apps, and social media</p>
          </div>
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
            <Sparkles className="w-8 h-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Human-like Responses</h3>
            <p className="text-sm text-muted-foreground">Engaging conversations that feel natural</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;