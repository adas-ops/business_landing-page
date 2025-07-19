import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  const recentWins = [
    {
      company: "TechFlow Solutions",
      achievement: "increased revenue by 340%",
      timeAgo: "2 hours ago",
      location: "San Francisco, CA"
    },
    {
      company: "MedCare Plus",
      achievement: "reduced operational costs by 45%",
      timeAgo: "4 hours ago",
      location: "Austin, TX"
    },
    {
      company: "RetailMax Chain",
      achievement: "expanded to 3 new markets",
      timeAgo: "6 hours ago",
      location: "Chicago, IL"
    },
    {
      company: "FinanceFlow Inc",
      achievement: "achieved 99.9% compliance rate",
      timeAgo: "8 hours ago",
      location: "New York, NY"
    }
  ];

  const clientLogos = [
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=120&h=60&fit=crop"
    },
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop"
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop"
    },
    {
      name: "Apple",
      logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=120&h=60&fit=crop"
    },
    {
      name: "Tesla",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop"
    },
    {
      name: "Netflix",
      logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=120&h=60&fit=crop"
    },
    {
      name: "Spotify",
      logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=120&h=60&fit=crop"
    },
    {
      name: "Uber",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management",
      icon: "Award",
      color: "blue"
    },
    {
      name: "SOC 2 Type II",
      description: "Security Compliance",
      icon: "Shield",
      color: "green"
    },
    {
      name: "Google Partner",
      description: "Certified Partner",
      icon: "Star",
      color: "yellow"
    },
    {
      name: "AWS Advanced",
      description: "Cloud Solutions",
      icon: "Cloud",
      color: "orange"
    }
  ];

  const mediaLogos = [
    {
      name: "Forbes",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=50&fit=crop"
    },
    {
      name: "TechCrunch",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop"
    },
    {
      name: "Business Insider",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=50&fit=crop"
    },
    {
      name: "Entrepreneur",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop"
    }
  ];

  const awards = [
    {
      title: "Best Business Consulting Firm 2024",
      organization: "Business Excellence Awards",
      year: "2024"
    },
    {
      title: "Top 50 Fastest Growing Companies",
      organization: "Inc. 5000",
      year: "2023"
    },
    {
      title: "Innovation in Business Technology",
      organization: "Tech Innovation Awards",
      year: "2023"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % recentWins.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="social-proof" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Floating Notification Bar */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white rounded-full shadow-elevation px-6 py-3 border border-slate-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-900">
                  <strong>{recentWins[currentNotification].company}</strong> just{' '}
                  {recentWins[currentNotification].achievement}
                </span>
                <span className="text-xs text-slate-500">
                  {recentWins[currentNotification].timeAgo}
                </span>
                <button
                  onClick={() => setShowNotification(false)}
                  className="ml-2 text-slate-400 hover:text-slate-600"
                >
                  <Icon name="X" size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join hundreds of successful companies that trust us with their most critical business transformations.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">
              Trusted by Fortune 500 Companies
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-200 filter grayscale hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-slate-600">Companies Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-2">$2.5B+</div>
            <div className="text-slate-600">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">12+</div>
            <div className="text-slate-600">Years of Excellence</div>
          </div>
        </motion.div>

        {/* Certifications & Awards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Certifications & Compliance
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-elevation transition-shadow duration-200"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-10 h-10 bg-${cert.color}-100 rounded-lg flex items-center justify-center`}>
                      <Icon name={cert.icon} size={20} color={`var(--color-${cert.color === 'yellow' ? 'warning' : cert.color === 'blue' ? 'primary' : cert.color === 'green' ? 'success' : 'accent'})`} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{cert.name}</div>
                      <div className="text-sm text-slate-600">{cert.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-elevation transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} color="var(--color-accent)" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{award.title}</h4>
                      <p className="text-slate-600 text-sm mb-2">{award.organization}</p>
                      <span className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                        {award.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Media Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {mediaLogos.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Image
                  src={media.logo}
                  alt={media.name}
                  className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-slate-200"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={16} />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>ISO 27001</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;