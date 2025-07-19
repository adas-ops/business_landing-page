import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [companiesGrown, setCompaniesGrown] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentIndustry, setCurrentIndustry] = useState(0);
  
  const industries = [
    'Technology Companies',
    'Healthcare Providers',
    'Financial Services',
    'Manufacturing Firms',
    'Retail Businesses'
  ];

  const fullText = `Helping ${industries[currentIndustry]} Scale Faster`;

  useEffect(() => {
    // Animate counter
    const counterInterval = setInterval(() => {
      setCompaniesGrown(prev => {
        if (prev < 500) return prev + 5;
        clearInterval(counterInterval);
        return 500;
      });
    }, 20);

    return () => clearInterval(counterInterval);
  }, []);

  useEffect(() => {
    // Typing effect
    let timeout;
    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      // Switch to next industry after pause
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentIndustry((prev) => (prev + 1) % industries.length);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, fullText, currentIndustry]);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Transform Your Business with{' '}
                <span className="text-primary">Professional Services</span>{' '}
                That Actually Deliver Results
              </motion.h1>

              {/* Animated Counter */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center space-x-3 bg-success/10 rounded-full px-6 py-3 w-fit"
              >
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-semibold text-lg">
                  {companiesGrown}+ Companies Grown
                </span>
              </motion.div>

              {/* Typing Effect Subheadline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-slate-600 min-h-[2rem]"
              >
                {typedText}
                <span className="animate-pulse">|</span>
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                onClick={scrollToContact}
                iconName="Calendar"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Strategy Session
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToPortfolio}
                iconName="Play"
                iconPosition="left"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-slate-50"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12+</div>
                <div className="text-sm text-slate-600">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-slate-600">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                {/* Mock Dashboard */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name="TrendingUp" size={20} color="white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Business Growth</div>
                      <div className="text-sm text-slate-500">Real-time Analytics</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-success">+247%</div>
                    <div className="text-sm text-slate-500">This Quarter</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Revenue Growth</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ delay: 1.2, duration: 1.5 }}
                        className="bg-success h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Efficiency</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        transition={{ delay: 1.4, duration: 1.5 }}
                        className="bg-accent h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Client Satisfaction</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '98%' }}
                        transition={{ delay: 1.6, duration: 1.5 }}
                        className="bg-primary h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-accent text-white rounded-full p-4 shadow-lg"
            >
              <Icon name="Zap" size={24} color="white" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-success text-white rounded-full p-4 shadow-lg"
            >
              <Icon name="Target" size={24} color="white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-slate-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;