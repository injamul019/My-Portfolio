import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

// Counter Animation Component
const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / 1000;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(percentage * end));
        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {end === 100 ? "%" : "+"}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0a0d18] bg-opacity-90 backdrop-blur-sm pointer-events-none"></div>

      {/* Noise/Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2c2f44] bg-[#1b1f33]/50 text-[#3b4b87] text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b4b87] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b4b87]"></span>
              </span>
              Available
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-semibold text-[#3b4b87]"
              >
                Hi, I'm
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
              >
                Injamul Haque
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-medium text-text-muted"
              >
                <span className="text-[#3b4b87]">Inspiring Minds Through Education</span>
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-text-muted max-w-lg leading-relaxed"
            >
              CSE student at{" "}
              <span className="text-white font-semibold">
                Metropolitan University, Sylhet
              </span>
              . Passionate about teaching, mentoring students, and contributing to academic excellence.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 pt-6"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-white">
                  <Counter end={3} duration={2} />
                </p>
                <p className="text-sm text-text-muted">Years Experience in Teaching.</p>
              </div>
              <div className="w-px bg-[#2c2f44]"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">
                  <Counter end={3} duration={2} />
                </p>
                <p className="text-sm text-text-muted">Projects Completed</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="https://github.com/injamul019"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-[#2c2f44] hover:border-[#3b4b87] text-slate-300 hover:text-white bg-[#1b1f33]/50 hover:bg-[#3b4b87]/10"
              >
                <Github size={18} className="mr-2" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-injamul-haque-956924266/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-[#2c2f44] hover:border-[#3b4b87] text-slate-300 hover:text-white bg-[#1b1f33]/50 hover:bg-[#3b4b87]/10"
              >
                <Linkedin size={18} className="mr-2" /> LinkedIn
              </a>
              <a
                href="mailto:injamul.sylhet@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-[#2c2f44] hover:border-[#3b4b87] text-slate-300 hover:text-white bg-[#1b1f33]/50 hover:bg-[#3b4b87]/10"
              >
                <Mail size={18} className="mr-2" /> Email
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:mt-0 mt-10">
              {/* Outer Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-[#3b4b87]/40"
              ></motion.div>

              {/* Inner Rotating Border */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-4 border-[#3b4b87]/30"
              ></motion.div>

              {/* Background Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#3b4b87]/10 rounded-full blur-3xl"
              ></motion.div>

              {/* Image Container */}
<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-[#3b4b87]/50 shadow-2xl shadow-[#3b4b87]/50 bg-gradient-to-tr from-[#1b1f33]/80 via-[#3b4b87]/20 to-[#1b1f33]/80 hover:scale-105 transition-transform duration-500"
>
  <img
    src="2.jpg"
    alt="Injamul Haque"
    className="w-full h-full object-cover rounded-full"
  />
  {/* Shiny Gloss Overlay */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-white/10 to-transparent opacity-30 pointer-events-none animate-pulse"></div>
</motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
