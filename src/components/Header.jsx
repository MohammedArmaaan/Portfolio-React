import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect (Header gets darker when scrolling down)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- ANIMATED LOGO COMPONENT ---
  const Logo = () => (
    <div className="relative w-12 h-12 flex items-center justify-center cursor-pointer group">
      {/* 1. Rotating Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-indigo-500 border-r-purple-500 border-b-indigo-500/30 border-l-purple-500/30"
      ></motion.div>

      {/* 2. Reverse Rotating Inner Ring (Dashed) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute inset-1 rounded-full border border-dashed border-gray-600 opacity-50"
      ></motion.div>

      {/* 3. The Text "MA" */}
      <div className="relative z-10 font-bold text-lg tracking-tighter text-white font-mono group-hover:text-indigo-400 transition-colors">
        MA
      </div>
      
      {/* 4. Glow Effect behind */}
      <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    </div>
  );

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-800 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home">
          <Logo />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative text-sm uppercase tracking-wider text-gray-300 hover:text-white font-medium transition-colors group"
            >
              {link.name}
              {/* Hover Underline Animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          
          {/* Call to Action Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-indigo-500/30 transition-shadow"
          >
            Hire Me
          </motion.a>
        </nav>

        {/* MOBILE HAMBURGER MENU */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M12 12h8M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE NAVIGATION DROPDOWN */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111] border-t border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg text-gray-400 hover:text-white hover:tracking-widest transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;