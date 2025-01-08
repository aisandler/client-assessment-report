import React from 'react';

const TestComponent = () => {
  return (
    <div className="w-full space-y-8">
      {/* Overview Slide */}
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl mb-6">Agency Partner Assessment - Overview</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="text-xl text-blue-700 mb-4">Current Partnership State</h3>
            <p className="mb-3">AWG&apos;s 12-year relationship encompasses management of five brand websites with a total annual investment of $360,240. The partnership delivers basic advertising services and website maintenance, operating primarily in a maintenance capacity rather than driving strategic growth.</p>
            
            <div className="mt-4 p-3 bg-white rounded">
              <h4 className="font-semibold mb-2">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Annual Investment</p>
                  <p className="text-lg font-semibold">$360,240</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Brands Managed</p>
                  <p className="text-lg font-semibold">5</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl text-blue-700 mb-4">Critical Issues</h3>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <p className="font-semibold text-red-600">Cost Efficiency</p>
              <p>Media management fees at 57% vs industry standard 12.5-20%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <p className="font-semibold text-red-600">Data Quality</p>
              <p>20-25% invalid traffic compromising strategic decisions</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-red-600">Strategic Value</p>
              <p>Limited proactive improvements despite premium pricing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Structure Slide */}
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl mb-6">Cost Structure Analysis</h2>
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="p-3 text-left">Service Area</th>
                  <th className="p-3 text-right">Current Cost</th>
                  <th className="p-3 text-right">Market Rate</th>
                  <th className="p-3 text-right">Potential Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Paid Media Management</td>
                  <td className="p-3 text-right">$93,240</td>
                  <td className="p-3 text-right">$32,520</td>
                  <td className="p-3 text-right text-green-600">$60,720</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">SEO Services</td>
                  <td className="p-3 text-right">$156,000</td>
                  <td className="p-3 text-right">$72,000</td>
                  <td className="p-3 text-right text-green-600">$84,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Website Maintenance</td>
                  <td className="p-3 text-right">$84,000</td>
                  <td className="p-3 text-right">$84,000</td>
                  <td className="p-3 text-right">-</td>
                </tr>
              </tbody>
              <tfoot className="bg-gray-50 font-semibold">
                <tr>
                  <td className="p-3">Total Potential Annual Savings</td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3 text-right text-green-600">$144,720</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm">Note: Website maintenance costs align with market rates given technical complexity and integration requirements. Primary savings opportunities exist in media management and SEO services.</p>
          </div>
        </div>
      </div>

      {/* Performance Analysis */}
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl mb-6">Performance Analysis</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-blue-700 mb-4">Campaign Effectiveness</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-3"><span className="font-semibold">Weekend Campaign Gaps:</span> 28.5% of potential advertising time unused</p>
                <p className="mb-3"><span className="font-semibold">Branded Search:</span> Unnecessary spend on terms where organic rankings are strong</p>
                <p><span className="font-semibold">Audience Targeting:</span> No differentiation between B2B and B2C approaches</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl text-blue-700 mb-4">Strategic Execution</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-3"><span className="font-semibold">Analytics Implementation:</span> Basic setup missing critical tracking elements</p>
                <p className="mb-3"><span className="font-semibold">Reporting Quality:</span> Limited insights beyond basic metrics</p>
                <p><span className="font-semibold">Optimization:</span> Reactive approach to campaign management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
