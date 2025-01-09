import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const ASSESSMENT_SECTIONS = [
  {
    id: 'service-analysis',
    label: 'Service Analysis',
    description: 'Notes and feedback on service delivery assessment'
  },
  {
    id: 'performance',
    label: 'Performance Analysis',
    description: 'Campaign and ROI analysis notes'
  },
  {
    id: 'communication',
    label: 'Communication Assessment',
    description: 'Client communication and reporting notes'
  },
  {
    id: 'marketplace',
    label: 'Marketplace Assessment',
    description: 'Marketplace strategy and implementation notes'
  },
  {
    id: 'implementation',
    label: 'Implementation Roadmap',
    description: 'Action items and implementation tracking'
  }
];

const NotesIndexPage: NextPage = () => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Assessment Notes & Feedback</h1>
      <div className="grid gap-4">
        {ASSESSMENT_SECTIONS.map((section) => (
          <Card 
            key={section.id}
            className="hover:border-blue-200 cursor-pointer transition-colors"
            onClick={() => router.push(`/notes/${section.id}`)}
          >
            <CardHeader>
              <CardTitle>{section.label}</CardTitle>
              <p className="text-sm text-gray-500 mt-1">
                {section.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotesIndexPage; 