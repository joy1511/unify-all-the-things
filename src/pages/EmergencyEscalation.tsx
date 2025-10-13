import { AlertTriangle, Phone, Radio, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import { useToast } from "@/hooks/use-toast";

const EmergencyEscalation = () => {
  const { toast } = useToast();

  const emergencyContacts = [
    {
      icon: Phone,
      title: "Mission Control",
      description: "Direct line to Earth-based mission control center",
      action: "Contact Mission Control",
      severity: "high",
    },
    {
      icon: Users,
      title: "Crew Commander",
      description: "Alert the crew commander for immediate assistance",
      action: "Alert Commander",
      severity: "medium",
    },
    {
      icon: Radio,
      title: "Medical Team",
      description: "Connect with the medical support team",
      action: "Contact Medical",
      severity: "high",
    },
  ];

  const handleEmergency = (type: string) => {
    toast({
      title: "Emergency Alert Sent",
      description: `${type} has been notified. Help is on the way.`,
      variant: "destructive",
    });
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">
        <div className="border-b border-border p-6 bg-destructive/10">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-destructive" />
            <div>
              <h1 className="text-2xl font-bold">Emergency Escalation</h1>
              <p className="text-muted-foreground">
                Immediate assistance and emergency protocols
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 space-y-8">
          {/* Emergency Warning */}
          <Card className="glass-card border-destructive">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">When to Use Emergency Escalation</h3>
                  <p className="text-muted-foreground">
                    Use these emergency contacts only when you need immediate assistance with:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Medical emergencies or health crises</li>
                    <li>Life-threatening situations</li>
                    <li>Critical system failures</li>
                    <li>Severe psychological distress requiring immediate intervention</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <div>
            <h2 className="text-xl font-bold mb-4">Emergency Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyContacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card key={index} className="glass-card">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-destructive/20">
                          <Icon className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="font-bold text-lg">{contact.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{contact.description}</p>
                      <Button
                        className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                        onClick={() => handleEmergency(contact.title)}
                      >
                        {contact.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Protocols */}
          <div>
            <h2 className="text-xl font-bold mb-4">Emergency Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-primary">Medical Emergency</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Assess the situation and ensure your safety</li>
                    <li>Contact Medical Team immediately</li>
                    <li>Follow medical team instructions precisely</li>
                    <li>Document all symptoms and vitals</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-primary">Psychological Crisis</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Find a safe and quiet location</li>
                    <li>Use Maitri's immediate support features</li>
                    <li>Contact Crew Commander if needed</li>
                    <li>Request connection with Earth-based counselor</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-primary">System Failure</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Alert Mission Control immediately</li>
                    <li>Follow emergency shutdown procedures</li>
                    <li>Move to designated safe area</li>
                    <li>Await further instructions from ground control</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-primary">Non-Emergency Support</h3>
                  <p className="text-sm text-muted-foreground">
                    For non-urgent concerns, use Maitri's regular chat features or
                    schedule a session with mental health professionals during
                    regular communication windows.
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

export default EmergencyEscalation;
