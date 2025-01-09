import React, { useState } from 'react';
import AssessmentOverview from './AssessmentOverview';
import CriticalFindings from './CriticalFindings';
import ProjectSummaryPage from './project-summary';
import KeyRecommendations from './key-recommendations';

interface ExecutiveSummaryProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ 
  activeTab = 'overview',
  onTabChange 
}) => {
  const tabs = [
    { id: 'overview', title: 'Assessment Overview' },
    { id: 'project-summary', title: 'Project Summary' },
    { id: 'findings', title: 'Critical Findings' },
    { id: 'recommendations', title: 'Key Recommendations' }
  ];

  const [currentTab, setCurrentTab] = useState(activeTab);

  // Update currentTab when activeTab prop changes
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
        {currentTab === 'overview' && <AssessmentOverview />}
        {currentTab === 'project-summary' && <ProjectSummaryPage />}
        {currentTab === 'findings' && <CriticalFindings />}
        {currentTab === 'recommendations' && <KeyRecommendations showNavigation={false} />}
      </div>
    </div>
  );
};

export default ExecutiveSummary; 