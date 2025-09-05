import React, { useState } from 'react';
import { Bell, Plus, Edit, Trash2, MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';

const JobAlertsPage: React.FC = () => {
  const [showCreateAlert, setShowCreateAlert] = useState(false);
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: 'Cardiology Jobs in California',
      specialty: 'Cardiology',
      location: 'California',
      salaryMin: 400000,
      employmentType: 'full_time',
      frequency: 'daily',
      active: true,
      created: '2025-01-10',
      lastSent: '2025-01-15',
      jobsFound: 12,
    },
    {
      id: 2,
      title: 'Emergency Medicine - New York',
      specialty: 'Emergency Medicine',
      location: 'New York',
      salaryMin: 250000,
      employmentType: 'full_time',
      frequency: 'weekly',
      active: true,
      created: '2025-01-05',
      lastSent: '2025-01-14',
      jobsFound: 8,
    },
    {
      id: 3,
      title: 'Nursing Positions - Remote',
      specialty: 'Nursing',
      location: 'Remote',
      salaryMin: 60000,
      employmentType: 'part_time',
      frequency: 'weekly',
      active: false,
      created: '2024-12-20',
      lastSent: '2025-01-07',
      jobsFound: 25,
    },
  ]);

  const [newAlert, setNewAlert] = useState({
    title: '',
    specialty: '',
    location: '',
    salaryMin: '',
    employmentType: 'full_time',
    frequency: 'weekly',
  });

  const specialties = [
    'Any Specialty',
    'Cardiology',
    'Emergency Medicine',
    'Family Medicine',
    'Internal Medicine',
    'Neurology',
    'Nursing',
    'Pediatrics',
    'Radiology',
    'Surgery',
  ];

  const handleCreateAlert = (e: React.FormEvent) => {
    e.preventDefault();
    const alert = {
      id: alerts.length + 1,
      ...newAlert,
      salaryMin: parseInt(newAlert.salaryMin) || 0,
      active: true,
      created: new Date().toISOString().split('T')[0],
      lastSent: 'Never',
      jobsFound: 0,
    };
    setAlerts([...alerts, alert]);
    setNewAlert({
      title: '',
      specialty: '',
      location: '',
      salaryMin: '',
      employmentType: 'full_time',
      frequency: 'weekly',
    });
    setShowCreateAlert(false);
  };

  const toggleAlert = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, active: !alert.active } : alert
    ));
  };

  const deleteAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Bell className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Job Alerts</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Never miss your dream job. Set up personalized alerts and get notified when new opportunities match your criteria.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header with Create Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">My Job Alerts</h2>
            <p className="text-gray-600">Manage your job alert preferences and stay updated on new opportunities.</p>
          </div>
          <button
            onClick={() => setShowCreateAlert(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Alert
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Bell className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Alerts</p>
                <p className="text-2xl font-bold text-gray-900">
                  {alerts.filter(alert => alert.active).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Jobs Found This Week</p>
                <p className="text-2xl font-bold text-gray-900">
                  {alerts.reduce((sum, alert) => sum + alert.jobsFound, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Last Alert Sent</p>
                <p className="text-2xl font-bold text-gray-900">Today</p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Alerts List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Your Job Alerts</h3>
          </div>
          
          {alerts.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No job alerts yet</h3>
              <p className="text-gray-600 mb-4">Create your first job alert to get notified about new opportunities.</p>
              <button
                onClick={() => setShowCreateAlert(true)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Create Your First Alert
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 mr-3">{alert.title}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          alert.active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {alert.active ? 'Active' : 'Paused'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {alert.specialty}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {alert.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {alert.salaryMin > 0 ? `${formatSalary(alert.salaryMin)}+` : 'Any salary'}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {alert.frequency} alerts
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>Created: {new Date(alert.created).toLocaleDateString()}</span>
                        <span>Last sent: {alert.lastSent}</span>
                        <span className="text-purple-600 font-medium">{alert.jobsFound} jobs found</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => toggleAlert(alert.id)}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          alert.active
                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                        }`}
                      >
                        {alert.active ? 'Pause' : 'Activate'}
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => deleteAlert(alert.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* How It Works */}
        <div className="mt-12 bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Job Alerts Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Set Your Criteria</h3>
              <p className="text-gray-600">Define your ideal job by specialty, location, salary, and other preferences.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We Monitor Jobs</h3>
              <p className="text-gray-600">Our system continuously scans new job postings that match your criteria.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Notified</h3>
              <p className="text-gray-600">Receive email alerts with matching jobs based on your chosen frequency.</p>
            </div>
          </div>
        </div>

        {/* Create Alert Modal */}
        {showCreateAlert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Create Job Alert</h3>
                  <button
                    onClick={() => setShowCreateAlert(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <form onSubmit={handleCreateAlert} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alert Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g., Cardiology Jobs in California"
                    value={newAlert.title}
                    onChange={(e) => setNewAlert({ ...newAlert, title: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Specialty
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      value={newAlert.specialty}
                      onChange={(e) => setNewAlert({ ...newAlert, specialty: e.target.value })}
                    >
                      <option value="">Select specialty</option>
                      {specialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="City, State or Remote"
                      value={newAlert.location}
                      onChange={(e) => setNewAlert({ ...newAlert, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Minimum Salary
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="e.g., 100000"
                      value={newAlert.salaryMin}
                      onChange={(e) => setNewAlert({ ...newAlert, salaryMin: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Employment Type
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      value={newAlert.employmentType}
                      onChange={(e) => setNewAlert({ ...newAlert, employmentType: e.target.value })}
                    >
                      <option value="full_time">Full Time</option>
                      <option value="part_time">Part Time</option>
                      <option value="contract">Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alert Frequency
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    value={newAlert.frequency}
                    onChange={(e) => setNewAlert({ ...newAlert, frequency: e.target.value })}
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateAlert(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Create Alert
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobAlertsPage;