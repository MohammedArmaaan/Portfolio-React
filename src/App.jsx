import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Components Imports
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Exprience.jsx"; // Note: Check spelling in your file name
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx"; // Make sure Preloader.jsx exists

import './App.css';

function App() {
  // 1. Loading State
  const [isLoading, setIsLoading] = useState(true);

  // 2. Timer Logic (2.5 seconds loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      
      {/* 3. Preloader (Sirf tab dikhega jab isLoading = true) */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* 4. Main Website Content (Jab loading khatam ho jaye) */}
      {!isLoading && (
        <>
          <Header />
          <Banner />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;