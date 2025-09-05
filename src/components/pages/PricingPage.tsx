import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Shield } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Basic',
      icon: <Shield className="h-8 w-8" />,
      description: 'Perfect for individual job seekers starting their career search',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Browse unlimited job listings',
        'Apply to up to 10 jobs per month',
        'Basic profile creation',
        'Email support',
        'Job search filters',
        'Mobile app access',
      ],
      limitations: [
        'Limited to 10 applications per month',
        'Basic profile visibility',
        'Standard support response time',
      ],
      popular: false,
      buttonText: 'Get Started Free',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    },
    {
      name: 'Professional',
      icon: <Star className="h-8 w-8" />,
      description: 'Ideal for active job seekers who want enhanced visibility',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Everything in Basic',
        'Unlimited job applications',
        'Priority profile visibility',
        'Advanced search filters',
        'Resume review service',
        'Interview preparation resources',
        'Job alert notifications',
        'Priority email support',
      ],
      limitations: [],
      popular: true,
      buttonText: 'Start Professional',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
    },
    {
      name: 'Premium',
      icon: <Crown className="h-8 w-8" />,
      description: 'For serious professionals seeking executive-level positions',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'Everything in Professional',
        'Executive job matching',
        'Personal career consultant',
        'LinkedIn profile optimization',
        'Salary negotiation coaching',
        'Direct recruiter connections',
        'Exclusive job opportunities',
        'Phone & video support',
        'Career development workshops',
      ],
      limitations: [],
      popular: false,
      buttonText: 'Go Premium',
      buttonStyle: 'bg-purple-600 text-white hover:bg-purple-700',
    },
  ];

  const hospitalPlans = [
    {
      name: 'Starter',
      icon: <Shield className="h-8 w-8" />,
      description: 'Perfect for small hospitals and clinics',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Post up to 5 active jobs',
        'Basic applicant management',
        'Standard job visibility',
        'Email support',
        'Basic analytics',
      ],
      popular: false,
      buttonText: 'Start Hiring',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    },
    {
      name: 'Growth',
      icon: <Zap className="h-8 w-8" />,
      description: 'For growing healthcare organizations',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Post up to 25 active jobs',
        'Advanced applicant tracking',
        'Priority job placement',
        'Team collaboration tools',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom branding',
      ],
      popular: true,
      buttonText: 'Scale Your Hiring',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
    },
    {
      name: 'Enterprise',
      icon: <Crown className="h-8 w-8" />,
      description: 'For large hospital systems and healthcare networks',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        'Unlimited job postings',
        'Enterprise applicant management',
        'Premium job visibility',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced reporting & analytics',
        'White-label solutions',
        'Phone & video support',
        'Training & onboarding',
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-purple-600 text-white hover:bg-purple-700',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getPrice = (plan: any) => {
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    return price === 0 ? 'Free' : formatPrice(price);
  };

  const getSavings = (plan: any) => {
    if (plan.monthlyPrice === 0) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.yearlyPrice;
    return savings > 0 ? savings : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your needs. Upgrade or downgrade at any time.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-blue-200'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-blue-200'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Save up to 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Job Seeker Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Job Seekers</h2>
            <p className="text-xl text-gray-600">Find your dream medical career with our comprehensive job search tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm border-2 transition-all hover:shadow-lg ${
                  plan.popular ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg mr-3 ${
                      plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{getPrice(plan)}</span>
                      {plan.monthlyPrice > 0 && (
                        <span className="text-gray-500 ml-1">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      )}
                    </div>
                    {billingCycle === 'yearly' && getSavings(plan) && (
                      <p className="text-green-600 text-sm mt-1">
                        Save {formatPrice(getSavings(plan)!)} per year
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hospital Plans */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Hospitals & Healthcare Facilities</h2>
            <p className="text-xl text-gray-600">Attract top medical talent with our powerful recruitment platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hospitalPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm border-2 transition-all hover:shadow-lg ${
                  plan.popular ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg mr-3 ${
                      plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{getPrice(plan)}</span>
                      <span className="text-gray-500 ml-1">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && getSavings(plan) && (
                      <p className="text-green-600 text-sm mt-1">
                        Save {formatPrice(getSavings(plan)!)} per year
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">We offer a free Basic plan for job seekers. Hospitals can try our Starter plan free for 14 days.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600">No setup fees for any plan. You only pay the monthly or yearly subscription fee.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time. Your access continues until the end of your billing period.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-blue-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of healthcare professionals and facilities using MedJobs to advance their careers and find top talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Free Trial
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Contact Sales
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;