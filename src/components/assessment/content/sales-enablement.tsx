import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  AlertTriangle, 
  BarChart, 
  Network, 
  Settings, 
  Database, 
  Layers, 
  Globe,
  Book 
} from 'lucide-react';

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
  const salesEnablementFindings = [
    {
      id: 'digital-sales-tools',
      icon: Book,
      title: 'Digital Sales Tools Assessment',
      priority: 'CRITICAL',
      description: 'Current website limitations significantly impacting sales team effectiveness',
      currentState: [
        'Website serving as primary product showcase tool',
        'Significant navigation and search limitations',
        'No capability for customized prospect presentations',
        'Missing sales-specific interface for team enablement'
      ],
      criticalGaps: [
        'Lack of customizable digital catalog tool forcing manual workarounds',
        'Search functionality challenges impacting sales efficiency',
        'Limited ability to create prospect-specific presentations',
        'No systematic content refresh process'
      ],
      impact: [
        'Reduced sales team effectiveness',
        'Extended sales cycle duration',
        'Inconsistent customer presentations',
        'Limited ability to showcase full product range'
      ],
      quickWins: {
        title: 'Digital Catalog Development',
        recommendations: [
          'Implementation of customizable presentation tool',
          'Integration with existing product database',
          'Mobile-friendly interface development',
          'Training program for sales team adoption'
        ]
      }
    },
    {
      id: 'digital-asset-management',
      icon: Database,
      title: 'Digital Asset Management',
      priority: 'HIGH PRIORITY',
      description: 'Fragmented and inefficient digital asset management processes',
      contentAvailability: [
        'Outdated product catalogs requiring systematic update',
        'Dispersed digital assets across multiple platforms',
        'Limited rich media content for key products',
        'Inconsistent product documentation'
      ],
      managementChallenges: [
        'No centralized asset management system',
        'Manual content update processes',
        'Limited version control capabilities',
        'Inefficient asset distribution methods'
      ],
      quickWins: {
        title: 'Content Management Enhancement',
        recommendations: [
          'Centralized asset repository creation',
          'Systematic update workflow implementation',
          'Version control protocol development',
          'Asset performance tracking'
        ]
      }
    },
    {
      id: 'social-presence',
      icon: Globe,
      title: 'Social Presence',
      priority: 'MEDIUM PRIORITY',
      description: 'Underutilized LinkedIn platform for B2B engagement',
      currentStatus: [
        'Underutilized platform for B2B engagement',
        'Limited showcase of product innovations',
        'Missing trade show and event coverage',
        'Inconsistent brand representation'
      ],
      optimizationNeeds: [
        'Enhanced company profile development',
        'Systematic content publishing strategy',
        'Better integration with trade show activities',
        'Improved team engagement protocols'
      ],
      quickWins: {
        title: 'LinkedIn Optimization',
        recommendations: [
          'Profile enhancement strategy',
          'Content calendar development',
          'Team engagement protocol',
          'Performance measurement framework'
        ]
      }
    },
    {
      id: 'technology-integration',
      icon: Settings,
      title: 'Technology Integration Framework',
      priority: 'HIGH PRIORITY',
      description: 'Limited integration and automation across digital platforms',
      currentInfrastructure: [
        'Basic Salesforce CRM implementation',
        'Limited marketing automation utilization',
        'Minimal integration between platforms',
        'Manual data synchronization processes'
      ],
      enhancementRequirements: [
        'Enhanced CRM data utilization',
        'Improved content delivery mechanisms',
        'Automated workflow implementation',
        'Cross-platform analytics integration'
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
      case 'MEDIUM PRIORITY':
        return {
          container: 'border-l-4 border-l-blue-500 bg-blue-50',
          badge: 'bg-blue-100 text-blue-800'
        };
      default:
        return {
          container: 'border-l-4 border-l-gray-500 bg-gray-50',
          badge: 'bg-gray-100 text-gray-800'
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Executive Overview */}
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
          <CardTitle className="flex items-center">
            <Network className="text-blue-600 mr-2" />
            Sales Enablement & Digital Tools Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="prose max-w-none mb-6">
            <p className="text-gray-600 text-lg">
              Comprehensive analysis reveals significant gaps in digital sales infrastructure, 
              asset management, and technological integration. These findings highlight critical 
              opportunities for enhancing sales team effectiveness and digital capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-600 font-medium">Priority Findings</span>
                <AlertTriangle className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-blue-900">2</span>
                <span className="text-sm text-blue-700">CRITICAL</span>
              </div>
              <div className="mt-2 text-sm text-blue-600">Immediate Action Required</div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-yellow-600 font-medium">High Priority</span>
                <BarChart className="h-4 w-4 text-yellow-600" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-yellow-900">2</span>
                <span className="text-sm text-yellow-700">Findings</span>
              </div>
              <div className="mt-2 text-sm text-yellow-600">Strategic Optimization Needed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Findings */}
      {salesEnablementFindings.map((finding) => (
        <Card 
          key={finding.id} 
          className={`border-t-4 ${getPriorityClasses(finding.priority).container}`}
        >
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <finding.icon className="text-blue-600 mr-2" />
                {finding.title}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityClasses(finding.priority).badge}`}>
                {finding.priority}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="prose max-w-none mb-4">
              <p className="text-gray-600">{finding.description}</p>
            </div>

            {/* Render different sections based on available data */}
            {finding.currentState && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Current State</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {finding.currentState.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {finding.criticalGaps && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Critical Gaps</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {finding.criticalGaps.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {finding.impact && (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Business Impact</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {finding.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {finding.quickWins && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">{finding.quickWins.title}</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-800">
                  {finding.quickWins.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SalesEnablement;