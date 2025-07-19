import React, { useEffect } from 'react';

import SectionNavigator from '../../components/ui/SectionNavigator';
import ContactTrigger from '../../components/ui/ContactTrigger';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import HeroSection from './components/HeroSection';
import ProblemStatement from './components/ProblemStatement';
import SolutionOverview from './components/SolutionOverview';
import BenefitsGrid from './components/BenefitsGrid';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ServicePackages from './components/ServicePackages';
import FAQAccordion from './components/FAQAccordion';
import ContactForm from './components/ContactForm';
import PortfolioShowcase from './components/PortfolioShowcase';
import SocialProof from './components/SocialProof';

const LandingPage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <SectionNavigator />
      
      {/* Progress Indicator */}
      <ProgressIndicator showProgress={true} />
      
      {/* Contact Trigger */}
      <ContactTrigger />

      {/* Page Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Problem Statement */}
        <ProblemStatement />

        {/* Solution Overview */}
        <SolutionOverview />

        {/* Benefits Grid */}
        <BenefitsGrid />

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* Social Proof */}
        <SocialProof />

        {/* Portfolio Showcase */}
        <PortfolioShowcase />

        {/* Service Packages */}
        <ServicePackages />

        {/* FAQ Accordion */}
        <FAQAccordion />

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <span className="text-xl font-bold">Business Pro</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Transforming businesses with professional services that deliver real results. 
                  Your success is our mission.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <div className="w-6 h-6 bg-slate-700 rounded"></div>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <div className="w-6 h-6 bg-slate-700 rounded"></div>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <div className="w-6 h-6 bg-slate-700 rounded"></div>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Services</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Strategic Planning</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Technology Integration</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Growth Acceleration</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Operational Efficiency</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Company</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Contact</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <span className="block">1234 Business Ave</span>
                    <span className="block">Suite 100</span>
                    <span className="block">San Francisco, CA 94105</span>
                  </li>
                  <li>
                    <a href="tel:+1-555-123-4567" className="hover:text-white transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@businesspro.com" className="hover:text-white transition-colors">
                      hello@businesspro.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Business Pro. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;