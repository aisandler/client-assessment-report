import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { AlertCircle, CheckCircle2, ArrowRight, Building2, Layers } from 'lucide-react';

const PortfolioAnalysis = () => {
  const brandAssessment = {
    econoco: {
      name: "Econoco",
      status: "NEEDS REVIEW",
      positioning: "Traditional wholesale, larger orders",
      challenges: [
        "Unclear differentiation from F&D",
        "Multiple customer segments creating complexity",
        "Digital presence spread across verticals"
      ],
      opportunities: [
        "Strengthen wholesale positioning",
        "Clear segmentation of customer types",
        "Digital integration with Studio X"
      ]
    },
    displayDispensary: {
      name: "Display Dispensary",
      status: "STABLE",
      positioning: "Specialized dispensary fixtures",
      challenges: [
        "Limited integration with main infrastructure",
        "Separate marketing requirements",
        "Resource sharing constraints"
      ],
      opportunities: [
        "Focused vertical expansion",
        "Distinct digital strategy",
        "Specialized content development"
      ]
    },
    mondo_sellutions: {
      name: "Mondo & Sellutions",
      status: "ACTION REQUIRED",
      positioning: "High-end customer focus",
      challenges: [
        "Unclear market differentiation",
        "Resource dilution",
        "Limited digital presence"
      ],
      opportunities: [
        "Potential consolidation",
        "Premium positioning",
        "Enhanced Studio X integration"
      ]
    },
    fd: {
      name: "F&D (Fixtures & Displays)",
      status: "ACTION REQUIRED",
      positioning: "Attempting differentiation from Econoco",
      challenges: [
        "Overlap with Econoco offerings",
        "Unclear value proposition",
        "Resource inefficiencies"
      ],
      opportunities: [
        "Strategic repositioning",
        "Market segment focus",
        "Digital presence optimization"
      ]
    }
  };

  const strategicConsiderations = [
    {
      area: "Brand Portfolio Optimization",
      priority: "High Priority",
      considerations: [
        "Evaluate consolidation opportunities",
        "Clear differentiation strategy needed",
        "Resource allocation efficiency",
        "Digital presence streamlining"
      ]
    },
    {
      area: "Studio X Integration",
      priority: "Medium Priority",
      considerations: [
        "Digital showcase opportunity",
        "Cross-brand experience center",
        "Premium service differentiator",
        "Content creation hub potential"
      ]
    },
    {
      area: "Digital Channel Strategy",
      priority: "High Priority",
      considerations: [
        "Channel role clarity",
        "Resource optimization",
        "Content development efficiency",
        "Customer journey mapping"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'ACTION REQUIRED':
        return 'bg-red-100 text-red-800 font-semibold';
      case 'NEEDS REVIEW':
        return 'bg-yellow-100 text-yellow-800 font-semibold';
      case 'STABLE':
        return 'bg-green-100 text-green-800 font-semibold';
      default:
        return 'bg-gray-100 text-gray-800 font-semibold';
    }
  };

  return (
    <div className="w-full space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Brand Architecture Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Current Brand Portfolio Analysis</h3>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(brandAssessment).map(([key, brand]) => (
                  <Card key={key} className="bg-white border border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <Building2 className="text-blue-600 mr-2" size={20} />
                          <h4 className="font-semibold text-lg">{brand.name}</h4>
                        </div>
                        <div className={`px-3 py-1 rounded text-sm ${getStatusColor(brand.status)}`}>
                          {brand.status}
                        </div>
                      </div>
                      <div className="text-gray-600 mb-4">{brand.positioning}</div>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium mb-2">Key Challenges</div>
                          {brand.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex items-center text-gray-600 mb-1 ml-1">
                              <ArrowRight className="text-gray-400 mr-2" size={14} />
                              {challenge}
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="font-medium mb-2">Opportunities</div>
                          {brand.opportunities.map((opportunity, idx) => (
                            <div key={idx} className="flex items-center text-gray-600 mb-1 ml-1">
                              <Layers className="text-blue-500 mr-2" size={14} />
                              {opportunity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Strategic Considerations</h3>
              <div className="grid grid-cols-3 gap-6">
                {strategicConsiderations.map((consideration, idx) => (
                  <Card key={idx} className="bg-white border border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="font-semibold text-lg">{consideration.area}</div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          consideration.priority === 'High Priority' ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-700'
                        }`}>
                          {consideration.priority}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {consideration.considerations.map((item, idx) => (
                          <div key={idx} className="flex items-center text-gray-600 ml-1">
                            <ArrowRight className="text-gray-400 mr-2" size={14} />
                            {item}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-blue-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Immediate Recommendations</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-blue-600 mr-2 mt-1" size={16} />
                    <div>
                      <span className="font-medium">Brand Portfolio Evaluation:</span>
                      <p className="text-gray-600 mt-1">Conduct detailed assessment of Mondo/Sellutions consolidation opportunity and F&D differentiation strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="text-blue-600 mr-2 mt-1" size={16} />
                    <div>
                      <span className="font-medium">Studio X Digital Integration:</span>
                      <p className="text-gray-600 mt-1">Develop comprehensive plan for Studio X digital presence and role across brand portfolio</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="text-blue-600 mr-2 mt-1" size={16} />
                    <div>
                      <span className="font-medium">Resource Optimization:</span>
                      <p className="text-gray-600 mt-1">Create unified content development and digital marketing strategy across brands while maintaining Display Dispensary's distinct position</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioAnalysis;