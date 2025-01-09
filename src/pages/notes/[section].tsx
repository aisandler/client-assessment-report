import { NextPage } from 'next';
import { useRouter } from 'next/router';
import NotesPage from '@/components/notes/NotesPage';
import { ChevronLeft } from 'lucide-react';

const VALID_SECTIONS = [
  'service-analysis',
  'performance',
  'communication',
  'marketplace',
  'implementation'
];

const SectionNotesPage: NextPage = () => {
  const router = useRouter();
  const { section } = router.query;

  // Handle invalid sections
  if (typeof section !== 'string' || !VALID_SECTIONS.includes(section)) {
    return (
      <div className="p-6">
        <div className="text-red-500">Invalid section</div>
        <button 
          onClick={() => router.push('/notes')}
          className="text-blue-500 hover:underline mt-2"
        >
          Return to Notes Index
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="border-b p-4">
        <button
          onClick={() => router.push('/notes')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Sections
        </button>
      </div>
      <NotesPage sectionId={section} />
    </div>
  );
};

export default SectionNotesPage; 