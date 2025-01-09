import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RichTextEditor } from '@/components/common/RichTextEditor';

interface KeyRecommendationsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation?: boolean;
}

const KeyRecommendations: React.FC<KeyRecommendationsProps> = ({
  activeTab,
  onTabChange,
  showNavigation = true
}) => {
  const tabs = [
    { id: 'overview', title: 'Assessment Overview' },
    { id: 'project-snapshot', title: 'Project Snapshot' },
    { id: 'success-criteria', title: 'Success Criteria' },
    { id: 'findings', title: 'Critical Findings' },
    { id: 'recommendations', title: 'Key Recommendations' }
  ];

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
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
          <CardTitle>
            <div className="relative group">
              <RichTextEditor
                initialContent="Key Recommendations"
                className="text-2xl font-semibold"
                sectionId="recommendations-title"
              />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="relative group">
              <RichTextEditor
                initialContent={`
                  <p>Based on our comprehensive assessment, we've identified several key recommendations to enhance digital marketing effectiveness:</p>
                  <div class="mt-4 space-y-4">
                    <p>Content in development...</p>
                  </div>
                `}
                className="text-gray-700"
                sectionId="recommendations-content"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KeyRecommendations;