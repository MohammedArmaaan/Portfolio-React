import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

// --- 1. SNAKE STYLE MOUSE TRAIL (CHAINED) ---
const MouseTrail = () => {
  // 1. Mouse ki exact position track karne ke liye
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Physics Configuration (Snappy movement)
  // Damping: Jitna zyada, utna kam oscillation (hilna-dulna)
  // Stiffness: Jitna zyada, utna tez reaction
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };

  // 3. SPRING CHAINING (The Magic)
  // Dot 1 follows Mouse directly
  const x1 = useSpring(mouseX, { ...springConfig, damping: 25, stiffness: 400 });
  const y1 = useSpring(mouseY, { ...springConfig, damping: 25, stiffness: 400 });

  // Dot 2 follows Dot 1 (Not Mouse) -> Isse sequence banta hai
  const x2 = useSpring(x1, { ...springConfig, damping: 30, stiffness: 200 });
  const y2 = useSpring(y1, { ...springConfig, damping: 30, stiffness: 200 });

  // Dot 3 follows Dot 2
  const x3 = useSpring(x2, { ...springConfig, damping: 40, stiffness: 150 });
  const y3 = useSpring(y2, { ...springConfig, damping: 40, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Common styles
  const dotBase = "fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference bg-white";

  return (
    <>
      {/* Dot 1 (Head) - Thoda bada */}
      <motion.div 
        style={{ x: x1, y: y1, translateX: "-50%", translateY: "-50%" }} 
        className={`${dotBase} w-4 h-4 opacity-100`} 
      />
      
      {/* Dot 2 (Body) - Medium */}
      <motion.div 
        style={{ x: x2, y: y2, translateX: "-50%", translateY: "-50%" }} 
        className={`${dotBase} w-3 h-3 opacity-80`} 
      />
      
      {/* Dot 3 (Tail) - Chhota */}
      <motion.div 
        style={{ x: x3, y: y3, translateX: "-50%", translateY: "-50%" }} 
        className={`${dotBase} w-2 h-2 opacity-60`} 
      />
    </>
  );
};

// --- 2. TYPEWRITER COMPONENT ---
const TypewriterEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <span className="font-mono text-green-400">
      <span className="text-blue-400 mr-2">root@server:~$</span>
      {displayedText}
      <span className="animate-pulse inline-block w-2 h-5 bg-green-400 align-middle ml-1"></span>
    </span>
  );
};

// --- MAIN COMPONENT ---
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "1e6d8509-6b4d-4dc7-bf46-efa9b42714d3", // YOUR KEY
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowModal(false), 6000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.01, borderColor: "#818cf8", boxShadow: "0px 0px 10px rgba(129, 140, 248, 0.2)", transition: { type: "spring", stiffness: 300 } },
    blur: { scale: 1, borderColor: "#374151", boxShadow: "none" }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <section id="contact" className="py-24 bg-[#0f0f0f] text-gray-300 relative overflow-hidden min-h-screen flex items-center">
      
      {/* --- SNAKE TRAIL ADDED HERE --- */}
      <MouseTrail />

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.08),transparent_70%)]"></div>
      
      {/* Moving Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Collaborate</span>
          </h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Send me a message and let's build something amazing.</p>
        </motion.div>

        {/* --- MAIN FORM --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
          className="bg-[#1a1a1a]/60 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-sm font-medium text-gray-400 group-hover:text-indigo-400 transition-colors">Name</label>
                <motion.input 
                  variants={inputVariants} whileFocus="focus" initial="blur"
                  type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#111] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none placeholder:text-gray-600 font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-sm font-medium text-gray-400 group-hover:text-indigo-400 transition-colors">Email</label>
                <motion.input 
                  variants={inputVariants} whileFocus="focus" initial="blur"
                  type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#111] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none placeholder:text-gray-600 font-medium"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2 group">
              <label className="text-sm font-medium text-gray-400 group-hover:text-indigo-400 transition-colors">Message</label>
              <motion.textarea 
                variants={inputVariants} whileFocus="focus" initial="blur"
                required rows="6" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#111] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none resize-none placeholder:text-gray-600 font-medium"
                placeholder="Tell me about your project..."
              ></motion.textarea>
            </div>
            <motion.button 
              type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-bold text-lg shadow-lg flex items-center justify-center gap-3"
            >
              {isSubmitting ? (<span>Sending...</span>) : (<span>Send Message</span>)}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* --- TERMINAL MODAL --- */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></motion.div>
            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="relative bg-[#1e1e1e] border border-gray-600 rounded-lg shadow-2xl w-full max-w-lg overflow-hidden z-10 font-mono">
              <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-600">
                <div onClick={() => setShowModal(false)} className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-gray-400">bash — 80x24</div>
              </div>
              <div className="p-6 h-32 flex items-start">
                 <TypewriterEffect text="Successfully sent message. We will reach out to you soon..." />
              </div>
              <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 6, ease: "linear" }} className="h-1 bg-green-500/50" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;