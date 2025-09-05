import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">MedJobs</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting healthcare professionals with their dream jobs across the medical industry.
            </p>
            <div className="flex space-x-4">
              <Mail className="h-5 w-5 text-gray-400" />
              <Phone className="h-5 w-5 text-gray-400" />
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => navigate('/jobs')} 
                  className="hover:text-white transition-colors"
                >
                  Browse Jobs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/career-advice')} 
                  className="hover:text-white transition-colors"
                >
                  Career Advice
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/salary-guide')} 
                  className="hover:text-white transition-colors"
                >
                  Salary Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/job-alerts')} 
                  className="hover:text-white transition-colors"
                >
                  Job Alerts
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => navigate('/post-job')} 
                  className="hover:text-white transition-colors"
                >
                  Post a Job
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/pricing')} 
                  className="hover:text-white transition-colors"
                >
                  Pricing Plans
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/analytics')} 
                  className="hover:text-white transition-colors"
                >
                  Analytics
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => navigate('/about')} 
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/contact')} 
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/help')} 
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/privacy')} 
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MedJobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;