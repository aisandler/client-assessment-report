import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  AlertTriangle,
  TrendingDown,
  ArrowRight,
  CheckCircle,
  AlertOctagon,
  Activity,
  DollarSign,
  Users,
  BarChart2
} from 'lucide-react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const PerformanceInsights = () => {
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  
  const performanceData = {
    revenue: {
      title: 'Revenue Performance by Channel',
      metrics: [
        { name: 'Amazon', efficiency: 68, investment: 165849, performance: -12.46, potential: 45000 },
        { name: 'Wayfair', efficiency: 43, investment: 0, performance: -25, potential: 80000 },
        { name: 'Home Depot', efficiency: 72, investment: 14000, performance: -5, potential: 50000 }
      ],
      insights: [
        {
          title: 'Amazon Revenue Optimization',
          type: 'critical',
          finding: 'Buy box losses creating significant revenue leakage',
          impact: '$45,000 annual revenue opportunity',
          recommendation: 'Implement systematic buy box monitoring and management program'
        },
        {
          title: 'Wayfair B2B Focus',
          type: 'opportunity',
          finding: '43% of revenue through B2B program indicates growth potential',
          impact: '$80,000 revenue opportunity through program optimization',
          recommendation: 'Expand B2B program participation and optimization'
        },
        {
          title: 'Home Depot Expansion',
          type: 'opportunity',
          finding: 'New small item approval creates growth potential',
          impact: '$50,000 growth opportunity through category expansion',
          recommendation: 'Develop comprehensive expansion strategy'
        }
      ]
    },
    efficiency: {
      title: 'Operational Efficiency Analysis',
      metrics: [
        { name: 'Content Dev', efficiency: 45, investment: 84000, performance: -15, potential: 35000 },
        { name: 'Campaign Mgt', efficiency: 52, investment: 93240, potential: 40000 },
        { name: 'Analytics', efficiency: 38, investment: 156000, potential: 75000 }
      ],
      insights: [
        {
          title: 'Content Development',
          type: 'critical',
          finding: 'Significant bottlenecks affecting performance',
          impact: '15-20% conversion rate gap vs competitors',
          recommendation: 'Implement systematic content optimization program'
        },
        {
          title: 'Campaign Management',
          type: 'warning',
          finding: 'Above-market agency fees limiting ROI',
          impact: '$40,000 annual cost optimization potential',
          recommendation: 'Evaluate partner relationships and fee structures'
        },
        {
          title: 'Analytics Implementation',
          type: 'critical',
          finding: 'Poor data quality affecting decision-making',
          impact: '20-25% invalid traffic in reporting',
          recommendation: 'Deploy comprehensive analytics cleanup'
        }
      ]
    },
    resources: {
      title: 'Resource Allocation Analysis',
      metrics: [
        { name: 'Digital Team', efficiency: 65, investment: 180000, performance: -10, potential: 45000 },
        { name: 'Agency Partners', efficiency: 48, investment: 360240, performance: -25, potential: 150000 },
        { name: 'Technology', efficiency: 58, investment: 120000, performance: -15, potential: 65000 }
      ],
      insights: [
        {
          title: 'Digital Team Structure',
          type: 'warning',
          finding: 'Unclear ownership and competing priorities',
          impact: '30% resource inefficiency identified',
          recommendation: 'Implement resource allocation framework'
        },
        {
          title: 'Agency Relationships',
          type: 'critical',
          finding: 'Above-market fees with limited strategic value',
          impact: '$150,000 annual cost optimization potential',
          recommendation: 'Evaluate and restructure agency partnerships'
        },
        {
          title: 'Technology Stack',
          type: 'warning',
          finding: 'Suboptimal platform implementation',
          impact: '35% efficiency improvement potential',
          recommendation: 'Optimize technology integration and utilization'
        }
      ]
    }
  };

  const getInsightIcon = (type) => {
    switch(type) {
      case 'critical':
        return <AlertTriangle className="text-red-500" size={20} />;
      case 'warning':
        return <AlertOctagon className="text-yellow-500" size={20} />;
      case 'opportunity':
        return <CheckCircle className="text-green-500" size={20} />;
      default:
        return <AlertTriangle className="text-red-500" size={20} />;
    }
  };

  const metrics = [
    {
      id: 'revenue',
      title: 'Revenue Performance',
      icon: DollarSign,
      description: 'Channel revenue and growth analysis'
    },
    {
      id: 'efficiency',
      title: 'Operational Efficiency',
      icon: Activity,
      description: 'Operational performance metrics'
    },
    {
      id: 'resources',
      title: 'Resource Allocation',
      icon: Users,
      description: 'Resource utilization analysis'
    }
  ];

  return (
    <div className="w-full space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Performance Insights Dashboard</span>
            <span className="text-sm font-normal text-gray-500">January 2025</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {metrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`p-6 rounded-lg border transition-colors ${
                  selectedMetric === metric.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <metric.icon 
                    className={selectedMetric === metric.id ? 'text-blue-500' : 'text-gray-400'} 
                    size={24} 
                  />
                  <h3 className="font-semibold">{metric.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {performanceData[selectedMetric].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={performanceData[selectedMetric].metrics}>
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar
                          yAxisId="left"
                          dataKey="investment"
                          fill="#60a5fa"
                          name="Investment"
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="efficiency"
                          stroke="#2563eb"
                          name="Efficiency"
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {performanceData[selectedMetric].insights.map((insight, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        {getInsightIcon(insight.type)}
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">{insight.title}</div>
                            <div className={`px-2 py-1 rounded text-sm ${
                              insight.type === 'critical' ? 'bg-red-100 text-red-800' :
                              insight.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                            </div>
                          </div>
                          <div className="text-gray-600 mt-1">{insight.finding}</div>
                          <div className="text-sm text-gray-500 mt-1">{insight.impact}</div>
                          <div className="text-sm font-medium text-blue-600 mt-2">
                            Recommendation: {insight.recommendation}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {performanceData[selectedMetric].metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{metric.name}</div>
                          <div className={`flex items-center ${
                            metric.performance < 0 ? 'text-red-500' : 'text-green-500'
                          }`}>
                            {metric.performance < 0 ? (
                              <TrendingDown size={16} className="mr-1" />
                            ) : null}
                            <span>{Math.abs(metric.performance)}%</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-600">Efficiency</div>
                            <div className="font-medium">{metric.efficiency}%</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Potential</div>
                            <div className="font-medium">${metric.potential.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Optimization Potential</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Opportunity</span>
                      <span className="text-lg font-medium">
                        ${performanceData[selectedMetric].metrics.reduce((sum, metric) => 
                          sum + metric.potential, 0
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Current Investment</span>
                      <span className="text-lg font-medium">
                        ${performanceData[selectedMetric].metrics.reduce((sum, metric) => 
                          sum + metric.investment, 0
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Avg. Efficiency</span>
                      <span className="text-lg font-medium">
                        {Math.round(performanceData[selectedMetric].metrics.reduce((sum, metric) => 
                          sum + metric.efficiency, 0
                        ) / performanceData[selectedMetric].metrics.length)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceInsights;