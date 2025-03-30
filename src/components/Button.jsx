import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href = "#",
  icon = true,
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
      className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-lg group transition-all duration-300 overflow-hidden"
    >
      {/* Background layer - darker in light mode */}
      <span className="absolute inset-0 rounded-full 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
        opacity-20 dark:opacity-10 
        group-hover:opacity-40 
        blur-md transition duration-500" />

      {/* Border outline on hover */}
      <span className="absolute inset-0 rounded-full 
        border border-gray-300 dark:border-transparent 
        group-hover:border-blue-400 transition duration-300" />

      {/* Inner content with adaptive text gradient */}
      <span className="relative z-10 
        text-dark dark:text-white 
        group-hover:text-transparent 
        group-hover:bg-clip-text 
        group-hover:bg-gradient-to-r 
        group-hover:from-blue-500 
        group-hover:to-pink-500 
        transition duration-300"
      >
        {children}
        {icon && <ArrowRight className="inline ml-2" size={20} />}
      </span>
    </motion.a>
  );
}
