import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds is the sweet spot for professional sites
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(currentProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => onLoadingComplete?.(), 500);
      }
    };

    requestAnimationFrame(animate);
  }, [onLoadingComplete]);

  return (
    <motion.div
      exit={{ y: "-100%" }} // Professional "Slide Up" exit
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-[#0f0f0f] flex flex-col items-center justify-center font-mono"
    >
      <div className="relative flex flex-col items-center">
        
        {/* Progress Counter */}
        <div className="overflow-hidden mb-4">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-medium text-white flex items-baseline gap-2"
          >
            {Math.floor(progress)}<span className="text-xl text-indigo-500">%</span>
          </motion.h1>
        </div>

        {/* Minimalist Line */}
        <div className="w-[150px] md:w-[200px] h-[1px] bg-white/10 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-indigo-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="mt-6 text-[10px] tracking-[0.3em] uppercase text-white font-light"
        >
          System Initializing
        </motion.p>

      </div>

      {/* Background Tech Detail (Bottom Right) */}
      <div className="absolute bottom-10 right-10 flex gap-4 opacity-20">
        <div className="text-[10px] text-white flex flex-col items-end">
           <span>VER: 2.0.4</span>
           <span>LOC: 23.0225° N</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;