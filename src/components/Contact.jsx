import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

// --- MOUSE TRAIL COMPONENT ---
const MouseTrail = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };

  const x1 = useSpring(mouseX, { ...springConfig, damping: 25, stiffness: 400 });
  const y1 = useSpring(mouseY, { ...springConfig, damping: 25, stiffness: 400 });
  const x2 = useSpring(x1, { ...springConfig, damping: 30, stiffness: 200 });
  const y2 = useSpring(y1, { ...springConfig, damping: 30, stiffness: 200 });
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

  const dotBase = "fixed top-0 left-0 rounded-full pointer-events-none z-50";
  return (
    <>
      <motion.div style={{ x: x1, y: y1, translateX: "-50%", translateY: "-50%" }} className={`${dotBase} w-4 h-4 bg-indigo-400/30 backdrop-blur-sm`} />
      <motion.div style={{ x: x2, y: y2, translateX: "-50%", translateY: "-50%" }} className={`${dotBase} w-3 h-3 bg-purple-400/25 backdrop-blur-sm`} />
      <motion.div style={{ x: x3, y: y3, translateX: "-50%", translateY: "-50%" }} className={`${dotBase} w-2 h-2 bg-pink-400/20 backdrop-blur-sm`} />
    </>
  );
};

// --- TYPEWRITER COMPONENT ---
const TypewriterEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(intervalId);
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);
  return (
    <span className="font-mono text-gray-300">
      <span className="text-indigo-400 mr-2">➜</span>
      {displayedText}
      <span className="animate-pulse inline-block w-2 h-4 bg-indigo-400/50 align-middle ml-1"></span>
    </span>
  );
};

// --- MAIN CONTACT COMPONENT ---
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
        setTimeout(() => setShowModal(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { borderColor: "#4f46e5", boxShadow: "0px 0px 0px 1px rgba(79, 70, 229, 0.2)", transition: { type: "spring", stiffness: 300 } },
    blur: { borderColor: "#374151", boxShadow: "none" }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] text-gray-300 relative overflow-hidden min-h-screen flex items-center">

      <MouseTrail />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-5xl md:text-4xl font-light text-white mb-3 tracking-tight">Let's Create Something Amazing</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">Have a project in mind? Reach out and let's build the future together.</p>
        </motion.div>

        {/* Main Grid: Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Side - Contact Information */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <div className="bg-[#111]/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 h-full">

              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800/50">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">MA</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">Mohammed Armaan Dhakkanjiwala</h3>
                  <p className="text-sm text-gray-500">Full Stack Developer </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center group-hover:bg-indigo-600/20 transition-all">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider">Email</p>
                    <a href="mailto:armaandhakkanji@gmail.com" className="text-gray-300 hover:text-indigo-400 transition-colors text-sm">
                      armaandhakkanji@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center group-hover:bg-indigo-600/20 transition-all">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider">Phone / WhatsApp</p>
                    <a href="tel:+919624848904" className="text-gray-300 hover:text-indigo-400 transition-colors text-sm">
                      +91 9624848904
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center group-hover:bg-indigo-600/20 transition-all">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider">Location</p>
                    <p className="text-gray-300 text-sm">Jamalput Ahmedabad, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center group-hover:bg-indigo-600/20 transition-all">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider">Working Hours</p>
                    <p className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-800/50">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <a href="https://github.com/MohammedArmaaan" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-600/30 transition-all">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/armaandhakkanji/" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-600/30 transition-all">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* <a href="https://twitter.com/sandeepkumar" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-600/30 transition-all">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.757-12.272 10.005 10.005 0 002.456-2.541z"/>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <div className="bg-[#111]/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 md:p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2 tracking-wider uppercase">Your Name</label>
                  <motion.input
                    variants={inputVariants} whileFocus="focus"
                    type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 outline-none text-sm transition-colors placeholder:text-gray-700"
                    placeholder="Mohammed Armaan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2 tracking-wider uppercase">Email Address</label>
                  <motion.input
                    variants={inputVariants} whileFocus="focus"
                    type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 outline-none text-sm transition-colors placeholder:text-gray-700"
                    placeholder="armaandhakkanji@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2 tracking-wider uppercase">Your Message</label>
                  <motion.textarea
                    variants={inputVariants} whileFocus="focus"
                    required rows="6" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 outline-none text-sm transition-colors resize-none placeholder:text-gray-700"
                    placeholder="Tell me about your project or Hiring Details..."
                  />
                </div>

                <motion.button
                  type="submit" disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  className="w-full py-3.5 bg-indigo-600/90 hover:bg-indigo-600 rounded-lg text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Quick Response Note */}
                <p className="text-xs text-gray-600 text-center mt-4">
                  ⚡ I'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="relative bg-[#111] border border-gray-800 rounded-lg shadow-2xl w-full max-w-md overflow-hidden z-10">
              <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-gray-800">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                <div className="ml-2 text-xs text-gray-600">terminal — 80x24</div>
              </div>
              <div className="p-5 font-mono text-sm">
                <TypewriterEffect text="Message sent successfully. Will reach out within 24 hours..." />
              </div>
              <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 5, ease: "linear" }} className="h-0.5 bg-indigo-500/50" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;