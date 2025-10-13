import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [count, setCount] = useState(4);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          if (phase === "inhale") {
            setPhase("hold");
            return 4;
          } else if (phase === "hold") {
            setPhase("exhale");
            return 4;
          } else {
            setPhase("inhale");
            setCycles((c) => c + 1);
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase]);

  const handleReset = () => {
    setIsActive(false);
    setPhase("inhale");
    setCount(4);
    setCycles(0);
  };

  const getPhaseColor = () => {
    switch (phase) {
      case "inhale":
        return "bg-primary/20 border-primary";
      case "hold":
        return "bg-accent/20 border-accent";
      case "exhale":
        return "bg-secondary/40 border-secondary";
    }
  };

  const getPhaseText = () => {
    switch (phase) {
      case "inhale":
        return "Breathe In";
      case "hold":
        return "Hold";
      case "exhale":
        return "Breathe Out";
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="border-b border-border p-6">
          <h1 className="text-2xl font-bold">Breathing Exercise</h1>
          <p className="text-muted-foreground">
            Guided breathing to reduce stress and improve focus
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-2xl w-full space-y-8">
            <Card className="glass-card">
              <CardContent className="p-12">
                <div className="text-center space-y-8">
                  <div
                    className={`w-64 h-64 mx-auto rounded-full border-4 flex items-center justify-center transition-all duration-1000 ${getPhaseColor()} ${
                      isActive ? "animate-pulse" : ""
                    }`}
                  >
                    <div className="text-center space-y-4">
                      <p className="text-6xl font-bold">{count}</p>
                      <p className="text-2xl text-muted-foreground">
                        {getPhaseText()}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xl">Cycles completed: {cycles}</p>
                    <div className="flex justify-center gap-4">
                      <Button
                        size="lg"
                        onClick={() => setIsActive(!isActive)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {isActive ? (
                          <>
                            <Pause className="w-5 h-5 mr-2" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="w-5 h-5 mr-2" />
                            Start
                          </>
                        )}
                      </Button>
                      <Button size="lg" variant="outline" onClick={handleReset}>
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 border-2 border-primary" />
                <p className="text-sm font-medium">Inhale - 4s</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 border-2 border-accent" />
                <p className="text-sm font-medium">Hold - 4s</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary/40 border-2 border-secondary" />
                <p className="text-sm font-medium">Exhale - 4s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreathingExercise;
