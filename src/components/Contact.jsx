import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Button from "./Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    title: "WhatsApp",
    href: "https://wa.me/8801890248733",
    gradientClass: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-injamul-haque-956924266/",
    gradientClass: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    title: "GitHub",
    href: "https://github.com/injamul019",
    gradientClass: "bg-gradient-to-r from-gray-400 to-gray-600",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/injamul_haque_019/",
    gradientClass: "bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#0a0d18]">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3b4b87]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b4b87] to-indigo-400">
              Touch
            </span>
          </h2>
        </motion.div>

        {/* Social Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 mb-12"
        >
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="relative flex items-center gap-4 p-5 rounded-3xl bg-[#1b1f33]/60 backdrop-blur-xl border border-[#2c2f44] shadow-lg overflow-hidden group transition-all duration-300"
            >
              {/* Floating Icon Circle */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`flex-shrink-0 w-12 h-12 rounded-full shadow-md shadow-[#3b4b87]/30 ${link.gradientClass}`}
              ></motion.div>

              {/* Social Name */}
              <h3 className="text-white font-semibold text-lg">{link.title}</h3>

              {/* Hover Glow Overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-500 rounded-3xl ${link.gradientClass} blur-2xl`}
              ></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1b1f33]/60 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "message"].map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm text-slate-400 mb-2 capitalize">{field}</label>
                {field === "message" ? (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-[#1b1f33]/80 border border-slate-700 rounded-2xl text-white focus:border-[#3b4b87] outline-none transition"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1b1f33]/80 border border-slate-700 rounded-2xl text-white focus:border-[#3b4b87] outline-none transition"
                  />
                )}
              </div>
            ))}

            <motion.div whileHover={{ scale: 1.03 }}>
              <Button type="submit" variant="primary" className="w-full gap-2">
                <Send size={18} /> Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;