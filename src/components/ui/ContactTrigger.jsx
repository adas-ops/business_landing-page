import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const ContactTrigger = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show floating button after scrolling past hero section
      setShowFloatingButton(scrollY > windowHeight * 0.5);
      
      // Check if contact section is visible
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        const rect = contactElement.getBoundingClientRect();
        setIsContactFormVisible(rect.top < windowHeight && rect.bottom > 0);
      }
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const offsetTop = contactElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const focusContactForm = () => {
    const contactForm = document.querySelector('#contact form input[type="text"]');
    if (contactForm) {
      contactForm.focus();
    }
  };

  const handleContactAction = () => {
    if (isContactFormVisible) {
      focusContactForm();
    } else {
      scrollToContact();
    }
  };

  return (
    <>
      {/* Desktop Floating Action Button */}
      <div
        className={`fixed bottom-8 right-8 z-navigation transition-all duration-300 hidden md:block ${
          showFloatingButton && !isContactFormVisible
            ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <Button
          variant="default"
          size="lg"
          onClick={handleContactAction}
          className="shadow-elevation hover:shadow-lg transition-all duration-200 rounded-full px-6"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Start Consultation
        </Button>
      </div>

      {/* Mobile Floating Action Button */}
      <div
        className={`fixed bottom-6 right-6 z-navigation transition-all duration-300 md:hidden ${
          showFloatingButton && !isContactFormVisible
            ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={handleContactAction}
          className="w-14 h-14 bg-accent hover:bg-accent/90 text-white rounded-full shadow-elevation hover:shadow-lg transition-all duration-200 flex items-center justify-center"
        >
          <Icon name="MessageCircle" size={24} color="white" />
        </button>
      </div>

      {/* Sticky CTA Bar for Mobile (appears at bottom when contact not visible) */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-border z-navigation transition-all duration-300 md:hidden ${
          showFloatingButton && !isContactFormVisible
            ? 'translate-y-0' :'translate-y-full'
        }`}
      >
        <div className="p-4">
          <Button
            variant="default"
            onClick={handleContactAction}
            fullWidth
            iconName="ArrowRight"
            iconPosition="right"
          >
            Book Free Consultation
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactTrigger;