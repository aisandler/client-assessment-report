import React, { useState } from 'react';
import InternalAssessment from './internal-assessment';
import InternalImplementationRoadmap from './internal-implementation-roadmap';

interface InternalAssessmentWrapperProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const InternalAssessmentWrapper: React.FC<InternalAssessmentWrapperProps> = ({ 
  activeTab = 'internal',
  onTabChange 
}) => {
  const tabs = [
    { id: 'internal', title: 'Internal Assessment' },
    { id: 'internal-implementation-roadmap', title: 'Implementation Roadmap' }
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
        {currentTab === 'internal' && <InternalAssessment />}
        {currentTab === 'internal-implementation-roadmap' && <InternalImplementationRoadmap />}
      </div>
    </div>
  );
};

export default InternalAssessmentWrapper; 