import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProblemStatement = () => {
  const [selectedProblem, setSelectedProblem] = useState(0);

  const problems = [
    {
      id: 0,
      title: "Growth Stagnation",
      icon: "TrendingDown",
      description: "Your business has plateaued and you\'re struggling to break through to the next level",
      statistics: [
        { label: "Businesses experiencing stagnation", value: "73%" },
        { label: "Average revenue decline", value: "-15%" },
        { label: "Time to recover without help", value: "18 months" }
      ],
      consequences: [
        "Lost market opportunities",
        "Declining team morale",
        "Increased competition advantage",
        "Reduced profitability"
      ]
    },
    {
      id: 1,
      title: "Operational Inefficiency",
      icon: "AlertTriangle",
      description: "Manual processes and outdated systems are costing you time and money every day",
      statistics: [
        { label: "Time wasted on manual tasks", value: "40%" },
        { label: "Cost of inefficient processes", value: "$50K/year" },
        { label: "Employee productivity loss", value: "25%" }
      ],
      consequences: [
        "Higher operational costs",
        "Employee burnout",
        "Customer service delays",
        "Missed deadlines"
      ]
    },
    {
      id: 2,
      title: "Technology Gaps",
      icon: "Wifi",
      description: "Your technology stack is holding you back from competing in the modern marketplace",
      statistics: [
        { label: "Businesses with outdated tech", value: "68%" },
        { label: "Revenue impact of tech gaps", value: "-30%" },
        { label: "Time to modernize alone", value: "2+ years" }
      ],
      consequences: [
        "Competitive disadvantage",
        "Security vulnerabilities",
        "Poor customer experience",
        "Limited scalability"
      ]
    }
  ];

  return (
    <section id="problems" className="py-20 bg-slate-900 text-white">
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
            Are These <span className="text-red-400">Business Challenges</span> Holding You Back?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Most business owners face these critical issues that prevent growth and success. 
            Click on each challenge to see the real impact on your business.
          </p>
        </motion.div>

        {/* Problem Selector */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.button
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProblem(index)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedProblem === index
                  ? 'border-red-400 bg-red-400/10' :'border-slate-700 bg-slate-800 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  selectedProblem === index ? 'bg-red-400' : 'bg-slate-700'
                }`}>
                  <Icon 
                    name={problem.icon} 
                    size={24} 
                    color={selectedProblem === index ? 'white' : '#94a3b8'} 
                  />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
              </div>
              <p className="text-slate-300">{problem.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Problem Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProblem}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-2xl p-8"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Statistics */}
              <div>
                <h4 className="text-2xl font-bold mb-6 text-red-400">The Numbers Don't Lie</h4>
                <div className="space-y-6">
                  {problems[selectedProblem].statistics.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between p-4 bg-slate-700 rounded-lg"
                    >
                      <span className="text-slate-300">{stat.label}</span>
                      <span className="text-2xl font-bold text-red-400">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Consequences */}
              <div>
                <h4 className="text-2xl font-bold mb-6 text-red-400">What This Costs You</h4>
                <div className="space-y-4">
                  {problems[selectedProblem].consequences.map((consequence, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-300">{consequence}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-8 p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg border border-red-400/30"
                >
                  <p className="text-lg font-semibold mb-4">
                    Don't let these problems continue to drain your business potential.
                  </p>
                  <button
                    onClick={() => {
                      const solutionElement = document.getElementById('solutions');
                      if (solutionElement) {
                        solutionElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <span>See Our Solutions</span>
                    <Icon name="ArrowRight" size={16} color="white" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProblemStatement;