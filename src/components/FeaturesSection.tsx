import { Clock, Brain, Shield } from "lucide-react";
import earthBg from "@/assets/earth-features-bg.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Always Available",
      description:
        "24/7 support whenever you need someone to talk to, no matter how far from home.",
    },
    {
      icon: Brain,
      title: "Understanding",
      description:
        "Trained to comprehend the unique challenges of life in isolation and microgravity.",
    },
    {
      icon: Shield,
      title: "Private & Safe",
      description:
        "Your conversations remain confidential, creating a safe space for expression.",
    },
  ];

  return (
    <section
      className="relative py-24 px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${earthBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border border-primary mb-2">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="text-foreground/90 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
