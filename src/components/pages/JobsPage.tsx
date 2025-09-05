import React, { useState, useEffect } from 'react';
import { jobAPI } from '../../utils/api';
import { Search, MapPin, Calendar, Building, DollarSign } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  hospital_name: string;
  location: string;
  salary: string;
  description: string;
  created_at: string;
  employment_type: string;
}

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await jobAPI.getAll();
      setJobs(response.jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600">Loading jobs...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Medical Jobs</h1>
          <p className="text-gray-600">Discover your next career opportunity in healthcare</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search job titles, specializations..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="City, state, or zip code..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>
            
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Search Jobs
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {jobs.length} job{jobs.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
            {locationFilter && ` in ${locationFilter}`}
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="text-gray-500 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">No jobs found</p>
                <p>Try adjusting your search criteria or browse all available positions.</p>
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('');
                  fetchJobs();
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Jobs
              </button>
            </div>
          ) : (
            jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {job.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-medium">{job.hospital_name}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-500 text-sm mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(job.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  {job.salary && (
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                  )}
                  {job.employment_type && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {job.employment_type.replace('_', ' ').toUpperCase()}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">
                  {job.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View Details
                    </button>
                    <button className="text-gray-500 hover:text-red-500 text-sm">
                      Save Job
                    </button>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;