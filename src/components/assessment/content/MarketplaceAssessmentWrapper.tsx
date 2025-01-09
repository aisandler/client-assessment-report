import React, { useState } from 'react';
import MarketplaceInsight from './marketplace-insight';
import MarketplaceComponents from './marketplace-components';
import MarketplaceImplementationRoadmap from './marketplace-implementation-roadmap';

interface MarketplaceAssessmentWrapperProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const MarketplaceAssessmentWrapper: React.FC<MarketplaceAssessmentWrapperProps> = ({ 
  activeTab = 'marketplace-overview',
  onTabChange 
}) => {
  const tabs = [
    { id: 'marketplace-overview', title: 'Overview' },
    { id: 'marketplace-components', title: 'Components' },
    { id: 'marketplace-implementation-roadmap', title: 'Implementation Roadmap' }
  ];

  const [currentTab, setCurrentTab] = useState(activeTab);

  React.useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

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

      <div>
        {currentTab === 'marketplace-overview' && <MarketplaceInsight />}
        {currentTab === 'marketplace-components' && <MarketplaceComponents />}
        {currentTab === 'marketplace-implementation-roadmap' && <MarketplaceImplementationRoadmap />}
      </div>
    </div>
  );
};

export default MarketplaceAssessmentWrapper; 