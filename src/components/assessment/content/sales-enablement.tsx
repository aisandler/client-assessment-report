import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, Target, BookOpen, BarChart, Zap, Share2 } from 'lucide-react';

interface SalesEnablementProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation: boolean;
}

const SalesEnablement: React.FC<SalesEnablementProps> = ({
  activeTab,
  onTabChange,
  showNavigation
}) => {
  const enablementAreas = [
    {
      id: 'training',
      icon: BookOpen,
      title: 'Training & Development',
      status: 'In Progress',
      completion: 65,
      description: 'Current sales training programs and development initiatives',
      keyPoints: [
        'Product knowledge training framework',
        'Sales methodology implementation',
        'Digital tools proficiency'
      ],
      recommendations: [
        'Implement structured onboarding program',
        'Develop advanced product certification',
        'Regular skill assessment and feedback'
      ]
    },
    {
      id: 'tools',
      icon: Zap,
      title: 'Sales Tools & Technology',
      status: 'Needs Attention',
      completion: 40,
      description: 'Digital tools and technology stack supporting sales operations',
      keyPoints: [
        'CRM utilization and adoption',
        'Sales automation tools',
        'Analytics and reporting capabilities'
      ],
      recommendations: [
        'Streamline CRM workflows',
        'Implement sales intelligence tools',
        'Enhance mobile accessibility'
      ]
    },
    {
      id: 'processes',
      icon: Share2,
      title: 'Process & Methodology',
      status: 'Review Required',
      completion: 50,
      description: 'Sales processes and methodological framework',
      keyPoints: [
        'Lead qualification process',
        'Opportunity management',
        'Deal closure methodology'
      ],
      recommendations: [
        'Standardize sales processes',
        'Implement value-based selling',
        'Enhance pipeline management'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border border-gray-200 border-t-4 border-t-blue-500 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-gray-900">
            Sales Enablement Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Analysis of current sales enablement infrastructure, identifying key areas for 
              optimization and development to enhance sales team effectiveness and performance.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-blue-50 border border-gray-200 border-t-4 border-t-blue-500 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-blue-600 font-medium">Team Readiness</span>
              <Users className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-blue-900">75%</span>
            </div>
            <div className="mt-2 text-sm text-blue-600">Current Capability Score</div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 border border-gray-200 border-t-4 border-t-blue-500 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-emerald-600 font-medium">Tool Adoption</span>
              <Target className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-900">60%</span>
            </div>
            <div className="mt-2 text-sm text-emerald-600">Utilization Rate</div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border border-gray-200 border-t-4 border-t-blue-500 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-purple-600 font-medium">Process Maturity</span>
              <BarChart className="h-4 w-4 text-purple-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-purple-900">55%</span>
            </div>
            <div className="mt-2 text-sm text-purple-600">Maturity Score</div>
          </CardContent>
        </Card>
      </div>

      {enablementAreas.map((area) => (
        <Card 
          key={area.id} 
          className="border border-gray-200 border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b py-4">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <area.icon className="text-blue-600 h-5 w-5" />
                <span className="text-lg font-medium">{area.title}</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                {area.status}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <div className="space-y-4">
              <p className="text-gray-600">{area.description}</p>

              <div className="bg-white border border-gray-100 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-gray-900">Current State</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {area.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Recommendations</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-800">
                  {area.recommendations.map((rec, index) => (
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

export default SalesEnablement;