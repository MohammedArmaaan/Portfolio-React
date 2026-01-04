import React, { useState, useEffect } from 'react';
import './Header.css'; // Make sure to create this file

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add a shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <h1>Mohammed Armaan</h1>
      </div>

      <nav className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-btn">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;