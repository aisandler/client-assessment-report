import React, { useState } from 'react';
import AgencyImplementationRoadmap from './content/agency-implementation-roadmap';
import ExecutiveSummary from './content/ExecutiveSummary';
import KeyRecommendations from './content/key-recommendations';
import ServiceDeliveryAssessment from './content/service-delivery-assessment';
import ServiceAnalysisDetail from './content/service-analysis-detail';
import PerformanceAnalysis from './content/performance-analysis';
import CommunicationAssessment from './content/communication-assessment';
import InternalAssessment from './content/internal-assessment';
import Image from 'next/image';
import MarketplaceInsight from './content/marketplace-insight';
import MarketplaceComponents from './content/marketplace-components';
import MarketplaceImplementationRoadmap from './content/marketplace-implementation-roadmap';
import InternalImplementationRoadmap from './content/internal-implementation-roadmap';
import ProjectSummaryPage from './content/project-summary';
import InternalAssessmentWrapper from './content/InternalAssessmentWrapper';
import AgencyAssessmentWrapper from './content/AgencyAssessmentWrapper';
import MarketplaceAssessmentWrapper from './content/MarketplaceAssessmentWrapper';
import { ChevronDown, ChevronRight } from 'lucide-react';
import PrintButton from '@/components/common/PrintButton';

// Start with simplified navigation
const navigation = [
  {
    title: "Executive Summary",
    id: "executive-summary",
    children: [
      { title: "Assessment Overview", id: "overview" },
      { title: "Project Summary", id: "project-summary" },
      { title: "Critical Findings", id: "findings" },
      { title: "Key Recommendations", id: "recommendations" }
    ]
  },
  {
    title: "Internal Assessment",
    id: "internal-assessment",
    children: [
      { title: "Internal Assessment", id: "internal" },
      { title: "Implementation Roadmap", id: "internal-implementation-roadmap" }
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
      { title: "Communication", id: "communication" },
      { title: "Implementation Roadmap", id: "agency-implementation-roadmap" }
    ]
  },
  {
    title: "Marketplace Assessment",
    id: "marketplace-assessment",
    children: [
      { title: "Overview", id: "marketplace-overview" },
      { title: "Components", id: "marketplace-components" },
      { title: "Implementation Roadmap", id: "marketplace-implementation-roadmap" }
    ]
  }
];

const AssessmentLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'executive-summary',
    'internal-assessment',
    'agency-assessment',
    'marketplace-assessment'
  ]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleParentClick = (section: any) => {
    // Toggle section expansion
    toggleSection(section.id);
    
    // Navigate to first child section
    if (section.children && section.children.length > 0) {
      const firstChild = section.children[0];
      // If the first child has children, navigate to its first child
      if (firstChild.children && firstChild.children.length > 0) {
        handleNavClick(firstChild.children[0].id);
      } else {
        handleNavClick(firstChild.id);
      }
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderContent = () => {
    console.log('Current activeSection:', activeSection);
    switch (activeSection) {
      case 'overview':
      case 'project-summary':
      case 'findings':
      case 'recommendations':
        return <ExecutiveSummary 
          activeTab={activeSection} 
          onTabChange={handleNavClick} 
        />;
      case 'internal':
      case 'internal-implementation-roadmap':
        return <InternalAssessmentWrapper 
          activeTab={activeSection}
          onTabChange={handleNavClick}
        />;
      case 'service-delivery':
      case 'service-delivery-detail':
      case 'performance':
      case 'communication':
      case 'agency-implementation-roadmap':
        return <AgencyAssessmentWrapper 
          activeTab={activeSection}
          onTabChange={handleNavClick}
        />;
      case 'marketplace-overview':
      case 'marketplace-components':
      case 'marketplace-implementation-roadmap':
        return <MarketplaceAssessmentWrapper 
          activeTab={activeSection}
          onTabChange={handleNavClick}
        />;
      default:
        console.log('Hit default case with section:', activeSection);
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b no-print">
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
        <div className="flex items-center gap-4">
          <PrintButton />
          <div className="text-gray-600 font-medium">
            Sandler Digital Advisory
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Navigation Sidebar */}
        <div className="w-64 border-r bg-gray-50 overflow-y-auto no-print">
          {navigation.map((section) => (
            <div key={section.id} className="py-2">
              <button
                onClick={() => handleParentClick(section)}
                className="w-full px-4 py-2 flex items-center justify-between text-left hover:bg-gray-100"
              >
                <span className="font-medium text-gray-700">{section.title}</span>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
              
              {expandedSections.includes(section.id) && (
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
              )}
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div 
          id="printable-content" 
          className="flex-1 overflow-auto p-6"
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;