import React from "react";
import { FaTelegramPlane, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12 text-center text-muted dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <p className="mb-3">© {new Date().getFullYear()} Abduzar Khabib</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://t.me/abduzarrr" // Replace with your actual Telegram username
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://wa.me/998939479969" // Replace with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/abduzar-khabib"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
