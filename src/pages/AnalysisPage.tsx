import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Shield, Users, Clock, CheckCircle, Zap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  {
    name: "Matthew",
    role: "Compliance Specialist",
    icon: Shield,
    color: "bg-primary",
    currentTask: "Analyzing Basel III requirements"
  },
  {
    name: "Lisa",
    role: "Legal Coordinator", 
    icon: Users,
    color: "bg-accent",
    currentTask: "Reviewing legal implications"
  },
  {
    name: "Robert",
    role: "Risk Assessment",
    icon: Building2,
    color: "bg-destructive", 
    currentTask: "Portfolio impact analysis"
  },
  {
    name: "Elena",
    role: "Credit Analyst",
    icon: Zap,
    color: "bg-accent",
    currentTask: "Risk weighting calculations"
  },
  {
    name: "Terry",
    role: "HR Manager",
    icon: Users,
    color: "bg-warning",
    currentTask: "Training needs assessment"
  },
  {
    name: "Victoria",
    role: "Product Strategy",
    icon: Lightbulb,
    color: "bg-primary-light",
    currentTask: "Product portfolio review"
  }
];

const conversationScript = [
  {
    timestamp: "14:23:15",
    agentIndex: 0,
    content: "Initiating Basel III impact analysis. New capital requirements effective in 8 months. Beginning comprehensive regulatory review.",
    priority: "high",
    phase: "initialization"
  },
  {
    timestamp: "14:23:18", 
    agentIndex: 0,
    content: "Key changes identified:\n• Enhanced capital conservation buffer: 2.5% → 3.0%\n• Countercyclical buffer: 0% → 1.5%\n• Leverage ratio requirement: 3% → 3.5%\n• Liquidity coverage ratio: Enhanced monitoring",
    data: "Regulatory Impact Summary:\n- Capital Adequacy Ratio: +1.5%\n- Risk-Weighted Assets: Recalculation required\n- Implementation deadline: 8 months\n- Estimated compliance cost: $2.4M - $3.8M",
    priority: "high",
    phase: "analysis"
  },
  {
    timestamp: "14:23:45",
    agentIndex: 1,
    content: "Legal coordination initiated. Reviewing regulatory filing requirements and board governance implications. Robert, I need current portfolio composition for legal risk assessment.",
    priority: "medium",
    phase: "coordination"
  },
  {
    timestamp: "14:24:02",
    agentIndex: 2,
    content: "Portfolio risk assessment in progress. Current composition analysis:\n• Commercial loans: $1.2B (43% of portfolio)\n• Residential mortgages: $890M (32%)\n• Consumer credit: $420M (15%)\n• Securities: $290M (10%)",
    data: "Risk Weighting Analysis:\n- Current CAR: 12.8%\n- Required CAR (new): 14.3%\n- Capital shortfall: $42M\n- High-risk assets: $340M requiring reweighting",
    priority: "high",
    phase: "assessment"
  },
  {
    timestamp: "14:24:28",
    agentIndex: 3,
    content: "Recalculating risk weightings under new Basel III framework. Significant impact on commercial real estate and SME lending portfolios. Preliminary calculations show 15% increase in risk-weighted assets.",
    priority: "high",
    phase: "calculation"
  },
  {
    timestamp: "14:24:55",
    agentIndex: 2,
    content: "Elena's calculations confirmed. Portfolio impact summary:\n• Capital requirement increase: $42M\n• ROE impact: -1.2%\n• Loan pricing adjustments needed: +0.3-0.5%\n• Asset disposal consideration: $85M in high-risk assets",
    priority: "high",
    phase: "impact"
  },
  {
    timestamp: "14:25:20",
    agentIndex: 4,
    content: "HR impact assessment initiated. Training requirements analysis:\n• Compliance staff: 12 personnel need Basel III certification\n• Risk management: 8 staff require advanced training\n• Board education: 2-day intensive program needed\n• Timeline: 6 months for full training deployment",
    priority: "medium",
    phase: "resources"
  },
  {
    timestamp: "14:25:48",
    agentIndex: 5,
    content: "Product strategy implications assessed. Recommendations:\n• Suspend high-risk product launches\n• Modify pricing on commercial lending products\n• Develop Basel III compliant product variants\n• Timeline: 4 months for product portfolio adjustment",
    priority: "medium",
    phase: "strategy"
  },
  {
    timestamp: "14:26:15",
    agentIndex: 1,
    content: "Legal framework coordination complete. Required actions:\n• Board resolution for capital plan (Month 1)\n• Regulatory notification filing (Month 2)\n• Policy updates and documentation (Month 3-4)\n• Audit preparation and validation (Month 6-7)",
    priority: "high",
    phase: "compliance"
  },
  {
    timestamp: "14:26:42",
    agentIndex: 0,
    content: "Comprehensive implementation plan developed. Critical path analysis shows 8-month timeline is achievable with immediate action on capital raising and staff training. Risk mitigation strategies identified for potential delays.",
    priority: "high",
    phase: "finalization"
  }
];

const phases = [
  { name: "Regulatory Analysis", active: false, completed: true },
  { name: "Portfolio Assessment", active: false, completed: true },
  { name: "Risk Calculations", active: false, completed: true },
  { name: "Resource Planning", active: true, completed: false },
  { name: "Implementation Strategy", active: false, completed: false },
  { name: "Final Recommendations", active: false, completed: false }
];

const AnalysisPage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [activeAgents, setActiveAgents] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState("Initializing Analysis");
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate real-time conversation
    let messageIndex = 0;
    const interval = setInterval(() => {
      if (messageIndex < conversationScript.length) {
        const message = conversationScript[messageIndex];
        const agent = agents[message.agentIndex];
        
        setMessages(prev => [...prev, { ...message, agent }]);
        setActiveAgents([agent.name]);
        setProgress(((messageIndex + 1) / conversationScript.length) * 100);
        
        // Update current phase
        if (messageIndex < 2) setCurrentPhase("Regulatory Analysis");
        else if (messageIndex < 4) setCurrentPhase("Portfolio Assessment");
        else if (messageIndex < 6) setCurrentPhase("Risk Calculations");
        else if (messageIndex < 8) setCurrentPhase("Resource Planning");
        else if (messageIndex < 9) setCurrentPhase("Implementation Strategy");
        else setCurrentPhase("Final Recommendations");
        
        messageIndex++;
      } else {
        clearInterval(interval);
        setActiveAgents([]);
        setCurrentPhase("Analysis Complete");
        setTimeout(() => {
          navigate('/results');
        }, 2000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [navigate]);

  const formatTimestamp = (timestamp: string) => {
    const now = new Date();
    return timestamp;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive';
      case 'medium': return 'bg-warning/10 text-warning';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Progress */}
      <header className="bg-card shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">Basel III Impact Analysis</h1>
              <p className="text-sm text-muted-foreground">{currentPhase}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-48 bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-foreground">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Agent Status Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-soft border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">Agent Status</h3>
              <div className="space-y-3">
                {agents.map((agent, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${agent.color}`}>
                      <agent.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm text-foreground">{agent.name}</div>
                      <div className="text-xs text-muted-foreground">{agent.currentTask}</div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${activeAgents.includes(agent.name) ? 'bg-accent animate-pulse' : 'bg-muted'}`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analysis Phases */}
            <div className="bg-card rounded-lg shadow-soft border border-border p-6 mt-6">
              <h3 className="font-semibold text-foreground mb-4">Analysis Phases</h3>
              <div className="space-y-2">
                {phases.map((phase, index) => (
                  <div key={index} className={`p-2 rounded text-sm ${phase.completed ? 'bg-accent/10 text-accent' : phase.active ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}>
                    <div className="flex items-center space-x-2">
                      {phase.completed ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : phase.active ? (
                        <Clock className="w-4 h-4 animate-spin" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-current" />
                      )}
                      <span>{phase.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conversation Display */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-lg shadow-soft border border-border h-[600px] flex flex-col">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold text-foreground">Agent Collaboration</h3>
                <p className="text-sm text-muted-foreground">Real-time multi-agent analysis in progress</p>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-in fade-in duration-300">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.agent.color}`}>
                      <message.agent.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm text-foreground">{message.agent.name}</span>
                        <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                        {message.priority && (
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(message.priority)}`}>
                            {message.priority}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                        {message.content}
                      </div>
                      {message.data && (
                        <div className="mt-2 p-3 bg-muted rounded border border-border">
                          <pre className="text-xs text-muted-foreground whitespace-pre-wrap">{message.data}</pre>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {activeAgents.length > 0 && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span>{activeAgents.join(', ')} analyzing...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;