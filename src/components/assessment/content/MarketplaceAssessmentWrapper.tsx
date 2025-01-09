import React, { useState } from 'react';
import MarketplaceInsight from './marketplace-insight';
import MarketplaceComponents from './marketplace-components';
import MarketplaceImplementationRoadmap from './marketplace-implementation-roadmap';

const MarketplaceAssessmentWrapper = () => {
  const [currentTab, setCurrentTab] = useState('marketplace-overview');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <div>
        {currentTab === 'marketplace-overview' && <MarketplaceInsight />}
        {currentTab === 'marketplace-components' && (
          <MarketplaceComponents 
            activeTab={currentTab}
            onTabChange={handleTabChange}
            showNavigation={true}
          />
        )}
        {currentTab === 'marketplace-implementation-roadmap' && (
          <MarketplaceImplementationRoadmap 
            activeTab={currentTab}
            onTabChange={handleTabChange}
            showNavigation={true}
          />
        )}
      </div>
    </div>
  );
};

export default MarketplaceAssessmentWrapper; 