'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-slate-dark via-brand-slate to-brand-slate-dark relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large rotating rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-brand-copper/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 border border-brand-copper/5 rounded-full"
        />
        
        {/* Floating sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-brand-copper/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-copper/10 rounded-full border border-brand-copper/20 backdrop-blur-sm mb-8"
          >
            <Shield className="w-5 h-5 text-brand-copper" />
            <span className="text-brand-copper font-medium">Limited Beta Access</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Stop
            <br />
            <span className="text-brand-copper relative">
              Hiring Sohams
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-brand-copper to-brand-copper-light rounded-full"
              />
            </span>
            ?
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join the beta and protect your startup from costly hiring mistakes. 
            Be among the first to experience hiring with confidence.
          </motion.p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(227, 82, 56, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              scale: { duration: 0.15 },
              boxShadow: { duration: 0.15 }
            }}
            className="group relative px-12 py-5 bg-gradient-to-r from-brand-copper to-brand-copper-light text-white font-semibold rounded-2xl text-lg shadow-xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full"
              animate={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            />
            <div className="relative flex items-center space-x-3">
              <Zap className="w-6 h-6" />
              <span>Join Waitlist</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(227, 82, 56, 0.1)",
              borderColor: "rgba(227, 82, 56, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              scale: { duration: 0.15 },
              backgroundColor: { duration: 0.15 },
              borderColor: { duration: 0.15 }
            }}
            className="group px-12 py-5 border-2 border-brand-copper/30 text-white font-semibold rounded-2xl text-lg backdrop-blur-sm"
          >
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-brand-copper" />
              <span>Founders: Talk to Us</span>
            </div>
          </motion.button>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: "🔒",
              title: "Enterprise Security",
              description: "Bank-level encryption for all data"
            },
            {
              icon: "⚡",
              title: "Lightning Fast",
              description: "Reports generated in 2-3 minutes"
            },
            {
              icon: "🎯",
              title: "Proven Accuracy",
              description: "95%+ accuracy in red flag detection"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-copper/30 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-4xl mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-copper transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm group-hover:text-white/80 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white/50 text-lg">
            Because every great company deserves great people
          </p>
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-brand-copper to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
} 