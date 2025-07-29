import { motion } from "framer-motion";
import CountUp from "react-countup";

const techSkills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
  { name: "APIs", level: 80 },
  { name: "Git", level: 80 },
  { name: "Three.js", level: 70 },
  { name: "Framer Motion", level: 70 },
  { name: "NPM", level: 85 },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Time Management"
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

        {/* Quick Stats with CountUp */}
        <motion.div
          className="grid sm:grid-cols-3 gap-6 text-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">
              🎓 <CountUp end={1} duration={2} /> Degree
            </h4>
            <p className="text-muted dark:text-gray-400">BSc in Computing</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">
              🛠 <CountUp end={10} duration={2} />+ Projects
            </h4>
            <p className="text-muted dark:text-gray-400">Built with React & APIs</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">
              🌍 <CountUp end={3} duration={2} /> Languages
            </h4>
            <p className="text-muted dark:text-gray-400">English, Russian, Uzbek</p>
          </div>
        </motion.div>

        {/* Tech Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Tech Skills</h3>
          <div className="space-y-4">
            {techSkills.map(({ name, level }, i) => (
              <div key={i} className="text-left">
                <div className="flex justify-between text-sm font-medium text-dark dark:text-white mb-1">
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-primary h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
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