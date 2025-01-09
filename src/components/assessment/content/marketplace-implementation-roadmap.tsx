import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock, ArrowRight, CheckCircle2, Milestone, Users } from 'lucide-react';

interface MarketplaceImplementationRoadmapProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation: boolean;
}

const MarketplaceImplementationRoadmap: React.FC<MarketplaceImplementationRoadmapProps> = ({
  activeTab,
  onTabChange,
  showNavigation
}) => {
  const implementationPhases = {
    immediate: {
      title: "Immediate Actions",
      timeframe: "0-30 Days",
      priority: "Critical",
      initiatives: [
        {
          name: "Analytics & Tracking Enhancement",
          description: "Deploy proper tracking infrastructure and implement bot filtering across marketplace platforms",
          impact: "High",
          effort: "Low",
          dependencies: "Agency coordination"
        },
        {
          name: "Content Template Development",
          description: "Create standardized templates for product listings, technical documentation, and marketing content",
          impact: "High",
          effort: "Medium",
          dependencies: "Internal stakeholder alignment"
        },
        {
          name: "Campaign Optimization",
          description: "Review and optimize existing advertising campaigns across all marketplace platforms",
          impact: "Medium",
          effort: "Low",
          dependencies: "Agency collaboration"
        }
      ]
    },
    shortTerm: {
      title: "Core Capability Development",
      timeframe: "30-90 Days",
      priority: "High",
      initiatives: [
        {
          name: "Agency Partnership Restructuring",
          description: "Implement new performance frameworks and establish clear deliverables for marketplace partners",
          impact: "High",
          effort: "High",
          dependencies: "Contract review and negotiation"
        },
        {
          name: "Content Workflow Implementation",
          description: "Deploy systematic content creation and management processes across platforms",
          impact: "High",
          effort: "Medium",
          dependencies: "Template completion"
        },
        {
          name: "Cross-Marketplace Reporting",
          description: "Establish unified performance measurement and optimization framework",
          impact: "Medium",
          effort: "Medium",
          dependencies: "Analytics implementation"
        }
      ]
    },
    longTerm: {
      title: "Strategic Enhancement",
      timeframe: "90+ Days",
      priority: "Medium",
      initiatives: [
        {
          name: "Internal Capability Building",
          description: "Develop dedicated marketplace optimization team and establish centers of excellence",
          impact: "High",
          effort: "High",
          dependencies: "Resource allocation"
        },
        {
          name: "Platform Strategy Optimization",
          description: "Implement platform-specific growth strategies aligned with revenue vertical objectives",
          impact: "High",
          effort: "Medium",
          dependencies: "Performance baseline"
        },
        {
          name: "Advanced Analytics Integration",
          description: "Deploy enhanced measurement capabilities including attribution modeling and predictive analytics",
          impact: "Medium",
          effort: "High",
          dependencies: "Technical infrastructure"
        }
      ]
    }
  };

  return (
    <Card className="border-t-4 border-t-blue-600 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b pb-4">
        <CardTitle className="flex items-center text-xl">
          <Clock className="text-blue-600 mr-3" />
          Implementation Roadmap
        </CardTitle>
        <p className="text-gray-600 text-sm mt-2 max-w-3xl">
          A structured implementation approach prioritizes immediate performance improvements 
          while building foundational capabilities for long-term marketplace optimization.
        </p>
      </CardHeader>
      <CardContent className="p-4 lg:p-6">
        <div className="space-y-6">
          {Object.entries(implementationPhases).map(([phase, data]) => (
            <div key={phase} className="bg-gray-50 rounded-lg p-4 lg:p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
                  <div className="text-sm text-gray-600 mt-1">{data.timeframe}</div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  data.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                  data.priority === 'High' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {data.priority} Priority
                </div>
              </div>

              <div className="grid gap-4">
                {data.initiatives.map((initiative, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 mb-1.5">{initiative.name}</div>
                        <div className="text-sm text-gray-600 mb-3">
                          {initiative.description}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">Impact</div>
                            <div className={`font-medium ${
                              initiative.impact === 'High' ? 'text-green-600' :
                              'text-yellow-600'
                            }`}>
                              {initiative.impact}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">Effort</div>
                            <div className={`font-medium ${
                              initiative.effort === 'Low' ? 'text-green-600' :
                              initiative.effort === 'Medium' ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>
                              {initiative.effort}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">Dependencies</div>
                            <div className="text-gray-900 font-medium">
                              {initiative.dependencies}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
            <Users size={18} />
            Critical Success Factors
          </h4>
          <div className="text-blue-800 text-sm">
            Key considerations for successful implementation:
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-blue-800">
              <li>Maintain clear ownership and accountability for each initiative</li>
              <li>Establish regular progress monitoring and reporting cadence</li>
              <li>Ensure proper resource allocation across phases</li>
              <li>Address dependencies proactively to prevent delays</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketplaceImplementationRoadmap;