import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);

  // Random Technical Words for effect
  const words = [
    "INITIALIZING_CORE...",
    "LOADING_MODULES...",
    "VERIFYING_IDENTITY...",
    "ACCESS_GRANTED...",
    "WELCOME_USER: ARMAAN"
  ];

  useEffect(() => {
    // 1. Progress Bar Logic (0% to 100%)
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random speed increment
        const diff = Math.random() * 10;
        return Math.min(old + diff, 100);
      });
    }, 150);

    // 2. Changing Text Logic
    let wordIndex = 0;
    const wordTimer = setInterval(() => {
      setText(words[wordIndex]);
      wordIndex = (wordIndex + 1) % words.length;
    }, 450); // Change word every 450ms

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center font-mono text-green-500"
    >
      {/* Percentage Counter */}
      <div className="text-6xl md:text-8xl font-bold mb-4 opacity-80">
        {Math.round(progress)}%
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
        <motion.div 
          className="h-full bg-green-500 shadow-[0_0_15px_#22c55e]"
          style={{ width: `${progress}%` }}
        ></motion.div>
      </div>

      {/* Flashing Text */}
      <div className="h-6 flex items-center space-x-2 text-sm md:text-base tracking-widest">
        <span className="text-gray-500">root@system:~#</span>
        <span className="typing-text">{text}</span>
        <span className="w-2 h-4 bg-green-500 animate-pulse"></span>
      </div>

      {/* Background Matrix/Grid Effect (Optional subtle styling) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(to right, #22c55e 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
    </motion.div>
  );
};

export default Preloader;