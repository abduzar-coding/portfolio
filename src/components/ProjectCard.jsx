// src/components/ProjectCard.jsx
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tags = [], liveLink, codeLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.01, ease: "linear" }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-white dark:bg-secondary rounded-xl shadow-md p-6 flex flex-col gap-4 transition-all duration-300 cursor-pointer"
    >
      <div>
        <h3 className="text-xl font-bold text-dark dark:text-white">{title}</h3>
        <p className="text-muted dark:text-gray-300">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary text-white text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {(liveLink || codeLink) && (
        <div className="flex gap-4 mt-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Live Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              View Code
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
