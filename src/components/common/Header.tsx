import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, LogOut, Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => handleNavigation('/')}
            >
              <Briefcase className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">MedJobs</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className={`text-gray-600 hover:text-blue-600 transition-colors ${
                location.pathname === '/' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/jobs')}
              className={`text-gray-600 hover:text-blue-600 transition-colors ${
                location.pathname === '/jobs' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Browse Jobs
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className={`text-gray-600 hover:text-blue-600 transition-colors ${
                location.pathname === '/about' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className={`text-gray-600 hover:text-blue-600 transition-colors ${
                location.pathname === '/contact' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleNavigation(user.role === 'hospital' ? '/hospital/dashboard' : '/jobseeker/dashboard')}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <User className="h-4 w-4 mr-1" />
                  {user.name}
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleNavigation('/login')}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavigation('/signup')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;