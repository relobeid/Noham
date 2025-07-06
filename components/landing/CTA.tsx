'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-slate">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to hire with{' '}
              <span className="text-brand-copper">confidence?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join the waitlist and be among the first founders to eliminate hiring risks with NoHam.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/auth/signin" className="group">
              <button className="bg-brand-copper text-white font-medium px-8 py-4 rounded-lg text-lg hover:bg-brand-copper-dark transition-all duration-200 hover:shadow-lg hover:shadow-brand-copper/25 hover:-translate-y-0.5 flex items-center space-x-2">
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <button className="bg-transparent text-white border border-white/20 font-medium px-8 py-4 rounded-lg text-lg hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Founders: Talk to Us</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-brand-copper mb-2">
                  Early Access
                </div>
                <p className="text-white/70 text-sm">
                  First 100 users get lifetime access to core features
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-copper mb-2">
                  No Setup
                </div>
                <p className="text-white/70 text-sm">
                  Upload resume, enter GitHub username, get results
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-copper mb-2">
                  2-3 Minutes
                </div>
                <p className="text-white/70 text-sm">
                  Average time to complete full candidate analysis
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 