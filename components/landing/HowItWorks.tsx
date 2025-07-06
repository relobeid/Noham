'use client';

import { motion } from 'framer-motion';
import { Upload, Github, Shield } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <Upload className="w-8 h-8" />,
      title: "Upload Resume",
      description: "Drop in a PDF resume or paste the text. Our parser extracts employment history, skills, and timeline data.",
      detail: "Advanced NLP parsing • Timeline analysis • Skill verification"
    },
    {
      step: "02",
      icon: <Github className="w-8 h-8" />,
      title: "Enter GitHub Username",
      description: "We analyze contribution patterns, repository activity, and coding consistency across the candidate's profile.",
      detail: "Commit frequency • Repository quality • Code authorship"
    },
    {
      step: "03",
      icon: <Shield className="w-8 h-8" />,
      title: "Get Trust Score",
      description: "Receive a comprehensive trust report with red flags, risk assessment, and hiring recommendations.",
      detail: "Risk scoring • Red flag detection • Actionable insights"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-slate relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-copper/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-copper/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title text-white mb-4">How It Works</h2>
          <p className="text-subhero max-w-3xl mx-auto text-white/70">
            Three simple steps to verify your next hire. No complex integrations, no lengthy processes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
            <svg className="w-full h-4" viewBox="0 0 800 16" fill="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="50%" stopColor="#e35238" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                </linearGradient>
              </defs>
              <line x1="100" y1="8" x2="700" y2="8" stroke="url(#lineGradient)" strokeWidth="2" />
              <circle cx="100" cy="8" r="3" fill="#e35238" />
              <circle cx="400" cy="8" r="3" fill="#e35238" />
              <circle cx="700" cy="8" r="3" fill="#e35238" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-copper/10 to-transparent rounded-2xl blur-xl group-hover:from-brand-copper/20 transition-all duration-500"></div>
                
                <div className="relative bg-brand-slate-medium/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-copper/30 transition-all duration-300 hover-lift">
                  {/* Step number - centered */}
                  <div className="flex justify-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-gradient-to-br from-brand-copper to-brand-copper-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-copper/25"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Content - centered */}
                  <div className="text-center space-y-6">
                    <motion.div 
                      className="flex justify-center text-white group-hover:text-brand-copper transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-white group-hover:text-brand-copper transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-sm text-brand-copper font-medium">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-brand-copper/10 to-transparent rounded-full border border-brand-copper/20 backdrop-blur-sm">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-brand-copper rounded-full"
            ></motion.div>
            <span className="text-white font-medium">
              Average analysis time: 2-3 minutes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 