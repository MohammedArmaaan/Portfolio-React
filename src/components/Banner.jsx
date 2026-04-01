import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';

// 👇 IMPORTANT: Resume file ko yahan import karein
import myResume from '../assets/resume.pdf';

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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f] text-white py-10 md:py-20"
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

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. TOP BADGE (Hamesha Sabse Upar) */}
        {/* <div className="w-full flex justify-center lg:justify-start mb-4 md:mb-8">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-block px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20"
           >
             Available for Projects
           </motion.div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center">
          
          {/* 2. RIGHT: 3D SYSTEM (Mobile mein Badge ke turant baad) */}
          <div className="relative flex items-center justify-center h-[320px] md:h-[500px] lg:h-[700px] perspective-1000 order-first lg:order-last scale-[0.5] sm:scale-[0.7] lg:scale-100" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* CENTRAL CARD */}
              <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-[320px] md:w-[450px] bg-[#1a1a1a]/90 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl p-6 z-10"
              >
                  <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-auto text-xs text-gray-500 font-mono">portfolio.config.js</span>
                  </div>
                  <div className="font-mono text-xs md:text-sm space-y-3 relative z-10">
                      <div className="flex"><span className="text-pink-500 mr-2">const</span><span className="text-blue-400">developer</span><span className="text-white mx-2">=</span><span className="text-yellow-400">{`{`}</span></div>
                      <div className="pl-6 flex"><span className="text-indigo-300">name:</span><span className="text-green-400 ml-2">'{fullName}'</span>,</div>
                      <div className="pl-6 flex"><span className="text-indigo-300">skills:</span><span className="text-white ml-2">[</span><span className="text-orange-400">'React'</span>,<span className="text-orange-400 ml-1">'Laravel'</span><span className="text-white">]</span>,</div>
                      <div className="pl-6 flex"><span className="text-indigo-300">hardWorker:</span><span className="text-purple-400 ml-2">true</span>,</div>
                      <div className="pl-6 flex"><span className="text-indigo-300">quickLearner:</span><span className="text-purple-400 ml-2">true</span>,</div>
                      <div><span className="text-yellow-400">{`}`}</span>;</div>
                  </div>
                  <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-3xl -z-10 rounded-full opacity-40"></div>
              </motion.div>

              {/* ORBITING ICONS */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                 {orbitData.map((item, index) => (
                   <OrbitingIcon key={index} {...item} />
                 ))}
              </div>
          </div>

          {/* 3. LEFT: CONTENT (Name, Typewriter, Buttons) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left z-20 order-last lg:order-first"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
                {fullName}
              </span>
            </h1>

            <div className="text-xl md:text-3xl text-gray-400 font-mono h-[40px] flex items-center justify-center lg:justify-start">
              <span className="mr-2 text-indigo-500">&gt;</span>
              <span className="text-white">{text}</span>
              <span className="animate-blink border-r-2 border-indigo-500 ml-1 h-6 w-1 inline-block"></span>
            </div>

            <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I build scalable web applications with clean code. Transforming complex problems into elegant digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start items-center">
              <a href="#projects" className="w-full sm:w-auto px-6 py-3 bg-indigo-600 rounded-lg font-medium text-white shadow-lg hover:scale-105 transition-all text-center text-sm md:text-base">View My Work</a>
              <a href={myResume} download="Mohammed_Armaan_Resume.pdf" className="w-full sm:w-auto px-6 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg font-medium text-gray-300 hover:text-white transition-all text-center flex items-center justify-center gap-2 text-sm md:text-base">
                Resume 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
      {/* Styles same as before */}
    </section>
  );
};

// --- ORBITING ICON COMPONENT ---
const OrbitingIcon = ({ icon, color, radius, duration, tilt, startAngle, direction = 1 }) => {
  const time = useMotionValue(0);
  useAnimationFrame((t, delta) => { time.set(time.get() + (delta / 1000)); });

  const angleDeg = useTransform(time, (t) => {
    const progressed = (t / duration) % 1;
    return (progressed * 360 * direction + startAngle + 360) % 360;
  });

  const zIndex = useTransform(angleDeg, (deg) => (deg < 180 ? 20 : 0));
  const opacity = useTransform(angleDeg, [0, 10, 170, 180, 190, 350, 360], [1, 1, 0.5, 0.3, 0.5, 1, 1]);
  const scale = useTransform(angleDeg, (deg) => {
    const rad = (deg * Math.PI) / 180;
    return 0.9 + 0.3 * Math.sin(rad);
  });

  const transform = useTransform(angleDeg, (deg) => {
    const rad = (deg * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad) * tilt;
    return `translate(${x}px, ${y}px)`;
  });

  return (
    <motion.div
      className={`absolute top-0 left-0 w-16 h-16 bg-[#0f0f0f]/80 backdrop-blur-sm rounded-full border border-${color}-500/50 p-3 shadow-2xl shadow-${color}-500/40 flex items-center justify-center`}
      style={{ transform, scale, zIndex, opacity }}
    >
      <img src={icon} alt="tech icon" className="w-full h-full object-contain drop-shadow-lg" />
    </motion.div>
  );
};

export default Banner;