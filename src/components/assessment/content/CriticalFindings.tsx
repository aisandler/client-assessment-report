import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { AlertTriangle, TrendingDown, Zap, Target, Layers, BarChart, Settings, Users } from 'lucide-react';

export const CriticalFindings: React.FC = () => {
  const findings = [
    {
      title: "Agency Partnership & Performance",
      icon: AlertTriangle,
      severity: "Critical",
      severityColor: "text-red-600",
      gradient: "from-red-50 to-orange-50",
      borderColor: "border-l-red-500",
      findings: [
        {
          heading: "Severe Cost Efficiency Issues",
          description: "AWG's media management fees (57%) significantly exceed industry standards (12.5-20%), with limited demonstrable value"
        },
        {
          heading: "Data Quality Concerns",
          description: "Approximately 20-25% of reported traffic is invalid bot traffic, compromising strategic decision-making"
        },
        {
          heading: "Campaign Management Inefficiencies",
          description: "Significant waste in paid search, including unnecessary branded keyword cannibalization and weekend campaign gaps"
        },
        {
          heading: "Limited Strategic Value",
          description: "Basic maintenance-level service despite premium agency rates, with minimal proactive improvements or strategic guidance"
        }
      ]
    },
    {
      title: "Fragmented Brand Architecture",
      icon: Layers,
      severity: "High Priority",
      severityColor: "text-blue-600",
      gradient: "from-blue-50 to-indigo-50",
      borderColor: "border-l-blue-500",
      findings: [
        {
          heading: "Unclear Brand Hierarchy",
          description: "Multiple brands (Econoco, F&D, Mondo, Sellutions) operating without clear strategic differentiation in the marketplace."
        },
        {
          heading: "Resource Dilution",
          description: "Marketing investments and efforts spread across brands without clear prioritization framework."
        },
        {
          heading: "Channel Overlap",
          description: "Multiple brands competing for similar digital real estate and customer attention."
        },
        {
          heading: "Inconsistent Digital Presence",
          description: "Varying levels of digital maturity and investment across brands impacting overall market effectiveness."
        }
      ]
    },
    {
      title: "Marketplace Strategy & Performance",
      icon: BarChart,
      severity: "Critical",
      severityColor: "text-amber-600",
      gradient: "from-amber-50 to-yellow-50",
      borderColor: "border-l-amber-500",
      findings: [
        {
          heading: "Amazon Operations",
          description: "Partnership with Knoza operating on outdated contract with above-market fees."
        },
        {
          heading: "Home Depot Underutilization",
          description: "Limited advertising investment ($14k YTD) with no clear growth strategy."
        },
        {
          heading: "Wayfair Decline",
          description: "Revenue down 25% YoY, 50% from 2022 peak, indicating strategic gaps."
        },
        {
          heading: "Content Development Constraints",
          description: "Limited resources for maintaining competitive marketplace presence."
        }
      ]
    },
    {
      title: "Organizational Structure & Capabilities",
      icon: Users,
      severity: "High Priority",
      severityColor: "text-indigo-600",
      gradient: "from-indigo-50 to-blue-50",
      borderColor: "border-l-indigo-500",
      findings: [
        {
          heading: "Resource Allocation Challenges",
          description: "Team structure spans product development, marketing, and digital capabilities without clear prioritization"
        },
        {
          heading: "Process Inefficiencies",
          description: "Ad-hoc requests and unclear ownership impact execution effectiveness"
        },
        {
          heading: "Training & Development Needs",
          description: "Current team requires additional support in digital marketing capabilities and technical skills"
        },
        {
          heading: "Brand Architecture Opportunities",
          description: "Need for clearer delineation between brand roles and digital presence optimization"
        }
      ]
    },
    {
      title: "Technology & Infrastructure",
      icon: Settings,
      severity: "Critical",
      severityColor: "text-purple-600",
      gradient: "from-purple-50 to-pink-50",
      borderColor: "border-l-purple-500",
      findings: [
        {
          heading: "Data Quality Issues",
          description: "Significant bot traffic and tracking problems affecting performance measurement."
        },
        {
          heading: "Integration Gaps",
          description: "Limited connectivity between platforms impacts operational efficiency."
        },
        {
          heading: "Reporting Limitations",
          description: "Lack of unified measurement framework across channels."
        },
        {
          heading: "Marketing Automation Needs",
          description: "Current email platform (Pardot) requires evaluation and potential replacement"
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="border-t-4 border-t-red-600 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b pb-8">
          <CardTitle className="text-2xl font-semibold">Critical Findings</CardTitle>
          <p className="text-lg text-gray-600 mt-2">
            Key issues identified during the digital marketing assessment
          </p>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="space-y-8">
            {findings.map((section, idx) => (
              <Card 
                key={idx} 
                className={`bg-gradient-to-br ${section.gradient} border-l-4 ${section.borderColor} shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className={`${section.severityColor} bg-white p-2 rounded-lg shadow-sm`}>
                      <section.icon size={28} />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-xl text-gray-900">{section.title}</h3>
                        <span className={`${section.severityColor} text-sm font-medium`}>
                          {section.severity}
                        </span>
                      </div>
                      <div className="space-y-4">
                        {section.findings.map((finding, findingIdx) => (
                          <div key={findingIdx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {finding.heading}
                            </h4>
                            <p className="text-gray-700">
                              {finding.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CriticalFindings;