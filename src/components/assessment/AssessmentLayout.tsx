import React, { useState } from 'react';
import ExecutiveSummary from './content/ExecutiveSummary';
import KeyRecommendations from './content/key-recommendations';

// Start with simplified navigation
const navigation = [
  {
    title: "Executive Summary",
    id: "executive-summary",
    children: [
      { title: "Assessment Overview", id: "overview" },
      { title: "Critical Findings", id: "findings" },
      { title: "Key Recommendations", id: "recommendations" }
    ]
  }
];

export const AssessmentLayout = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
      case 'findings':
        return <ExecutiveSummary activeTab={activeSection} onTabChange={handleNavClick} />;
      case 'recommendations':
        return <KeyRecommendations activeTab={activeSection} onTabChange={handleNavClick} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src="/econoco-logo.png"
            alt="Econoco"
            className="h-8 w-auto object-contain"
            style={{ maxWidth: '180px' }}
          />
          <h1 className="text-xl font-semibold text-gray-900">
            Digital Marketing Assessment
          </h1>
        </div>
        <div className="text-gray-600 font-medium">
          Sandler Digital Advisory
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Navigation Sidebar */}
        <div className="w-64 border-r bg-gray-50 overflow-y-auto">
          {navigation.map((section) => (
            <div key={section.id} className="py-2">
              <div className="px-4 py-2 font-medium text-gray-700">
                {section.title}
              </div>
              <div className="ml-4">
                {section.children.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;