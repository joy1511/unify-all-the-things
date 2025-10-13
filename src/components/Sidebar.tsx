import { Home, MessageSquare, Wind, Heart, AlertTriangle, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: MessageSquare, label: "Chat", path: "/chat" },
    { icon: Wind, label: "Breathing Exercise", path: "/breathing" },
    { icon: Heart, label: "Health Monitoring", path: "/health" },
    { icon: AlertTriangle, label: "Emergency Escalation", path: "/emergency" },
    { icon: Gamepad2, label: "Wellness Games", path: "/games" },
  ];

  return (
    <div className="w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-2xl font-bold text-primary">Maitri</h2>
        <p className="text-sm text-muted-foreground mt-1">Your Space Companion</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={index}
              variant={isActive ? "default" : "ghost"}
              className={`w-full justify-start ${
                isActive ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => navigate("/")}
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
