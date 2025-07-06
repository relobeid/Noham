'use client';

import { motion } from 'framer-motion';
import { Search, Github, FileText, AlertTriangle } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Timeline Overlaps",
      description: "Candidates claiming to work multiple full-time jobs simultaneously"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub Silence",
      description: "Developers with impressive resumes but empty or inactive GitHub profiles"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume Red Flags",
      description: "Inconsistent employment history, inflated experience, or missing details"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Job Stacking",
      description: "Remote workers secretly juggling multiple positions without disclosure"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-slate-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title text-white mb-4">Why We Built NoHam</h2>
          <p className="text-subhero max-w-3xl mx-auto text-white/70">
            Remote hiring is broken. Founders are making expensive mistakes that could be prevented with proper verification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-slate-medium p-8 rounded-xl border border-white/10 hover:border-brand-copper/20 transition-all duration-200 hover-lift"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-copper/10 rounded-lg flex items-center justify-center text-brand-copper">
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-copper/10 rounded-full border border-brand-copper/20">
            <div className="w-2 h-2 bg-brand-copper rounded-full"></div>
            <span className="text-white font-medium">
              One bad hire can cost you 3-5x their annual salary
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 