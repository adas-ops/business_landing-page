import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BenefitsGrid = () => {
  const [activeSlider, setActiveSlider] = useState(null);

  const benefits = [
    {
      icon: "DollarSign",
      title: "Revenue Growth",
      description: "Increase your revenue by 200-400% with our proven growth strategies",
      beforeImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      beforeText: "Stagnant revenue, declining profits",
      afterText: "Consistent growth, optimized pricing",
      metrics: {
        before: "$500K annual revenue",
        after: "$1.8M annual revenue",
        timeline: "12 months"
      }
    },
    {
      icon: "Clock",
      title: "Time Efficiency",
      description: "Save 20+ hours per week with automated processes and optimized workflows",
      beforeImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      beforeText: "Manual processes, time wastage",
      afterText: "Automated systems, streamlined operations",
      metrics: {
        before: "60 hours/week workload",
        after: "35 hours/week workload",
        timeline: "6 weeks"
      }
    },
    {
      icon: "Users",
      title: "Team Productivity",
      description: "Boost team performance by 150% with better systems and processes",
      beforeImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      beforeText: "Confused teams, low morale",
      afterText: "Aligned teams, high performance",
      metrics: {
        before: "65% team efficiency",
        after: "92% team efficiency",
        timeline: "8 weeks"
      }
    },
    {
      icon: "Shield",
      title: "Risk Reduction",
      description: "Minimize business risks with comprehensive planning and monitoring",
      beforeImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      beforeText: "High risk exposure, uncertainty",
      afterText: "Controlled risks, predictable outcomes",
      metrics: {
        before: "High risk profile",
        after: "85% risk reduction",
        timeline: "4 weeks"
      }
    },
    {
      icon: "Target",
      title: "Market Position",
      description: "Dominate your market with strategic positioning and competitive advantages",
      beforeImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
      beforeText: "Weak market position, losing to competitors",
      afterText: "Market leader, competitive advantage",
      metrics: {
        before: "15% market share",
        after: "45% market share",
        timeline: "10 months"
      }
    },
    {
      icon: "Smile",
      title: "Customer Satisfaction",
      description: "Achieve 95%+ customer satisfaction with improved service delivery",
      beforeImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      beforeText: "Customer complaints, poor reviews",
      afterText: "Happy customers, 5-star reviews",
      metrics: {
        before: "68% satisfaction rate",
        after: "96% satisfaction rate",
        timeline: "3 months"
      }
    }
  ];

  const handleSliderChange = (benefitIndex, value) => {
    setActiveSlider(benefitIndex);
  };

  return (
    <section id="benefits" className="py-20 bg-slate-50">
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
            See the <span className="text-success">Transformation</span> in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Drag the sliders below to see real before-and-after transformations 
            from businesses just like yours.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-elevation transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                  <Icon name={benefit.icon} size={24} color="var(--color-success)" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6">{benefit.description}</p>

              {/* Before/After Slider */}
              <div className="relative mb-6">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  {/* Before Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={benefit.beforeImage}
                      alt={`Before: ${benefit.beforeText}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-red-500/20"></div>
                    <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>

                  {/* After Image */}
                  <div 
                    className="absolute inset-0 transition-all duration-300"
                    style={{ 
                      clipPath: activeSlider === index 
                        ? 'inset(0 0 0 50%)' 
                        : 'inset(0 0 0 0%)'
                    }}
                  >
                    <Image
                      src={benefit.afterImage}
                      alt={`After: ${benefit.afterText}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-success/20"></div>
                    <div className="absolute bottom-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>

                  {/* Slider Handle */}
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-1 bg-white shadow-lg cursor-col-resize z-10 h-full"
                    style={{ left: activeSlider === index ? '50%' : '0%' }}
                    onMouseEnter={() => setActiveSlider(index)}
                    onMouseLeave={() => setActiveSlider(null)}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Icon name="Move" size={16} color="#64748b" />
                    </div>
                  </div>
                </div>

                {/* Before/After Labels */}
                <div className="flex justify-between mt-4 text-sm">
                  <span className="text-red-600 font-medium">{benefit.beforeText}</span>
                  <span className="text-success font-medium">{benefit.afterText}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Before:</span>
                  <span className="text-sm font-semibold text-red-600">{benefit.metrics.before}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">After:</span>
                  <span className="text-sm font-semibold text-success">{benefit.metrics.after}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Timeline:</span>
                  <span className="text-sm font-semibold text-primary">{benefit.metrics.timeline}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to See These Results in Your Business?
            </h3>
            <p className="text-slate-600 mb-6">
              Join hundreds of successful businesses that have transformed their operations with our proven methods.
            </p>
            <button
              onClick={() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 bg-success hover:bg-success/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              <Icon name="Rocket" size={20} color="white" />
              <span>Start Your Transformation</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsGrid;