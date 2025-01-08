import React, { useState } from 'react';
import { 
  AlertOctagon, 
  ChevronDown, 
  ChevronUp, 
  Layout, 
  TrendingUp, 
  Focus 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CommunicationAssessment = () => {
  const [expandedSections, setExpandedSections] = useState({
    engagementComparison: false,
    reportingDeficiencies: false,
    strategicPlanningImpact: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const EngagementComparisonCard = () => (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-blue-500 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
            <Layout size={28} className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Engagement Type Comparison</h3>
            <p className="text-gray-600 mt-1">Comparative Analysis of Communication Approaches</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              type: "Strategic Planning",
              current: "Bi-annual budget review",
              industry: "Monthly strategic sessions",
              impact: "Limited long-term growth planning"
            },
            {
              type: "Performance Review",
              current: "Quarterly metrics reporting",
              industry: "Ongoing optimization dialogues",
              impact: "Reactive rather than proactive improvements"
            },
            {
              type: "Technical Planning",
              current: "Ad-hoc project discussions",
              industry: "Structured roadmap reviews",
              impact: "Delayed implementation of critical updates"
            }
          ].map((row, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">{row.type}</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-gray-600">Current Approach:</span>
                  <p className="text-gray-800">{row.current}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Industry Standard:</span>
                  <p className="text-gray-800">{row.industry}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Business Impact:</span>
                  <p className="text-red-700">{row.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const StrategicPlanningCard = () => (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-l-4 border-l-purple-500 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
            <Focus size={28} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Strategic Planning Deficiencies</h3>
            <p className="text-gray-600 mt-1">Comprehensive Strategic Engagement Assessment</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-purple-900 mb-2">Key Strategic Limitations</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <AlertOctagon className="inline mr-2 text-red-600" size={16} />
                Bi-annual planning sessions focus primarily on budget allocation
              </li>
              <li>
                <AlertOctagon className="inline mr-2 text-red-600" size={16} />
                Strategic initiatives emerge from internal discussions, not agency recommendations
              </li>
              <li>
                <AlertOctagon className="inline mr-2 text-red-600" size={16} />
                Reactive approach limits effective digital initiative execution
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-purple-900 mb-2">Business Performance Impact</h4>
            <div className="flex items-center">
              <TrendingUp className="mr-2 text-red-600" size={20} />
              <p className="text-gray-800">Extended project timelines and resource constraints due to limited strategic planning</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ReportingQualityCard = () => (
    <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-l-4 border-l-indigo-500 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
            <TrendingUp size={28} className="text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Reporting Quality Analysis</h3>
            <p className="text-gray-600 mt-1">Strategic Insights and Reporting Deficiencies</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              type: "Performance Reports",
              current: "Basic metric tracking",
              expected: "Strategic analysis and recommendations",
              gap: "Limited optimization opportunities"
            },
            {
              type: "Technical Updates",
              current: "Status notifications",
              expected: "Strategic platform guidance",
              gap: "Reduced innovation potential"
            },
            {
              type: "Campaign Analysis",
              current: "Standard performance metrics",
              expected: "Revenue impact and growth opportunities",
              gap: "Incomplete business intelligence"
            }
          ].map((row, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-indigo-900 mb-2">{row.type}</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-gray-600">Current Delivery:</span>
                  <p className="text-gray-800">{row.current}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Expected Standard:</span>
                  <p className="text-gray-800">{row.expected}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Strategic Gap:</span>
                  <p className="text-red-700">{row.gap}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const ExpandableSection = ({ title, children, sectionKey }) => (
    <div className="mb-6">
      <button 
        onClick={() => toggleSection(sectionKey)}
        className="w-full text-left flex justify-between items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {expandedSections[sectionKey] ? <ChevronUp /> : <ChevronDown />}
      </button>
      {expandedSections[sectionKey] && (
        <div className="mt-4 space-y-6">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
          <CardTitle className="text-2xl">Communication Assessment Executive Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg">
              Our evaluation of AWG's communication practices reveals significant deficiencies in strategic planning, 
              reporting quality, and proactive client engagement. The current communication framework focuses 
              primarily on tactical updates while lacking meaningful strategic dialogue or forward-looking insights.
            </p>
          </div>

          <ExpandableSection 
            title="Engagement Type Comparison" 
            sectionKey="engagementComparison"
          >
            <EngagementComparisonCard />
          </ExpandableSection>

          <ExpandableSection 
            title="Reporting Quality and Strategic Insight" 
            sectionKey="reportingDeficiencies"
          >
            <ReportingQualityCard />
          </ExpandableSection>

          <ExpandableSection 
            title="Strategic Planning and Impact" 
            sectionKey="strategicPlanningImpact"
          >
            <StrategicPlanningCard />
          </ExpandableSection>

          <Card className="bg-blue-50 border-l-4 border-l-blue-600">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Recommendations</h3>
              <div className="space-y-3 text-blue-800">
                <p>
                  <AlertOctagon className="inline mr-2 text-blue-600" size={16} />
                  Establish a structured monthly strategic planning framework
                </p>
                <p>
                  <AlertOctagon className="inline mr-2 text-blue-600" size={16} />
                  Develop comprehensive reporting that provides actionable insights
                </p>
                <p>
                  <AlertOctagon className="inline mr-2 text-blue-600" size={16} />
                  Implement proactive communication protocols
                </p>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunicationAssessment;