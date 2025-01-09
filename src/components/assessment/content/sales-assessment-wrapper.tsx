import React, { useState } from 'react';
import SalesOverview from './sales-overview';
import SalesEnablement from './sales-enablement';
import SalesImplementationRoadmap from './sales-implementation-roadmap';

const SalesAssessmentWrapper = () => {
  const [currentTab, setCurrentTab] = useState('sales-overview');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <div>
        {currentTab === 'sales-overview' && <SalesOverview 
          activeTab={currentTab}
          onTabChange={handleTabChange}
          showNavigation={true}
        />}
        {currentTab === 'sales-enablement' && <SalesEnablement 
          activeTab={currentTab}
          onTabChange={handleTabChange}
          showNavigation={true}
        />}
        {currentTab === 'sales-implementation-roadmap' && <SalesImplementationRoadmap 
          activeTab={currentTab}
          onTabChange={handleTabChange}
          showNavigation={true}
        />}
      </div>
    </div>
  );
};

export default SalesAssessmentWrapper; 