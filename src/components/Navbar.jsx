import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-[#0a0d18]/70 border-b border-[#1f2230] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#6c7af2] transition-colors duration-300">
              Injamul<span className="text-[#3b4b87]">.019</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-slate-300 font-medium text-[16px] hover:text-white transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3b4b87] group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}

            {/* CV Button */}
            <a
              href="cv.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#3b4b87] to-indigo-500 hover:from-indigo-500 hover:to-[#3b4b87] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0e1d54]/95 border-t border-[#2c2f44] backdrop-blur-lg shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                  className="block px-4 py-3 rounded-lg text-white font-medium hover:bg-[#3b4b87]/20 transition-all"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile CV Button */}
              <motion.a
                href="cv.pdf"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                className="block w-full mt-2 text-center px-4 py-3 rounded-lg text-white bg-gradient-to-r from-[#3b4b87] to-indigo-500 hover:from-indigo-500 hover:to-[#3b4b87] transition-all duration-300 shadow-md"
              >
                <Download size={16} className="inline mr-2" />
                CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;