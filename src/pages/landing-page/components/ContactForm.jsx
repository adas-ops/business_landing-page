import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    company: '',
    phone: '',
    companySize: '',
    budget: '',
    services: [],
    message: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [companyData, setCompanyData] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [userTimezone, setUserTimezone] = useState('');

  const companySizeOptions = [
    { value: 'startup', label: '1-10 employees (Startup)' },
    { value: 'small', label: '11-50 employees (Small Business)' },
    { value: 'medium', label: '51-200 employees (Medium Business)' },
    { value: 'large', label: '201-1000 employees (Large Business)' },
    { value: 'enterprise', label: '1000+ employees (Enterprise)' }
  ];

  const budgetOptions = [
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: '50k+', label: '$50,000+' }
  ];

  const serviceOptions = [
    { value: 'strategic-planning', label: 'Strategic Planning' },
    { value: 'technology-integration', label: 'Technology Integration' },
    { value: 'growth-acceleration', label: 'Growth Acceleration' },
    { value: 'operational-efficiency', label: 'Operational Efficiency' },
    { value: 'digital-transformation', label: 'Digital Transformation' }
  ];

  // Mock available consultation slots
  const mockSlots = [
    'Tomorrow 10:00 AM',
    'Tomorrow 2:00 PM',
    'Tomorrow 4:00 PM',
    'Day after tomorrow 9:00 AM',
    'Day after tomorrow 11:00 AM',
    'Day after tomorrow 3:00 PM'
  ];

  useEffect(() => {
    // Detect user timezone
    setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    setAvailableSlots(mockSlots);
  }, []);

  useEffect(() => {
    // Mock company data detection when email is entered
    if (formData.email && formData.email.includes('@') && currentStep === 1) {
      setTimeout(() => {
        setCompanyData({
          name: 'Tech Solutions Inc',
          size: 'medium',
          industry: 'Technology'
        });
      }, 1000);
    }
  }, [formData.email, currentStep]);

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    }

    if (step === 2) {
      if (!formData.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.company) newErrors.company = 'Company name is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.companySize) newErrors.companySize = 'Company size is required';
    }

    if (step === 3) {
      if (!formData.budget) newErrors.budget = 'Budget range is required';
      if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
      if (!selectedSlot) newErrors.selectedSlot = 'Please select a consultation time';
      if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleServiceChange = (service, checked) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(4); // Success step
    }, 2000);
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's Get Started</h3>
        <p className="text-slate-600">Enter your email to begin your free consultation request</p>
      </div>

      <Input
        label="Business Email Address"
        type="email"
        placeholder="you@company.com"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        error={errors.email}
        required
        className="text-lg"
      />

      {companyData && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-success/10 border border-success/20 rounded-lg p-4"
        >
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} color="var(--color-success)" />
            <span className="text-success font-semibold">Company Detected</span>
          </div>
          <p className="text-sm text-slate-600">
            {companyData.name} - {companyData.industry} ({companyData.size} company)
          </p>
        </motion.div>
      )}

      <Button
        variant="default"
        size="lg"
        onClick={nextStep}
        fullWidth
        iconName="ArrowRight"
        iconPosition="right"
        className="mt-8"
      >
        Continue
      </Button>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Tell Us About Yourself</h3>
        <p className="text-slate-600">Help us personalize your consultation experience</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Smith"
          value={formData.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
          error={errors.fullName}
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          error={errors.phone}
          required
        />
      </div>

      <Input
        label="Company Name"
        type="text"
        placeholder="Your Company Inc."
        value={formData.company}
        onChange={(e) => handleInputChange('company', e.target.value)}
        error={errors.company}
        required
      />

      <Select
        label="Company Size"
        options={companySizeOptions}
        value={formData.companySize}
        onChange={(value) => handleInputChange('companySize', value)}
        error={errors.companySize}
        placeholder="Select your company size"
        required
      />

      <div className="flex space-x-4">
        <Button
          variant="outline"
          size="lg"
          onClick={prevStep}
          iconName="ArrowLeft"
          iconPosition="left"
          className="flex-1"
        >
          Back
        </Button>
        <Button
          variant="default"
          size="lg"
          onClick={nextStep}
          iconName="ArrowRight"
          iconPosition="right"
          className="flex-1"
        >
          Continue
        </Button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Project Details</h3>
        <p className="text-slate-600">Let us know your budget and service needs</p>
      </div>

      <Select
        label="Budget Range"
        options={budgetOptions}
        value={formData.budget}
        onChange={(value) => handleInputChange('budget', value)}
        error={errors.budget}
        placeholder="Select your budget range"
        required
      />

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">
          Services Needed <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {serviceOptions.map((service) => (
            <Checkbox
              key={service.value}
              label={service.label}
              checked={formData.services.includes(service.value)}
              onChange={(e) => handleServiceChange(service.value, e.target.checked)}
            />
          ))}
        </div>
        {errors.services && (
          <p className="text-red-500 text-sm mt-2">{errors.services}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">
          Select Consultation Time <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {availableSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => setSelectedSlot(slot)}
              className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                selectedSlot === slot
                  ? 'border-primary bg-primary/10 text-primary' :'border-slate-200 hover:border-slate-300'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-2">Times shown in {userTimezone}</p>
        {errors.selectedSlot && (
          <p className="text-red-500 text-sm mt-2">{errors.selectedSlot}</p>
        )}
      </div>

      <Input
        label="Additional Message (Optional)"
        type="text"
        placeholder="Tell us more about your specific needs..."
        value={formData.message}
        onChange={(e) => handleInputChange('message', e.target.value)}
      />

      <Checkbox
        label="I agree to the Terms of Service and Privacy Policy"
        checked={formData.agreedToTerms}
        onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
        error={errors.agreedToTerms}
        required
      />

      <div className="flex space-x-4">
        <Button
          variant="outline"
          size="lg"
          onClick={prevStep}
          iconName="ArrowLeft"
          iconPosition="left"
          className="flex-1"
        >
          Back
        </Button>
        <Button
          variant="default"
          size="lg"
          onClick={handleSubmit}
          loading={isSubmitting}
          iconName="Calendar"
          iconPosition="left"
          className="flex-1"
        >
          Book Consultation
        </Button>
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto">
        <Icon name="CheckCircle" size={40} color="var(--color-success)" />
      </div>
      
      <div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">
          Consultation Booked Successfully!
        </h3>
        <p className="text-lg text-slate-600 mb-6">
          Thank you, {formData.fullName}! Your free strategy session has been scheduled for {selectedSlot}.
        </p>
      </div>

      <div className="bg-slate-50 rounded-xl p-6 text-left">
        <h4 className="font-bold text-slate-900 mb-4">What happens next:</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-slate-700">You'll receive a calendar invite within 5 minutes</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-slate-700">We'll send you a preparation guide 24 hours before</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-slate-700">Our expert will call you at the scheduled time</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-white">
        <h4 className="font-bold mb-2">Instant Access: Business Assessment Tool</h4>
        <p className="mb-4 opacity-90">
          While you wait, get started with our free business assessment to identify your biggest growth opportunities.
        </p>
        <Button
          variant="outline"
          className="bg-white text-primary hover:bg-slate-50"
          iconName="Download"
          iconPosition="left"
        >
          Download Assessment
        </Button>
      </div>
    </motion.div>
  );

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get Your <span className="text-accent">Free Strategy Session</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Book a complimentary 45-minute consultation to discover how we can help 
            transform your business and accelerate your growth.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-elevation p-8">
          {/* Progress Indicator */}
          {currentStep < 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                      step <= currentStep
                        ? 'bg-primary text-white' :'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Form Steps */}
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        {/* Security Badges */}
        {currentStep < 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center space-x-6 mt-8 text-sm text-slate-500"
          >
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={16} />
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} />
              <span>No Spam Guarantee</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;