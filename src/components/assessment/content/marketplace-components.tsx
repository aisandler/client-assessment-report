import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Layout, Layers, ArrowRight, AlertTriangle } from 'lucide-react';

const MarketplaceExpansion = () => {
  const marketplaceComparison = {
    amazon: {
      name: "Amazon Vendor Central",
      revenue: "Highest volume distributor",
      adSpend: "$165,849 (2023)",
      challenges: [
        "Buy box competition",
        "Limited strategic support",
        "Content development bottlenecks",
        "Quality control issues"
      ],
      opportunities: [
        "Consumer-oriented strategy",
        "Enhanced content development",
        "Technical documentation improvement",
        "Pricing optimization"
      ]
    },
    homeDepot: {
      name: "Home Depot",
      revenue: "Consistent with limited SKUs",
      adSpend: "$14,000 YTD",
      challenges: [
        "Limited product range",
        "Basic campaign management",
        "Junior account support",
        "Underutilized marketing program"
      ],
      opportunities: [
        "Product range expansion",
        "Marketing program optimization",
        "Strategic account development",
        "B2B focus enhancement"
      ]
    },
    wayfair: {
      name: "Wayfair",
      revenue: "$162k YTD (-25% YoY)",
      adSpend: "Minimal investment",
      challenges: [
        "Significant revenue decline",
        "Private label competition",
        "Limited marketing support",
        "Fulfillment constraints"
      ],
      opportunities: [
        "B2B segment optimization",
        "Content quality improvement",
        "Promotional strategy development",
        "Inventory management enhancement"
      ]
    }
  };

  const contentCapabilityAnalysis = {
    currentState: {
      processes: "No systematic creation workflow",
      resources: "Limited dedicated support",
      quality: "Inconsistent standards",
      coverage: "35% of required content"
    },
    marketplaceSpecific: {
      amazon: [
        "Missing enhanced brand content",
        "Incomplete technical documentation",
        "Limited lifestyle imagery",
        "Poor mobile optimization"
      ],
      homeDepot: [
        "Basic product descriptions",
        "Missing installation guides",
        "Limited visual assets",
        "Incomplete specifications"
      ],
      wayfair: [
        "Outdated product imagery",
        "Missing style guides",
        "Limited comparison content",
        "Poor search optimization"
      ]
    }
  };

  return (
    <div className="space-y-8">
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
          <CardTitle className="flex items-center">
            <Layout className="text-blue-600 mr-2" />
            Cross-Marketplace Strategy Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(marketplaceComparison).map(([key, platform]) => (
              <div key={key} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{platform.name}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Revenue Status</div>
                    <div className="font-medium">{platform.revenue}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Marketing Investment</div>
                    <div className="font-medium">{platform.adSpend}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Key Challenges</div>
                    <div className="space-y-1">
                      {platform.challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <AlertTriangle className="text-red-500 h-4 w-4 mr-2" />
                          <span>{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Opportunities</div>
                    <div className="space-y-1">
                      {platform.opportunities.map((opportunity, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <ArrowRight className="text-blue-500 h-4 w-4 mr-2" />
                          <span>{opportunity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-t-4 border-t-blue-600">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
          <CardTitle className="flex items-center">
            <Layers className="text-blue-600 mr-2" />
            Content Development Framework
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Current Capability Assessment</h3>
              <div className="space-y-4">
                {Object.entries(contentCapabilityAnalysis.currentState).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 capitalize mb-1">{key}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Marketplace-Specific Requirements</h3>
              <div className="space-y-4">
                {Object.entries(contentCapabilityAnalysis.marketplaceSpecific).map(([platform, issues]) => (
                  <div key={platform} className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium capitalize mb-2">{platform} Content Gaps</div>
                    <div className="space-y-1">
                      {issues.map((issue, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <AlertTriangle className="text-yellow-500 h-4 w-4 mr-2" />
                          <span>{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Content Development Recommendations</h4>
            <div className="text-blue-800">
              Strategic priorities for content capability development:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-blue-800">
                <li>Establish centralized content creation workflow</li>
                <li>Develop marketplace-specific content guidelines</li>
                <li>Implement quality control processes</li>
                <li>Create scalable asset management system</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketplaceExpansion;