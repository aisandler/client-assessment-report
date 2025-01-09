import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Store, TrendingDown, AlertTriangle, Layout, Users, Search } from 'lucide-react';

const MarketplaceInsightDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Executive Overview Section */}
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
          <CardTitle className="flex items-center">
            <Store className="text-blue-600 mr-2" />
            Marketplace Strategic Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="prose max-w-none mb-6">
            <p className="text-gray-600 text-lg">
              A comprehensive analysis reveals a fragmented approach to channel management 
              with significant untapped revenue potential. Critical operational inefficiencies 
              and strategic gaps are constraining marketplace performance across multiple platforms.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-600 font-medium">Active Products</span>
                <Store className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-blue-900">2,225</span>
                <span className="text-sm text-blue-700">SKUs</span>
              </div>
              <div className="mt-2 text-sm text-blue-600">Across 3 major platforms</div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-red-600 font-medium">Revenue Risk</span>
                <TrendingDown className="h-4 w-4 text-red-600" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-red-900">25%</span>
                <span className="text-sm text-red-700">YoY Decline</span>
              </div>
              <div className="mt-2 text-sm text-red-600">Wayfair performance gap</div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-yellow-600 font-medium">Partner Efficiency</span>
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-yellow-900">27%</span>
                <span className="text-sm text-yellow-700">Management Rate</span>
              </div>
              <div className="mt-2 text-sm text-yellow-600">vs 12-20% industry standard</div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Strategic Implications</h4>
            <div className="text-blue-800">
              The current marketplace strategy reveals critical opportunities for revenue 
              optimization through three key strategic interventions:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-blue-800">
                <li>Restructure partner management approaches</li>
                <li>Develop systematic content creation capabilities</li>
                <li>Implement cross-platform optimization strategies</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Amazon Vendor Central Deep Dive */}
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
          <CardTitle className="flex items-center">
            <Layout className="text-blue-600 mr-2" />
            Amazon Vendor Central Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Revenue Concentration Dynamics</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Top 10 Products</span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded overflow-hidden">
                    <div className="h-full bg-blue-600 rounded" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Remaining 990 ASINs</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded overflow-hidden">
                    <div className="h-full bg-gray-400 rounded" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  Managing approximately 1,000 active ASINs, the platform exhibits a highly 
                  concentrated revenue distribution where just 10 products generate 65-70% of total revenue. 
                  This concentration signals both significant risk and untapped potential across the 
                  broader product catalog.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Critical Performance Gaps</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="text-red-500 h-5 w-5 mr-2" />
                  <h4 className="font-medium text-red-900">Buy Box Performance</h4>
                </div>
                <p className="text-sm text-red-700">
                  Significant revenue loss to third-party sellers through aggressive pricing strategies, 
                  particularly affecting key product lines. Current pricing approach lacks competitive 
                  monitoring and response mechanisms.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Search className="text-yellow-500 h-5 w-5 mr-2" />
                  <h4 className="font-medium text-yellow-900">Content Quality</h4>
                </div>
                <p className="text-sm text-yellow-700">
                  Customer feedback analysis reveals persistent issues with assembly instructions 
                  and missing parts documentation. These gaps directly impact customer satisfaction 
                  and return rates.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Operational Optimization Pathway</h4>
            <div className="text-blue-800">
              Strategic priorities for Amazon channel improvement:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-blue-800">
                <li>Develop comprehensive content development capabilities</li>
                <li>Implement dynamic pricing strategy</li>
                <li>Enhance technical documentation processes</li>
                <li>Diversify revenue across product catalog</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Partner Assessment */}
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-white">
          <CardTitle className="flex items-center">
            <Users className="text-blue-600 mr-2" />
            Partner Performance Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Knoza Partnership Overview</h3>
              
              <div className="bg-white border border-gray-200 rounded-lg mb-4">
                <div className="p-4 border-b">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Annual Investment</div>
                      <div className="text-xl font-bold text-gray-900">$210,849</div>
                      <div className="text-sm text-gray-500">Base fee + ad spend</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Effective Rate</div>
                      <div className="text-xl font-bold text-red-600">27%</div>
                      <div className="text-sm text-red-500">vs 12-20% standard</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Strategic Planning</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                        Limited
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Performance Analytics</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                        Basic
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Market Intelligence</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                        Missing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-600">
                  The partnership operates under an outdated 2019 contract framework with minimal 
                  strategic value delivery. Weekly engagement maintains basic operational continuity 
                  but lacks proactive optimization and growth planning.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resource Utilization Analysis</h3>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Content Development</span>
                      <span className="text-sm text-red-600">Critical Gap</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded overflow-hidden">
                      <div className="h-full bg-red-500 rounded" style={{ width: '20%' }}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      No systematic content creation process
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Technical Documentation</span>
                      <span className="text-sm text-yellow-600">Limited</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded" style={{ width: '40%' }}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Basic documentation capabilities
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Quality Control</span>
                      <span className="text-sm text-red-600">Missing</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded overflow-hidden">
                      <div className="h-full bg-red-500 rounded" style={{ width: '10%' }}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      No standardized quality processes
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-600">
                  Resource allocation analysis reveals critical gaps in content development and 
                  quality control capabilities. These constraints directly impact marketplace 
                  performance and customer satisfaction metrics.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Partner Management Recommendations</h4>
            <div className="text-blue-800">
              Key strategic interventions for partnership optimization:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-blue-800">
                <li>Renegotiate partnership contracts with clear performance metrics</li>
                <li>Develop comprehensive content and quality control capabilities</li>
                <li>Implement strategic performance reporting frameworks</li>
                <li>Create cross-platform optimization strategies</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketplaceInsightDashboard;