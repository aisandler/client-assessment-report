import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PieChart, BarChart2, AlertTriangle, Search, Calendar, TrendingDown } from 'lucide-react';

const PerformanceAnalysis = () => {
  const campaignPerformance = [
    {
      channel: 'Branded Search',
      icon: Search,
      currentApproach: 'Aggressive bidding on brand terms',
      performanceImpact: '32x ROAS indicating organic cannibalization',
      revenueImplication: 'Estimated $72,000 annual inefficient spend',
      severity: 'critical'
    },
    {
      channel: 'Non-Brand Search',
      icon: Search,
      currentApproach: 'Basic keyword targeting',
      performanceImpact: 'Limited new customer acquisition',
      revenueImplication: 'Reduced market growth',
      severity: 'warning'
    },
    {
      channel: 'Weekend Campaigns',
      icon: Calendar,
      currentApproach: 'Campaigns inactive',
      performanceImpact: '28.5% reduction in weekly exposure',
      revenueImplication: 'Lost revenue opportunities',
      severity: 'critical'
    }
  ];

  const budgetUtilization = [
    {
      area: 'Media Spend',
      allocation: 162600,
      delivery: 'Basic campaign maintenance',
      gap: 'Limited strategic growth',
      icon: BarChart2
    },
    {
      area: 'SEO Investment',
      allocation: 156000,
      delivery: 'Maintenance-level activity',
      gap: 'Missing revenue opportunities',
      icon: Search
    },
    {
      area: 'Development Budget',
      allocation: 84000,
      delivery: 'Basic platform updates',
      gap: 'Limited innovation delivery',
      icon: PieChart
    }
  ];

  const totalBudget = budgetUtilization.reduce((sum, item) => sum + item.allocation, 0);

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical':
        return 'bg-red-50 border-l-4 border-red-500';
      case 'warning':
        return 'bg-yellow-50 border-l-4 border-yellow-500';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingDown className="text-red-500 mr-2" />
            Performance Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-6">
            <p className="text-gray-600">
              Our analysis reveals significant concerns regarding campaign effectiveness, return on 
              investment, and strategic execution. The agency&apos;s approach demonstrates inefficient 
              spending coupled with limited strategic innovation.
            </p>
          </div>

          {/* Campaign Performance Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Campaign Performance Assessment</h3>
            <div className="space-y-4">
              {campaignPerformance.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg ${getSeverityColor(item.severity)}`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <item.icon className={`h-5 w-5 ${
                        item.severity === 'critical' ? 'text-red-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div className="ml-4 flex-grow grid grid-cols-3 gap-4">
                      <div>
                        <div className="font-medium text-gray-900">{item.channel}</div>
                        <div className="text-sm text-gray-600">{item.currentApproach}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Performance Impact</div>
                        <div className="text-sm text-gray-600">{item.performanceImpact}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Revenue Implication</div>
                        <div className="text-sm text-gray-600">{item.revenueImplication}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Utilization Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Budget Utilization & ROI</h3>
            <div className="grid grid-cols-3 gap-6 mb-6">
              {budgetUtilization.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <item.icon className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-medium">{item.area}</h4>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    ${item.allocation.toLocaleString()}
                  </div>
                  <div className="h-2 bg-gray-200 rounded mb-2">
                    <div 
                      className="h-2 bg-blue-600 rounded"
                      style={{ width: `${(item.allocation / totalBudget) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{item.delivery}</div>
                  <div className="text-sm text-red-600">{item.gap}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="text-yellow-600 mr-2" />
                <h4 className="font-medium">Critical Budget Optimization Gaps</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Current spending patterns reveal a concerning focus on maintaining basic campaign 
                operations rather than driving performance improvements or exploring new opportunities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceAnalysis;