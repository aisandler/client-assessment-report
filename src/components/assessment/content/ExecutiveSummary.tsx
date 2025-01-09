import React from 'react';
import AssessmentOverview from './AssessmentOverview';
import ProjectSnapshot from './ProjectSnapshot';
import CriticalFindings from './CriticalFindings';
import KeyRecommendations from './KeyRecommendations';
import SuccessCriteria from './SuccessCriteria';

interface ExecutiveSummaryProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation?: boolean;
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  activeTab,
  onTabChange,
  showNavigation = true
}) => {
  const tabs = [
    { id: 'overview', title: 'Assessment Overview' },
    { id: 'project-snapshot', title: 'Project Snapshot' },
    { id: 'success-criteria', title: 'Success Criteria' },
    { id: 'findings', title: 'Critical Findings' },
    { id: 'recommendations', title: 'Key Recommendations' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AssessmentOverview />;
      case 'project-snapshot':
        return <ProjectSnapshot />;
      case 'success-criteria':
        return <SuccessCriteria activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
      case 'findings':
        return <CriticalFindings />;
      case 'recommendations':
        return <KeyRecommendations activeTab={activeTab} onTabChange={onTabChange} />;
      default:
        return <AssessmentOverview />;
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

export default ExecutiveSummary; 