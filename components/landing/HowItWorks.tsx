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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4">How It Works</h2>
          <p className="text-subhero max-w-3xl mx-auto">
            Three simple steps to verify your next hire. No complex integrations, no lengthy processes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-px bg-brand-slate/20">
              <div className="absolute left-1/6 top-0 w-px h-0 bg-brand-copper"></div>
              <div className="absolute right-1/6 top-0 w-px h-0 bg-brand-copper"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step number */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-brand-copper rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center text-brand-slate">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-brand-slate">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-slate/70 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="pt-4 border-t border-brand-slate/10">
                    <p className="text-sm text-brand-copper font-medium">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-4 bg-brand-slate/5 rounded-xl">
            <div className="w-3 h-3 bg-brand-copper rounded-full animate-pulse"></div>
            <span className="text-brand-slate font-medium">
              Average analysis time: 2-3 minutes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 