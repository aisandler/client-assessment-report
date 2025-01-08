import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { ClipboardCheck, BarChart, Users } from 'lucide-react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '../../common/RichTextEditor';

export const AssessmentOverview = () => {
  const activityMetrics = [
    {
      metric: "Stakeholder Sessions",
      value: "15+",
      icon: Users,
      description: "In-depth interviews and working sessions",
      gradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      borderColor: "border-l-blue-500"
    },
    {
      metric: "Performance History",
      value: "18 months",
      icon: BarChart,
      description: "Historical data analyzed across channels",
      gradient: "from-purple-50 to-blue-50",
      iconColor: "text-purple-600",
      borderColor: "border-l-purple-500"
    },
    {
      metric: "Digital Properties",
      value: "12+",
      icon: ClipboardCheck,
      description: "Websites, marketplaces, and platforms evaluated",
      gradient: "from-indigo-50 to-blue-50",
      iconColor: "text-indigo-600",
      borderColor: "border-l-indigo-500"
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="border-t-4 border-t-blue-600 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b pb-8">
          <CardTitle className="text-2xl font-semibold">
            <RichTextEditor 
              initialContent="Digital Marketing Maturity Assessment"
              className="text-2xl font-semibold"
              sectionId="overview-title"
            />
          </CardTitle>
          <RichTextEditor 
            initialContent="Establishing the foundation for transforming Econoco's digital marketing capabilities in 2025"
            className="text-lg text-gray-600 mt-2"
          />
        </CardHeader>
        <CardContent className="pt-8">
          <div className="space-y-8">
            <div className="prose max-w-none">
              <RichTextEditor 
                initialContent={`
                  <p class="text-lg text-gray-700 leading-relaxed">
                    The Digital Marketing Maturity Assessment establishes a foundation for transforming 
                    Econoco's digital marketing capabilities in 2025. Through detailed examination of 
                    current operations, infrastructure, and partnerships, this assessment identifies vital 
                    opportunities while setting clear priorities for strategic enhancement.
                  </p>
                `}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activityMetrics.map((item, idx) => (
                <Card 
                  key={idx} 
                  className={`bg-gradient-to-br ${item.gradient} border-l-4 ${item.borderColor} shadow-sm hover:shadow-md transition-shadow duration-200`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className={`${item.iconColor} bg-white p-2 rounded-lg shadow-sm`}>
                        <item.icon size={28} />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-xl mb-1">{item.value}</div>
                        <div className="font-medium text-gray-700">{item.metric}</div>
                        <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <div className="prose max-w-none">
                <RichTextEditor 
                  initialContent={`
                    <p class="text-gray-700 leading-relaxed">
                      Our evaluation spans Econoco's full digital marketing ecosystem, examining operations 
                      across all major brands and revenue verticals. Through comprehensive stakeholder 
                      interviews, system audits, and performance analysis, we have developed a clear 
                      understanding of current capabilities and future requirements.
                    </p>
                    <p class="text-gray-700 leading-relaxed mt-4">
                      This systematic evaluation, conducted over four weeks in December 2024, revealed 
                      significant opportunities to improve marketing effectiveness and operational 
                      efficiency. Our assessment encompassed stakeholder interviews across all key 
                      functions, detailed analysis of historical performance data, and thorough review 
                      of agency partnerships and technology infrastructure.
                    </p>
                  `}
                />
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-l-4 border-l-blue-500 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-900">
                  <RichTextEditor 
                    initialContent="Strategic Context & Path Forward"
                    className="text-lg font-semibold text-blue-900"
                  />
                </h3>
                <div className="space-y-4">
                  <RichTextEditor 
                    initialContent={`
                      <p class="text-gray-700 leading-relaxed">
                        As this assessment demonstrates, Econoco has considerable opportunity to enhance 
                        its digital marketing capabilities. The findings indicate clear paths for 
                        optimization that will strengthen the company's market position and support 
                        revenue objectives. These insights will directly inform our analytics framework 
                        development and competitive analysis in the coming weeks, ultimately culminating 
                        in a comprehensive digital strategy and implementation roadmap.
                      </p>
                      <p class="text-gray-700 leading-relaxed">
                        The critical findings that follow provide detailed examination of specific 
                        opportunities, with particular focus on areas requiring immediate attention to 
                        establish the foundation for future growth.
                      </p>
                    `}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentOverview;