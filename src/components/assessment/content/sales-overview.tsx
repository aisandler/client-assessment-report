import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, AlertOctagon, BarChart, Settings, Network, Database, Layers } from 'lucide-react';

interface SalesOverviewProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation: boolean;
}

const SalesOverview: React.FC<SalesOverviewProps> = ({
  activeTab,
  onTabChange,
  showNavigation
}) => {
  const criticalFindings = [
    {
      id: 'promotional-calendar',
      icon: AlertTriangle,
      title: 'Promotional Calendar Coordination',
      priority: 'CRITICAL',
      description: 'Lack of centralized marketing calendar creating significant operational inefficiencies',
      details: [
        'Sales teams learning about promotions simultaneously with customers',
        'Limited ability to leverage promotional activities across verticals',
        'Missing opportunity for coordinated multi-channel activation'
      ],
      impact: 'Reduced campaign effectiveness and missed revenue opportunities across all verticals',
      recommendations: [
        'Implement comprehensive marketing calendar system with cross-functional visibility'
      ]
    },
    {
      id: 'brand-portfolio',
      icon: Layers,
      title: 'Brand Portfolio Alignment',
      priority: 'CRITICAL',
      description: 'Unclear differentiation between brands impacting sales effectiveness',
      details: [
        'Customer confusion between Econoco and F&D offerings',
        'Missed cross-selling opportunities between Mondo Mannequins and fixtures',
        'Limited ability to leverage full product portfolio'
      ],
      impact: 'Significant revenue leakage and reduced market penetration',
      recommendations: [
        'Align brand architecture with sales strategy to optimize market coverage'
      ]
    },
    {
      id: 'digital-asset-management',
      icon: Database,
      title: 'Digital Asset Management',
      priority: 'HIGH PRIORITY',
      description: 'Dispersed digital assets limiting sales team effectiveness',
      details: [
        'Outdated product catalogs requiring systematic refresh',
        'Manual content management creating bottlenecks',
        'Inconsistent presentation materials across verticals'
      ],
      impact: 'Reduced sales efficiency and inconsistent customer experience',
      recommendations: [
        'Develop centralized digital asset management system'
      ]
    },
    {
      id: 'digital-lead-management',
      icon: Network,
      title: 'Digital Lead Management',
      priority: 'CRITICAL',
      description: 'Fragmented lead management across digital channels',
      details: [
        'Pardot integration capturing basic engagement metrics',
        'Variable lead routing processes across verticals',
        'Manual trade show lead management for smaller events',
        'Limited visibility into digital-origin opportunities'
      ],
      impact: 'Inconsistent lead attribution and missed opportunity identification',
      recommendations: [
        'Develop unified lead qualification framework',
        'Implement consistent cross-vertical lead tracking',
        'Enhance digital opportunity identification capabilities'
      ]
    },
    {
      id: 'technology-integration',
      icon: Settings,
      title: 'Technology Integration',
      priority: 'HIGH PRIORITY',
      description: 'Limited marketing technology utilization across platforms',
      details: [
        'Salesforce CRM with basic Pardot integration',
        'Slack communication framework',
        'ResponsePro ERP handling core operations',
        'Limited marketing automation capabilities'
      ],
      impact: 'Suboptimal data utilization and workflow efficiency',
      recommendations: [
        'Enhance CRM data utilization',
        'Improve lead tracking capabilities',
        'Implement automated workflow systems',
        'Develop cross-platform analytics integration'
      ]
    }
  ];

  const getPriorityClasses = (priority) => {
    switch (priority) {
      case 'CRITICAL':
        return {
          container: 'border-l-4 border-l-red-500 bg-red-50',
          badge: 'bg-red-100 text-red-800'
        };
      case 'HIGH PRIORITY':
        return {
          container: 'border-l-4 border-l-yellow-500 bg-yellow-50',
          badge: 'bg-yellow-100 text-yellow-800'
        };
      default:
        return {
          container: 'border-l-4 border-l-blue-500 bg-blue-50',
          badge: 'bg-blue-100 text-blue-800'
        };
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border border-gray-200 border-t-4 border-t-blue-500 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-gray-900">
            Sales Assessment Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              A comprehensive assessment reveals critical strategic gaps across digital marketing, 
              technology integration, and brand management. These findings highlight significant 
              opportunities for operational optimization and revenue enhancement.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-blue-50 border border-gray-200 border-t-4 border-t-blue-500 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-blue-600 font-medium">Critical Findings</span>
              <AlertTriangle className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-blue-900">2</span>
              <span className="text-sm text-blue-700">CRITICAL</span>
            </div>
            <div className="mt-2 text-sm text-blue-600">Immediate Action Required</div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border border-gray-200 border-t-4 border-t-blue-500 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-yellow-600 font-medium">High Priority</span>
              <BarChart className="h-4 w-4 text-yellow-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-yellow-900">2</span>
              <span className="text-sm text-yellow-700">Findings</span>
            </div>
            <div className="mt-2 text-sm text-yellow-600">Strategic Optimization Needed</div>
          </CardContent>
        </Card>
      </div>

      {criticalFindings.map((finding) => (
        <Card 
          key={finding.id} 
          className="border border-gray-200 border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b py-4">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <finding.icon className="text-blue-600 mr-2 h-5 w-5" />
                <span className="text-lg font-medium">{finding.title}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityClasses(finding.priority).badge}`}>
                {finding.priority}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <div className="space-y-4">
              <p className="text-gray-600">{finding.description}</p>

              <div className="bg-white border border-gray-100 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-gray-900">Key Challenges</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {finding.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Business Impact</h4>
                <p className="text-gray-700">{finding.impact}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Recommended Actions</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-800">
                  {finding.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SalesOverview;