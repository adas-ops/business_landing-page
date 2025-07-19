import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FAQAccordion = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How quickly can I expect to see results from your services?",
      answer: `Most clients start seeing measurable improvements within 30-60 days of implementation. However, the timeline varies based on your current situation and chosen package:

• **Immediate wins (Week 1-2):** Process optimization and quick automation fixes
• **Short-term results (Month 1-2):** Improved efficiency and initial revenue growth
• **Long-term transformation (Month 3-6):** Significant business growth and market positioning

We provide detailed milestone tracking so you can monitor progress every step of the way.`,
      videoExplanation: true
    },
    {
      question: "What makes your approach different from other business consultants?",
      answer: `Our unique combination of strategic expertise and cutting-edge technology sets us apart:

• **Data-driven methodology:** Every recommendation is backed by analytics and proven results
• **Technology integration:** We don't just advise - we implement modern solutions
• **Hands-on approach:** We work alongside your team, not just provide reports
• **Proven track record:** 500+ successful transformations with measurable ROI
• **Industry expertise:** Deep knowledge across multiple sectors and business sizes

Unlike traditional consultants who only provide advice, we ensure implementation and results.`,
      videoExplanation: true
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: `Yes! We've successfully helped businesses across diverse industries including:

• **Technology & Software:** SaaS companies, tech startups, software development firms
• **Healthcare:** Medical practices, healthcare technology, pharmaceutical services
• **Financial Services:** Fintech, accounting firms, investment companies
• **Manufacturing:** Industrial equipment, consumer goods, supply chain optimization
• **Professional Services:** Legal firms, consulting companies, marketing agencies
• **E-commerce & Retail:** Online stores, brick-and-mortar retail, marketplace sellers

Our methodology adapts to industry-specific challenges while leveraging universal growth principles.`,
      videoExplanation: false
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: `We stand behind our work with multiple guarantees:

• **30-day money-back guarantee:** Full refund if you're not completely satisfied
• **Results guarantee:** We commit to specific, measurable outcomes in writing
• **Continuous optimization:** We adjust strategies until you achieve your goals
• **Transparent reporting:** Monthly progress reports with clear metrics
• **Direct access:** Regular check-ins with your dedicated strategist

Our success is measured by your success. If you don't see results, we haven't done our job.`,
      videoExplanation: true
    },
    {
      question: "How much involvement is required from my team?",
      answer: `We design our engagement to minimize disruption to your daily operations:

• **Leadership time:** 2-4 hours per week for strategy sessions and decision-making
• **Team involvement:** 1-2 hours per week for implementation support
• **Training sessions:** Scheduled at your convenience, typically 1-2 hours monthly
• **Communication:** Regular updates via your preferred channels (email, Slack, etc.)

We handle the heavy lifting while keeping you informed and in control of all decisions.`,
      videoExplanation: false
    },
    {
      question: "Can you help with both strategy and implementation?",
      answer: `Absolutely! This is one of our key differentiators:

**Strategy Development:**
• Market analysis and competitive positioning
• Growth roadmap and milestone planning
• Risk assessment and mitigation strategies

**Implementation Support:**
• Technology setup and integration
• Process automation and optimization
• Team training and change management
• Performance monitoring and adjustment

We don't just tell you what to do - we help you do it and ensure it works.`,
      videoExplanation: true
    },
    {
      question: "What\'s included in the free consultation?",
      answer: `Your complimentary 45-minute strategy session includes:

• **Business assessment:** Comprehensive review of your current situation
• **Growth opportunity analysis:** Identification of your biggest potential wins
• **Custom roadmap:** Preliminary plan tailored to your specific needs
• **ROI projections:** Estimated returns from recommended improvements
• **Next steps:** Clear action plan whether you work with us or not
• **Resource sharing:** Valuable tools and templates to get started immediately

No sales pressure - just valuable insights you can use right away.`,
      videoExplanation: false
    },
    {
      question: "Do you provide ongoing support after the initial project?",
      answer: `Yes, we offer comprehensive ongoing support options:

• **Monthly optimization reviews:** Continuous improvement and strategy refinement
• **Quarterly business health checks:** Comprehensive performance analysis
• **Annual strategic planning:** Long-term vision and goal setting
• **24/7 technical support:** For all implemented systems and processes
• **Team training updates:** Keeping your staff current with best practices
• **Market adaptation:** Adjusting strategies based on industry changes

Most clients continue working with us long-term because business growth is an ongoing process.`,
      videoExplanation: true
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer: `We take security and confidentiality extremely seriously:

**Security Measures:**
• SOC 2 Type II compliance for data handling
• End-to-end encryption for all communications
• Secure cloud infrastructure with regular audits
• Multi-factor authentication for all access points

**Confidentiality Protection:**
• Comprehensive NDAs signed before any engagement
• Strict internal access controls and need-to-know basis
• Regular security training for all team members
• Compliance with GDPR, CCPA, and industry-specific regulations

Your business information is protected with enterprise-grade security.`,
      videoExplanation: false
    },
    {
      question: "What happens if my business needs change during our engagement?",
      answer: `We build flexibility into every engagement:

• **Agile methodology:** Regular sprint reviews and strategy adjustments
• **Scalable solutions:** Systems that grow with your business
• **Pivot support:** Quick adaptation to market changes or new opportunities
• **Scope adjustments:** Modify focus areas based on emerging priorities
• **Emergency support:** Rapid response to urgent business challenges

Business is dynamic, and our approach reflects that reality. We adapt as you grow.`,
      videoExplanation: true
    },
    {
      question: "Can you work with remote teams and distributed organizations?",
      answer: `Absolutely! We're fully equipped for remote collaboration:

• **Virtual strategy sessions:** High-quality video conferencing with screen sharing
• **Cloud-based project management:** Real-time collaboration and progress tracking
• **Digital documentation:** All deliverables accessible from anywhere
• **Flexible scheduling:** Accommodating different time zones and work schedules
• **Remote training:** Interactive online sessions for team development

Many of our most successful engagements have been with fully remote organizations.`,
      videoExplanation: false
    },
    {
      question: "What\'s your typical client retention rate?",
      answer: `We maintain a 94% client retention rate, which speaks to our results:

• **Long-term partnerships:** Average client relationship lasts 2.5 years
• **Expansion rate:** 78% of clients expand their engagement within 6 months
• **Referral rate:** 65% of new clients come from existing client referrals
• **Satisfaction scores:** 4.9/5 average rating across all engagements

Our clients stay because we consistently deliver measurable value and adapt to their evolving needs.`,
      videoExplanation: true
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our services, process, 
            and what you can expect when working with us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-card overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  {faq.videoExplanation && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon name="ChevronDown" size={20} color="#64748b" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="prose prose-slate max-w-none">
                        <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </div>

                      {faq.videoExplanation && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <Icon name="Play" size={16} color="white" />
                            </div>
                            <div>
                              <div className="font-semibold text-blue-900">Video Explanation Available</div>
                              <div className="text-sm text-blue-700">
                                Watch our detailed video explanation of this topic
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Our team is here to help. Book a free consultation to get personalized 
              answers to your specific business questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                iconName="Calendar"
                iconPosition="left"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Live Chat Support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;