import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Calendar, 
  BarChart2, 
  Users, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { RichTextEditor } from '@/components/common/RichTextEditor';

const ProjectSummaryPage = () => {
  const projectObjectives = [
    {
      icon: Target,
      title: "Digital Marketing Maturity Assessment",
      description: "Comprehensive evaluation of current digital marketing processes, team capabilities, and technological infrastructure to identify strategic improvement opportunities."
    },
    {
      icon: BarChart2,
      title: "Analytics Framework Development",
      description: "Design and implement a unified measurement approach that provides actionable insights across owned and paid digital channels."
    },
    {
      icon: Users,
      title: "Competitive Market Analysis",
      description: "Benchmark Econoco's digital presence against industry competitors, identifying unique market positioning and growth opportunities."
    }
  ];

  const projectTimeline = [
    {
      phase: "Discovery & Assessment",
      duration: "December 2024",
      activities: [
        "Stakeholder interviews",
        "Current state documentation",
        "Initial capability assessment"
      ]
    },
    {
      phase: "Competitive & Market Analysis",
      duration: "January 2025",
      activities: [
        "Competitor benchmarking",
        "Market trend identification",
        "Customer behavior analysis"
      ]
    },
    {
      phase: "Analytics Framework",
      duration: "January 2025",
      activities: [
        "Tracking implementation",
        "Reporting structure development",
        "Performance metric definition"
      ]
    },
    {
      phase: "Strategy Development",
      duration: "February 2025",
      activities: [
        "Synthesize insights",
        "Strategic roadmap creation",
        "Stakeholder validation"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="border-t-4 border-t-blue-600 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
          <CardTitle className="text-2xl font-semibold">
            <RichTextEditor
              initialContent="Econoco Digital Marketing Strategy Initiative"
              sectionId="project-title"
              className="text-2xl font-semibold"
            />
          </CardTitle>
          <div className="text-lg text-gray-600 mt-2">
            <RichTextEditor
              initialContent="Strategic Roadmap for Digital Marketing Transformation in 2025"
              sectionId="project-subtitle"
              className="text-lg text-gray-600"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="prose max-w-none mb-8">
            <RichTextEditor
              initialContent={`
                <p class="text-lg text-gray-700 leading-relaxed">
                  This comprehensive digital marketing strategy initiative aims to transform Econoco's 
                  digital capabilities by conducting a thorough assessment of current processes, 
                  implementing advanced analytics frameworks, and developing a strategic roadmap 
                  for sustainable digital growth.
                </p>
              `}
              sectionId="project-overview"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {projectObjectives.map((objective, idx) => (
              <Card key={idx} className="bg-gray-50 border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <objective.icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{objective.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-lg">Project Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectTimeline.map((phase, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-blue-900">{phase.phase}</h4>
                        <span className="text-sm text-blue-600">{phase.duration}</span>
                      </div>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, actIdx) => (
                          <li 
                            key={actIdx} 
                            className="flex items-center text-gray-600 text-sm"
                          >
                            <ArrowRight className="mr-2 text-blue-500" size={14} />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-lg">Key Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Digital Marketing Maturity Assessment Report",
                    "Analytics Framework Documentation",
                    "Competitive & Market Analysis Findings",
                    "Digital Strategy Roadmap"
                  ].map((deliverable, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center bg-white p-3 rounded-lg shadow-sm"
                    >
                      <CheckCircle2 className="text-green-600 mr-3" size={20} />
                      <span className="text-gray-800 text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectSummaryPage; 