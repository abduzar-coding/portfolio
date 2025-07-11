import { motion } from "framer-motion";
import ParticlesScene from "../components/ParticlesScene";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* 🔵 Fullscreen canvas behind */}
      <div className="absolute inset-0 -z-10">
        <ParticlesScene />
      </div>

      {/* 🔵 Foreground content */}
      <div className="relative z-10 px-4 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hey, I'm <span className="text-primary">Abduzar Khabib</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-muted dark:text-gray-400 max-w-xl mx-auto"
        >
          I'm a front-end developer crafting sleek, responsive websites with React, Tailwind, and motion-driven design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Button href="#projects">View Projects</Button>
        </motion.div>
      </div>
    </section>
  );
}