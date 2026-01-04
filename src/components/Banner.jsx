import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // --- MOUSE PARALLAX LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    let { left, top, width, height } = currentTarget.getBoundingClientRect();
    let x = (clientX - left) / width;
    let y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 150, damping: 20 });

  // --- CONFIGURATION ---
  const fullName = "Mohammed Armaan";
  const roles = ["Full Stack Developer", "Backend Engineer", "React Specialist", "Problem Solver"];
  
  // --- TYPEWRITER EFFECT ---
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 30 : 150);
      if (!isDeleting && text === fullText) setTimeout(() => setIsDeleting(true), 1500);
      else if (isDeleting && text === '') { setIsDeleting(false); setLoopNum(loopNum + 1); }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f] text-white py-20"
    >
      
      {/* --- 1. FULL SCREEN ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Radial Gradient Center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15),#0f0f0f_70%)]"></div>
        
        {/* Moving Grid Pattern */}
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        />
        
        {/* Floating Particles (Covering Full Area) */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-indigo-500 rounded-full blur-sm opacity-20"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20"
          >
            Available for Projects
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
              {fullName}
            </span>
          </h1>

          {/* Typewriter */}
          <div className="text-2xl md:text-3xl text-gray-400 font-mono h-[40px] flex items-center justify-center lg:justify-start">
            <span className="mr-2 text-indigo-500">&gt;</span>
            <span className="text-white">{text}</span>
            <span className="animate-blink border-r-2 border-indigo-500 ml-1 h-6 w-1 inline-block"></span>
          </div>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed pt-4"
          >
            I build scalable web applications with clean code and modern technologies. 
            Transforming complex problems into elegant digital solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
          >
            <a href="#projects" className="group relative px-8 py-3 bg-indigo-600 rounded-lg overflow-hidden font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-indigo-500/50">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></span>
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg font-medium text-gray-300 hover:text-white hover:border-gray-500 transition-all hover:bg-[#252525]">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* --- RIGHT SIDE: 3D FLOATING CODE WINDOW --- */}
        <div className="relative hidden lg:flex items-center justify-center h-[500px] perspective-1000">
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-[450px] bg-[#1a1a1a]/90 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl p-6"
            >
                {/* Window Header */}
                <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-auto text-xs text-gray-500 font-mono">portfolio.config.js</span>
                </div>

                {/* Code Content */}
                <div className="font-mono text-sm space-y-3 relative z-10">
                    <div className="flex"><span className="text-pink-500 mr-2">const</span><span className="text-blue-400">developer</span><span className="text-white mx-2">=</span><span className="text-yellow-400">{`{`}</span></div>
                    <div className="pl-6 flex"><span className="text-indigo-300">name:</span><span className="text-green-400 ml-2">'{fullName}'</span>,</div>
                    <div className="pl-6 flex"><span className="text-indigo-300">skills:</span><span className="text-white ml-2">[</span><span className="text-orange-400">'React'</span>,<span className="text-orange-400 ml-1">'Laravel'</span><span className="text-white">]</span>,</div>
                    <div className="pl-6 flex"><span className="text-indigo-300">hardWorker:</span><span className="text-purple-400 ml-2">true</span>,</div>
                    <div className="pl-6 flex"><span className="text-indigo-300">quickLearner:</span><span className="text-purple-400 ml-2">true</span>,</div>
                    <div className="pl-6 flex"><span className="text-gray-500">// Hire me!</span></div>
                    <div><span className="text-yellow-400">{`}`}</span>;</div>
                </div>

                {/* Back Glow */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-3xl -z-10 rounded-full"></div>
            </motion.div>

            {/* Orbiting Icons */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[550px] h-[550px] rounded-full border border-dashed border-gray-800 -z-10"></motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-gray-800 -z-10"></motion.div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block text-gray-500"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes shine { 100% { transform: translateX(100%); } }
        .animate-shine { animation: shine 1s; }
        @keyframes blink { 50% { opacity: 0; } }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        @keyframes gradient-x { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </section>
  );
};

export default Banner;