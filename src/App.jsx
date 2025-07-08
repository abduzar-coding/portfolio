import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import Button from "./components/Button";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import TestimonialCard from "./components/TestimonialCard"; 
import TestimonialCarousel from "./components/TestimonialCarousel"; // 

import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormSubmitted(false);
    setFormError(false);
    setIsSending(true);

    emailjs
      .sendForm('service_ipbiidj', 'template_rmg12he', formRef.current, '0z7GV5moOV079pwOC')
      .then(() => {
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 4000);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setFormError(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-light dark:bg-dark">
      <div className="relative z-10 text-dark dark:text-light px-4">
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-transparent">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold"
            >
              Hey, I'm <span className="text-primary">Abduzar Khabib</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-muted dark:text-gray-400 max-w-xl mx-auto"
            >
              I'm a front-end developer crafting sleek, responsive websites with React, Tailwind, and motion-driven design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button href="#projects">View Projects</Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted dark:text-gray-400 text-lg"
            >
              I’ve recently started my journey as a front-end developer — and I’m all in.  
              With a background in computing systems and a growing passion for web development, I’ve been building real-world projects using React, Tailwind CSS, and APIs. Every line of code I write brings me one step closer to mastering the craft and delivering work that speaks for itself.
              
              I believe great developers aren’t born — they’re built project by project, and I’m here for the long game.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <a
                href="/CV_Abduzar_Khabib.pdf"
                download
                className="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary transition"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-4 sm:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <ProjectCard
              title="Portfolio Website"
              description="A sleek, fully responsive portfolio built with React and Tailwind CSS, featuring smooth animations with Framer Motion and a dark mode toggle."
              tags={["React", "Tailwind", "Framer Motion"]}
              liveLink="https://abduzar.dev"
              codeLink="https://github.com/abduzar-coding/portfolio"
            />
            <ProjectCard
              title="Weather App"
              description="A modern weather app built with React and Vite, featuring real-time data from OpenWeatherMap and responsive design."
              tags={["React", "API", "Vite", "CSS"]}
              liveLink="https://weather.abduzar.dev"
              codeLink="https://github.com/abduzar-coding/react-weather-app"
            />
            <ProjectCard
              title="E-commerce UI"
              description="Responsive e-commerce front-end with filters, product cards, and mobile design."
              tags={["React", "UI Design", "HTML/CSS"]}
              liveLink="https://shop.abduzar.dev"
              codeLink="https://github.com/abduzar-coding/e-commerce-ui"
            />
            <ProjectCard
              title="Task Tracker"
              description="To-do list with localStorage support and dynamic filtering between tasks."
              tags={["JavaScript", "React", "LocalStorage"]}
              liveLink="https://task.abduzar.dev/"
              codeLink="https://github.com/abduzar-coding/task-tracker"
            />
            <ProjectCard
              title="Crypto Tracker"
              description="Track live prices of top cryptocurrencies with real-time data, search functionality, and sleek responsive UI. Includes price charts and dynamic styling based on price change."
              tags={["React", "API", "Chart.js", "Tailwind"]}
              liveLink="https://crypto.abduzar.dev"
              codeLink="https://github.com/abduzar-coding/crypto-tracker"
            />
            <ProjectCard
              title="Currency Converter"
              description="Currency converter fetching live exchange rates using an external API."
              tags={["JavaScript", "API", "Tailwind"]}
              liveLink="https://converter.abduzar.dev"
              codeLink="https://github.com/abduzar-coding/currency-converter"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="px-4 sm:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
            <p className="text-muted dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Here’s what clients and collaborators say about working with me — real feedback from real results.
            </p>
            <TestimonialCarousel />
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-8">
          <div className="max-w-2xl mx-auto w-full text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Contact Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted dark:text-gray-400 mb-10 max-w-xl mx-auto"
            >
              Got a project, collaboration or question? Let’s talk!
            </motion.p>

            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid gap-6 bg-white/10 dark:bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md bg-white/30 dark:bg-white/10 text-dark dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition placeholder:text-gray-700 dark:placeholder:text-gray-300"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-md bg-white/30 dark:bg-white/10 text-dark dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition placeholder:text-gray-700 dark:placeholder:text-gray-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-md bg-white/30 dark:bg-white/10 text-dark dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none placeholder:text-gray-700 dark:placeholder:text-gray-300"
              ></textarea>
              <button
                type="submit"
                disabled={isSending}
                className={`bg-primary text-white font-semibold py-3 px-6 rounded-md transition duration-300 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {formSubmitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 dark:text-green-400 text-center font-medium mt-2"
                >
                  ✅ Your message has been sent successfully!
                </motion.p>
              )}
              {formError && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 dark:text-red-400 text-center font-medium mt-2"
                >
                  ❌ Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;