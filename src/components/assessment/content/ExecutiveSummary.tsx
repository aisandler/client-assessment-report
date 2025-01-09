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
      {renderContent()}
    </div>
  );
};

export default ExecutiveSummary; 