import { Heart, Activity, Brain, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Sidebar from "@/components/Sidebar";

const HealthMonitoring = () => {
  const healthMetrics = [
    {
      icon: Heart,
      label: "Heart Rate",
      value: "72 bpm",
      status: "Normal",
      progress: 75,
      color: "text-primary",
    },
    {
      icon: Activity,
      label: "Sleep Quality",
      value: "7.5 hrs",
      status: "Good",
      progress: 85,
      color: "text-primary",
    },
    {
      icon: Brain,
      label: "Stress Level",
      value: "Low",
      status: "Optimal",
      progress: 30,
      color: "text-primary",
    },
    {
      icon: Zap,
      label: "Energy Level",
      value: "High",
      status: "Excellent",
      progress: 90,
      color: "text-primary",
    },
  ];

  const recentReadings = [
    { date: "Today, 14:30", metric: "Heart Rate", value: "72 bpm", status: "Normal" },
    { date: "Today, 08:00", metric: "Sleep Quality", value: "7.5 hrs", status: "Good" },
    { date: "Yesterday, 20:15", metric: "Stress Check", value: "Low", status: "Good" },
    { date: "Yesterday, 12:00", metric: "Heart Rate", value: "68 bpm", status: "Normal" },
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">
        <div className="border-b border-border p-6">
          <h1 className="text-2xl font-bold">Health Monitoring</h1>
          <p className="text-muted-foreground">
            Track your physical and mental wellbeing metrics
          </p>
        </div>

        <div className="flex-1 p-8 space-y-8">
          {/* Current Metrics */}
          <div>
            <h2 className="text-xl font-bold mb-4">Current Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="glass-card">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <Icon className={`w-8 h-8 ${metric.color}`} />
                        <span className="text-sm text-muted-foreground">
                          {metric.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {metric.label}
                        </p>
                        <p className="text-3xl font-bold">{metric.value}</p>
                      </div>
                      <Progress value={metric.progress} className="h-2" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Recent Readings */}
          <div>
            <h2 className="text-xl font-bold mb-4">Recent Readings</h2>
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentReadings.map((reading, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{reading.metric}</p>
                        <p className="text-sm text-muted-foreground">
                          {reading.date}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-bold">{reading.value}</p>
                        <p className="text-sm text-primary">{reading.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Health Tips */}
          <div>
            <h2 className="text-xl font-bold mb-4">Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardContent className="p-6 space-y-2">
                  <p className="font-medium text-primary">Stay Hydrated</p>
                  <p className="text-sm text-muted-foreground">
                    Drink water regularly to maintain optimal hydration in the
                    spacecraft environment.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 space-y-2">
                  <p className="font-medium text-primary">Exercise Daily</p>
                  <p className="text-sm text-muted-foreground">
                    Maintain muscle mass and bone density with daily physical
                    activity.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 space-y-2">
                  <p className="font-medium text-primary">Sleep Routine</p>
                  <p className="text-sm text-muted-foreground">
                    Maintain a consistent sleep schedule for optimal recovery
                    and performance.
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

export default HealthMonitoring;
