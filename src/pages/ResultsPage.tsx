import { CheckCircle, Download, TrendingUp, Users, Building2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const implementationPhases = [
  {
    title: "Regulatory Analysis & Planning",
    description: "Complete regulatory review and develop implementation strategy",
    timeline: "Month 1-2",
    status: "completed" as const
  },
  {
    title: "Capital Planning & Board Approval", 
    description: "Secure board approval for capital plan and begin fundraising",
    timeline: "Month 2-3",
    status: "current" as const
  },
  {
    title: "Staff Training & System Updates",
    description: "Train personnel and upgrade systems for compliance",
    timeline: "Month 3-5",
    status: "pending" as const
  },
  {
    title: "Policy Implementation",
    description: "Implement new policies and procedures across organization",
    timeline: "Month 5-6", 
    status: "pending" as const
  },
  {
    title: "Testing & Validation",
    description: "Test compliance systems and validate calculations",
    timeline: "Month 6-7",
    status: "pending" as const
  },
  {
    title: "Final Compliance & Reporting",
    description: "Achieve full compliance and submit regulatory reports",
    timeline: "Month 7-8",
    status: "pending" as const
  }
];

const riskAssessmentData = [
  {
    category: "Capital Adequacy",
    currentImpact: "12.8% CAR",
    baselImpact: "14.3% required (+$42M)",
    mitigation: "Capital raising + asset optimization",
    priority: "high" as const
  },
  {
    category: "Liquidity Risk",
    currentImpact: "LCR 110%", 
    baselImpact: "Enhanced monitoring",
    mitigation: "Liquidity buffer expansion",
    priority: "medium" as const
  },
  {
    category: "Operational Risk",
    currentImpact: "Standard approach",
    baselImpact: "Enhanced requirements", 
    mitigation: "Process automation + training",
    priority: "medium" as const
  },
  {
    category: "Credit Risk",
    currentImpact: "IRB approach",
    baselImpact: "Minimal impact",
    mitigation: "Model validation",
    priority: "low" as const
  }
];

const ResultsPage = () => {
  const downloadReport = () => {
    // Simulate report download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'basel-iii-compliance-report.pdf';
    link.click();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive';
      case 'medium': return 'bg-warning/10 text-warning';  
      case 'low': return 'bg-accent/10 text-accent';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'current': return '→';
      default: return '○';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-accent text-white';
      case 'current': return 'bg-primary text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Basel III Impact Analysis Results</h1>
              <p className="text-muted-foreground">Comprehensive regulatory compliance assessment completed</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-accent">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Analysis Complete</span>
              </div>
              <Button onClick={downloadReport} className="bg-gradient-primary hover:bg-primary-dark">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Executive Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                <div className="text-2xl font-bold text-destructive">$42M</div>
                <div className="text-sm text-destructive/80">Additional Capital Required</div>
              </div>
              <div className="bg-warning/5 p-4 rounded-lg border border-warning/20">
                <div className="text-2xl font-bold text-warning">8 Months</div>
                <div className="text-sm text-warning/80">Implementation Timeline</div>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">20 Staff</div>
                <div className="text-sm text-primary/80">Training Required</div>
              </div>
              <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                <div className="text-2xl font-bold text-accent">94%</div>
                <div className="text-sm text-accent/80">Compliance Achievability</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Portfolio Impact Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Impact Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Current Capital Ratio</span>
                  <span className="text-sm text-foreground">12.8%</span>
                </div>
                <Progress value={85} className="mb-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Required Capital Ratio</span>
                  <span className="text-sm text-foreground">14.3%</span>
                </div>
                <Progress value={95} className="mb-4" />
              </div>
              <div className="pt-4 border-t border-border">
                <h4 className="font-medium text-foreground mb-2">Risk-Weighted Assets Impact</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Commercial Loans</span>
                    <span className="text-destructive">+18% weighting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Real Estate</span>
                    <span className="text-destructive">+25% weighting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SME Lending</span>
                    <span className="text-destructive">+15% weighting</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Implementation Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {implementationPhases.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${getStatusColor(phase.status)}`}>
                      {getStatusIcon(phase.status)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{phase.title}</div>
                      <div className="text-sm text-muted-foreground">{phase.description}</div>
                      <div className="text-xs text-muted-foreground mt-1">{phase.timeline}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Recommendations */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Detailed Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>Capital Management</span>
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Raise $42M additional capital through retained earnings and equity</li>
                  <li>• Optimize asset portfolio by disposing $85M high-risk assets</li>
                  <li>• Implement dynamic capital allocation model</li>
                  <li>• Establish capital buffer above minimum requirements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span>Human Resources</span>
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Train 20 staff members on Basel III requirements</li>
                  <li>• Hire 2 additional compliance specialists</li>
                  <li>• Implement board education program</li>
                  <li>• Establish ongoing training framework</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-warning" />
                  <span>Product Strategy</span>
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Adjust pricing on commercial lending products</li>
                  <li>• Develop Basel III compliant product variants</li>
                  <li>• Suspend high-risk product launches</li>
                  <li>• Implement risk-based pricing model</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Assessment Matrix */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Risk Assessment Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-medium text-foreground">Risk Category</th>
                    <th className="text-left py-2 font-medium text-foreground">Current Impact</th>
                    <th className="text-left py-2 font-medium text-foreground">Basel III Impact</th>
                    <th className="text-left py-2 font-medium text-foreground">Mitigation Strategy</th>
                    <th className="text-left py-2 font-medium text-foreground">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {riskAssessmentData.map((row, index) => (
                    <tr key={index}>
                      <td className="py-3 text-foreground">{row.category}</td>
                      <td className="py-3 text-muted-foreground">{row.currentImpact}</td>
                      <td className="py-3 text-muted-foreground">{row.baselImpact}</td>
                      <td className="py-3 text-muted-foreground">{row.mitigation}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(row.priority)}`}>
                          {row.priority.charAt(0).toUpperCase() + row.priority.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Cost-Benefit Analysis */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Cost-Benefit Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Implementation Costs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Additional Capital</span>
                    <span className="font-medium text-foreground">$42,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Staff Training</span>
                    <span className="font-medium text-foreground">$285,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">System Upgrades</span>
                    <span className="font-medium text-foreground">$450,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consulting Fees</span>
                    <span className="font-medium text-foreground">$320,000</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2">
                    <span className="font-medium text-foreground">Total Cost</span>
                    <span className="font-bold text-foreground">$43,055,000</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Expected Benefits</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Regulatory Compliance</span>
                    <span className="font-medium text-accent">✓ Achieved</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Risk Reduction</span>
                    <span className="font-medium text-accent">25% improvement</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Market Confidence</span>
                    <span className="font-medium text-accent">Enhanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Competitive Position</span>
                    <span className="font-medium text-accent">Strengthened</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2">
                    <span className="font-medium text-foreground">ROI Timeline</span>
                    <span className="font-bold text-accent">18-24 months</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsPage;