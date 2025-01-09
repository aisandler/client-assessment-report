import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock, CheckCircle2, FileText, Users } from 'lucide-react';

interface SalesImplementationRoadmapProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation: boolean;
}

const SalesImplementationRoadmap: React.FC<SalesImplementationRoadmapProps> = ({
  activeTab,
  onTabChange,
  showNavigation
}) => {
  const implementationPhases = {
    immediate: {
      title: "Digital Sales Tools Stabilization",
      timeframe: "0-30 Days",
      priority: "Critical",
      initiatives: [
        {
          name: "Digital Catalog Development",
          description: "Implement initial customizable sales presentation tool",
          deliverables: [
            "Product database integration",
            "Mobile-friendly interface prototype",
            "Basic customization capabilities",
            "Initial sales team training"
          ],
          impact: "High",
          effort: "High",
          owner: "Technical Team"
        },
        {
          name: "Content Asset Consolidation",
          description: "Begin centralized digital asset management process",
          deliverables: [
            "Asset inventory compilation",
            "Initial repository setup",
            "Content update workflow draft",
            "Version control basic implementation"
          ],
          impact: "High",
          effort: "Medium",
          owner: "Marketing Team"
        },
        {
          name: "LinkedIn Presence Initial Optimization",
          description: "Develop foundational social media engagement strategy",
          deliverables: [
            "Company profile enhancement",
            "Initial content publishing guidelines",
            "Team engagement protocol draft",
            "Performance tracking baseline"
          ],
          impact: "Medium",
          effort: "Low",
          owner: "Marketing Communications"
        }
      ]
    },
    shortTerm: {
      title: "Comprehensive Digital Enablement",
      timeframe: "30-90 Days",
      priority: "High",
      initiatives: [
        {
          name: "Advanced Sales Tool Development",
          description: "Enhance digital sales capabilities and integration",
          deliverables: [
            "Full customization features",
            "Advanced reporting capabilities",
            "Cross-platform compatibility",
            "Comprehensive sales team training"
          ],
          impact: "High",
          effort: "High",
          owner: "Technical & Sales Enablement Teams"
        },
        {
          name: "Digital Asset Management Refinement",
          description: "Implement comprehensive content management system",
          deliverables: [
            "Centralized asset repository",
            "Systematic update workflow",
            "Robust version control",
            "Performance tracking mechanism"
          ],
          impact: "High",
          effort: "Medium",
          owner: "Marketing Team"
        },
        {
          name: "Social Media Strategy Expansion",
          description: "Develop sophisticated social engagement approach",
          deliverables: [
            "Detailed content calendar",
            "Team engagement protocols",
            "Performance measurement framework",
            "Trade show integration strategy"
          ],
          impact: "Medium",
          effort: "Medium",
          owner: "Marketing Communications"
        }
      ]
    },
    longTerm: {
      title: "Strategic Digital Transformation",
      timeframe: "90+ Days",
      priority: "Medium",
      initiatives: [
        {
          name: "Digital Sales Ecosystem",
          description: "Create integrated digital sales enablement platform",
          deliverables: [
            "Comprehensive sales tool integration",
            "AI-enhanced content recommendations",
            "Advanced analytics capabilities",
            "Continuous improvement framework"
          ],
          impact: "High",
          effort: "High",
          owner: "Leadership & Technical Team"
        },
        {
          name: "Advanced Content Strategy",
          description: "Develop sophisticated content management approach",
          deliverables: [
            "Predictive content optimization",
            "Cross-channel content distribution",
            "Performance-driven content creation",
            "Automated content refresh protocols"
          ],
          impact: "High",
          effort: "Medium",
          owner: "Marketing Strategy Team"
        },
        {
          name: "Digital Engagement Optimization",
          description: "Advanced social and digital engagement capabilities",
          deliverables: [
            "Advanced social listening tools",
            "Integrated marketing communications",
            "Predictive engagement analytics",
            "Cross-platform brand consistency framework"
          ],
          impact: "Medium",
          effort: "High",
          owner: "Marketing Communications"
        }
      ]
    }
  };

  return (
    <Card className="border-t-4 border-t-blue-600">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
        <CardTitle className="flex items-center">
          <Clock className="text-blue-600 mr-2" />
          Sales Enablement Implementation Roadmap
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="prose max-w-none mb-6">
          <p className="text-gray-600 text-lg">
            A strategic approach to transforming sales enablement capabilities, 
            focusing on digital tools, content management, and engagement strategies.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(implementationPhases).map(([phase, data]) => (
            <div key={phase} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{data.title}</h3>
                  <div className="text-sm text-gray-600">{data.timeframe}</div>
                </div>
                <div className={`px-3 py-1 rounded text-sm font-medium ${
                  data.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                  data.priority === 'High' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {data.priority} Priority
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {data.initiatives.map((initiative, idx) => (
                  <div key={idx} className="bg-white p-4 rounded border border-gray-100">
                    <div className="flex items-start">
                      <FileText className="text-blue-600 mt-1 mr-3" size={20} />
                      <div className="flex-1">
                        <div className="font-medium mb-2">{initiative.name}</div>
                        <div className="text-sm text-gray-600 mb-3">
                          {initiative.description}
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded mb-3">
                          <div className="text-sm font-medium mb-2">Key Deliverables:</div>
                          <div className="grid grid-cols-2 gap-2">
                            {initiative.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle2 className="text-green-500 mr-2" size={14} />
                                {deliverable}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Impact</div>
                            <div className={`text-sm font-medium ${
                              initiative.impact === 'High' ? 'text-green-600' :
                              'text-yellow-600'
                            }`}>
                              {initiative.impact}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Effort</div>
                            <div className={`text-sm font-medium ${
                              initiative.effort === 'Low' ? 'text-green-600' :
                              initiative.effort === 'Medium' ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>
                              {initiative.effort}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Owner</div>
                            <div className="text-sm text-gray-600">
                              {initiative.owner}
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

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Implementation Considerations</h4>
          <div className="text-blue-800">
            Critical success factors for sales enablement transformation:
            <ul className="list-disc pl-5 mt-2 space-y-1 text-blue-800">
              <li>Ensure alignment between technology, content, and sales strategies</li>
              <li>Maintain continuous feedback and iterative improvement</li>
              <li>Focus on user adoption and team enablement</li>
              <li>Balance technological capabilities with practical usability</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesImplementationRoadmap;