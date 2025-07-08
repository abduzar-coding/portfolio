import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCard({ name, role, quote, avatar, delay = 0 }) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="relative bg-white/80 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md text-left max-w-xl mx-auto"
    >
        <FaQuoteLeft className="text-primary text-2xl mb-4" />

        {/* Star Rating */}
        <div className="flex gap-1 text-yellow-400 mb-4">
            {Array(5).fill(0).map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.06 9.385c-.784-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
            </svg>
            ))}
        </div>

        {/* Quote Text */}
        <p className="text-muted dark:text-gray-300 text-base leading-relaxed italic mb-6">
        “{quote}”
        </p>

        <div className="flex items-center gap-4">
            <img
                src={avatar || "https://i.pravatar.cc/100?img=12"} // fallback avatar
                alt={name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
            />
            <div>
                <h4 className="text-lg font-semibold text-dark dark:text-white">{name}</h4>
                <p className="text-sm text-muted dark:text-gray-400">{role}</p>
            </div>
        </div>
    </motion.div>
  );
}
