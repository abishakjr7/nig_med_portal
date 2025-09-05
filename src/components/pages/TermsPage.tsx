import React from 'react';
import { FileText, Scale, AlertTriangle, Shield, Users, Gavel } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <FileText className="h-6 w-6" />,
      content: 'By accessing and using MedJobs, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    },
    {
      id: 'description',
      title: 'Service Description',
      icon: <Users className="h-6 w-6" />,
      content: 'MedJobs is a medical job portal that connects healthcare professionals with hospitals and medical facilities. We provide a platform for job seekers to find opportunities and for employers to post job listings and manage applications.',
    },
    {
      id: 'accounts',
      title: 'User Accounts',
      icon: <Shield className="h-6 w-6" />,
      content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.',
    },
    {
      id: 'conduct',
      title: 'User Conduct',
      icon: <Scale className="h-6 w-6" />,
      content: 'You agree not to use the service to post false, inaccurate, misleading, defamatory, or libelous content. You will not engage in any activity that interferes with or disrupts the service or servers connected to the service.',
    },
    {
      id: 'content',
      title: 'Content and Intellectual Property',
      icon: <Gavel className="h-6 w-6" />,
      content: 'All content on MedJobs, including text, graphics, logos, and software, is the property of MedJobs or its content suppliers and is protected by copyright and other intellectual property laws.',
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: <AlertTriangle className="h-6 w-6" />,
      content: 'MedJobs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service. Our total liability shall not exceed the amount paid by you for the service.',
    },
  ];

  const prohibitedActivities = [
    'Posting false or misleading job listings or profile information',
    'Harassing, threatening, or discriminating against other users',
    'Attempting to gain unauthorized access to other user accounts',
    'Using automated systems to scrape or collect data from the platform',
    'Posting content that violates applicable laws or regulations',
    'Impersonating another person or entity',
    'Distributing spam, viruses, or other harmful code',
    'Using the service for any illegal or unauthorized purpose',
  ];

  const userRights = [
    'Access and use the platform in accordance with these terms',
    'Post accurate job listings (hospitals) or profile information (job seekers)',
    'Apply for jobs and communicate with potential employers through the platform',
    'Receive customer support and assistance with platform-related issues',
    'Request deletion of your account and associated data',
    'Report violations of these terms or inappropriate behavior',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Please read these terms carefully before using our medical job portal platform.
            </p>
            <p className="text-blue-200 mt-4">Last updated: January 15, 2025</p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to MedJobs. These Terms of Service ("Terms") govern your use of our medical job portal platform and services. By using our platform, you agree to comply with and be bound by these Terms.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These Terms apply to all users of the platform, including job seekers, hospitals, healthcare facilities, and any other visitors or users of our services.
          </p>
        </div>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <div key={section.id} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </div>
        ))}

        {/* Prohibited Activities */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prohibited Activities</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The following activities are strictly prohibited on our platform:
          </p>
          <ul className="space-y-3">
            {prohibitedActivities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                  <AlertTriangle className="w-3 h-3" />
                </div>
                <span className="text-gray-600">{activity}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mt-6">
            Violation of these prohibited activities may result in immediate suspension or termination of your account.
          </p>
        </div>

        {/* User Rights and Responsibilities */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">User Rights and Responsibilities</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Rights</h3>
            <ul className="space-y-3">
              {userRights.map((right, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">{right}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate and up-to-date information in your profile and job postings</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect the rights and privacy of other users</li>
              <li>Use the platform only for legitimate job-seeking or recruitment purposes</li>
            </ul>
          </div>
        </div>

        {/* Payment and Subscriptions */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment and Subscriptions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Some features of our platform may require payment or subscription. By purchasing a subscription or paid service:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>You agree to pay all applicable fees and charges</li>
            <li>All payments are non-refundable unless otherwise specified</li>
            <li>Subscription fees are billed in advance on a recurring basis</li>
            <li>You may cancel your subscription at any time through your account settings</li>
            <li>We reserve the right to change pricing with 30 days notice</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Failure to pay applicable fees may result in suspension or termination of your access to paid features.
          </p>
        </div>

        {/* Privacy and Data Protection */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using our platform, you consent to the collection and use of your information as described in our Privacy Policy. Please review our Privacy Policy to understand our practices.
          </p>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Either party may terminate this agreement at any time. You may delete your account at any time through your account settings. We may suspend or terminate your account if:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>You violate these Terms of Service</li>
            <li>You engage in fraudulent or illegal activities</li>
            <li>Your account remains inactive for an extended period</li>
            <li>We discontinue the service (with reasonable notice)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Upon termination, your right to use the platform will cease immediately, and we may delete your account and associated data.
          </p>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Disputes</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Any disputes arising from these Terms or your use of the platform shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our platform and updating the "Last updated" date. Your continued use of the platform after such changes constitutes acceptance of the new Terms.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-gray-600">
            <p><strong>Email:</strong> legal@medjobs.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Healthcare Plaza, Medical District, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;