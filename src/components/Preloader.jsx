import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  // Professional portfolio loading steps
  const loadingSteps = [
    { text: "Initializing portfolio environment", icon: "⚡", progress: 15 },
    { text: "Loading creative modules", icon: "🎨", progress: 30 },
    { text: "Compiling experience data", icon: "📊", progress: 45 },
    { text: "Optimizing visual assets", icon: "✨", progress: 60 },
    { text: "Establishing secure connection", icon: "🔒", progress: 75 },
    { text: "Preparing interactive elements", icon: "🎯", progress: 90 },
    { text: "Ready to showcase work", icon: "🚀", progress: 100 }
  ];

  useEffect(() => {
    let startTime = Date.now();
    const duration = 2500; // 2.5 seconds
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      let newProgress = Math.min((elapsed / duration) * 100, 100);
      
      // Smooth easing
      newProgress = Math.pow(newProgress / 100, 0.7) * 100;
      setProgress(newProgress);
      
      // Update step based on progress
      const stepIndex = loadingSteps.findIndex(step => newProgress <= step.progress);
      setCurrentStep(Math.max(0, stepIndex === -1 ? loadingSteps.length - 1 : stepIndex));
      
      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 200);
      }
    }, 16);
    
    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const currentLoadingData = loadingSteps[currentStep];
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center font-sans"
      >
        <div className="relative max-w-md w-full mx-6">
          
          {/* Main Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
          >
            
            {/* Logo/Icon Area */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-indigo-500/30"
                  style={{ width: '100px', height: '100px', margin: '-8px' }}
                />
                
                {/* Progress Circle */}
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r={radius - 23}
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-white/10"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r={radius - 23}
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    style={{ strokeDasharray: circumference, strokeDashoffset }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">{currentLoadingData.icon}</span>
                </div>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="text-center space-y-4">
              <motion.h3
                key={currentLoadingData.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-lg font-medium"
              >
                {currentLoadingData.text}
              </motion.h3>
              
              {/* Progress Percentage */}
              <div className="flex justify-center items-baseline space-x-1">
                <motion.span
                  key={Math.floor(progress)}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
                >
                  {Math.floor(progress)}
                </motion.span>
                <span className="text-white/50 text-lg">%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
              
              {/* Loading Dots */}
              <div className="flex justify-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -4, 0],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                  />
                ))}
              </div>
            </div>
            
            {/* Footer Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-center text-xs text-white/40 mt-6"
            >
              portfolio • creative developer
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;