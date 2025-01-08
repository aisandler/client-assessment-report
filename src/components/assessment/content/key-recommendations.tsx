import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, AlertCircle, ShoppingCart, Database, Building2, Users } from 'lucide-react';
import { RichTextEditor } from '../../common/RichTextEditor';

interface KeyRecommendationsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const StatusBadge = ({ status }) => {
  // ... your existing StatusBadge component ...
};

const KeyRecommendations: React.FC<KeyRecommendationsProps> = ({ 
  activeTab = 'recommendations',
  onTabChange 
}) => {
  const tabs = [
    { id: 'overview', title: 'Assessment Overview' },
    { id: 'findings', title: 'Critical Findings' },
    { id: 'recommendations', title: 'Key Recommendations' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Assessment Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Overview content goes here...</p>
            </CardContent>
          </Card>
        );
      case 'findings':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Critical Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Findings content goes here...</p>
            </CardContent>
          </Card>
        );
      case 'recommendations':
      default:
        return (
          <div className="space-y-6">
            <Card className="border-t-4 border-t-blue-600">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b pb-3">
                <RichTextEditor
                  initialContent="Key Recommendations"
                  sectionId="key-recommendations-title"
                  className="text-2xl !p-0"
                />
                <RichTextEditor
                  initialContent="Establishing the foundation for digital marketing transformation"
                  sectionId="key-recommendations-subtitle"
                  className="text-lg text-gray-600 italic mt-1 !p-0"
                />
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Agency Partnership Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      <RichTextEditor
                        initialContent="Agency Partnership Optimization"
                        sectionId="agency-partnership-title"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="CRITICAL" />
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <RichTextEditor
                      initialContent="Our assessment revealed significant concerns with current agency relationships that require immediate action. Primary focus must be placed on evaluating and enhancing these partnerships to establish proper foundations for future growth."
                      sectionId="agency-partnership-p1"
                      className="!p-0"
                    />
                    <RichTextEditor
                      initialContent="Current agency costs significantly exceed industry standards while delivering limited strategic value. Media management fees at 57% versus industry standard of 12-20% demand immediate review. The upcoming AWG meetings present a critical opportunity to address both operational concerns and strategic alignment."
                      sectionId="agency-partnership-p2"
                      className="!p-0"
                    />
                    <RichTextEditor
                      initialContent="Immediate actions include preparing comprehensive evaluation criteria for the January 14/16 meetings, documenting current service requirements, and developing transition planning frameworks that ensure business continuity. This includes assessing specialized agency options while evaluating internal capability building needs."
                      sectionId="agency-partnership-p3"
                      className="!p-0"
                    />
                  </div>
                </div>

                {/* Marketplace Strategy Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="h-6 w-6 text-blue-600" />
                      <RichTextEditor
                        initialContent="Marketplace Strategy Development"
                        sectionId="marketplace-strategy-title"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="CRITICAL" />
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <RichTextEditor
                      initialContent="Amazon operations require strategic enhancement to address outdated partnership agreements and missed revenue opportunities. Current content development constraints and buy box competition indicate need for systematic optimization approach."
                      sectionId="marketplace-strategy-p1"
                      className="!p-0"
                    />
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <RichTextEditor
                        initialContent="Develop comprehensive Amazon growth strategy focusing on:"
                        sectionId="marketplace-strategy-list-title"
                        className="font-medium !p-0"
                      />
                      <ul className="space-y-2">
                        {[
                          'Evaluation of Knoza partnership and fee structures',
                          'Creation of systematic content development framework',
                          'Clear strategy for 1P versus 3P relationships',
                          'Optimization of catalog management processes',
                          'Enhanced competitive positioning'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600" />
                            <RichTextEditor
                              initialContent={item}
                              sectionId={`marketplace-strategy-list-item-${index}`}
                              className="!p-0 flex-1"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <RichTextEditor
                      initialContent="Home Depot presents immediate growth opportunity through improved marketing program utilization and strategic product expansion. Current $14k YTD spend indicates significant underutilization of available opportunities."
                      sectionId="marketplace-strategy-p2"
                      className="!p-0"
                    />
                  </div>
                </div>

                {/* Digital Infrastructure Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <Database className="h-6 w-6 text-blue-600" />
                      <RichTextEditor
                        initialContent="Digital Infrastructure Enhancement"
                        sectionId="digital-infrastructure-title"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="HIGH PRIORITY" />
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <RichTextEditor
                      initialContent="Data quality and measurement capabilities require immediate attention to support strategic decision-making. Implementation of proper analytics filtering must address current 20-25% bot traffic affecting reporting accuracy."
                      sectionId="digital-infrastructure-p1"
                      className="!p-0"
                    />
                    <RichTextEditor
                      initialContent="Current marketing automation platform (Pardot) requires evaluation for potential replacement. Begin preliminary vendor assessment while establishing enhanced tracking protocols across digital properties to ensure accurate performance measurement."
                      sectionId="digital-infrastructure-p2"
                      className="!p-0"
                    />
                  </div>
                </div>

                {/* Brand Architecture Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-6 w-6 text-blue-600" />
                      <RichTextEditor
                        initialContent="Brand Architecture Optimization"
                        sectionId="brand-architecture-title"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="HIGH PRIORITY" />
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <RichTextEditor
                      initialContent="Current brand structure presents opportunities for enhanced market positioning and operational efficiency. Evaluate potential consolidation of Mondo and Sellutions to strengthen premium positioning while optimizing resources."
                      sectionId="brand-architecture-p1"
                      className="!p-0"
                    />
                    <RichTextEditor
                      initialContent="Develop clear differentiation strategy between Econoco and F&D to reduce channel overlap while maintaining market coverage. Integration with trade show presence and digital activation strategies should inform brand architecture decisions."
                      sectionId="brand-architecture-p2"
                      className="!p-0"
                    />
                  </div>
                </div>

                {/* Organizational Capability Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      <RichTextEditor
                        initialContent="Organizational Capability Development"
                        sectionId="org-capability-title"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="HIGH PRIORITY" />
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <RichTextEditor
                      initialContent="Integration of trade show marketing (23 shows planned for 2025) with digital capabilities presents significant opportunity. Establish systematic processes for:"
                      sectionId="org-capability-p1"
                      className="!p-0"
                    />
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <ul className="space-y-2">
                        {[
                          'Pre-show digital promotion and engagement',
                          'Content creation and distribution workflows',
                          'Lead capture and digital nurture programs',
                          'Social media coordination and content strategy',
                          'Cross-channel performance measurement'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600" />
                            <RichTextEditor
                              initialContent={item}
                              sectionId={`org-capability-list-item-${index}`}
                              className="!p-0 flex-1"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <RichTextEditor
                      initialContent="Document clear ownership of digital initiatives across revenue verticals while developing resource allocation framework that balances ongoing operations with intensive trade show support requirements."
                      sectionId="org-capability-p2"
                      className="!p-0"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>

      {renderTabContent()}
    </div>
  );
};

export const navigationMetadata = {
  title: 'Key Recommendations',
  icon: AlertCircle,
  order: 2
};

export { KeyRecommendations as default };