import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, Calendar, BarChart, AlertTriangle, Clock } from 'lucide-react';

interface PerformanceAnalysisProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  showNavigation?: boolean;
}

const PerformanceAnalysis: React.FC<PerformanceAnalysisProps> = ({
  activeTab,
  onTabChange,
  showNavigation = true
}) => {
  return (
    <div className="space-y-6">
      <Card className="border !border-gray-200 !border-t-4 !border-t-blue-500 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-gray-900">
            Performance Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-600 text-lg">
            Our analysis reveals significant concerns regarding campaign effectiveness, return on investment, and strategic execution. The agency's approach demonstrates inefficient spending coupled with limited strategic innovation.
          </p>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Campaign Performance Assessment</h2>
        <div className="space-y-2">
          <div className="bg-red-50 p-4 rounded flex items-start">
            <Search className="h-5 w-5 text-red-600 mt-1 mr-4" />
            <div className="grid grid-cols-3 flex-1 gap-4">
              <div>
                <h3 className="font-medium">Branded Search</h3>
                <p className="text-gray-600 text-sm">Aggressive bidding on brand terms</p>
              </div>
              <div>
                <h3 className="font-medium">Performance Impact</h3>
                <p className="text-gray-600 text-sm">32x ROAS indicating organic cannibalization</p>
              </div>
              <div>
                <h3 className="font-medium">Revenue Implication</h3>
                <p className="text-gray-600 text-sm">Estimated $72,000 annual inefficient spend</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded flex items-start">
            <Search className="h-5 w-5 text-yellow-600 mt-1 mr-4" />
            <div className="grid grid-cols-3 flex-1 gap-4">
              <div>
                <h3 className="font-medium">Non-Brand Search</h3>
                <p className="text-gray-600 text-sm">Basic keyword targeting</p>
              </div>
              <div>
                <h3 className="font-medium">Performance Impact</h3>
                <p className="text-gray-600 text-sm">Limited new customer acquisition</p>
              </div>
              <div>
                <h3 className="font-medium">Revenue Implication</h3>
                <p className="text-gray-600 text-sm">Reduced market growth</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded flex items-start">
            <Calendar className="h-5 w-5 text-red-600 mt-1 mr-4" />
            <div className="grid grid-cols-3 flex-1 gap-4">
              <div>
                <h3 className="font-medium">Weekend Campaigns</h3>
                <p className="text-gray-600 text-sm">Campaigns inactive</p>
              </div>
              <div>
                <h3 className="font-medium">Performance Impact</h3>
                <p className="text-gray-600 text-sm">28.5% reduction in weekly exposure</p>
              </div>
              <div>
                <h3 className="font-medium">Revenue Implication</h3>
                <p className="text-gray-600 text-sm">Lost revenue opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="border !border-gray-200 !border-t-4 !border-t-blue-500 shadow-sm">
        <CardHeader>
          <CardTitle>Budget Utilization & ROI</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BarChart className="h-5 w-5 text-gray-600" />
                <span className="font-medium">Media Spend</span>
              </div>
              <div className="text-2xl font-bold mb-2">$162,600</div>
              <div className="h-2 bg-blue-100 rounded mb-2">
                <div className="h-full w-3/4 bg-blue-500 rounded"></div>
              </div>
              <div className="text-gray-600 text-sm">Basic campaign maintenance</div>
              <div className="text-red-600 text-sm">Limited strategic growth</div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-5 w-5 text-gray-600" />
                <span className="font-medium">SEO Investment</span>
              </div>
              <div className="text-2xl font-bold mb-2">$156,000</div>
              <div className="h-2 bg-blue-100 rounded mb-2">
                <div className="h-full w-2/3 bg-blue-500 rounded"></div>
              </div>
              <div className="text-gray-600 text-sm">Maintenance-level activity</div>
              <div className="text-red-600 text-sm">Missing revenue opportunities</div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-gray-600" />
                <span className="font-medium">Development Budget</span>
              </div>
              <div className="text-2xl font-bold mb-2">$84,000</div>
              <div className="h-2 bg-blue-100 rounded mb-2">
                <div className="h-full w-1/2 bg-blue-500 rounded"></div>
              </div>
              <div className="text-gray-600 text-sm">Basic platform updates</div>
              <div className="text-red-600 text-sm">Limited innovation delivery</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <h3 className="font-medium">Critical Budget Optimization Gaps</h3>
            </div>
            <p className="text-gray-600">
              Current spending patterns reveal a concerning focus on maintaining basic campaign operations rather than driving performance improvements or exploring new opportunities.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceAnalysis;