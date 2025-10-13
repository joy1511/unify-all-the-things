import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import FeaturesSection from "@/components/FeaturesSection";
import spaceHeroBg from "@/assets/space-hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-primary">Maitri</h1>
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => navigate("/about")}>
            About
          </Button>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => navigate("/dashboard")}
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${spaceHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center space-y-8 max-w-4xl">
          <h1 className="text-8xl md:text-9xl font-bold text-hero tracking-wider">
            MAITRI
          </h1>

          <h2 className="text-5xl md:text-6xl font-light text-primary">
            Your Companion
            <br />
            Beyond Earth
          </h2>

          <p className="text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            An AI assistant designed to support the emotional and mental
            wellbeing of astronauts in the vast solitude of space.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6 h-auto"
            onClick={() => navigate("/dashboard")}
          >
            Start Conversation
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
};

export default Index;
