import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock, AlertCircle, CheckCircle2, FileText, Database, Users, Target, ChevronDown, ChevronUp } from 'lucide-react';

interface SuccessCriteriaProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNavigation?: boolean;
}

const SuccessCriteria: React.FC<SuccessCriteriaProps> = ({ 
  activeTab, 
  onTabChange, 
  showNavigation = true 
}) => {
  const [expandedSections, setExpandedSections] = useState({});

  const tabs = [
    { id: 'overview', title: 'Assessment Overview' },
    { id: 'project-snapshot', title: 'Project Snapshot' },
    { id: 'success-criteria', title: 'Success Criteria' },
    { id: 'findings', title: 'Critical Findings' },
    { id: 'recommendations', title: 'Key Recommendations' }
  ];

  const toggleSection = (key) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const criteriaStatus = {
    processes: {
      title: "Marketing Process Documentation",
      status: "in-progress",
      completedItems: [
        "Initial vertical structure assessment",
        "Trade show planning overview (23 shows identified)",
        "Preliminary workflow observations"
      ],
      pendingItems: [
        "Formal process documentation needed",
        "Cross-departmental workflow mapping",
        "Approval and review procedures"
      ],
      icon: FileText,
      validation: "Initial stakeholder interviews reveal significant documentation gaps"
    },
    technology: {
      title: "Technology Stack Assessment",
      status: "in-progress",
      completedItems: [
        "Core systems identified (Magento, ResponsePro, Salesforce)",
        "Initial platform inventory completed",
        "Key integration points noted"
      ],
      pendingItems: [
        "Detailed integration mapping required",
        "CRM/Pardot deep-dive needed",
        "Utilization analysis incomplete"
      ],
      icon: Database,
      validation: "Preliminary system review indicates need for detailed assessment"
    },
    agency: {
      title: "Agency Performance Assessment",
      status: "completed",
      completedItems: [
        "Fee structure analysis completed",
        "Service delivery evaluation finished",
        "Performance metrics documented"
      ],
      pendingItems: [
        "Awaiting detailed hour utilization report",
        "Technical development review pending"
      ],
      icon: Target,
      validation: "Comprehensive analysis revealed significant optimization opportunities"
    },
    integration: {
      title: "Sales & Marketing Integration",
      status: "needs-attention",
      completedItems: [
        "Initial vertical structure documented",
        "Basic lead flow understanding"
      ],
      pendingItems: [
        "Lead management process documentation",
        "CRM integration assessment",
        "Cross-vertical coordination mapping"
      ],
      icon: Users,
      validation: "Limited visibility into cross-departmental processes"
    },
    gaps: {
      title: "Gap Analysis & Prioritization",
      status: "completed",
      completedItems: [
        "Agency relationship assessment",
        "Content development constraints",
        "Analytics and data quality issues",
        "Brand architecture evaluation"
      ],
      pendingItems: [
        "Detailed cost impact analysis",
        "Resource requirement planning"
      ],
      icon: AlertCircle,
      validation: "Critical gaps identified and prioritized by business impact"
    }
  };

  const getStatusStyles = (status) => {
    switch(status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'needs-attention':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-12">
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
          <CardTitle className="flex items-center justify-between">
            <span>Phase 1 Success Criteria Assessment Status</span>
            <Clock className="text-blue-600" size={24} />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="prose max-w-none mb-6">
            <p className="text-gray-700">
              Assessment of Phase 1 success criteria reveals varying levels of completion 
              across key areas. While some elements have been thoroughly evaluated, others 
              require additional investigation to meet assessment objectives.
            </p>
          </div>

          <div className="space-y-4">
            {Object.entries(criteriaStatus).map(([key, criteria]) => (
              <Card key={key} className="bg-white border border-gray-200">
                <div 
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(key)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <criteria.icon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{criteria.title}</h3>
                        <div className={`mt-1 text-sm px-2 py-1 rounded-full inline-flex ${getStatusStyles(criteria.status)}`}>
                          {criteria.status.charAt(0).toUpperCase() + criteria.status.slice(1).replace('-', ' ')}
                        </div>
                      </div>
                    </div>
                    {expandedSections[key] ? 
                      <ChevronUp className="text-gray-400" size={20} /> : 
                      <ChevronDown className="text-gray-400" size={20} />
                    }
                  </div>
                </div>

                {expandedSections[key] && (
                  <div className="border-t border-gray-100 p-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Completed Elements</h4>
                        <div className="space-y-2">
                          {criteria.completedItems.map((item, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle2 className="text-green-500 mr-2" size={16} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Pending Investigation</h4>
                        <div className="space-y-2">
                          {criteria.pendingItems.map((item, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <Clock className="text-blue-500 mr-2" size={16} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Current Status</h4>
                        <p className="text-sm text-gray-600">{criteria.validation}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Assessment Progress Summary</h4>
            <p className="text-blue-800">
              Phase 1 assessment has established a clear understanding of agency performance and identified 
              critical gaps, while highlighting areas requiring deeper investigation particularly around 
              process documentation and system integration. Remaining assessment activities will focus on 
              detailed technical review and cross-departmental process mapping.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessCriteria; 