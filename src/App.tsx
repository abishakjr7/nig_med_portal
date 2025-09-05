import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import HomePage from './components/pages/HomePage';
import JobsPage from './components/pages/JobsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HelpPage from './components/pages/HelpPage';
import PrivacyPage from './components/pages/PrivacyPage';
import TermsPage from './components/pages/TermsPage';
import CareerAdvicePage from './components/pages/CareerAdvicePage';
import SalaryGuidePage from './components/pages/SalaryGuidePage';
import JobAlertsPage from './components/pages/JobAlertsPage';
import PricingPage from './components/pages/PricingPage';
import AnalyticsPage from './components/pages/AnalyticsPage';
import HospitalDashboard from './components/dashboard/HospitalDashboard';
import JobSeekerDashboard from './components/dashboard/JobSeekerDashboard';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRoles?: string[] }> = ({ 
  children, 
  allowedRoles 
}) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

// Dashboard Router Component
const DashboardRouter: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return user.role === 'hospital' ? <HospitalDashboard /> : <JobSeekerDashboard />;
};

function AppContent() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route 
              path="/login" 
              element={user ? <Navigate to="/dashboard" replace /> : <LoginForm />} 
            />
            <Route 
              path="/signup" 
              element={user ? <Navigate to="/dashboard" replace /> : <SignupForm />} 
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardRouter />
                </ProtectedRoute>
              }
            />
            <Route
              path="/hospital/dashboard"
              element={
                <ProtectedRoute allowedRoles={['hospital']}>
                  <HospitalDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/jobseeker/dashboard"
              element={
                <ProtectedRoute allowedRoles={['jobseeker']}>
                  <JobSeekerDashboard />
                </ProtectedRoute>
              }
            />
            
            {/* Placeholder routes for additional pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/career-advice" element={<CareerAdvicePage />} />
            <Route path="/salary-guide" element={<SalaryGuidePage />} />
            <Route path="/job-alerts" element={<JobAlertsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;