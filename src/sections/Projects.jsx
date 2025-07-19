import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects"; // ✅ Default export

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Projects
        </motion.h2>

        {/* Section subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted dark:text-gray-400 max-w-xl mx-auto"
        >
          A showcase of selected projects featuring responsive design, animations, and clean code.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}