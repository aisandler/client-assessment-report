import React from 'react';
import MarketplaceInsightDashboard from '../marketplace-insight';
import MarketplaceComponents from '../marketplace-components';
import MarketplaceImplementationRoadmap from '../marketplace-implementation-roadmap';

interface MarketplaceAssessmentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation?: boolean;
}

const MarketplaceAssessment: React.FC<MarketplaceAssessmentProps> = ({
  activeTab,
  onTabChange,
  showNavigation = true
}) => {
  const tabs = [
    { id: 'marketplace', title: 'Overview' },
    { id: 'marketplace-components', title: 'Marketplace Components' },
    { id: 'marketplace-implementation-roadmap', title: 'Implementation Roadmap' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'marketplace':
        return <MarketplaceInsightDashboard />;
      case 'marketplace-components':
        return <MarketplaceComponents activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
      case 'marketplace-implementation-roadmap':
        return <MarketplaceImplementationRoadmap activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
      default:
        return <MarketplaceInsightDashboard />;
    }
  };

  return (
    <div className="space-y-6">
      {showNavigation && (
        <div className="border-b">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  border-b-2 py-4 px-1 text-sm font-medium
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                `}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>
      )}
      {renderContent()}
    </div>
  );
};

export default MarketplaceAssessment; 