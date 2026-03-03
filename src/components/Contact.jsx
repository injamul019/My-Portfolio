import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form handling logic here
  };

  return (
    <section id="contact" className="py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white">
              Let's Work Together
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:riajul@example.com"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-lg hover:border-brand transition-colors group"
              >
                <Mail
                  className="text-brand group-hover:scale-110 transition-transform"
                  size={24}
                />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white">riajul@example.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-lg hover:border-brand transition-colors group"
              >
                <Linkedin
                  className="text-brand group-hover:scale-110 transition-transform"
                  size={24}
                />
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="text-white">Riajul Hasan</p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-lg hover:border-brand transition-colors group"
              >
                <Github
                  className="text-brand group-hover:scale-110 transition-transform"
                  size={24}
                />
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="text-white">riajulhasan</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-card border border-border rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-border rounded-lg text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-border rounded-lg text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-border rounded-lg text-white focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <Button type="submit" variant="primary" className="w-full gap-2">
                <Send size={18} /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
