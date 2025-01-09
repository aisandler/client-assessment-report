import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock, CheckCircle2, FileText, Users } from 'lucide-react';

const InternalImplementationRoadmap = () => {
  const implementationPhases = {
    immediate: {
      title: "Process Optimization",
      timeframe: "0-30 Days",
      priority: "Critical",
      initiatives: [
        {
          name: "Workflow Standardization",
          description: "Establish standardized marketing workflows and approval processes",
          deliverables: [
            "Campaign planning templates",
            "Review process documentation",
            "RACI matrix development",
            "Decision authority framework"
          ],
          impact: "High",
          effort: "Medium",
          owner: "Marketing Leadership"
        },
        {
          name: "Technology Utilization",
          description: "Optimize current platform usage and begin transition planning",
          deliverables: [
            "Magento feature audit",
            "Salesforce automation plan",
            "Pardot transition roadmap",
            "Integration requirements"
          ],
          impact: "High",
          effort: "Medium",
          owner: "Technical Team"
        },
        {
          name: "Role Clarification",
          description: "Define clear roles and responsibilities across digital marketing",
          deliverables: [
            "Role documentation",
            "Responsibility matrix",
            "Workflow ownership map",
            "Communication protocols"
          ],
          impact: "High",
          effort: "Low",
          owner: "HR & Marketing Leadership"
        }
      ]
    },
    shortTerm: {
      title: "Capability Enhancement",
      timeframe: "30-90 Days",
      priority: "High",
      initiatives: [
        {
          name: "Technology Integration",
          description: "Implement enhanced platform connectivity and automation",
          deliverables: [
            "Data connectivity framework",
            "Cross-platform automation",
            "Reporting integration",
            "Performance dashboard"
          ],
          impact: "High",
          effort: "High",
          owner: "Technical Team"
        },
        {
          name: "Team Development",
          description: "Address skill gaps and enhance digital marketing capabilities",
          deliverables: [
            "Skills assessment framework",
            "Training program development",
            "Performance metrics",
            "Career development paths"
          ],
          impact: "Medium",
          effort: "Medium",
          owner: "HR & Department Leads"
        },
        {
          name: "Resource Optimization",
          description: "Implement strategic resource allocation framework",
          deliverables: [
            "Budget reallocation plan",
            "Resource utilization metrics",
            "Project prioritization framework",
            "Performance tracking system"
          ],
          impact: "High",
          effort: "Medium",
          owner: "Marketing Leadership"
        }
      ]
    },
    longTerm: {
      title: "Strategic Advancement",
      timeframe: "90+ Days",
      priority: "Medium",
      initiatives: [
        {
          name: "Digital Center of Excellence",
          description: "Establish centralized digital marketing expertise and governance",
          deliverables: [
            "Governance framework",
            "Best practice documentation",
            "Knowledge management system",
            "Innovation pipeline"
          ],
          impact: "High",
          effort: "High",
          owner: "Executive Team"
        },
        {
          name: "Advanced Technology Implementation",
          description: "Deploy sophisticated marketing technology capabilities",
          deliverables: [
            "Marketing automation enhancement",
            "Advanced analytics implementation",
            "AI/ML integration plan",
            "Technology roadmap"
          ],
          impact: "High",
          effort: "High",
          owner: "Technical Team"
        },
        {
          name: "Performance Optimization",
          description: "Implement advanced measurement and optimization framework",
          deliverables: [
            "Attribution modeling",
            "Predictive analytics",
            "ROI optimization",
            "Performance forecasting"
          ],
          impact: "Medium",
          effort: "High",
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
          Implementation Roadmap
        </CardTitle>
        <p className="text-gray-600 text-sm mt-2 max-w-3xl">
          A structured approach to enhancing internal digital marketing capabilities while 
          addressing process, technology, and team development needs.
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
                                <CheckCircle2 className="text-green-500 shrink-0" size={14} />
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
            Critical success factors for capability enhancement:
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-blue-800">
              <li>Ensure clear ownership and accountability for each initiative</li>
              <li>Maintain focus on skill development throughout implementation</li>
              <li>Establish regular progress monitoring and reporting</li>
              <li>Balance immediate needs with long-term strategic objectives</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InternalImplementationRoadmap;