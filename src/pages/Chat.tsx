import { useState } from "react";
import { Video, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { useToast } from "@/hooks/use-toast";

const Chat = () => {
  const [activeTab, setActiveTab] = useState<"video" | "text">("video");
  const { toast } = useToast();

  const handleStartSession = () => {
    toast({
      title: activeTab === "video" ? "Video Call Starting" : "Chat Starting",
      description: "Connecting to Maitri AI...",
    });
    // Add your actual video/chat implementation here
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Video className="w-6 h-6 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Maitri AI Companion</h1>
              <p className="text-sm text-muted-foreground">
                AI-powered emotional support system
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant={activeTab === "video" ? "default" : "outline"}
              onClick={() => setActiveTab("video")}
              className={activeTab === "video" ? "bg-primary text-primary-foreground" : ""}
            >
              <Video className="w-4 h-4 mr-2" />
              Video Call
            </Button>
            <Button
              variant={activeTab === "text" ? "default" : "outline"}
              onClick={() => setActiveTab("text")}
              className={activeTab === "text" ? "bg-primary text-primary-foreground" : ""}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Text Chat
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center space-y-8 max-w-2xl">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 border-2 border-primary">
              {activeTab === "video" ? (
                <Video className="w-16 h-16 text-primary" />
              ) : (
                <MessageSquare className="w-16 h-16 text-primary" />
              )}
            </div>
            
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">
                {activeTab === "video" ? "Start Video Session" : "Start Text Conversation"}
              </h2>
              <p className="text-muted-foreground text-lg">
                {activeTab === "video"
                  ? "Connect face-to-face with Maitri. Our AI will analyze your emotions in real-time to provide better support."
                  : "Chat with Maitri through text. Share your thoughts and feelings in a comfortable way."}
              </p>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={handleStartSession}
            >
              {activeTab === "video" ? (
                <Video className="w-5 h-5 mr-2" />
              ) : (
                <MessageSquare className="w-5 h-5 mr-2" />
              )}
              {activeTab === "video" ? "Start Video Call" : "Start Chat"}
            </Button>

            {activeTab === "video" && (
              <p className="text-sm text-muted-foreground">
                Your video is processed locally and never stored
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
