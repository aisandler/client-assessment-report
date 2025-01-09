import React, { useState } from 'react';
import ServiceDeliveryAssessment from './service-delivery-assessment';
import ServiceAnalysisDetail from './service-analysis-detail';
import PerformanceAnalysis from './performance-analysis';
import CommunicationAssessment from './communication-assessment';
import AgencyImplementationRoadmap from './agency-implementation-roadmap';

interface AgencyAssessmentWrapperProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const AgencyAssessmentWrapper: React.FC<AgencyAssessmentWrapperProps> = ({ 
  activeTab = 'service-delivery',
  onTabChange 
}) => {
  const tabs = [
    { id: 'service-delivery', title: 'Service Delivery' },
    { id: 'service-delivery-detail', title: 'Service Delivery Detail' },
    { id: 'performance', title: 'Performance Analysis' },
    { id: 'communication', title: 'Communication' },
    { id: 'agency-implementation-roadmap', title: 'Implementation Roadmap' }
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
        {currentTab === 'service-delivery' && <ServiceDeliveryAssessment />}
        {currentTab === 'service-delivery-detail' && <ServiceAnalysisDetail />}
        {currentTab === 'performance' && <PerformanceAnalysis />}
        {currentTab === 'communication' && <CommunicationAssessment />}
        {currentTab === 'agency-implementation-roadmap' && <AgencyImplementationRoadmap />}
      </div>
    </div>
  );
};

export default AgencyAssessmentWrapper; 