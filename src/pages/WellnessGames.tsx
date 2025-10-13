import { useState } from "react";
import { Gamepad2, Sparkles, Target, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";

const WellnessGames = () => {
  const [memoryCards, setMemoryCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);

  const games = [
    {
      icon: Brain,
      title: "Memory Match",
      description: "Improve cognitive function with a classic memory game",
      color: "text-primary",
      category: "Active",
    },
    {
      icon: Sparkles,
      title: "Mindful Coloring",
      description: "Relax and express creativity through digital art",
      color: "text-primary",
      category: "Coming Soon",
    },
    {
      icon: Target,
      title: "Focus Challenge",
      description: "Enhance concentration with attention exercises",
      color: "text-primary",
      category: "Coming Soon",
    },
  ];

  const initializeMemoryGame = () => {
    const symbols = ["🌟", "🌙", "🚀", "🌍", "⭐", "🛸"];
    const pairs = [...symbols, ...symbols];
    const shuffled = pairs.sort(() => Math.random() - 0.5);
    setMemoryCards(shuffled.map((_, i) => i));
    setFlippedCards([]);
    setMatchedPairs([]);
  };

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedPairs.includes(index)) {
      return;
    }

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const symbols = ["🌟", "🌙", "🚀", "🌍", "⭐", "🛸"];
      const pairs = [...symbols, ...symbols];
      
      if (pairs[first] === pairs[second]) {
        setMatchedPairs([...matchedPairs, first, second]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">
        <div className="border-b border-border p-6">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Wellness Games</h1>
              <p className="text-muted-foreground">
                Engaging activities to support mental wellbeing
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 space-y-8">
          {/* Games Grid */}
          <div>
            <h2 className="text-xl font-bold mb-4">Available Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {games.map((game, index) => {
                const Icon = game.icon;
                return (
                  <Card key={index} className="glass-card">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-full bg-primary/20">
                          <Icon className={`w-8 h-8 ${game.color}`} />
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                          {game.category}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">{game.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {game.description}
                        </p>
                      </div>
                      {game.category === "Active" && (
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          onClick={initializeMemoryGame}
                        >
                          Play Now
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Memory Game */}
          {memoryCards.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Memory Match Game</h2>
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {memoryCards.map((_, index) => {
                      const symbols = ["🌟", "🌙", "🚀", "🌍", "⭐", "🛸"];
                      const pairs = [...symbols, ...symbols];
                      const isFlipped = flippedCards.includes(index) || matchedPairs.includes(index);
                      
                      return (
                        <button
                          key={index}
                          onClick={() => handleCardClick(index)}
                          className={`aspect-square rounded-lg text-4xl flex items-center justify-center transition-all duration-300 ${
                            isFlipped
                              ? "bg-primary/20 border-2 border-primary"
                              : "bg-secondary hover:bg-secondary/80 border-2 border-border"
                          }`}
                        >
                          {isFlipped ? pairs[index] : "?"}
                        </button>
                      );
                    })}
                  </div>
                  {matchedPairs.length === 12 && (
                    <div className="text-center mt-8 space-y-4">
                      <p className="text-2xl font-bold text-primary">
                        Congratulations! 🎉
                      </p>
                      <p className="text-muted-foreground">
                        You've matched all pairs!
                      </p>
                      <Button
                        onClick={initializeMemoryGame}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Play Again
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Benefits */}
          <div>
            <h2 className="text-xl font-bold mb-4">Benefits of Wellness Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardContent className="p-6 space-y-2">
                  <Brain className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-bold">Cognitive Health</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular mental exercises help maintain sharp cognitive function
                    during extended missions.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 space-y-2">
                  <Sparkles className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-bold">Stress Relief</h3>
                  <p className="text-sm text-muted-foreground">
                    Engaging games provide mental breaks and reduce stress in
                    high-pressure environments.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 space-y-2">
                  <Target className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-bold">Focus Enhancement</h3>
                  <p className="text-sm text-muted-foreground">
                    Games improve attention span and concentration for critical
                    mission tasks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessGames;
