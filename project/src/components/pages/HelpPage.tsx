import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, HelpCircle, Book, Users, Settings } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: <Book className="h-4 w-4" /> },
    { id: 'job-seekers', name: 'Job Seekers', icon: <Users className="h-4 w-4" /> },
    { id: 'hospitals', name: 'Hospitals', icon: <Settings className="h-4 w-4" /> },
    { id: 'account', name: 'Account', icon: <HelpCircle className="h-4 w-4" /> },
  ];

  const faqs = [
    {
      id: 1,
      category: 'job-seekers',
      question: 'How do I create a job seeker account?',
      answer: 'To create a job seeker account, click on "Sign Up" in the top right corner, select "Job Seeker" as your role, and fill in your personal information including name, email, and password. You can also add optional information like phone number and location to help employers find you.',
    },
    {
      id: 2,
      category: 'job-seekers',
      question: 'How do I apply for jobs?',
      answer: 'Once logged in, you can browse available jobs on the Jobs page or from your dashboard. Click "Apply Now" on any job listing, and you can submit a quick application. For better results, consider adding a cover letter and resume URL to your application.',
    },
    {
      id: 3,
      category: 'job-seekers',
      question: 'Can I track my job applications?',
      answer: 'Yes! Your dashboard shows all your applications with their current status: Pending (under review), Reviewed (employer has seen it), Accepted (you got the job!), or Rejected. You\'ll see updates in real-time as employers review your applications.',
    },
    {
      id: 4,
      category: 'job-seekers',
      question: 'How do I save jobs for later?',
      answer: 'Click the heart icon on any job listing to save it to your favorites. You can access all your saved jobs from your dashboard to apply later or keep track of interesting opportunities.',
    },
    {
      id: 5,
      category: 'hospitals',
      question: 'How do I post a job as a hospital?',
      answer: 'After creating a hospital account, go to your dashboard and click "Post Job". Fill in the job details including title, description, location, salary, and requirements. Your job will be visible to all job seekers immediately after posting.',
    },
    {
      id: 6,
      category: 'hospitals',
      question: 'How do I manage job applications?',
      answer: 'From your hospital dashboard, click the eye icon next to any job to view all applications. You can review applicant details and update application status to Reviewed, Accepted, or Rejected. Applicants will see these status updates in real-time.',
    },
    {
      id: 7,
      category: 'hospitals',
      question: 'Can I edit or close job postings?',
      answer: 'Currently, you can view all your posted jobs from your dashboard. Job editing and closing features are coming soon. For now, contact our support team if you need to modify or close a job posting.',
    },
    {
      id: 8,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Password reset functionality is coming soon. For now, if you forget your password, please contact our support team at support@medjobs.com and we\'ll help you regain access to your account.',
    },
    {
      id: 9,
      category: 'account',
      question: 'Can I change my account type from job seeker to hospital?',
      answer: 'Account type changes require creating a new account with the correct role. This ensures proper access to role-specific features. You can create a new account and contact support to help transfer any important data.',
    },
    {
      id: 10,
      category: 'account',
      question: 'Is my personal information secure?',
      answer: 'Yes, we take security seriously. All passwords are encrypted, and we use secure authentication tokens. We never share your personal information with third parties without your consent. Only relevant information is visible to potential employers when you apply for jobs.',
    },
  ];

  const guides = [
    {
      title: 'Getting Started as a Job Seeker',
      description: 'Complete guide to creating your profile and finding medical jobs',
      steps: ['Create your account', 'Complete your profile', 'Browse and apply for jobs', 'Track your applications'],
    },
    {
      title: 'Hospital Recruitment Guide',
      description: 'How to effectively post jobs and manage applications',
      steps: ['Set up your hospital account', 'Post your first job', 'Review applications', 'Manage hiring process'],
    },
    {
      title: 'Best Practices for Medical Professionals',
      description: 'Tips for standing out in the competitive medical job market',
      steps: ['Optimize your profile', 'Write compelling applications', 'Follow up professionally', 'Build your network'],
    },
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Find answers to common questions and get the help you need to succeed on MedJobs.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, and guides..."
              className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Quick Start Guides */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {guides.map((guide, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <ul className="space-y-2">
                      {guide.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-2">
                            {stepIndex + 1}
                          </div>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
                {searchTerm && (
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    ({filteredFAQs.length} results)
                  </span>
                )}
              </h2>
              
              {filteredFAQs.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
                  {filteredFAQs.map((faq) => (
                    <div key={faq.id} className="p-6">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                        {expandedFAQ === faq.id ? (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFAQ === faq.id && (
                        <div className="mt-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Contact Support */}
            <section className="bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Support
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Schedule a Call
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;