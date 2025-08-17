import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Globe, 
  Zap, 
  Shield, 
  MessageSquare, 
  BarChart3,
  Clock,
  Users
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced NLP",
    description: "Sophisticated natural language processing that understands context, intent, and nuance in human communication."
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Deploy seamlessly across websites, mobile apps, social media platforms, and messaging services."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second response times ensure smooth, real-time conversations that keep users engaged."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with data encryption and privacy compliance for sensitive conversations."
  },
  {
    icon: MessageSquare,
    title: "Contextual Memory",
    description: "Maintains conversation context and remembers previous interactions for personalized experiences."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into user interactions, conversation patterns, and performance metrics."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock customer support without the need for human intervention or scheduling."
  },
  {
    icon: Users,
    title: "Multi-Language",
    description: "Support for multiple languages with automatic detection and seamless translation capabilities."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Smart Conversations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create intelligent virtual agents that provide exceptional user experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="mb-4">
                <div className="p-3 rounded-lg bg-gradient-primary/10 w-fit">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our Smart Responder Kit to transform their customer interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-accent text-white rounded-lg font-medium hover:shadow-glow transition-shadow duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors duration-300">
                View Documentation
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;