import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Patient-Centered Care',
      description: 'We believe in connecting healthcare professionals who are passionate about improving patient outcomes and delivering compassionate care.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community First',
      description: 'Building a strong community of healthcare professionals who support each other in their career growth and professional development.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence in Matching',
      description: 'Our advanced matching technology ensures that both employers and job seekers find the perfect fit for their needs and goals.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Standards',
      description: 'We maintain the highest standards by thoroughly vetting all healthcare facilities and ensuring quality opportunities for professionals.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      background: 'Former Chief Medical Officer with 20+ years in healthcare administration',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      background: 'Healthcare IT specialist with expertise in medical systems and AI',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Medical Relations',
      background: 'Practicing physician and healthcare recruitment specialist',
    },
    {
      name: 'David Thompson',
      role: 'Director of Operations',
      background: 'Healthcare operations expert with focus on process optimization',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About MedJobs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transforming healthcare recruitment by connecting exceptional medical professionals with leading healthcare institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At MedJobs, we're dedicated to revolutionizing healthcare recruitment by creating meaningful connections between talented medical professionals and exceptional healthcare organizations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that finding the right opportunity in healthcare isn't just about matching skills—it's about finding a place where you can make a real difference in patients' lives while advancing your career.
              </p>
              <p className="text-lg text-gray-600">
                Our platform combines cutting-edge technology with deep healthcare industry expertise to streamline the job search and hiring process, making it more efficient and effective for everyone involved.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <blockquote className="text-lg text-gray-700 italic">
                "Healthcare is about healing, caring, and making a difference. We're here to help you find the place where you can do just that."
              </blockquote>
              <cite className="block mt-4 text-sm text-gray-500">— MedJobs Team</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our community of healthcare professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our leadership team combines deep healthcare expertise with technology innovation to serve our community better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-300 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">
                  {member.background}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Since our founding, we've made a significant impact in healthcare recruitment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Healthcare Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5K+</div>
              <div className="text-blue-100">Healthcare Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;