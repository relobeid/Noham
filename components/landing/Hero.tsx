'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-hero"
            >
              Hiring Just Got{' '}
              <span className="brand-copper">Safer</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-subhero max-w-xl"
            >
              NoHam helps founders catch resume red flags and GitHub silence before they hire their next engineer.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/auth/signin" className="hover-lift">
                <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                  Get Early Access
                </button>
              </Link>
              <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto hover-lift">
                See How It Works
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-4 text-sm text-brand-slate/60"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-copper rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-copper rounded-full"></div>
                <span>Free for early adopters</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-copper/10 rounded-full blur-3xl scale-150"></div>
              <Image
                src="/logo.png"
                alt="NoHam Logo"
                width={300}
                height={300}
                className="relative z-10 hover-lift"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-brand-slate/20"></div>
          <div className="w-1 h-1 bg-brand-copper rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
} 