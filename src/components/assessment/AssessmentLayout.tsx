import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const NavigationItem = ({ item, level = 0, activeSection, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeSection === item.id;
  
  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
    onSelect(item.id);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className={`w-full text-left flex items-center px-4 py-2 hover:bg-gray-50 transition-colors duration-200
          ${isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}
          ${level > 0 ? 'pl-' + (level * 4 + 4) : ''}`}
      >
        {hasChildren && (
          <span className="mr-2">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
        )}
        <span className="truncate">{item.title}</span>
      </button>
      
      {hasChildren && isExpanded && (
        <div className="mt-1">
          {item.children.map((child) => (
            <NavigationItem
              key={child.id}
              item={child}
              level={level + 1}
              activeSection={activeSection}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Navigation = ({ activeSection, onSectionChange }) => {
  const navigationStructure = [
    {
      id: 'executive-summary',
      title: 'Executive Summary',
      children: [
        { id: 'overview', title: 'Assessment Overview' },
        { id: 'critical-findings', title: 'Critical Findings' },
        { id: 'recommendations', title: 'Key Recommendations' }
      ]
    },
    {
      id: 'current-state',
      title: 'Current State Assessment',
      children: [
        {
          id: 'digital-maturity',
          title: 'Digital Maturity',
          children: [
            { id: 'strategy-maturity', title: 'Strategy & Vision' },
            { id: 'operational-maturity', title: 'Operational Execution' },
            { id: 'technology-maturity', title: 'Technology & Infrastructure' }
          ]
        },
        {
          id: 'agency-assessment',
          title: 'Agency Partnership',
          children: [
            { id: 'technical-context', title: 'Technical Context' },
            { id: 'service-evaluation', title: 'Service Evaluation' },
            { id: 'transition-planning', title: 'Transition Planning' }
          ]
        }
      ]
    }
  ];

  return (
    <nav className="w-64 border-r bg-white overflow-y-auto">
      <div className="sticky top-0 bg-white border-b px-4 py-3">
        <h2 className="font-semibold text-gray-900">Digital Marketing Assessment</h2>
      </div>
      <div className="py-2">
        {navigationStructure.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            activeSection={activeSection}
            onSelect={onSectionChange}
          />
        ))}
      </div>
    </nav>
  );
};

const AssessmentLayout = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('executive-summary');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuVisible(!isMenuVisible)}
              className="p-2 hover:bg-gray-100 rounded-lg mr-2"
            >
              {isMenuVisible ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              Econoco Digital Marketing Assessment
            </h1>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-56px)]">
        {isMenuVisible && (
          <aside className="w-64 flex-shrink-0">
            <Navigation
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </aside>
        )}
        
        <main className={`flex-1 transition-all duration-200 ${
          isMenuVisible ? 'ml-64' : 'ml-0'
        }`}>
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Card className="p-6">
              Content for section: {activeSection}
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AssessmentLayout;