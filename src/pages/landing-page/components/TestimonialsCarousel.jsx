import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Solutions",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4d4?w=100&h=100&fit=crop",
      linkedinVerified: true,
      videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      testimonial: `Working with Business Pro was a game-changer for our startup. They helped us scale from $200K to $2.1M in revenue within 18 months. Their strategic planning and technology integration were exactly what we needed.`,
      results: {
        metric: "Revenue Growth",
        before: "$200K",
        after: "$2.1M",
        timeline: "18 months",
        percentage: "+950%"
      },
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder",
      company: "GrowthLab Inc",
      companyLogo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      linkedinVerified: true,
      videoThumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      testimonial: `The operational efficiency improvements were incredible. We reduced our operational costs by 45% while increasing productivity by 200%. The team's expertise in process automation saved us countless hours.`,
      results: {
        metric: "Operational Efficiency",
        before: "65% efficiency",
        after: "92% efficiency",
        timeline: "8 weeks",
        percentage: "+42%"
      },
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Managing Director",
      company: "Innovate Consulting",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      linkedinVerified: true,
      videoThumbnail: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
      testimonial: `Business Pro transformed our entire approach to client acquisition. Their growth acceleration strategies helped us expand into three new markets and increase our client base by 300% in just one year.`,
      results: {
        metric: "Client Growth",
        before: "50 clients",
        after: "200 clients",
        timeline: "12 months",
        percentage: "+300%"
      },
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      position: "President",
      company: "Manufacturing Plus",
      companyLogo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      linkedinVerified: true,
      videoThumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      testimonial: `The technology integration completely modernized our manufacturing processes. We saw a 60% reduction in production time and 35% cost savings. Their team understood our industry challenges perfectly.`,
      results: {
        metric: "Production Efficiency",
        before: "100 units/day",
        after: "250 units/day",
        timeline: "6 months",
        percentage: "+150%"
      },
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from real business owners who have 
            transformed their companies with our proven strategies.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Video/Image Section */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={currentData.videoThumbnail}
                    alt={`${currentData.name} testimonial`}
                    className="w-full h-80 object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Icon name="Play" size={32} color="var(--color-primary)" />
                    </button>
                  </div>

                  {/* LinkedIn Verification Badge */}
                  {currentData.linkedinVerified && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Icon name="CheckCircle" size={16} color="white" />
                      <span>LinkedIn Verified</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                {/* Quote */}
                <div className="relative">
                  <Icon name="Quote" size={48} color="rgba(255,255,255,0.2)" className="absolute -top-4 -left-4" />
                  <blockquote className="text-xl md:text-2xl leading-relaxed relative z-10">
                    {currentData.testimonial}
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={currentData.avatar}
                    alt={currentData.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                  />
                  <div>
                    <div className="font-bold text-lg">{currentData.name}</div>
                    <div className="text-blue-200">{currentData.position}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Image
                        src={currentData.companyLogo}
                        alt={currentData.company}
                        className="w-6 h-6 rounded object-cover"
                      />
                      <span className="text-blue-200 text-sm">{currentData.company}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} color="#fbbf24" />
                  ))}
                </div>

                {/* Results */}
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-lg mb-4 text-accent">Results Achieved:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-blue-200">Before</div>
                      <div className="font-bold text-lg">{currentData.results.before}</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">After</div>
                      <div className="font-bold text-lg text-accent">{currentData.results.after}</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Timeline</div>
                      <div className="font-bold">{currentData.results.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Growth</div>
                      <div className="font-bold text-success">{currentData.results.percentage}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            {/* Previous/Next Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Icon name="ChevronLeft" size={24} color="white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Icon name="ChevronRight" size={24} color="white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Icon name={isPlaying ? "Pause" : "Play"} size={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;