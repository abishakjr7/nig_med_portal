import React from 'react';
import { Shield, Eye, Lock, Users, FileText, AlertCircle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <FileText className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you create an account, we collect your name, email address, phone number (optional), and location (optional). For hospitals, we also collect organization details.',
        },
        {
          subtitle: 'Profile Information',
          text: 'Job seekers may provide additional information such as work experience, education, skills, and career preferences to enhance their profiles.',
        },
        {
          subtitle: 'Usage Data',
          text: 'We automatically collect information about how you use our platform, including pages visited, features used, and interaction patterns.',
        },
        {
          subtitle: 'Application Data',
          text: 'When you apply for jobs, we store your application details, cover letters, and any additional documents you provide.',
        },
      ],
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: <Users className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide and improve our job matching services, facilitate communication between job seekers and employers.',
        },
        {
          subtitle: 'Account Management',
          text: 'Your information helps us manage your account, authenticate your identity, and provide customer support.',
        },
        {
          subtitle: 'Communication',
          text: 'We may send you service-related notifications, job alerts (if enabled), and important updates about our platform.',
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage patterns to improve our services, develop new features, and enhance user experience.',
        },
      ],
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: <Eye className="h-6 w-6" />,
      content: [
        {
          subtitle: 'With Employers',
          text: 'When you apply for a job, relevant profile information and application details are shared with the posting hospital or healthcare facility.',
        },
        {
          subtitle: 'Service Providers',
          text: 'We may share information with trusted third-party service providers who help us operate our platform, such as hosting and analytics services.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information when required by law, to protect our rights, or to ensure the safety of our users.',
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the business transaction.',
        },
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Lock className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Encryption',
          text: 'All passwords are encrypted using industry-standard hashing algorithms. Data transmission is secured using HTTPS encryption.',
        },
        {
          subtitle: 'Access Controls',
          text: 'We implement strict access controls to ensure only authorized personnel can access user data, and only when necessary for service provision.',
        },
        {
          subtitle: 'Regular Security Audits',
          text: 'Our systems undergo regular security assessments to identify and address potential vulnerabilities.',
        },
        {
          subtitle: 'Data Backup',
          text: 'We maintain secure backups of user data to prevent loss and ensure service continuity.',
        },
      ],
    },
  ];

  const rights = [
    'Access your personal information and request a copy of the data we hold about you',
    'Correct or update inaccurate or incomplete personal information',
    'Delete your account and associated personal information (subject to legal requirements)',
    'Restrict or object to certain processing of your personal information',
    'Data portability - receive your personal information in a structured, machine-readable format',
    'Withdraw consent for processing where we rely on your consent',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
            MedJobs ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our medical job portal platform.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using our services, you agree to the collection and use of information in accordance with this policy. We encourage you to read this policy carefully and contact us if you have any questions.
          </p>
        </div>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <div key={section.id} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            </div>
            
            <div className="space-y-6">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg mr-4">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            You have certain rights regarding your personal information. Depending on your location, you may have the right to:
          </p>
          
          <ul className="space-y-3">
            {rights.map((right, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-600">{right}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-gray-600 leading-relaxed mt-6">
            To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>
        </div>

        {/* Cookies and Tracking */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies are small data files stored on your device that help us:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Remember your login status and preferences</li>
            <li>Analyze how you use our platform to improve our services</li>
            <li>Provide personalized job recommendations</li>
            <li>Ensure the security of your account</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            You can control cookie settings through your browser preferences. However, disabling certain cookies may limit some functionality of our platform.
          </p>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Account information is retained while your account is active</li>
            <li>Application data is kept for up to 2 years after submission</li>
            <li>Usage analytics data is typically retained for 1 year</li>
            <li>Communication records are kept for up to 3 years for support purposes</li>
          </ul>
        </div>

        {/* International Transfers */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
          <p className="text-gray-600 leading-relaxed">
            Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your personal information during international transfers.
          </p>
        </div>

        {/* Children's Privacy */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us immediately.
          </p>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="space-y-2 text-gray-600">
            <p><strong>Email:</strong> privacy@medjobs.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Healthcare Plaza, Medical District, NY 10001</p>
          </div>
          <p className="text-gray-600 leading-relaxed mt-4">
            We will respond to your inquiry within 30 days of receipt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;