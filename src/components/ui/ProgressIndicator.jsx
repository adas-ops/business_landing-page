import React, { useState, useEffect } from 'react';

const ProgressIndicator = ({ showProgress = true }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');
  const [sectionProgress, setSectionProgress] = useState({});

  const sections = [
    { id: 'hero', label: 'Introduction' },
    { id: 'services', label: 'Services' },
    { id: 'results', label: 'Results' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate overall scroll progress
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Calculate section-specific progress
      const sectionProgressData = {};
      let activeSection = '';
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = scrollTop + rect.top;
          const elementHeight = rect.height;
          
          // Check if section is currently visible
          if (rect.top <= 100 && rect.bottom > 100) {
            activeSection = section.id;
          }
          
          // Calculate progress through this section
          if (scrollTop >= elementTop - windowHeight && scrollTop <= elementTop + elementHeight) {
            const sectionScrolled = Math.max(0, scrollTop - elementTop + windowHeight);
            const sectionProgress = Math.min((sectionScrolled / (elementHeight + windowHeight)) * 100, 100);
            sectionProgressData[section.id] = sectionProgress;
          } else if (scrollTop > elementTop + elementHeight) {
            sectionProgressData[section.id] = 100;
          } else {
            sectionProgressData[section.id] = 0;
          }
        }
      });
      
      setCurrentSection(activeSection);
      setSectionProgress(sectionProgressData);
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  if (!showProgress) return null;

  return (
    <>
      {/* Desktop Progress Indicator */}
      <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-navigation">
        <div className="space-y-4">
          {sections.map((section, index) => {
            const progress = sectionProgress[section.id] || 0;
            const isActive = currentSection === section.id;
            const isCompleted = progress === 100;
            
            return (
              <div key={section.id} className="flex items-center space-x-3">
                <div className="relative">
                  {/* Progress Circle */}
                  <div className="w-3 h-3 rounded-full border-2 border-muted relative overflow-hidden">
                    <div 
                      className={`absolute inset-0 rounded-full transition-all duration-counter ${
                        isCompleted ? 'bg-success' : isActive ? 'bg-accent' : 'bg-muted'
                      }`}
                      style={{
                        transform: `scale(${Math.max(0.1, progress / 100)})`
                      }}
                    />
                  </div>
                  
                  {/* Connecting Line */}
                  {index < sections.length - 1 && (
                    <div className="absolute top-3 left-1/2 w-0.5 h-8 bg-muted transform -translate-x-1/2" />
                  )}
                </div>
                
                {/* Section Label */}
                <div 
                  className={`text-xs font-medium transition-all duration-200 ${
                    isActive ? 'text-primary opacity-100' : 'text-muted-foreground opacity-70'
                  }`}
                >
                  {section.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Circular Progress Indicator */}
      <div className="lg:hidden fixed top-24 right-4 z-navigation">
        <div className="relative w-12 h-12">
          {/* Background Circle */}
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-muted"
            />
            {/* Progress Circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
              className="text-accent transition-all duration-counter"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Progress Percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressIndicator;