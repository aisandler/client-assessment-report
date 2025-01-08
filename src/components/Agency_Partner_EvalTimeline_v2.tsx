import React from 'react';

const AcceleratedTimeline = () => {
  return (
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl mb-6">Partner Evaluation Timeline</h2>
      
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-blue-600" style={{ width: '25%' }}></div>
          </div>
          
          <div className="pt-8 grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="font-semibold">Early January 2025</div>
              <div className="bg-gray-50 p-3 rounded">
                <p>Current State Documentation</p>
                <p className="text-sm text-gray-600 mt-1">AWG business reviews and service assessment completion</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-semibold">Late January 2025</div>
              <div className="bg-gray-50 p-3 rounded">
                <p>Partner Requirements Definition</p>
                <p className="text-sm text-gray-600 mt-1">Service specifications and evaluation criteria</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-semibold">February 2025</div>
              <div className="bg-gray-50 p-3 rounded">
                <p>Partner Selection Process</p>
                <p className="text-sm text-gray-600 mt-1">Agency evaluation and service alignment</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-semibold">March 2025</div>
              <div className="bg-gray-50 p-3 rounded">
                <p>Transition Execution</p>
                <p className="text-sm text-gray-600 mt-1">Service migration and performance validation</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Critical Path Considerations</h4>
            <p>This accelerated timeline prioritizes swift execution while maintaining thorough evaluation and careful service transition. Each checkpoint includes specific deliverables and approval gates to ensure successful progression through the process. The technical development relationship will remain stable throughout this transition period to protect ongoing platform initiatives.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceleratedTimeline;