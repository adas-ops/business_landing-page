import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SolutionOverview = () => {
  const solutions = [
    {
      icon: "Target",
      title: "Strategic Planning",
      description: "Comprehensive business strategy development tailored to your industry and growth goals",
      benefits: [
        "Market analysis and positioning",
        "Competitive advantage identification",
        "Growth roadmap creation",
        "Risk assessment and mitigation"
      ],
      roi: "300% average ROI increase",
      timeline: "Results in 30-60 days"
    },
    {
      icon: "Zap",
      title: "Technology Integration",
      description: "Modern technology solutions that streamline operations and boost productivity",
      benefits: [
        "Process automation",
        "System integration",
        "Digital transformation",
        "Performance optimization"
      ],
      roi: "40% operational cost reduction",
      timeline: "Implementation in 2-8 weeks"
    },
    {
      icon: "TrendingUp",
      title: "Growth Acceleration",
      description: "Proven methodologies to scale your business faster and more efficiently",
      benefits: [
        "Revenue optimization",
        "Market expansion strategies",
        "Team development",
        "Performance tracking"
      ],
      roi: "250% revenue growth potential",
      timeline: "Visible results in 60-90 days"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
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
            Our <span className="text-primary">Proven Solutions</span> Drive Real Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We've helped over 500 companies overcome their biggest challenges with our 
            three-pillar approach to business transformation.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-elevation transition-all duration-300 border border-slate-100"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon 
                    name={solution.icon} 
                    size={32} 
                    color="var(--color-primary)"
                    className="group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {solution.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* ROI and Timeline */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Expected ROI:</span>
                  <span className="font-semibold text-success">{solution.roi}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Timeline:</span>
                  <span className="font-semibold text-primary">{solution.timeline}</span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

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
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss which solution is perfect for your specific challenges and goals.
            </p>
            <button
              onClick={() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              <Icon name="Calendar" size={20} />
              <span>Schedule Free Consultation</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionOverview;