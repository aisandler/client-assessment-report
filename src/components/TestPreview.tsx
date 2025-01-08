import React, { Suspense } from 'react';

const TestPreview = () => {
  // Dynamically import any component named "test"
  const TestComponent = React.lazy(() => import('./test'));

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Component Preview</h2>
        
        <div className="bg-white rounded-lg shadow">
          <Suspense fallback={<div className="p-8">Loading component...</div>}>
            <TestComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default TestPreview; 