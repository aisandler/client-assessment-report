import React from 'react';

interface InternalAssessmentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation?: boolean;
}

const InternalAssessment: React.FC<InternalAssessmentProps> = ({
  activeTab,
  onTabChange,
  showNavigation = true
}) => {
  const tabs = [
    { id: 'internal', title: 'Internal Assessment' },
    { id: 'internal-implementation-roadmap', title: 'Implementation Roadmap' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'internal':
        return <InternalAssessmentContent />;
      case 'internal-implementation-roadmap':
        return <InternalImplementationRoadmap activeTab={activeTab} onTabChange={onTabChange} showNavigation={false} />;
      default:
        return <InternalAssessmentContent />;
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

export default InternalAssessment; 