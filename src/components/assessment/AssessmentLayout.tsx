import React, { useState } from 'react';
import ExecutiveSummary from './content/ExecutiveSummary';
import KeyRecommendations from './content/key-recommendations';
import ServiceDeliveryAssessment from './content/service-delivery-assessment';
import ServiceAnalysisDetail from './content/service-analysis-detail';
import PerformanceAnalysis from './content/performance-analysis';
import CommunicationAssessment from './content/communication-assessment';
import InternalAssessment from './content/internal-assessment';
import Image from 'next/image';

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
  },
  {
    title: "Internal Assessment",
    id: "internal-assessment",
    children: [
      { title: "Internal Assessment", id: "internal" }
    ]
  },
  {
    title: "Agency Assessment",
    id: "agency-assessment",
    children: [
      { 
        title: "Service Delivery", 
        id: "service-delivery",
        children: [
          { title: "Overview", id: "service-delivery" },
          { title: "Service Delivery Detail", id: "service-delivery-detail" }
        ]
      },
      { title: "Performance Analysis", id: "performance" },
      { title: "Communication", id: "communication" }
    ]
  }
];

export const AssessmentLayout = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const renderContent = () => {
    console.log('Current activeSection:', activeSection);
    switch (activeSection) {
      case 'overview':
      case 'findings':
        return <ExecutiveSummary activeTab={activeSection} onTabChange={handleNavClick} />;
      case 'recommendations':
        return <KeyRecommendations activeTab={activeSection} onTabChange={handleNavClick} />;
      case 'internal':
        return <InternalAssessment />;
      case 'service-delivery':
        return <ServiceDeliveryAssessment />;
      case 'service-delivery-detail':
        return <ServiceAnalysisDetail />;
      case 'performance':
        return <PerformanceAnalysis />;
      case 'communication':
        console.log('Rendering CommunicationAssessment');
        return <CommunicationAssessment />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <Image
            src="/econoco-logo.png"
            alt="Econoco"
            className="h-8 w-auto object-contain"
            style={{ maxWidth: '180px' }}
            width={180}
            height={80}
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
                  <div key={item.id}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full text-left px-4 py-2 text-sm ${
                            activeSection === item.id
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {item.title}
                        </button>
                        <div className="ml-4">
                          {item.children.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleNavClick(subItem.id)}
                              className={`w-full text-left px-4 py-2 text-sm ${
                                activeSection === subItem.id
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              {subItem.title}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          activeSection === item.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.title}
                      </button>
                    )}
                  </div>
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