import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name/Logo */}
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Mohammed Armaan
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#home" className="text-lg text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
            Home
          </a>
          <a href="#about" className="text-lg text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
            About
          </a>
          <a href="#skills" className="text-lg text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
            Skills
          </a>
          <a href="#experience" className="text-lg text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
            Experience
          </a>
          <a href="#projects" className="text-lg text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
            Projects
          </a>
          <a href="#contact" className="text-lg text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <a href="#home" className="block text-lg text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="block text-lg text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              About
            </a>
            <a href="#skills" className="block text-lg text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Skills
            </a>
            <a href="#experience" className="block text-lg text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Experience
            </a>
            <a href="#projects" className="block text-lg text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="block text-lg text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;