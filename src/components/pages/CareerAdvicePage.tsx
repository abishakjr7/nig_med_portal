import React, { useState } from 'react';
import { BookOpen, TrendingUp, Users, Award, ChevronRight, Clock, User } from 'lucide-react';

const CareerAdvicePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'job-search', name: 'Job Search', count: 8 },
    { id: 'interview', name: 'Interview Tips', count: 6 },
    { id: 'career-growth', name: 'Career Growth', count: 5 },
    { id: 'specialization', name: 'Specialization', count: 5 },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: 'How to Stand Out in Medical Job Applications',
      excerpt: 'Learn the key strategies to make your medical job application stand out from the competition.',
      category: 'job-search',
      readTime: '8 min read',
      author: 'Dr. Sarah Johnson',
      date: '2025-01-10',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'Mastering Medical Job Interviews: A Complete Guide',
      excerpt: 'Comprehensive guide to preparing for and excelling in medical job interviews.',
      category: 'interview',
      readTime: '12 min read',
      author: 'Dr. Michael Chen',
      date: '2025-01-08',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Building Your Medical Career: From Resident to Specialist',
      excerpt: 'Navigate your career path from residency to becoming a specialist in your chosen field.',
      category: 'career-growth',
      readTime: '10 min read',
      author: 'Dr. Emily Rodriguez',
      date: '2025-01-05',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const articles = [
    {
      id: 4,
      title: 'Negotiating Your Medical Salary: Tips and Strategies',
      excerpt: 'Learn how to effectively negotiate your salary and benefits package in the medical field.',
      category: 'career-growth',
      readTime: '7 min read',
      author: 'Dr. James Wilson',
      date: '2025-01-03',
    },
    {
      id: 5,
      title: 'Common Medical Interview Questions and How to Answer Them',
      excerpt: 'Prepare for your next medical job interview with these commonly asked questions.',
      category: 'interview',
      readTime: '9 min read',
      author: 'Dr. Lisa Thompson',
      date: '2025-01-01',
    },
    {
      id: 6,
      title: 'Transitioning Between Medical Specialties: A Guide',
      excerpt: 'Considering a specialty change? Here\'s what you need to know about transitioning.',
      category: 'specialization',
      readTime: '11 min read',
      author: 'Dr. Robert Davis',
      date: '2024-12-28',
    },
    {
      id: 7,
      title: 'Building Professional Networks in Healthcare',
      excerpt: 'Discover effective strategies for building and maintaining professional relationships.',
      category: 'career-growth',
      readTime: '6 min read',
      author: 'Dr. Amanda Foster',
      date: '2024-12-25',
    },
    {
      id: 8,
      title: 'Resume Writing for Medical Professionals',
      excerpt: 'Create a compelling medical resume that highlights your skills and experience.',
      category: 'job-search',
      readTime: '8 min read',
      author: 'Dr. Kevin Martinez',
      date: '2024-12-22',
    },
    {
      id: 9,
      title: 'Work-Life Balance in Medical Careers',
      excerpt: 'Strategies for maintaining a healthy work-life balance in demanding medical roles.',
      category: 'career-growth',
      readTime: '10 min read',
      author: 'Dr. Rachel Green',
      date: '2024-12-20',
    },
  ];

  const tips = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Continuous Learning',
      description: 'Stay updated with the latest medical advances and technologies in your field.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Professional Networking',
      description: 'Build relationships with colleagues, mentors, and industry professionals.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Skill Development',
      description: 'Continuously develop both technical and soft skills relevant to your career.',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Career Planning',
      description: 'Set clear career goals and create actionable plans to achieve them.',
    },
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? [...featuredArticles, ...articles]
    : [...featuredArticles, ...articles].filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Advice</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Expert guidance and insights to help you advance your medical career and achieve your professional goals.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Career Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

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
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            {selectedCategory === 'all' && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredArticles.map((article) => (
                    <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                          <span className="mx-2">•</span>
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            {article.author}
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                            Read More
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* All Articles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
              </h2>
              <div className="space-y-6">
                {filteredArticles.slice(selectedCategory === 'all' ? 3 : 0).map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                      <span className="mx-2">•</span>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span className="capitalize">{article.category.replace('-', ' ')}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                        Read Full Article
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Get the latest career advice and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvicePage;