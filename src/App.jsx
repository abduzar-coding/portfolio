import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

import "./index.css";


import ParticlesScene from "./components/ParticlesScene";


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="relative min-h-screen w-screen bg-light dark:bg-dark">
     
      <div className="relative z-10 text-dark dark:text-light px-4">
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
