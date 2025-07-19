import React, { useState, useEffect, useCallback } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const SectionNavigator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigationSections = [
    { id: 'services', label: 'Services', icon: 'Briefcase' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'about', label: 'About', icon: 'Users' },
    { id: 'contact', label: 'Contact', icon: 'MessageCircle' }
  ];

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Update scroll direction
    setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 100);
    setLastScrollY(currentScrollY);
    
    // Update scroll progress
    const progress = (currentScrollY / (documentHeight - windowHeight)) * 100;
    setScrollProgress(Math.min(progress, 100));
    
    // Update active section based on scroll position
    const sections = navigationSections.map(section => ({
      ...section,
      element: document.getElementById(section.id)
    })).filter(section => section.element);
    
    const currentSection = sections.find(section => {
      const rect = section.element.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom > 100;
    });
    
    if (currentSection) {
      setActiveSection(currentSection.id);
    } else if (currentScrollY < 100) {
      setActiveSection('hero');
    }
  }, [lastScrollY, navigationSections]);

  useEffect(() => {
    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };
    
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const offsetTop = contactElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-navigation transition-transform duration-300 ${
          isScrollingUp ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-counter" 
             style={{ width: `${scrollProgress}%` }} />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-navigation">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} color="white" />
                </div>
                <span className="text-xl font-bold text-primary">Business Pro</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-muted ${
                    activeSection === section.id 
                      ? 'text-primary bg-primary/10' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name={section.icon} size={16} />
                  <span>{section.label}</span>
                </button>
              ))}
              
              <Button 
                variant="default" 
                onClick={handleContactClick}
                className="ml-4"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-backdrop md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-navigation left-0 right-0 bottom-0 bg-white z-mobile-menu md:hidden">
            <div className="p-6 space-y-6">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-3 w-full p-4 rounded-lg text-left transition-smooth ${
                    activeSection === section.id 
                      ? 'text-primary bg-primary/10' :'text-text-secondary hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={section.icon} size={20} />
                  <span className="text-lg font-medium">{section.label}</span>
                </button>
              ))}
              
              <div className="pt-6 border-t border-border">
                <Button 
                  variant="default" 
                  onClick={handleContactClick}
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SectionNavigator;