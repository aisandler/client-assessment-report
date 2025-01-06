import { useState } from 'react';

export default function AssessmentViewer() {
  const [selectedSection, setSelectedSection] = useState('overview');

  const sections = {
    overview: {
      title: 'Overview',
      content: 'Strategic Assessment Overview'
    },
    coreLayout: {
      title: 'Core Layout',
      content: 'Core layout components including PageLayout and navigation structures'
    },
    navigation: {
      title: 'Navigation',
      content: 'Navigation system components and implementation'
    },
    assessment: {
      title: 'Assessment Sections',
      content: 'Major assessment section components and structure'
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-64 bg-gray-100 p-6">
        <h1 className="text-xl font-bold mb-6">Strategic Assessment</h1>
        <nav>
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setSelectedSection(key)}
              className={`w-full text-left p-2 mb-2 rounded ${
                selectedSection === key
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">
          {sections[selectedSection].title}
        </h2>
        <div className="prose max-w-none">
          {sections[selectedSection].content}
        </div>
      </div>
    </div>
  );
}
