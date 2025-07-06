'use client';

import { motion } from 'framer-motion';
import { Search, Github, FileText, AlertTriangle } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Timeline Overlaps",
      description: "Candidates claiming to work multiple full-time jobs simultaneously",
      color: "from-red-500/20 to-red-600/10",
      accent: "border-red-500/30",
      glow: "shadow-red-500/20"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub Silence",
      description: "Developers with impressive resumes but empty or inactive GitHub profiles",
      color: "from-purple-500/20 to-purple-600/10",
      accent: "border-purple-500/30",
      glow: "shadow-purple-500/20"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume Red Flags",
      description: "Inconsistent employment history, inflated experience, or missing details",
      color: "from-yellow-500/20 to-yellow-600/10",
      accent: "border-yellow-500/30",
      glow: "shadow-yellow-500/20"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Job Stacking",
      description: "Remote workers secretly juggling multiple positions without disclosure",
      color: "from-blue-500/20 to-blue-600/10",
      accent: "border-blue-500/30",
      glow: "shadow-blue-500/20"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-slate-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-32 h-32 border border-brand-copper/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-24 h-24 border border-brand-copper/10 rounded-full"
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-copper/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
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
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-brand-copper to-transparent mb-8 mx-auto max-w-xs"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why We Built <span className="text-brand-copper">NoHam</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Remote hiring is broken. Founders are making expensive mistakes that could be prevented with proper verification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.3
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
              
              <div className={`relative bg-brand-slate-medium/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:${problem.accent} transition-all duration-500 ${problem.glow} hover:shadow-xl group-hover:border-opacity-50`}>
                <div className="flex items-start space-x-6">
                  {/* Icon with custom styling */}
                  <motion.div
                    whileHover={{ 
                      rotate: 10,
                      scale: 1.1
                    }}
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center text-white border ${problem.accent} group-hover:shadow-lg transition-all duration-300`}
                  >
                    {problem.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className="text-xl font-semibold text-white mb-3 group-hover:text-brand-copper transition-colors duration-300"
                    >
                      {problem.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                    >
                      {problem.description}
                    </motion.p>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-copper to-brand-copper-light rounded-b-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-4 px-10 py-6 bg-gradient-to-r from-brand-copper/20 via-brand-copper/10 to-transparent rounded-2xl border border-brand-copper/30 backdrop-blur-sm shadow-xl"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-4 h-4 bg-brand-copper rounded-full"
            />
            <span className="text-white font-semibold text-lg">
              One bad hire can cost you 3-5x their annual salary
            </span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="w-4 h-4 bg-brand-copper rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 