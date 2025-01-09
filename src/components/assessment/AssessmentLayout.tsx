import React, { useState, useEffect } from 'react';
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
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import SalesOverview from './content/sales-overview';
import SalesEnablement from './content/sales-enablement';
import SalesImplementationRoadmap from './content/sales-implementation-roadmap';
import CriticalFindings from './content/CriticalFindings';

// Start with simplified navigation
const navigation = [
  {
    title: "Executive Summary",
    id: "executive-summary",
    children: [
      { title: "Overview", id: "overview" },
      { title: "Project Snapshot", id: "project-snapshot" },
      { title: "Success Criteria", id: "success-criteria" },
      { title: "Critical Findings", id: "critical-findings" },
      { title: "Key Recommendations", id: "key-recommendations" }
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
  },
  {
    title: "Sales Assessment",
    id: "sales-assessment",
    children: [
      { title: "Overview", id: "sales-overview" },
      { title: "Sales Enablement", id: "sales-enablement" },
      { title: "Implementation Roadmap", id: "sales-implementation-roadmap" }
    ]
  }
];

const AssessmentLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'executive-summary': true,
    'internal-assessment': true,
    'agency-assessment': true,
    'marketplace-assessment': true,
    'sales-assessment': true
  });
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Get the content area element
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
      contentArea.scrollTop = 0;
    }
  }, [activeTab]); // This will run whenever activeTab changes

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSectionClick = (section: any) => {
    // Check if section is currently collapsed
    const isCollapsed = !expandedSections[section.id];
    
    // Only navigate if we're expanding a collapsed section
    if (isCollapsed) {
      // Add null check for children array
      const firstChildId = section.children?.[0]?.id;
      if (firstChildId) {
        handleTabChange(firstChildId);
      }
    }
    
    // Toggle section expansion
    setExpandedSections(prev => ({
      ...prev,
      [section.id]: !prev[section.id]
    }));
  };

  const renderContent = () => {
    console.log('Current activeSection:', activeTab);
    switch (activeTab) {
      case 'overview':
      case 'project-snapshot':
      case 'success-criteria':
        return <ExecutiveSummary activeTab={activeTab} onTabChange={handleTabChange} />;
      case 'critical-findings':
        return <CriticalFindings activeTab={activeTab} onTabChange={handleTabChange} />;
      case 'key-recommendations':
        return <KeyRecommendations activeTab={activeTab} onTabChange={handleTabChange} />;
      case 'internal':
        return <InternalAssessment />;
      case 'internal-implementation-roadmap':
        console.log('About to render InternalImplementationRoadmap');
        return <InternalImplementationRoadmap />;
      case 'service-delivery':
        return <ServiceDeliveryAssessment />;
      case 'service-delivery-detail':
        return <ServiceAnalysisDetail />;
      case 'performance':
        return <PerformanceAnalysis />;
      case 'communication':
        console.log('Rendering CommunicationAssessment');
        return <CommunicationAssessment />;
      case 'marketplace-overview':
        return <MarketplaceInsight />;
      case 'marketplace-components':
        return (
          <MarketplaceComponents 
            activeTab={activeTab}
            onTabChange={handleTabChange}
            showNavigation={true}
          />
        );
      case 'marketplace-implementation-roadmap':
        return (
          <MarketplaceImplementationRoadmap 
            activeTab={activeTab}
            onTabChange={handleTabChange}
            showNavigation={true}
          />
        );
      case 'agency-implementation-roadmap':
        return <AgencyImplementationRoadmap />;
      case 'sales-overview':
        return <SalesOverview activeTab={activeTab} onTabChange={handleTabChange} showNavigation={true} />;
      case 'sales-enablement':
        return <SalesEnablement activeTab={activeTab} onTabChange={handleTabChange} showNavigation={true} />;
      case 'sales-implementation-roadmap':
        return <SalesImplementationRoadmap activeTab={activeTab} onTabChange={handleTabChange} showNavigation={true} />;
      default:
        console.log('Hit default case with section:', activeTab);
        return null;
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isSidebarOpen ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
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

      <div className="flex flex-1 overflow-hidden">
        <div 
          className={`
            transition-all duration-300 ease-in-out
            border-r bg-gray-50 overflow-y-auto
            ${isSidebarOpen ? 'w-64' : 'w-0'}
          `}
        >
          {navigation.map((section) => (
            <div key={section.id} className="py-2">
              <button
                onClick={() => handleSectionClick(section)}
                className={`w-full px-4 py-2 flex items-center justify-between hover:${
                  section.children?.some(child => 
                    child.id === activeTab || 
                    child.children?.some(subChild => subChild.id === activeTab)
                  ) ?? false ? 'bg-gray-100' : ''
                }`}
              >
                <span className="font-medium text-gray-700">{section.title}</span>
                {expandedSections[section.id] ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
              {expandedSections[section.id] && (
                <div className="ml-4">
                  {section.children?.map((item) => (
                    <div key={item.id}>
                      {item.children ? (
                        <>
                          <button
                            onClick={() => handleTabChange(item.id)}
                            className={`w-full text-left px-4 py-2 text-sm ${
                              activeTab === item.id
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
                                onClick={() => handleTabChange(subItem.id)}
                                className={`w-full text-left px-4 py-2 text-sm ${
                                  activeTab === subItem.id
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
                          onClick={() => handleTabChange(item.id)}
                          className={`w-full text-left px-4 py-2 text-sm ${
                            activeTab === item.id
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

        <div className="flex-1 overflow-auto p-6 content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;