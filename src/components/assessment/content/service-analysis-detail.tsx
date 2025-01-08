import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, Code, AlertTriangle, Clock, Gauge, FileCode, Shield } from 'lucide-react';

const ServiceAnalysisDetail = () => {
  const seoServiceGaps = [
    {
      area: 'Technical SEO',
      currentDelivery: 'Basic optimization, limited technical improvements',
      industryStandard: 'Comprehensive technical strategy, regular audits, proactive enhancements',
      impact: 'Reduced organic visibility and increased reliance on paid search'
    },
    {
      area: 'Content Strategy',
      currentDelivery: 'Monthly blog posts without strategic direction',
      industryStandard: 'Data-driven content planning, competitive analysis, conversion optimization',
      impact: 'Limited organic growth and missed market opportunities'
    },
    {
      area: 'Performance Tracking',
      currentDelivery: 'Basic position tracking and traffic metrics',
      industryStandard: 'Advanced attribution modeling, revenue impact analysis, competitor monitoring',
      impact: 'Incomplete understanding of ROI and optimization opportunities'
    }
  ];

  const positionMetrics = [
    {
      metric: 'Average Position',
      current: '19.8',
      benchmark: 'Top 5 positions',
      impact: 'Significantly reduced click-through potential'
    },
    {
      metric: 'Click-Through Rate',
      current: '0.63%',
      benchmark: '3.5% average',
      impact: 'Lost traffic opportunity of approximately 82%'
    },
    {
      metric: 'Content Effectiveness',
      current: 'Limited measurement',
      benchmark: 'Revenue attribution',
      impact: 'Unable to optimize for business impact'
    }
  ];

  const projectExecution = [
    {
      project: 'Cybersource Integration',
      timeline: '12+ months',
      standard: '3-4 months',
      impact: 'Delayed revenue opportunities, increased internal resource requirements',
      icon: Clock
    },
    {
      project: 'Platform Optimization',
      timeline: 'Reactive maintenance',
      standard: 'Proactive enhancement',
      impact: 'Limited platform performance improvement',
      icon: Gauge
    },
    {
      project: 'Security Updates',
      timeline: 'Basic compliance',
      standard: 'Strategic security roadmap',
      impact: 'Potential security and compliance risks',
      icon: Shield
    }
  ];

  const developmentServices = [
    {
      service: 'Strategic Planning',
      current: 'Limited technical roadmap',
      bestPractice: 'Comprehensive enhancement strategy',
      gap: 'Missed optimization opportunities'
    },
    {
      service: 'Resource Utilization',
      current: 'Basic maintenance focus',
      bestPractice: 'Strategic development priorities',
      gap: 'Limited platform advancement'
    },
    {
      service: 'Documentation',
      current: 'Minimal process documentation',
      bestPractice: 'Comprehensive knowledge management',
      gap: 'Increased operational risk'
    }
  ];

  return (
    <div className="space-y-8">
      {/* SEO and Content Services Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="text-blue-600 mr-2" />
            SEO and Content Services Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-6">
            <p className="text-gray-600">
              Despite an annual investment of $156,000, AWG's delivery of SEO and content services 
              demonstrates concerning limitations in both strategic approach and measurable impact.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Service Delivery Gaps</h3>
            <div className="space-y-6">
              {seoServiceGaps.map((gap, index) => (
                <div key={index} className="grid grid-cols-3 gap-4">
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

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Position Performance</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Current</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Industry Benchmark</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {positionMetrics.map((metric, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{metric.metric}</td>
                    <td className="px-4 py-3 text-red-600">{metric.current}</td>
                    <td className="px-4 py-3 text-green-600">{metric.benchmark}</td>
                    <td className="px-4 py-3 text-yellow-600">{metric.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Technical Development Services Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Code className="text-blue-600 mr-2" />
            Technical Development Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-6">
            <p className="text-gray-600">
              The technical development engagement, structured around a monthly 40-hour block at $84,000 
              annually, reveals a pattern of basic maintenance-level service that impedes Econoco's 
              digital growth objectives.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Project Execution Analysis</h3>
            <div className="space-y-6">
              {projectExecution.map((project, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <project.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-grow grid grid-cols-3 gap-4">
                    <div>
                      <div className="font-medium text-gray-900 mb-1">{project.project}</div>
                      <div className="text-red-600 text-sm">{project.timeline}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Industry Standard</div>
                      <div className="text-green-600 text-sm">{project.standard}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Business Impact</div>
                      <div className="text-yellow-600 text-sm">{project.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-500 mr-2" />
              <h3 className="text-lg font-semibold text-red-900">2025 Rate Increase Concerns</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-100 bg-opacity-50">
                    <th className="px-4 py-3 text-left font-medium text-red-900">Development Services</th>
                    <th className="px-4 py-3 text-left font-medium text-red-900">Current State</th>
                    <th className="px-4 py-3 text-left font-medium text-red-900">Industry Best Practice</th>
                    <th className="px-4 py-3 text-left font-medium text-red-900">Value Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-200">
                  {developmentServices.map((service, index) => (
                    <tr key={index} className="hover:bg-red-50">
                      <td className="px-4 py-3 font-medium">{service.service}</td>
                      <td className="px-4 py-3 text-red-700">{service.current}</td>
                      <td className="px-4 py-3 text-green-700">{service.bestPractice}</td>
                      <td className="px-4 py-3 text-red-700">{service.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceAnalysisDetail;