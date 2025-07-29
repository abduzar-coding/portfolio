import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesScene from "../components/ParticlesScene";
import Button from "../components/Button";

const roles = [
  "Front-end Developer",
  "React.js Specialist",
  "UI Animator & Designer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* 🔵 Fullscreen canvas background */}
      <div className="fixed inset-0 -z-10">
        <ParticlesScene />
      </div>

      {/* 🔵 Foreground content */}
      <div className="relative z-10 px-4 text-center space-y-6">
        {/* 🪄 Static Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          Hey, I'm <span className="text-primary">Abduzar Khabib</span>
        </h1>

        {/* 💬 Rotating Role Title (standalone) */}
        <div className="flex justify-center">
          <div className="relative h-[1.6em] min-w-[220px] sm:min-w-[260px] overflow-hidden text-lg sm:text-xl md:text-2xl font-semibold text-primary">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4">
          <Button href="#projects">View Projects</Button>
        </div>
      </div>
    </section>
  );
}
