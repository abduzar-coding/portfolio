import { motion } from "framer-motion";


export default function About() {
  return (
    <section id="about" className="px-4 sm:px-8 py-16 text-center">
      <div className="max-w-4xl mx-auto">
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
          className="text-muted dark:text-gray-400 text-lg mb-10"
        >
          I’m a front-end developer with a background in computing systems and a passion for building fast, functional, and visually engaging websites. I specialize in modern React-based stacks and aim to deliver clean, scalable UI code that speaks for itself.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          className="grid sm:grid-cols-3 gap-6 text-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">🎓 BSc Computing</h4>
            <p className="text-muted dark:text-gray-400">From a UK university</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">🛠 10+ Projects</h4>
            <p className="text-muted dark:text-gray-400">Built with React & APIs</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-dark dark:text-white">🚀 Fast Learner</h4>
            <p className="text-muted dark:text-gray-400">Driven by real results</p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        >
        <h3 className="text-2xl font-bold mb-4">Tech Skills</h3>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["React", "JavaScript", "Tailwind CSS", "HTML",
              "CSS", "APIs", "Git", "Vite", "Framer Motion", "NPM"
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
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
          transition={{ duration: 0.8, delay: 0.6 }}
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
