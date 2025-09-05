import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Eye, Calendar, Download, Filter } from 'lucide-react';

const AnalyticsPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30');
  const [selectedMetric, setSelectedMetric] = useState('applications');

  const periods = [
    { value: '7', label: 'Last 7 days' },
    { value: '30', label: 'Last 30 days' },
    { value: '90', label: 'Last 3 months' },
    { value: '365', label: 'Last year' },
  ];

  const metrics = [
    { value: 'applications', label: 'Applications', icon: <Users className="h-4 w-4" /> },
    { value: 'views', label: 'Job Views', icon: <Eye className="h-4 w-4" /> },
    { value: 'posts', label: 'Job Posts', icon: <BarChart3 className="h-4 w-4" /> },
  ];

  const overviewStats = [
    {
      title: 'Total Applications',
      value: '1,247',
      change: '+12.5%',
      trend: 'up',
      icon: <Users className="h-8 w-8" />,
      color: 'blue',
    },
    {
      title: 'Job Views',
      value: '8,932',
      change: '+8.2%',
      trend: 'up',
      icon: <Eye className="h-8 w-8" />,
      color: 'green',
    },
    {
      title: 'Active Jobs',
      value: '23',
      change: '+2',
      trend: 'up',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'purple',
    },
    {
      title: 'Response Rate',
      value: '68%',
      change: '+5.3%',
      trend: 'up',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'orange',
    },
  ];

  const topJobs = [
    {
      title: 'Senior Cardiologist',
      applications: 45,
      views: 234,
      posted: '2025-01-10',
      status: 'Active',
    },
    {
      title: 'Emergency Medicine Physician',
      applications: 38,
      views: 189,
      posted: '2025-01-08',
      status: 'Active',
    },
    {
      title: 'Registered Nurse - ICU',
      applications: 67,
      views: 312,
      posted: '2025-01-05',
      status: 'Active',
    },
    {
      title: 'Pediatric Surgeon',
      applications: 23,
      views: 156,
      posted: '2025-01-03',
      status: 'Closed',
    },
    {
      title: 'Radiologist',
      applications: 29,
      views: 178,
      posted: '2024-12-28',
      status: 'Active',
    },
  ];

  const applicationTrends = [
    { date: '2025-01-01', applications: 12, views: 89 },
    { date: '2025-01-02', applications: 15, views: 102 },
    { date: '2025-01-03', applications: 18, views: 134 },
    { date: '2025-01-04', applications: 22, views: 156 },
    { date: '2025-01-05', applications: 28, views: 189 },
    { date: '2025-01-06', applications: 25, views: 167 },
    { date: '2025-01-07', applications: 31, views: 203 },
  ];

  const candidateInsights = [
    { specialty: 'Nursing', percentage: 35, count: 437 },
    { specialty: 'Emergency Medicine', percentage: 22, count: 274 },
    { specialty: 'Internal Medicine', percentage: 18, count: 224 },
    { specialty: 'Surgery', percentage: 12, count: 150 },
    { specialty: 'Cardiology', percentage: 8, count: 100 },
    { specialty: 'Other', percentage: 5, count: 62 },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BarChart3 className="h-16 w-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Analytics Dashboard</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Get insights into your recruitment performance and make data-driven hiring decisions.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-gray-500 mr-2" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <Filter className="h-4 w-4 text-gray-500 mr-2" />
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {metrics.map((metric) => (
                  <option key={metric.value} value={metric.value}>
                    {metric.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">vs last period</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Application Trends Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Trends</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {applicationTrends.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-gray-200 rounded-t relative" style={{ height: '200px' }}>
                    <div
                      className="bg-indigo-500 rounded-t absolute bottom-0 w-full"
                      style={{ height: `${(data.applications / 35) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-2">
                    {new Date(data.date).getDate()}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Applications</span>
              </div>
            </div>
          </div>

          {/* Candidate Insights */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Candidate Specialties</h3>
            <div className="space-y-4">
              {candidateInsights.map((insight, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-900">{insight.specialty}</span>
                      <span className="text-sm text-gray-600">{insight.count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${insight.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 ml-4 w-12 text-right">
                    {insight.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Performing Jobs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Jobs</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applications
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Posted Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversion Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topJobs.map((job, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{job.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{job.applications}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{job.views}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(job.posted).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        job.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {((job.applications / job.views) * 100).toFixed(1)}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights and Recommendations */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">
                  Your ICU Nursing position has the highest conversion rate at 21.5%
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">
                  Applications increased by 12.5% compared to last month
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">
                  Emergency Medicine positions receive 40% more views on weekends
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">
                  Consider posting similar ICU positions to capitalize on high engagement
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">
                  Optimize job descriptions for Pediatric Surgeon role to improve applications
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">
                  Schedule Emergency Medicine posts for Friday-Sunday for maximum visibility
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;