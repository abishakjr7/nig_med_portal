import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { jobAPI, applicationAPI } from '../../utils/api';
import { Search, MapPin, Heart, Eye, Clock, CheckCircle, XCircle } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  hospital_name: string;
  location: string;
  salary: string;
  description: string;
  created_at: string;
}

interface Application {
  id: number;
  title: string;
  hospital_name: string;
  location: string;
  status: string;
  created_at: string;
  job_id: number;
}

const JobSeekerDashboard: React.FC = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showJobDetails, setShowJobDetails] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [jobsResponse, applicationsResponse] = await Promise.all([
        jobAPI.getAll(),
        applicationAPI.getMy(),
      ]);
      setJobs(jobsResponse.jobs);
      setApplications(applicationsResponse.applications);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await jobAPI.getAll(searchTerm, locationFilter);
      setJobs(response.jobs);
    } catch (error) {
      console.error('Error searching jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const viewJobDetails = async (jobId: number) => {
    try {
      const response = await jobAPI.getById(jobId.toString());
      setSelectedJob(response.job);
      setShowJobDetails(true);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  const applyForJob = async (jobId: number) => {
    try {
      await applicationAPI.apply({
        job_id: jobId,
        cover_letter: '',
        resume_url: '',
      });
      fetchDashboardData();
      setShowJobDetails(false);
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  };

  const hasApplied = (jobId: number) => {
    return applications.some(app => app.job_id === jobId);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'reviewed':
        return <Eye className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Job Seeker Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}</p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Location..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>
            
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search Jobs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Jobs Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Available Jobs</h2>
              </div>

              <div className="divide-y divide-gray-200">
                {jobs.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No jobs found</p>
                ) : (
                  jobs.map((job) => (
                    <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-gray-600 mb-2">{job.hospital_name}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                            {job.salary && (
                              <>
                                <span className="mx-2">•</span>
                                <span>{job.salary}</span>
                              </>
                            )}
                          </div>
                          <p className="text-gray-700 line-clamp-2">{job.description}</p>
                        </div>
                        
                        <div className="flex flex-col space-y-2 ml-4">
                          <button
                            onClick={() => viewJobDetails(job.id)}
                            className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </button>
                          
                          {hasApplied(job.id) ? (
                            <span className="text-green-600 text-sm flex items-center">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Applied
                            </span>
                          ) : (
                            <button
                              onClick={() => applyForJob(job.id)}
                              className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                            >
                              Quick Apply
                            </button>
                          )}
                          
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <Heart className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">My Applications</h2>
              </div>

              <div className="p-6">
                {applications.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No applications yet</p>
                ) : (
                  <div className="space-y-4">
                    {applications.slice(0, 5).map((application) => (
                      <div key={application.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm">{application.title}</h4>
                            <p className="text-xs text-gray-600">{application.hospital_name}</p>
                          </div>
                          <div className="flex items-center">
                            {getStatusIcon(application.status)}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{new Date(application.created_at).toLocaleDateString()}</span>
                          <span className={`px-2 py-1 rounded-full ${
                            application.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800'
                              : application.status === 'accepted'
                              ? 'bg-green-100 text-green-800'
                              : application.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {application.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Job Details Modal */}
        {showJobDetails && selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{selectedJob.title}</h3>
                  <button
                    onClick={() => setShowJobDetails(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">{selectedJob.hospital_name}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedJob.location}
                    {selectedJob.salary && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{selectedJob.salary}</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Job Description</h4>
                  <p className="text-gray-700 whitespace-pre-line">{selectedJob.description}</p>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowJobDetails(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                  {!hasApplied(selectedJob.id) && (
                    <button
                      onClick={() => applyForJob(selectedJob.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSeekerDashboard;