import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, DollarSign, BarChart2, Activity } from 'lucide-react';

const ServiceDeliveryAssessment = () => {
  const serviceInvestment = [
    {
      service: 'Media Management',
      currentCost: 93240,
      industryBenchmark: 20325,
      premiumPaid: 72915,
      valueDelivery: 'Basic Service'
    },
    {
      service: 'SEO Services',
      currentCost: 156000,
      industryBenchmark: null,
      premiumPaid: null,
      valueDelivery: 'Maintenance Level'
    },
    {
      service: 'Technical Development',
      currentCost: 84000,
      industryBenchmark: null,
      premiumPaid: null,
      valueDelivery: 'Limited Scope'
    },
    {
      service: 'Additional Services',
      currentCost: 27000,
      industryBenchmark: null,
      premiumPaid: null,
      valueDelivery: 'Basic Execution'
    }
  ];

  const serviceGaps = [
    {
      area: 'Campaign Structure',
      currentDelivery: 'Basic keyword targeting, no audience segmentation',
      industryStandard: 'Advanced audience modeling, strategic segmentation',
      impact: 'Reduced targeting efficiency'
    },
    {
      area: 'Optimization Approach',
      currentDelivery: 'Manual adjustments, reactive changes',
      industryStandard: 'Automated bidding, proactive testing',
      impact: 'Higher cost per acquisition'
    },
    {
      area: 'Strategic Planning',
      currentDelivery: 'Limited to basic maintenance',
      industryStandard: 'Continuous improvement, market adaptation',
      impact: 'Missed growth opportunities'
    }
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="text-red-500 mr-2" />
            Service Delivery Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Our comprehensive assessment of AWG's service delivery reveals a concerning pattern of premium 
              pricing coupled with basic service levels. The agency currently commands fees significantly 
              above industry standards while delivering maintenance-level service across digital marketing 
              and development initiatives.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <DollarSign className="text-blue-600 mr-2" />
              Service Investment Analysis
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Service</th>
                    <th className="px-4 py-3 text-right font-medium text-gray-700">Current Annual Cost</th>
                    <th className="px-4 py-3 text-right font-medium text-gray-700">Industry Benchmark</th>
                    <th className="px-4 py-3 text-right font-medium text-gray-700">Premium Paid</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Value Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {serviceInvestment.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{item.service}</td>
                      <td className="px-4 py-3 text-right text-red-600 font-medium">
                        ${item.currentCost.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {item.industryBenchmark 
                          ? `$${item.industryBenchmark.toLocaleString()}` 
                          : 'Performance-based'}
                      </td>
                      <td className="px-4 py-3 text-right text-red-600">
                        {item.premiumPaid 
                          ? `+$${item.premiumPaid.toLocaleString()}` 
                          : 'Not Comparable'}
                      </td>
                      <td className="px-4 py-3 text-yellow-600">{item.valueDelivery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Activity className="text-blue-600 mr-2" />
              Media Management Quality
            </h3>
            <p className="text-gray-600 mb-6">
              The current approach to media management exemplifies the broader service delivery challenges. 
              Despite commanding fees of 57% compared to an industry standard of 12.5-20%, AWG's execution 
              remains notably basic across several critical dimensions:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-6">
                {serviceGaps.map((gap, index) => (
                  <div key={index} className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="font-medium text-gray-900 mb-1">{gap.area}</div>
                      <div className="text-red-600 text-sm">{gap.currentDelivery}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Industry Standard</div>
                      <div className="text-green-600 text-sm">{gap.industryStandard}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Business Impact</div>
                      <div className="text-yellow-600 text-sm">{gap.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
              <BarChart2 className="text-blue-600 mr-2" />
              Key Findings
            </h4>
            <ul className="space-y-2 text-blue-800">
              <li>Media management fees exceed industry standards by up to 400%</li>
              <li>Limited strategic value from $360,240 annual investment</li>
              <li>Basic service delivery despite premium pricing structure</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDeliveryAssessment;