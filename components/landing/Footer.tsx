'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-brand-slate/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="NoHam Logo"
                width={32}
                height={32}
                className="hover-lift"
              />
              <span className="logo-text text-xl">NoHam</span>
            </div>
            <p className="text-brand-slate/70 max-w-md">
              Your trust layer for remote hiring. Catch resume red flags and GitHub silence before you hire.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://twitter.com/nohamdev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-slate/60 hover:text-brand-copper transition-colors hover-lift"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/nohamdev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-slate/60 hover:text-brand-copper transition-colors hover-lift"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-brand-slate mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-brand-slate/70 hover:text-brand-copper transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-brand-slate/70 hover:text-brand-copper transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/auth/signin" className="text-brand-slate/70 hover:text-brand-copper transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-brand-slate mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-brand-slate/70 hover:text-brand-copper transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-brand-slate/70 hover:text-brand-copper transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-brand-slate/70 hover:text-brand-copper transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-brand-slate/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-sm text-brand-slate/60">
            © 2024 NoHam. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-brand-slate/60">
            <span>Built for founders, by founders</span>
            <div className="w-px h-4 bg-brand-slate/20"></div>
            <span>Say no to Sohams</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 