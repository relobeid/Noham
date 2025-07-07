'use client';

import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

export default function Story() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-slate-light to-brand-slate-medium relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-copper/20 via-transparent to-brand-copper/10"></div>
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            NoHam's Story: <span className="text-brand-copper">Say No to Sohams</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-copper to-brand-copper-light mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-white/80 leading-relaxed"
              >
                It was 2 AM. Another sleepless night debugging production issues. That's when I discovered 
                the truth about <span className="text-brand-copper font-semibold">Soham Parekh</span> – 
                our "senior engineer" who'd been juggling three full-time jobs while our startup burned through runway.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-white/80 leading-relaxed"
              >
                His GitHub? <span className="text-red-400">Radio silent</span> for months. His "experience"? 
                A house of cards that crumbled the moment we needed real delivery. The cost? Nearly $200K 
                in wasted salary and six months of missed milestones.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-white/80 leading-relaxed"
              >
                That night, I made a promise: <span className="text-brand-copper font-semibold">No founder should go through this.</span> {' '}
                NoHam was born from that frustration, that betrayal, and the determination to help early-stage 
                startups avoid the Sohams of the world.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-brand-copper/10 border-l-4 border-brand-copper p-6 rounded-r-lg"
            >
              <p className="text-white/90 italic font-medium">
                "Because every startup deserves better than discovering their 'senior engineer' 
                is actually three part-time developers in a trench coat."
              </p>
              <p className="text-brand-copper mt-2 text-sm">— The NoHam Promise</p>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-brand-slate-medium/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
              >
                <div className="text-3xl font-bold text-brand-copper mb-2">$200K</div>
                <div className="text-white/70 text-sm">Wasted on Bad Hires</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-brand-slate-medium/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
              >
                <div className="text-3xl font-bold text-brand-copper mb-2">6 Months</div>
                <div className="text-white/70 text-sm">Lost Development Time</div>
              </motion.div>
            </div>

            {/* Mission Points */}
            <div className="space-y-4">
              {[
                { icon: <Heart className="w-5 h-5" />, text: "Built by founders, for founders" },
                { icon: <Lightbulb className="w-5 h-5" />, text: "Born from real pain, not theory" },
                { icon: <Users className="w-5 h-5" />, text: "Protecting startup dreams" },
                { icon: <Target className="w-5 h-5" />, text: "Making hiring trustworthy again" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-white/80"
                >
                  <div className="text-brand-copper">{item.icon}</div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand-copper/20 to-transparent rounded-full border border-brand-copper/30">
                <span className="text-brand-copper font-semibold">🚫</span>
                <span className="text-white font-medium">Say No to Sohams</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 