// ✅ ProjectCard.jsx
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, description, github, live, techStack = [], abbreviation }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.03}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={1000}
      className="rounded-2xl bg-white/20 dark:bg-dark/30 backdrop-blur-md shadow-xl p-4 max-w-md mx-auto hover:shadow-2xl transition-all duration-300 border border-white/10"

    >
      {/* Abbreviation-based placeholder */}
      <div className="rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 w-full h-48 flex items-center justify-center text-white text-3xl font-bold tracking-wide shadow-inner uppercase">
        {abbreviation || "??"}
      </div>

      {/* Text content */}
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted dark:text-gray-400 text-sm">{description}</p>

        {/* Tech stack tags */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-4 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-400 transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </Tilt>
  );
}