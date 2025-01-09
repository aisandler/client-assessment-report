import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, TrendingUp, Users, FileText, Check, Clock, Hourglass } from 'lucide-react';

const ProjectSnapshot = () => {
  const projectTimeline = [
    { 
      phase: 'Digital Maturity Assessment',
      start: 'December 1, 2024',
      end: 'January 10, 2025',
      status: 'Complete'
    },
    {
      phase: 'Analytic Framework',
      start: 'January 1, 2025',
      end: 'January 31, 2025',
      status: 'In Progress'
    },
    {
      phase: 'Competitive & Market Analysis', 
      start: 'January 1, 2025',
      end: 'January 31, 2025',
      status: 'In Progress'
    },
    {
      phase: 'Digital Strategy & Implementation',
      start: 'February 1, 2025',
      end: 'February 28, 2025',
      status: 'Upcoming'
    }
  ];

  const projectDeliverables = [
    { 
      icon: FileText, 
      title: 'Maturity Assessment Report',
      status: 'Complete'
    },
    { 
      icon: TrendingUp,
      title: 'Analytics Framework Documentation',
      status: 'In Progress'
    },
    { 
      icon: Users,
      title: 'Competitive Analysis Findings',
      status: 'In Progress'
    },
    { 
      icon: Calendar,
      title: 'Digital Strategy Roadmap',
      status: 'Upcoming'
    }
  ];

  return (
    <Card className="border-t-4 border-t-blue-600">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
        <CardTitle className="text-2xl font-semibold">Project Overview and Key Deliverables</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Project Timeline</h3>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Phase</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Start Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">End Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projectTimeline.map((phase, index) => (
                    <tr key={index} className="bg-white">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{phase.phase}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{phase.start}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{phase.end}</td>
                      <td className="px-4 py-3">
                        {phase.status === 'Complete' ? (
                          <div className="flex items-center text-green-600 text-sm">
                            <Check size={16} className="mr-1.5" />
                            <span>{phase.status}</span>
                          </div>
                        ) : phase.status === 'In Progress' ? (
                          <div className="flex items-center text-amber-600 text-sm">
                            <Clock size={16} className="mr-1.5" />
                            <span>{phase.status}</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-blue-600 text-sm">
                            <Hourglass size={16} className="mr-1.5" />
                            <span>{phase.status}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Key Deliverables</h3>
            <div className="space-y-3">
              {projectDeliverables.map((deliverable, index) => (
                <div 
                  key={index} 
                  className={`
                    flex items-center gap-4 p-4 rounded-lg
                    ${deliverable.status === 'Complete' ? 'bg-green-50' :
                      deliverable.status === 'In Progress' ? 'bg-amber-50' : 'bg-blue-50'}
                  `}
                >
                  <div className={`
                    p-2 rounded-lg
                    ${deliverable.status === 'Complete' ? 'bg-green-100 text-green-600' :
                      deliverable.status === 'In Progress' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}
                  `}>
                    <deliverable.icon size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{deliverable.title}</div>
                    <div className={`text-sm ${
                      deliverable.status === 'Complete' ? 'text-green-600' :
                      deliverable.status === 'In Progress' ? 'text-amber-600' : 'text-blue-600'
                    }`}>
                      {deliverable.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectSnapshot; 