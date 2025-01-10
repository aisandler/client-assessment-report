import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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

// Add interface for navigation items
interface NavigationItem {
  title: string;
  id: string;
  children?: NavigationItem[];
}

// Start with simplified navigation
const navigation: NavigationItem[] = [
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
      { title: "Service Delivery Overview", id: "service-delivery" },
      { title: "Service Delivery Detail", id: "service-delivery-detail" },
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
      { title: "Sales Overview", id: "sales-overview" },
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

  const flattenNavigation = useCallback(() => {
    return navigation.flatMap(section => 
      section.children?.flatMap(item => {
        if (item.children && item.children.length > 0) {
          return [item, ...item.children];
        }
        return item;
      }) || []
    );
  }, []);

  const findCurrentIndex = useCallback(() => {
    const flatNav = flattenNavigation();
    return flatNav.findIndex(item => item.id === activeTab);
  }, [activeTab, flattenNavigation]);

  const navigatePages = useCallback((direction: 'prev' | 'next') => {
    const flatNav = flattenNavigation();
    const currentIndex = findCurrentIndex();
    const newIndex = direction === 'next' 
      ? Math.min(currentIndex + 1, flatNav.length - 1)
      : Math.max(currentIndex - 1, 0);
    
    if (flatNav[newIndex]) {
      handleTabChange(flatNav[newIndex].id);
    }
  }, [findCurrentIndex, flattenNavigation]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          navigatePages('next');
          break;
        case 'ArrowLeft':
          navigatePages('prev');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigatePages]);

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
        console.log('Rendering PerformanceAnalysis');
        return <PerformanceAnalysis activeTab={activeTab} onTabChange={handleTabChange} showNavigation={true} />;
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

  const getCurrentPath = () => {
    // Reset path for each calculation
    const path: { title: string; id: string }[] = [];
    
    // Find the current section and item
    for (const section of navigation) {
      const currentItem = section.children?.find(item => item.id === activeTab);
      
      if (currentItem) {
        // We found the matching item, add both section and item to path
        path.push({ title: section.title, id: section.id });
        path.push({ title: currentItem.title, id: currentItem.id });
        break; // Exit loop once we've found our path
      }
    }

    return path;
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
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

        <div className="flex-1 overflow-auto relative">
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b z-10">
            <div className="px-6 py-3 flex items-center gap-2 text-sm">
              {getCurrentPath().map((item, index) => (
                <React.Fragment key={item.id}>
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                  <span className={
                    index === getCurrentPath().length - 1 
                      ? "font-medium text-gray-900"
                      : "text-gray-500"
                  }>
                    {item.title}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="p-6">
            {renderContent()}
          </div>
          
          {/* Navigation buttons */}
          <div className="fixed bottom-8 right-8 flex gap-2">
            <button
              onClick={() => navigatePages('prev')}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              disabled={findCurrentIndex() === 0}
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => navigatePages('next')}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              disabled={findCurrentIndex() === navigation.flatMap(s => s.children).length - 1}
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;