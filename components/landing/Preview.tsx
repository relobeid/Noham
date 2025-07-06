'use client';

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Clock, TrendingUp, Eye } from 'lucide-react';

export default function Preview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-slate-light relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-copper/30 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-brand-copper border-t-transparent rounded-full"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Trust Report <span className="text-brand-copper">Preview</span>
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-brand-copper border-b-transparent rounded-full"
            />
          </div>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Transparency by Design. Every assessment comes with clear explanations and actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mock Report UI */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-copper/20 to-purple-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 group-hover:shadow-brand-copper/25 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Shield className="w-6 h-6 text-brand-copper" />
                  </motion.div>
                  <span className="text-xl font-semibold text-brand-slate">Trust Report</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-brand-slate/60">
                  <Eye className="w-4 h-4" />
                  <span>Generated 2 minutes ago</span>
                </div>
              </div>

              {/* Trust Score */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-brand-slate">Overall Trust Score</span>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-3xl font-bold text-brand-copper"
                  >
                    7.2/10
                  </motion.span>
                </div>
                <div className="w-full bg-brand-slate/10 rounded-full h-4 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                    className="bg-gradient-to-r from-brand-copper to-brand-copper-light h-4 rounded-full relative"
                  >
                    <motion.div
                      animate={{ x: [0, 100, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-8 h-full bg-white/30 rounded-full blur-sm"
                    />
                  </motion.div>
                </div>
                <p className="text-sm text-brand-slate/60 mt-3 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Moderate risk • Proceed with additional verification</span>
                </p>
              </div>

              {/* Findings */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl border border-green-200/50"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-green-800">GitHub Activity Verified</p>
                    <p className="text-sm text-green-700">Consistent commit history over 2+ years</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-xl border border-yellow-200/50"
                >
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-yellow-800">Employment Gap Detected</p>
                    <p className="text-sm text-yellow-700">6-month gap between positions in 2023</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200/50"
                >
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-800">Timeline Verification</p>
                    <p className="text-sm text-blue-700">All employment dates cross-referenced</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                What You <span className="text-brand-copper">Get</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Every report includes comprehensive analysis and clear recommendations for your hiring decision.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Risk Assessment",
                  description: "Numerical scoring with detailed explanations for each factor",
                  icon: "🎯"
                },
                {
                  title: "Red Flag Detection",
                  description: "Automated identification of common hiring risks and warning signs",
                  icon: "🚩"
                },
                {
                  title: "GitHub Analysis",
                  description: "Code quality assessment, contribution patterns, and repository activity",
                  icon: "📊"
                },
                {
                  title: "Timeline Verification",
                  description: "Employment history cross-referencing and gap analysis",
                  icon: "⏰"
                },
                {
                  title: "Actionable Insights",
                  description: "Clear recommendations for follow-up questions and verification steps",
                  icon: "💡"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-2xl"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-brand-copper transition-colors duration-300 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 