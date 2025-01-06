import { useState } from 'react';

export default function AssessmentViewer() {
  const [selectedSection, setSelectedSection] = useState('overview');

  const sections = {
    overview: {
      title: 'Overview',
      content: 'Strategic Assessment Overview'
    },
    coreLayout: {
      title: 'Core Layout Components',
      content: 'Core layout components including PageLayout and navigation structures'
    },
    navigation: {
      title: 'Navigation Components',
      content: 'Navigation system components and implementation'
    },
    assessment: {
      title: 'Assessment Sections',
      content: 'Major assessment section components and structure'
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <aside className="fixed w-64 h-full bg-gray-50 border-r border-gray-200 p-6">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">Strategic Assessment</h1>
          <p className="mt-2 text-sm text-gray-600">Digital Marketing Analysis</p>
        </div>
        <nav className="space-y-2">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setSelectedSection(key)}
              className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                selectedSection === key
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>
      <main className="ml-64 flex-1 min-h-screen">
        <div className="max-w-4xl mx-auto p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {sections[selectedSection].title}
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700">
              {sections[selectedSection].content}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
