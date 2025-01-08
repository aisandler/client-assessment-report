import React, { useState } from 'react';
import { 
  Workflow, 
  Server, 
  Users, 
  Target, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle,
  CheckCircle2 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const InternalAssessment = () => {
  const [expandedSections, setExpandedSections] = useState({
    processMappingDetails: false,
    technologyStackDetails: false,
    teamStructureDetails: false,
    opportunitiesDetails: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const ProcessMappingSection = () => (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-blue-500 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
            <Workflow size={28} className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Process Mapping Challenges</h3>
            <p className="text-gray-600 mt-1">Workflow and Campaign Execution Analysis</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Marketing Workflows",
              issues: [
                "Fragmented campaign planning",
                "No standardized review processes",
                "Cross-functional coordination challenges"
              ]
            },
            {
              title: "Approval Processes",
              issues: [
                "Unclear decision-making authority",
                "Extensive review cycles",
                "Disconnected approval workflows"
              ]
            },
            {
              title: "Campaign Execution",
              issues: [
                "Inconsistent brand messaging",
                "Siloed campaign planning",
                "Isolated performance tracking"
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">{section.title}</h4>
              <ul className="space-y-2">
                {section.issues.map((issue, issueIdx) => (
                  <li key={issueIdx} className="flex items-start text-gray-700">
                    <AlertTriangle className="mr-2 mt-1 text-red-600" size={16} />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const TechnologyStackSection = () => (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-l-4 border-l-purple-500 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
            <Server size={28} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Technology Stack Assessment</h3>
            <p className="text-gray-600 mt-1">Platform Integration and Utilization Analysis</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-purple-900 mb-2">Current Platform Landscape</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  platform: "Magento",
                  status: "Partially Utilized",
                  issues: [
                    "Limited e-commerce optimization",
                    "Incomplete feature integration"
                  ]
                },
                {
                  platform: "Salesforce",
                  status: "Underutilized",
                  issues: [
                    "Fragmented customer data",
                    "Minimal automation"
                  ]
                },
                {
                  platform: "Pardot",
                  status: "Transitioning",
                  issues: [
                    "Outdated marketing automation",
                    "Limited reporting capabilities"
                  ]
                }
              ].map((platform, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-semibold text-purple-800">{platform.platform}</h5>
                    <span className={`text-sm font-medium ${
                      platform.status === 'Partially Utilized' ? 'text-yellow-600' : 
                      platform.status === 'Underutilized' ? 'text-red-600' : 'text-blue-600'
                    }`}>
                      {platform.status}
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700">
                    {platform.issues.map((issue, issueIdx) => (
                      <li key={issueIdx} className="text-sm">{issue}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-purple-900 mb-2">Integration Challenges</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Data Connectivity",
                  description: "Gaps in customer data and insights sharing"
                },
                {
                  title: "Tracking Limitations",
                  description: "Inconsistent attribution and performance measurement"
                },
                {
                  title: "Asset Management",
                  description: "Inefficient content and asset sharing between systems"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">{item.title}</h5>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const TeamStructureSection = () => (
    <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-l-4 border-l-indigo-500 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
            <Users size={28} className="text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Team Structure Assessment</h3>
            <p className="text-gray-600 mt-1">Organizational Capabilities and Resource Analysis</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Roles & Responsibilities",
              issues: [
                "Overlapping responsibilities",
                "No dedicated digital roles",
                "Team tension due to constraints"
              ]
            },
            {
              title: "Skill Assessment",
              issues: [
                "Strategic planning gaps",
                "Inconsistent tech proficiency",
                "Limited continuous learning"
              ]
            },
            {
              title: "Resource Allocation",
              issues: [
                "Reactive task focus",
                "Insufficient strategic budget",
                "Content production challenges"
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-indigo-900 mb-2">{section.title}</h4>
              <ul className="space-y-2">
                {section.issues.map((issue, issueIdx) => (
                  <li key={issueIdx} className="flex items-start text-gray-700">
                    <AlertTriangle className="mr-2 mt-1 text-red-600" size={16} />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const OpportunitiesSection = () => (
    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-l-4 border-l-green-500 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
            <Target size={28} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Strategic Opportunities</h3>
            <p className="text-gray-600 mt-1">Pathways for Digital Marketing Transformation</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            {
              title: "Workflow Optimization",
              description: "Streamline digital marketing processes and establish clear approval mechanisms"
            },
            {
              title: "Technology Integration",
              description: "Create a unified technology ecosystem with improved data connectivity"
            },
            {
              title: "Team Development",
              description: "Clarify roles and invest in continuous skill enhancement"
            },
            {
              title: "Strategic Resource Allocation",
              description: "Develop a balanced approach to operational and strategic initiatives"
            }
          ].map((opportunity, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm flex items-start">
              <CheckCircle2 className="mr-4 mt-1 text-green-600" size={20} />
              <div>
                <h4 className="font-semibold text-green-900 mb-1">{opportunity.title}</h4>
                <p className="text-gray-700">{opportunity.description}</p>
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
          <CardTitle className="text-2xl">Internal Marketing Capabilities Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg">
              Our internal assessment revealed both strengths and significant areas for improvement 
              within Econoco's digital marketing capabilities, processes, and resources. Key areas 
              of focus include streamlining workflows, enhancing the technology stack, and optimizing 
              the organizational structure to support strategic digital initiatives.
            </p>
          </div>

          <ExpandableSection 
            title="Process Mapping" 
            sectionKey="processMappingDetails"
          >
            <ProcessMappingSection />
          </ExpandableSection>

          <ExpandableSection 
            title="Technology Stack" 
            sectionKey="technologyStackDetails"
          >
            <TechnologyStackSection />
          </ExpandableSection>

          <ExpandableSection 
            title="Team Structure" 
            sectionKey="teamStructureDetails"
          >
            <TeamStructureSection />
          </ExpandableSection>

          <ExpandableSection 
            title="Strategic Opportunities" 
            sectionKey="opportunitiesDetails"
          >
            <OpportunitiesSection />
          </ExpandableSection>
        </CardContent>
      </Card>
    </div>
  );
};

export default InternalAssessment;