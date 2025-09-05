import React, { useState } from 'react';
import { DollarSign, TrendingUp, MapPin, Award, Filter, BarChart3 } from 'lucide-react';

const SalaryGuidePage: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');

  const specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'emergency', name: 'Emergency Medicine' },
    { id: 'family', name: 'Family Medicine' },
    { id: 'internal', name: 'Internal Medicine' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'nursing', name: 'Nursing' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'radiology', name: 'Radiology' },
    { id: 'surgery', name: 'Surgery' },
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'california', name: 'California' },
    { id: 'florida', name: 'Florida' },
    { id: 'new-york', name: 'New York' },
    { id: 'texas', name: 'Texas' },
    { id: 'illinois', name: 'Illinois' },
  ];

  const experienceLevels = [
    { id: 'all', name: 'All Experience Levels' },
    { id: 'entry', name: 'Entry Level (0-2 years)' },
    { id: 'mid', name: 'Mid Level (3-7 years)' },
    { id: 'senior', name: 'Senior Level (8-15 years)' },
    { id: 'expert', name: 'Expert Level (15+ years)' },
  ];

  const salaryData = [
    {
      specialty: 'Cardiology',
      location: 'California',
      experience: 'senior',
      minSalary: 450000,
      maxSalary: 650000,
      avgSalary: 550000,
      growth: '+8.5%',
      demand: 'High',
    },
    {
      specialty: 'Emergency Medicine',
      location: 'New York',
      experience: 'mid',
      minSalary: 280000,
      maxSalary: 380000,
      avgSalary: 330000,
      growth: '+6.2%',
      demand: 'Very High',
    },
    {
      specialty: 'Family Medicine',
      location: 'Texas',
      experience: 'entry',
      minSalary: 180000,
      maxSalary: 240000,
      avgSalary: 210000,
      growth: '+4.1%',
      demand: 'High',
    },
    {
      specialty: 'Nursing',
      location: 'Florida',
      experience: 'mid',
      minSalary: 65000,
      maxSalary: 85000,
      avgSalary: 75000,
      growth: '+12.3%',
      demand: 'Very High',
    },
    {
      specialty: 'Surgery',
      location: 'California',
      experience: 'expert',
      minSalary: 500000,
      maxSalary: 800000,
      avgSalary: 650000,
      growth: '+5.7%',
      demand: 'High',
    },
    {
      specialty: 'Radiology',
      location: 'Illinois',
      experience: 'senior',
      minSalary: 350000,
      maxSalary: 450000,
      avgSalary: 400000,
      growth: '+7.2%',
      demand: 'Medium',
    },
  ];

  const topPayingSpecialties = [
    { name: 'Neurosurgery', avgSalary: 746544, growth: '+6.8%' },
    { name: 'Orthopedic Surgery', avgSalary: 633620, growth: '+5.2%' },
    { name: 'Cardiology', avgSalary: 550000, growth: '+8.5%' },
    { name: 'Anesthesiology', avgSalary: 448143, growth: '+4.9%' },
    { name: 'Radiology', avgSalary: 400000, growth: '+7.2%' },
  ];

  const salaryFactors = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Experience Level',
      description: 'Years of practice significantly impact earning potential, with senior physicians earning 2-3x more than entry-level.',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Geographic Location',
      description: 'Salaries vary greatly by state and city, with urban areas typically offering higher compensation.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Specialty Demand',
      description: 'High-demand specialties command premium salaries due to shortage of qualified professionals.',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Education & Certifications',
      description: 'Advanced degrees, board certifications, and specialized training increase earning potential.',
    },
  ];

  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const filteredData = salaryData.filter(item => {
    return (selectedSpecialty === 'all' || item.specialty.toLowerCase().includes(selectedSpecialty)) &&
           (selectedLocation === 'all' || item.location.toLowerCase().includes(selectedLocation)) &&
           (selectedExperience === 'all' || item.experience === selectedExperience);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <DollarSign className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Salary Guide</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Comprehensive salary data and insights to help you understand compensation trends in healthcare.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Filter Salary Data</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              >
                {specialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              >
                {experienceLevels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Salary Data Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Salary Data</h2>
                <p className="text-gray-600 mt-1">
                  {filteredData.length} results found
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Specialty
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Avg Salary
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Range
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Growth
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Demand
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{item.specialty}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{item.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-green-600">
                            {formatSalary(item.avgSalary)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">
                            {formatSalary(item.minSalary)} - {formatSalary(item.maxSalary)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {item.growth}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.demand === 'Very High' 
                              ? 'bg-red-100 text-red-800'
                              : item.demand === 'High'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.demand}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Salary Factors */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Factors Affecting Medical Salaries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {salaryFactors.map((factor, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 p-3 rounded-lg mr-4 flex-shrink-0">
                      {factor.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{factor.title}</h3>
                      <p className="text-gray-600 text-sm">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Top Paying Specialties */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Paying Specialties</h3>
              <div className="space-y-4">
                {topPayingSpecialties.map((specialty, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{specialty.name}</div>
                      <div className="text-xs text-gray-500">{specialty.growth} growth</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">
                        {formatSalary(specialty.avgSalary)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Average Growth</div>
                    <div className="text-xs text-gray-600">+6.8% across all specialties</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Highest Demand</div>
                    <div className="text-xs text-gray-600">Nursing & Emergency Medicine</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Top Markets</div>
                    <div className="text-xs text-gray-600">California, New York, Texas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Salary Calculator CTA */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Salary Estimate</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get a customized salary estimate based on your specific qualifications and location.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Calculate My Salary
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
          <p className="text-sm text-gray-600">
            Salary data is compiled from various sources and represents general market trends. Actual compensation may vary based on individual qualifications, employer, benefits package, and other factors. This information should be used as a general guide only and not as a guarantee of specific salary amounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalaryGuidePage;