import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Shield, Users, Clock, Lightbulb, Copy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const agents = [
  {
    name: "Matthew",
    role: "Compliance Specialist",
    icon: Shield,
    color: "bg-primary",
    status: "ready"
  },
  {
    name: "Lisa", 
    role: "Legal Coordinator",
    icon: Users,
    color: "bg-accent",
    status: "ready"
  },
  {
    name: "Robert",
    role: "Risk Assessment", 
    icon: Building2,
    color: "bg-destructive",
    status: "ready"
  },
  {
    name: "Elena",
    role: "Credit Analyst",
    icon: Zap,
    color: "bg-accent",
    status: "ready"
  },
  {
    name: "Terry",
    role: "HR Manager",
    icon: Users,
    color: "bg-warning",
    status: "ready"
  },
  {
    name: "Victoria",
    role: "Product Strategy",
    icon: Lightbulb,
    color: "bg-primary-light",
    status: "ready"
  }
];

const samplePrompt = "New Basel III capital requirements have been announced with implementation in 8 months. Assess the impact on our current loan portfolio and develop an implementation plan with timeline and resource requirements.";

const LandingPage = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const copyToChat = () => {
    setInputText(samplePrompt);
    toast({
      title: "Sample prompt copied",
      description: "Ready to analyze Basel III compliance requirements"
    });
  };

  const startAnalysis = () => {
    if (!inputText.trim()) return;
    
    // Store the prompt for analysis
    sessionStorage.setItem('analysisPrompt', inputText);
    navigate('/analysis');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">RegCompliance AI</h1>
                <p className="text-sm text-muted-foreground">Multi-Agent Regulatory Analysis</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Basel III Assessment</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Regulatory Compliance Analysis
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            AI-powered multi-agent system for comprehensive regulatory impact assessment
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Regulatory Compliance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Multi-Agent Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Real-time Processing</span>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-card rounded-2xl shadow-medium border border-border p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Regulatory Assessment Request
            </h3>
            <p className="text-muted-foreground">
              Describe your regulatory compliance scenario for comprehensive multi-agent analysis
            </p>
          </div>

          {/* Sample Prompt Display */}
          <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Lightbulb className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-primary mb-2">Sample Prompt:</h4>
                <div className="bg-card p-4 rounded border border-primary/20 font-mono text-sm text-foreground leading-relaxed">
                  {samplePrompt}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyToChat}
                  className="mt-3 text-primary hover:text-primary-dark"
                >
                  <Copy className="w-4 h-4 mr-1" />
                  Copy to chat box
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="space-y-4">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Describe your regulatory compliance scenario..."
              className="min-h-32 resize-none"
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>6 AI agents ready</span>
                <div className="flex space-x-1">
                  {agents.map((_, index) => (
                    <div key={index} className="w-2 h-2 bg-accent rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <Button
                onClick={startAnalysis}
                disabled={!inputText.trim()}
                className="bg-gradient-primary hover:bg-primary-dark"
              >
                <Zap className="w-5 h-5 mr-2" />
                Analyze
              </Button>
            </div>
          </div>
        </div>

        {/* Agent Preview */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {agents.map((agent, index) => (
            <div key={index} className="bg-card p-4 rounded-lg shadow-soft border border-border text-center">
              <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${agent.color}`}>
                <agent.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-medium text-foreground text-sm">{agent.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{agent.role}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;