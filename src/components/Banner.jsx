import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';

const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // --- MOUSE PARALLAX ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    let { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 100, damping: 20 });

  // --- CONFIG ---
  const fullName = "Mohammed Armaan";
  const roles = ["Laravel Full Stack Developer", "Backend Developer", "React Developer", "Python Developer", "Problem Solver"];

  // --- ORBIT DATA ---
  // direction: 1 = clockwise, -1 = counter-clockwise
  const orbitData = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "cyan", radius: 340, duration: 25, tilt: 0.35, startAngle: 0, direction: 1 },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", color: "red", radius: 340, duration: 25, tilt: 0.35, startAngle: 180, direction: 1 }, 
    
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "yellow", radius: 420, duration: 30, tilt: 0.45, startAngle: 90, direction: -1 },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "indigo", radius: 420, duration: 30, tilt: 0.45, startAngle: 270, direction: -1 },

    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "blue", radius: 500, duration: 35, tilt: 0.3, startAngle: 45, direction: 1 },
  ];

  // --- TYPEWRITER ---
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
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15),#0f0f0f_70%)]"></div>
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* --- LEFT: CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left z-20"
        >
           <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">Available for Projects</div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
              {fullName}
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-400 font-mono h-[40px] flex items-center justify-center lg:justify-start">
            <span className="mr-2 text-indigo-500">&gt;</span>
            <span className="text-white">{text}</span>
            <span className="animate-blink border-r-2 border-indigo-500 ml-1 h-6 w-1 inline-block"></span>
          </div>

          <p className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed pt-4">
            I build scalable web applications with clean code and modern technologies. Transforming complex problems into elegant digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-3 bg-indigo-600 rounded-lg font-medium text-white shadow-lg hover:scale-105 transition-all">View My Work</a>
            <a href="#contact" className="px-8 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg font-medium text-gray-300 hover:text-white transition-all">Contact Me</a>
          </div>
        </motion.div>

        {/* --- RIGHT: 3D SYSTEM --- */}
        <div className="relative hidden lg:flex items-center justify-center h-[700px] perspective-1000" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* 1. CENTRAL CARD */}
            {/* Kept floating animation but managed Z-depth better */}
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[450px] bg-[#1a1a1a]/90 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl p-6 z-10"
            >
                <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-auto text-xs text-gray-500 font-mono">portfolio.config.js</span>
                </div>
                <div className="font-mono text-sm space-y-3 relative z-10">
                    <div className="flex"><span className="text-pink-500 mr-2">const</span><span className="text-blue-400">developer</span><span className="text-white mx-2">=</span><span className="text-yellow-400">{`{`}</span></div>
                    <div className="pl-6 flex"><span className="text-indigo-300">name:</span><span className="text-green-400 ml-2">'{fullName}'</span>,</div>
                    <div className="pl-6 flex"><span className="text-indigo-300">skills:</span><span className="text-white ml-2">[</span><span className="text-orange-400">'React'</span>,<span className="text-orange-400 ml-1">'Laravel'</span><span className="text-white">]</span>,</div>
                    <div className="pl-6 flex"><span className="text-indigo-300">hardWorker:</span><span className="text-purple-400 ml-2">true</span>,</div>
                    <div className="pl-6 flex"><span className="text-indigo-300">quickLearner:</span><span className="text-purple-400 ml-2">true</span>,</div>
                    <div className="pl-6 flex"><span className="text-gray-500">// Hire me!</span></div>
                    <div><span className="text-yellow-400">{`}`}</span>;</div>
                </div>
                <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-3xl -z-10 rounded-full opacity-40"></div>
            </motion.div>

            {/* 2. ORBITING ICONS WITH PORTAL ANIMATION */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
               {orbitData.map((item, index) => (
                 <OrbitingIcon key={index} {...item} />
               ))}
            </div>
        </div>

      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .animate-blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        @keyframes gradient-x { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </section>
  );
};

// --- ORBITING ICON WITH "PORTAL" EFFECT ---
const OrbitingIcon = ({ icon, color, radius, duration, tilt, startAngle, direction = 1 }) => {
  const time = useMotionValue(0);

  // Smooth time loop
  useAnimationFrame((t, delta) => {
    time.set(time.get() + (delta / 1000));
  });

  // Calculate Angle continuously
  const angleDeg = useTransform(time, (t) => {
    const progressed = (t / duration) % 1;
    return (progressed * 360 * direction + startAngle + 360) % 360;
  });

  // Z-Index: 0 (Back) vs 20 (Front)
  const zIndex = useTransform(angleDeg, (deg) => (deg < 180 ? 20 : 0));

  // Opacity "Portal" Effect:
  // Fade out slightly when passing behind the card (near 180 and 360/0 degrees transition points)
  // This simulates entering/exiting the "portal" behind the card.
  const opacity = useTransform(angleDeg, [0, 10, 170, 180, 190, 350, 360], [1, 1, 0.5, 0.3, 0.5, 1, 1]);

  // Scale Effect:
  // Scale up when in front (90deg), scale down when behind (270deg)
  // Extra scale dip when transitioning Z-index to avoid clipping
  const scale = useTransform(angleDeg, (deg) => {
    const rad = (deg * Math.PI) / 180;
    const depthScale = 0.9 + 0.3 * Math.sin(rad); // Base 3D scale
    return depthScale;
  });

  // Position Transform
  const transform = useTransform(angleDeg, (deg) => {
    const rad = (deg * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad) * tilt;
    return `translate(${x}px, ${y}px)`;
  });

  return (
    <motion.div
      className={`absolute top-0 left-0 w-16 h-16 bg-[#0f0f0f]/80 backdrop-blur-sm rounded-full border border-${color}-500/50 p-3 shadow-2xl shadow-${color}-500/40 flex items-center justify-center`}
      style={{
        transform,
        scale,
        zIndex,
        opacity, // Apply portal fade
      }}
    >
      <img src={icon} alt="tech icon" className="w-full h-full object-contain drop-shadow-lg" />
    </motion.div>
  );
};

export default Banner;