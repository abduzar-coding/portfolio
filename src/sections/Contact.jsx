import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormSubmitted(false);
    setFormError(false);

    emailjs
      .sendForm("service_ipbiidj", "template_rmg12he", formRef.current, "0z7GV5moOV079pwOC")
      .then(() => {
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 4000);
        formRef.current.reset();
      })
      .catch(() => setFormError(true));
  };

  return (
    <section id="contact" className="px-4 sm:px-8">
      <div className="max-w-2xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted dark:text-gray-400 mb-10 max-w-xl mx-auto"
        >
          Got a project, collaboration or question? Let’s talk!
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid gap-6 bg-white/10 dark:bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-white/30 dark:bg-white/10 text-dark dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition placeholder:text-gray-700 dark:placeholder:text-gray-300"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-white/30 dark:bg-white/10 text-dark dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition placeholder:text-gray-700 dark:placeholder:text-gray-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-md bg-white/30 dark:bg-white/10 text-dark dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none placeholder:text-gray-700 dark:placeholder:text-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Send Message
          </button>
          {formSubmitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 dark:text-green-400 text-center font-medium mt-2"
            >
              ✅ Your message has been sent successfully!
            </motion.p>
          )}
          {formError && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 dark:text-red-400 text-center font-medium mt-2"
            >
              ❌ Oops! Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
