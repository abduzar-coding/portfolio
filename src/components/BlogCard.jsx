import { motion } from "framer-motion";

export default function BlogCard({ title, excerpt, date, tags, onReadMore }) {

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-secondary rounded-xl shadow p-6 space-y-4 transition"
    >
      <div className="text-sm text-muted dark:text-gray-400">{new Date(date).toDateString()}</div>
      <h3 className="text-xl font-bold text-dark dark:text-white">{title}</h3>
      <p className="text-muted dark:text-gray-300">{excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <button
        onClick={onReadMore}
        className="mt-2 text-primary hover:underline font-medium text-sm"
        >
        Read More →
    </button>
    </motion.div>
  );
}
