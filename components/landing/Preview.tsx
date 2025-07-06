'use client';

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function Preview() {
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
          <h2 className="text-section-title text-white mb-4">Trust Report Preview</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Transparency by Design. Every assessment comes with clear explanations and actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mock Report UI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-brand-copper" />
                <span className="text-xl font-semibold text-brand-slate">Trust Report</span>
              </div>
              <div className="text-sm text-brand-slate/60">
                Generated 2 minutes ago
              </div>
            </div>

            {/* Trust Score */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-brand-slate">Overall Trust Score</span>
                <span className="text-3xl font-bold text-brand-copper">7.2/10</span>
              </div>
              <div className="w-full bg-brand-slate/10 rounded-full h-3">
                <div 
                  className="bg-brand-copper h-3 rounded-full transition-all duration-1000"
                  style={{ width: '72%' }}
                ></div>
              </div>
              <p className="text-sm text-brand-slate/60 mt-2">
                Moderate risk • Proceed with additional verification
              </p>
            </div>

            {/* Findings */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-800">GitHub Activity Verified</p>
                  <p className="text-sm text-green-700">Consistent commit history over 2+ years</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-800">Employment Gap Detected</p>
                  <p className="text-sm text-yellow-700">6-month gap between positions in 2023</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-800">Timeline Verification</p>
                  <p className="text-sm text-blue-700">All employment dates cross-referenced</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                What You Get
              </h3>
              <p className="text-white/70 mb-8">
                Every report includes comprehensive analysis and clear recommendations for your hiring decision.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Risk Assessment",
                  description: "Numerical scoring with detailed explanations for each factor"
                },
                {
                  title: "Red Flag Detection",
                  description: "Automated identification of common hiring risks and warning signs"
                },
                {
                  title: "GitHub Analysis",
                  description: "Code quality assessment, contribution patterns, and repository activity"
                },
                {
                  title: "Timeline Verification",
                  description: "Employment history cross-referencing and gap analysis"
                },
                {
                  title: "Actionable Insights",
                  description: "Clear recommendations for follow-up questions and verification steps"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-brand-copper rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">{feature.title}</h4>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 