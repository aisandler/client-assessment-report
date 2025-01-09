import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock, AlertTriangle, Check, FileText, Users } from 'lucide-react';

const AgencyImplementationRoadmap = () => {
  const implementationPhases = {
    stabilization: {
      title: "Immediate Stabilization",
      timeframe: "0-30 Days",
      priority: "Critical",
      initiatives: [
        {
          name: "Data Quality Remediation",
          description: "Deploy proper analytics filtering and establish clean reporting baseline",
          deliverables: [
            "Bot filtering implementation",
            "Proper conversion tracking setup",
            "Data quality validation framework",
            "Clean reporting templates"
          ],
          impact: "High",
          effort: "Medium",
          owner: "Analytics Team"
        },
        {
          name: "Campaign Optimization",
          description: "Address immediate inefficiencies in paid search management",
          deliverables: [
            "Branded keyword strategy revision",
            "Weekend campaign activation",
            "Budget reallocation framework",
            "Performance reporting enhancement"
          ],
          impact: "High",
          effort: "Low",
          owner: "Media Team"
        },
        {
          name: "Service Documentation",
          description: "Establish clear documentation of current services and deliverables",
          deliverables: [
            "Service catalog creation",
            "Deliverable tracking system",
            "Resource allocation documentation",
            "Performance metric definition"
          ],
          impact: "Medium",
          effort: "Medium",
          owner: "Account Team"
        }
      ]
    },
    transition: {
      title: "Partnership Restructuring",
      timeframe: "30-90 Days",
      priority: "High",
      initiatives: [
        {
          name: "Agency Model Evolution",
          description: "Develop and implement new agency partnership framework",
          deliverables: [
            "Service model evaluation",
            "Partner capability assessment",
            "Cost structure analysis",
            "Transition planning documentation"
          ],
          impact: "High",
          effort: "High",
          owner: "Leadership Team"
        },
        {
          name: "Performance Framework",
          description: "Establish new measurement and accountability systems",
          deliverables: [
            "KPI definition and tracking",
            "Performance dashboard creation",
            "Regular review cadence",
            "Optimization protocol"
          ],
          impact: "High",
          effort: "Medium",
          owner: "Analytics Team"
        },
        {
          name: "Knowledge Transfer",
          description: "Ensure critical information and processes are documented",
          deliverables: [
            "Technical documentation",
            "Process workflow maps",
            "Training materials",
            "Transition checklist"
          ],
          impact: "Medium",
          effort: "High",
          owner: "Technical Team"
        }
      ]
    },
    optimization: {
      title: "Strategic Enhancement",
      timeframe: "90+ Days",
      priority: "Medium",
      initiatives: [
        {
          name: "Internal Capability Development",
          description: "Build strategic digital marketing capabilities in-house",
          deliverables: [
            "Team structure definition",
            "Skill gap assessment",
            "Training program development",
            "Resource planning"
          ],
          impact: "High",
          effort: "High",
          owner: "Leadership Team"
        },
        {
          name: "Technology Integration",
          description: "Enhance marketing technology infrastructure and integration",
          deliverables: [
            "Tech stack assessment",
            "Integration roadmap",
            "Data flow optimization",
            "Platform enhancement"
          ],
          impact: "Medium",
          effort: "High",
          owner: "Technical Team"
        },
        {
          name: "Advanced Measurement",
          description: "Implement sophisticated performance measurement capabilities",
          deliverables: [
            "Attribution modeling",
            "Cross-channel reporting",
            "ROI optimization framework",
            "Predictive analytics setup"
          ],
          impact: "High",
          effort: "Medium",
          owner: "Analytics Team"
        }
      ]
    }
  };

  return (
    <Card className="border-t-4 border-t-blue-600 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b pb-4">
        <CardTitle className="flex items-center text-xl">
          <Clock className="text-blue-600 mr-3" />
          Agency Partnership Implementation Roadmap
        </CardTitle>
        <p className="text-gray-600 text-sm mt-2 max-w-3xl">
          A structured approach to evolving agency partnerships while building internal 
          capabilities and maintaining operational continuity.
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
                      <FileText className="text-blue-600 shrink-0 mt-1" size={18} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 mb-1.5">{initiative.name}</div>
                        <div className="text-sm text-gray-600 mb-3">
                          {initiative.description}
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-md mb-4">
                          <div className="text-xs font-medium text-gray-700 mb-2">Key Deliverables:</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {initiative.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600 gap-2">
                                <Check className="text-green-500 shrink-0" size={14} />
                                <span className="truncate">{deliverable}</span>
                              </div>
                            ))}
                          </div>
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
                            <div className="text-xs text-gray-500">Owner</div>
                            <div className="text-gray-900 font-medium">
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

        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
            <Users size={18} />
            Implementation Considerations
          </h4>
          <div className="text-blue-800 text-sm">
            Critical factors for successful agency transformation:
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-blue-800">
              <li>Maintain service continuity during transition periods</li>
              <li>Ensure proper knowledge transfer and documentation</li>
              <li>Build internal capabilities progressively</li>
              <li>Monitor performance metrics throughout evolution</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgencyImplementationRoadmap;