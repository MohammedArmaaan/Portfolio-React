import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [text, setText] = useState("SYSTEM_INTEGRITY_CHECK");
  const [progress, setProgress] = useState(0);

  // More professional technical status messages
  const bootSequence = [
    "INITIALIZING_CORE_MODULES...",
    "LOADING_ASSETS_MEMORY...",
    "ESTABLISHING_SECURE_UPLINK...",
    "RENDERING_INTERFACE...",
    "WELCOME_USER // ARMAAN"
  ];

  useEffect(() => {
    // 1. Smoother Progress Logic
    const totalTime = 2200; // Slightly less than the parent 2500ms to ensure completion
    const intervalTime = 30;
    const increment = 100 / (totalTime / intervalTime);

    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Adding a tiny bit of random variation for realism
        const variation = Math.random() * 0.5;
        return Math.min(old + increment + variation, 100);
      });
    }, intervalTime);

    // 2. Changing Text Logic based on progress
    const wordTimer = setInterval(() => {
      setProgress((currentProgress) => {
        // Change text based on how far progress has reached
        if (currentProgress < 20) setText(bootSequence[0]);
        else if (currentProgress < 45) setText(bootSequence[1]);
        else if (currentProgress < 70) setText(bootSequence[2]);
        else if (currentProgress < 90) setText(bootSequence[3]);
        else setText(bootSequence[4]);
        return currentProgress;
      });
    }, 200);

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, []);

  // Calculating circle circumference for SVG animation
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Custom bezier for premium feel
      }}
      className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center font-mono overflow-hidden"
    >
      
      {/* --- MAIN HUD CONTAINER --- */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* 1. Outer Rotating Deco Ring (Slow) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 rounded-full border-[1px] border-dashed border-emerald-900/40"
        ></motion.div>

         {/* 2. Inner Rotating Deco Ring (Fast Reverse) */}
         <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-56 h-56 rounded-full border-[1px] border-t-emerald-500/30 border-r-transparent border-b-emerald-500/30 border-l-transparent"
        ></motion.div>

        {/* 3. SVG Circular Progress Bar */}
        <svg className="w-48 h-48 transform -rotate-90 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
          {/* Background Circle Track */}
          <circle
            cx="96" cy="96" r={radius}
            stroke="currentColor" strokeWidth="4" fill="transparent"
            className="text-emerald-950/30"
          />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="96" cy="96" r={radius}
            stroke="currentColor" strokeWidth="6" fill="transparent"
            strokeLinecap="round"
            className="text-emerald-500"
            style={{ strokeDasharray: circumference, strokeDashoffset }}
            // Adding a slight pulse to the stroke
            animate={{ strokeOpacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>

        {/* 4. Center Percentage Text */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white tracking-tighter">
            {Math.round(progress)}
            <span className="text-emerald-500 text-2xl">%</span>
          </span>
        </div>
      </div>
      
      {/* --- STATUS TEXT AREA --- */}
      <div className="flex flex-col items-center space-y-2 z-10">
        <div className="h-6 flex items-center space-x-3 text-sm uppercase tracking-[0.2em]">
          <span className="text-emerald-700/70">Let's Collaborate</span>
          <span className="text-emerald-100"> {text}</span>
          {/* Blinking Cursor */}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-emerald-400 block"
          ></motion.span>
        </div>
        {/* Subtle bottom line */}
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent"></div>
      </div>

      {/* Background Subtle Grid & Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(to right, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
    </motion.div>
  );
};

export default Preloader;