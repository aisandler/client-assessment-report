import React from 'react';
import ServiceDeliveryAssessment from '../service-delivery-assessment';
import ServiceAnalysisDetail from '../service-analysis-detail';
import PerformanceAnalysis from '../performance-analysis';
import CommunicationAssessment from '../communication-assessment';
import AgencyImplementationRoadmap from '../agency-implementation-roadmap';

interface AgencyAssessmentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation?: boolean;
}

const AgencyAssessment: React.FC<AgencyAssessmentProps> = ({
  activeTab,
  onTabChange,
  showNavigation = true
}) => {
  const tabs = [
    { id: 'service-delivery', title: 'Service Delivery' },
    { id: 'service-delivery-detail', title: 'Service Delivery Detail' },
    { id: 'performance', title: 'Performance Analysis' },
    { id: 'communication', title: 'Communication' },
    { id: 'agency-implementation-roadmap', title: 'Implementation Roadmap' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'service-delivery':
        return <ServiceDeliveryAssessment activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
      case 'service-delivery-detail':
        return <ServiceAnalysisDetail activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
      case 'performance':
        return <PerformanceAnalysis activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
      case 'communication':
        return <CommunicationAssessment activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
      case 'agency-implementation-roadmap':
        return <AgencyImplementationRoadmap activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
      default:
        return <ServiceDeliveryAssessment activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
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

export default AgencyAssessment; 