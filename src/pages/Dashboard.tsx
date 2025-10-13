import { Video, Calendar, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Sessions", value: "12", icon: Video },
    { label: "This Week", value: "3", icon: Calendar },
    { label: "Wellbeing Score", value: "85%", icon: Activity },
  ];

  const recentActivity = [
    { text: "Session completed - 2 hours ago", time: "2 hours ago" },
    { text: "Session completed - Yesterday", time: "Yesterday" },
    { text: "Session completed - 3 days ago", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Welcome back, Astronaut</h1>
          <p className="text-muted-foreground text-lg">
            Your companion is here whenever you need support.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-muted-foreground">{stat.label}</p>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-5xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Start a Session */}
          <Card className="glass-card">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Start a Session</h2>
                <p className="text-muted-foreground">
                  Connect with Maitri for emotional support and companionship
                </p>
              </div>
              <Button
                onClick={() => navigate("/chat")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Video className="w-5 h-5 mr-2" />
                Begin Conversation
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="glass-card">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Recent Activity</h2>
                <p className="text-muted-foreground">
                  Your latest sessions and interactions
                </p>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{activity.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
