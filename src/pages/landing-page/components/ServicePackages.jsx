import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServicePackages = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPackage, setSelectedPackage] = useState('growth');

  const packages = [
    {
      id: 'starter',
      name: 'Business Starter',
      description: 'Perfect for small businesses ready to optimize their operations',
      monthlyPrice: 2500,
      annualPrice: 25000,
      savings: 5000,
      popular: false,
      features: [
        'Business Process Analysis',
        'Basic Automation Setup',
        'Monthly Strategy Sessions',
        'Email Support',
        'Performance Dashboard',
        'Basic Reporting'
      ],
      limitations: [
        'Up to 2 team members',
        'Basic integrations only',
        'Standard response time'
      ],
      cta: 'Start Growing',
      color: 'slate'
    },
    {
      id: 'growth',
      name: 'Growth Accelerator',
      description: 'Comprehensive solution for businesses ready to scale rapidly',
      monthlyPrice: 4500,
      annualPrice: 45000,
      savings: 9000,
      popular: true,
      features: [
        'Complete Business Transformation',
        'Advanced Technology Integration',
        'Weekly Strategy Sessions',
        'Priority Support',
        'Custom Dashboard & Analytics',
        'Advanced Reporting & Insights',
        'Team Training & Development',
        'Market Expansion Planning'
      ],
      limitations: [
        'Up to 10 team members',
        'All integrations included'
      ],
      cta: 'Accelerate Growth',
      color: 'primary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solution',
      description: 'Full-service transformation for large organizations',
      monthlyPrice: 8500,
      annualPrice: 85000,
      savings: 17000,
      popular: false,
      features: [
        'End-to-End Business Transformation',
        'Custom Technology Development',
        'Daily Strategy Support',
        'Dedicated Account Manager',
        'Real-time Analytics Platform',
        'Executive Reporting Suite',
        'Organization-wide Training',
        'Multi-market Expansion',
        'Risk Management & Compliance',
        'Custom Integrations'
      ],
      limitations: [
        'Unlimited team members',
        'White-label solutions available'
      ],
      cta: 'Transform Enterprise',
      color: 'accent'
    }
  ];

  const calculateSavings = (pkg) => {
    if (billingCycle === 'annual') {
      return pkg.savings;
    }
    return 0;
  };

  const getPrice = (pkg) => {
    if (billingCycle === 'annual') {
      return pkg.annualPrice;
    }
    return pkg.monthlyPrice;
  };

  const getDisplayPrice = (pkg) => {
    const price = getPrice(pkg);
    if (billingCycle === 'annual') {
      return `$${(price / 12).toLocaleString()}`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Choose Your <span className="text-primary">Growth Package</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to scale with your business needs. 
            All packages include our proven methodology and dedicated support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-slate-100 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                billingCycle === 'monthly' ?'bg-white text-primary shadow-sm' :'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 relative ${
                billingCycle === 'annual' ?'bg-white text-primary shadow-sm' :'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-success text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-card hover:shadow-elevation transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-6">{pkg.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-900">
                        {getDisplayPrice(pkg)}
                      </span>
                      <span className="text-slate-500 ml-2">
                        /{billingCycle === 'annual' ? 'month' : 'month'}
                      </span>
                    </div>
                    
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-success font-semibold mt-2">
                        Save ${calculateSavings(pkg).toLocaleString()} annually
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-slate-900">What's included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} color="var(--color-success)" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {pkg.limitations.length > 0 && (
                  <div className="space-y-4 mb-8 pt-4 border-t border-slate-100">
                    <h4 className="font-semibold text-slate-900">Package details:</h4>
                    <ul className="space-y-2">
                      {pkg.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-center space-x-3">
                          <Icon name="Info" size={16} color="var(--color-primary)" />
                          <span className="text-slate-600 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  variant={pkg.popular ? 'default' : 'outline'}
                  size="lg"
                  fullWidth
                  onClick={() => {
                    setSelectedPackage(pkg.id);
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className={pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}
                >
                  {pkg.cta}
                </Button>

                {/* Money-back Guarantee */}
                <div className="text-center mt-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                    <Icon name="Shield" size={16} />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Compare All Features
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4 font-semibold text-slate-900">Features</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-900">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-900">Growth</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 text-slate-700">Strategy Sessions</td>
                    <td className="py-3 px-4 text-center">Monthly</td>
                    <td className="py-3 px-4 text-center">Weekly</td>
                    <td className="py-3 px-4 text-center">Daily</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 text-slate-700">Team Members</td>
                    <td className="py-3 px-4 text-center">Up to 2</td>
                    <td className="py-3 px-4 text-center">Up to 10</td>
                    <td className="py-3 px-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 text-slate-700">Custom Development</td>
                    <td className="py-3 px-4 text-center">
                      <Icon name="X" size={16} color="var(--color-error)" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-700">Dedicated Manager</td>
                    <td className="py-3 px-4 text-center">
                      <Icon name="X" size={16} color="var(--color-error)" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Icon name="X" size={16} color="var(--color-error)" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Not Sure Which Package is Right for You?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Book a free consultation and we'll recommend the perfect solution for your business needs.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-primary hover:bg-slate-50"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Get Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePackages;