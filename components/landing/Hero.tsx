'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 8,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Status Indicator */}
      <div className="absolute top-8 left-8 z-50 flex items-center gap-1.5 bg-black/20 backdrop-blur-sm border border-green-500/20 rounded-full px-3 py-1.5">
        <div className="relative">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
        </div>
        <span className="text-green-400 text-xs font-medium tracking-wide">ALL SYSTEMS ONLINE</span>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-brand-copper rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-brand-copper rounded-full opacity-10 blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-20 h-20 bg-brand-copper rounded-full opacity-10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-12 h-12 bg-brand-copper rounded-full opacity-10 blur-xl"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              className="flex items-center space-x-4 text-sm text-white/60"
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
              <div className="absolute inset-0 bg-brand-copper/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
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
          <div className="w-px h-16 bg-white/20"></div>
          <div className="w-1 h-1 bg-brand-copper rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
} 