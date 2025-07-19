import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PortfolioShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const filters = [
    { id: 'all', label: 'All Industries' },
    { id: 'technology', label: 'Technology' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'finance', label: 'Finance' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'retail', label: 'Retail' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "TechStart Solutions",
      industry: "technology",
      category: "SaaS Startup",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      challenge: "Struggling to scale from $200K to $1M+ revenue with limited resources and inefficient processes",
      solution: "Implemented automated sales funnel, optimized pricing strategy, and streamlined operations",
      results: {
        revenue: { before: "$200K", after: "$2.1M", growth: "+950%" },
        efficiency: { before: "45%", after: "89%", growth: "+98%" },
        timeline: "18 months"
      },
      testimonial: "Business Pro transformed our entire approach to growth. The results exceeded our wildest expectations.",
      clientName: "Sarah Johnson, CEO",
      tags: ["Revenue Growth", "Process Automation", "Strategic Planning"]
    },
    {
      id: 2,
      title: "MedCare Clinic Network",
      industry: "healthcare",
      category: "Healthcare Provider",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
      challenge: "Patient scheduling inefficiencies and poor digital presence affecting growth and patient satisfaction",
      solution: "Digital transformation with automated scheduling, patient portal, and marketing optimization",
      results: {
        patients: { before: "500/month", after: "1,200/month", growth: "+140%" },
        satisfaction: { before: "72%", after: "94%", growth: "+31%" },
        timeline: "12 months"
      },
      testimonial: "The digital transformation completely revolutionized how we serve our patients.",
      clientName: "Dr. Michael Chen, Director",
      tags: ["Digital Transformation", "Patient Experience", "Growth Strategy"]
    },
    {
      id: 3,
      title: "FinanceFlow Solutions",
      industry: "finance",
      category: "Fintech Startup",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      challenge: "Regulatory compliance issues and slow customer acquisition in competitive fintech market",
      solution: "Compliance automation, customer acquisition optimization, and strategic partnerships",
      results: {
        customers: { before: "1,000", after: "15,000", growth: "+1,400%" },
        compliance: { before: "Manual", after: "Automated", growth: "100%" },
        timeline: "15 months"
      },
      testimonial: "They helped us navigate complex regulations while scaling rapidly. Incredible expertise.",
      clientName: "Emily Rodriguez, Founder",
      tags: ["Compliance", "Customer Acquisition", "Strategic Partnerships"]
    },
    {
      id: 4,
      title: "Manufacturing Plus",
      industry: "manufacturing",
      category: "Industrial Equipment",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
      challenge: "Outdated production processes and supply chain inefficiencies impacting profitability",
      solution: "Smart manufacturing implementation, supply chain optimization, and quality management systems",
      results: {
        production: { before: "100 units/day", after: "250 units/day", growth: "+150%" },
        costs: { before: "High", after: "35% reduction", growth: "-35%" },
        timeline: "10 months"
      },
      testimonial: "The production improvements were beyond what we thought possible. ROI was immediate.",
      clientName: "David Thompson, Operations Director",
      tags: ["Smart Manufacturing", "Supply Chain", "Quality Management"]
    },
    {
      id: 5,
      title: "RetailMax Chain",
      industry: "retail",
      category: "Multi-location Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      challenge: "Declining foot traffic and inventory management issues across 15 locations",
      solution: "Omnichannel strategy, inventory optimization, and customer experience enhancement",
      results: {
        sales: { before: "$2.5M", after: "$4.2M", growth: "+68%" },
        inventory: { before: "Manual", after: "Automated", growth: "40% efficiency" },
        timeline: "14 months"
      },
      testimonial: "They modernized our entire retail operation. Sales growth has been phenomenal.",
      clientName: "Lisa Park, CEO",
      tags: ["Omnichannel", "Inventory Management", "Customer Experience"]
    },
    {
      id: 6,
      title: "CloudTech Innovations",
      industry: "technology",
      category: "Cloud Services",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
      challenge: "Scaling infrastructure and customer support for rapid growth in cloud services market",
      solution: "Infrastructure automation, customer success optimization, and strategic market positioning",
      results: {
        customers: { before: "500", after: "5,000", growth: "+900%" },
        uptime: { before: "95%", after: "99.9%", growth: "+5.2%" },
        timeline: "8 months"
      },
      testimonial: "Their technical expertise and strategic guidance were exactly what we needed to scale.",
      clientName: "Alex Kumar, CTO",
      tags: ["Infrastructure", "Customer Success", "Market Positioning"]
    }
  ];

  const filteredCases = selectedFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedFilter);

  const openLightbox = (caseStudy) => {
    setSelectedCase(caseStudy);
  };

  const closeLightbox = () => {
    setSelectedCase(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
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
            Success <span className="text-primary">Stories</span> & Case Studies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore real transformations from businesses across different industries. 
            See specific results, timelines, and ROI from our proven methodologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-elevation transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(caseStudy)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Company Logo */}
                  <div className="absolute top-4 left-4">
                    <Image
                      src={caseStudy.logo}
                      alt={`${caseStudy.title} logo`}
                      className="w-12 h-12 rounded-lg bg-white p-2 object-contain"
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {caseStudy.category}
                  </div>

                  {/* Play Button */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Eye" size={20} color="var(--color-primary)" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{caseStudy.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{caseStudy.challenge}</p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-success">
                        {Object.values(caseStudy.results)[0].growth}
                      </div>
                      <div className="text-xs text-slate-500">
                        {Object.keys(caseStudy.results)[0]}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">
                        {caseStudy.results.timeline}
                      </div>
                      <div className="text-xs text-slate-500">Timeline</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {caseStudy.tags.length > 2 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                        +{caseStudy.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative">
                  <Image
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Icon name="X" size={20} color="#64748b" />
                  </button>

                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{selectedCase.title}</h3>
                    <p className="text-lg opacity-90">{selectedCase.category}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Challenge & Solution */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">The Challenge</h4>
                        <p className="text-slate-700 leading-relaxed">{selectedCase.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Our Solution</h4>
                        <p className="text-slate-700 leading-relaxed">{selectedCase.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Client Testimonial</h4>
                        <blockquote className="text-slate-700 italic leading-relaxed mb-3">
                          "{selectedCase.testimonial}"
                        </blockquote>
                        <cite className="text-slate-600 font-medium">— {selectedCase.clientName}</cite>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-6">Results Achieved</h4>
                      <div className="space-y-6">
                        {Object.entries(selectedCase.results).map(([key, value]) => {
                          if (key === 'timeline') return null;
                          return (
                            <div key={key} className="bg-slate-50 rounded-xl p-6">
                              <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-slate-700">Before:</span>
                                <span className="font-semibold text-slate-900">{value.before}</span>
                              </div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-slate-700">After:</span>
                                <span className="font-semibold text-slate-900">{value.after}</span>
                              </div>
                              <div className="text-center">
                                <span className="inline-block bg-success text-white px-4 py-2 rounded-full font-bold">
                                  {value.growth}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                        
                        <div className="bg-primary/10 rounded-xl p-6 text-center">
                          <div className="text-sm text-primary uppercase tracking-wide mb-2">
                            Project Timeline
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            {selectedCase.results.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Services Provided</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedCase.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of businesses that have transformed their operations and achieved remarkable growth.
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
              iconName="Rocket"
              iconPosition="left"
            >
              Start Your Transformation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;