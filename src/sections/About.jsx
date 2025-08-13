import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiGit,
  SiThreedotjs,
  SiFramer,
  SiNpm,
} from "react-icons/si";

const techSkills = [
  { name: "React", level: 90, icon: SiReact },
  { name: "JavaScript", level: 90, icon: SiJavascript },
  { name: "Tailwind CSS", level: 85, icon: SiTailwindcss },
  { name: "HTML", level: 95, icon: SiHtml5 },
  { name: "CSS", level: 85, icon: SiCss3 },
  { name: "APIs", level: 80, icon: SiPostman },
  { name: "Git", level: 80, icon: SiGit },
  { name: "Three.js", level: 70, icon: SiThreedotjs },
  { name: "Framer Motion", level: 70, icon: SiFramer },
  { name: "NPM", level: 85, icon: SiNpm },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Time Management",
];

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-8 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted dark:text-gray-400 text-lg mb-8"
        >
          I’m a front-end developer with a background in computing systems and a passion for building fast, functional, and visually engaging websites. I specialize in modern React-based stacks and aim to deliver clean, scalable UI code that speaks for itself.
        </motion.p>

        {/* Personal Touch */}
        <motion.p
          className="text-muted dark:text-gray-400 italic text-base max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Outside of tech, I enjoy learning languages, designing micro-interactions, and watching science documentaries — especially about the cosmos and how things work.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          className="grid sm:grid-cols-4 gap-6 text-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">
              🎓 UK Degree
            </h4>
            <p className="text-muted dark:text-gray-400">BSc in Computing</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">
              📜 Meta Front-End
            </h4>
            <p className="text-muted dark:text-gray-400">
              Completed all 9 courses        
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">
              🛠 <CountUp end={10} duration={2} />+ Projects
            </h4>
            <p className="text-muted dark:text-gray-400">Built with React & APIs</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">
              🌍  Multilingual
            </h4>
            <p className="text-muted dark:text-gray-400">English, Russian, Uzbek</p>
          </div>
        </motion.div>

        {/* Tech Skills with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">Tech Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
            {techSkills.map(({ name, level, icon: Icon }, i) => {
              const radius = 40;
              const circumference = 2 * Math.PI * radius;
              const progress = (level / 100) * circumference;
              const gradientId = `grad-${name.toLowerCase().replace(/\s+/g, "")}`;

              return (
                <motion.div
                  key={name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-24 h-24 mb-2">
                    <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="10"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        animate={{ strokeDashoffset: circumference - progress }}
                        transition={{ duration: 1.5 }}
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-primary dark:text-white">
                      <Icon />
                    </div>
                  </div>
                  <p
                    className="text-sm font-medium text-dark dark:text-white"
                    title={`Hands-on experience with ${name}`}
                  >
                    {name}
                  </p>
                  <p className="text-sm text-muted dark:text-gray-400">{level}%</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, i) => (
              <span
                key={i}
                className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CV Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
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
  );
}