import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const offset = 100;
      const scrollY = window.scrollY + offset;

      for (let section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(`#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-dark/80 shadow backdrop-blur-sm" : "bg-transparent"
      } px-6 py-4`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-dark dark:text-white tracking-tight">
          Abduzar
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-dark dark:text-light hover:text-primary dark:hover:text-primary transition font-medium ${
                activeSection === link.href ? "text-primary dark:text-primary" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="bg-muted text-dark dark:text-light px-3 py-1 rounded-full text-sm shadow hover:shadow-md transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <button
          className="md:hidden text-dark dark:text-light text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mt-4 bg-white dark:bg-dark rounded-lg shadow-md py-6 px-6 space-y-6 text-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-dark dark:text-light hover:text-primary dark:hover:text-primary transition font-medium ${
                  activeSection === link.href ? "text-primary dark:text-primary" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleDarkMode();
                setMobileOpen(false);
              }}
              className="bg-muted text-dark dark:text-light px-3 py-1 rounded-full text-sm shadow hover:shadow-md transition"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
