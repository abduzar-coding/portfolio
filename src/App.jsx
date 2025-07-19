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
      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-50 bg-primary text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-bounce"
      >
        Hire Me
      </a>
    </div>
  );
}

export default App;
