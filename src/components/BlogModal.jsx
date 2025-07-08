import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BlogModal({ post, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-secondary text-left max-w-3xl w-full p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted hover:text-primary transition"
          >
            <X size={20} />
          </button>

          <h3 className="text-2xl font-bold text-dark dark:text-white mb-2">{post.title}</h3>
          <p className="text-sm text-muted dark:text-gray-400 mb-6">
            {new Date(post.date).toDateString()} &nbsp;|&nbsp; {post.tags.join(", ")}
          </p>

          <div className="text-muted dark:text-gray-200 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
