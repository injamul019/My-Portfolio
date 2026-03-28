import { motion } from "framer-motion";
import { University, GraduationCap } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const academicData = [
    {
      year: "2018",
      title: "SSC",
      institution:
        "Jalalabad Cantonment Board High School & College, Sylhet",
      result: "GPA 5.00",
      icon: <GraduationCap className="text-[#3b4b87]" size={24} />,
    },
    {
      year: "2020",
      title: "HSC",
      institution:
        "Jalalabad Cantonment Public School & College, Sylhet",
      result: "GPA 5.00",
      icon: <GraduationCap className="text-[#3b4b87]" size={24} />,
    },
    {
      year: "Present",
      title: "BSc in CSE",
      institution: "Metropolitan University, Sylhet",
      result: "Currently Studying CGPA 3.96",
      icon: <University className="text-[#3b4b87]" size={24} />,
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3b4b87]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#3b4b87]/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-[#3b4b87] to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b4b87] to-indigo-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-semibold text-white leading-snug"
            >
              Connecting{" "}
              <span className="text-[#3b4b87]">Academic Knowledge</span> and{" "}
              <span className="text-[#3b4b87]">Real-world Practice</span>.
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 leading-relaxed"
            >
              Currently pursuing my{" "}
              <strong className="text-white">
                BSc in Computer Science & Engineering
              </strong>{" "}
              at{" "}
              <strong className="text-white">
                Metropolitan University
              </strong>
              , with a solid foundation in Algorithms, Data Structures,
              and Competitive Programming.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 leading-relaxed"
            >
              I enjoy writing clean, efficient code and sharing knowledge
              through teaching. I’m also passionate about sports,
              especially badminton, which keeps me active and focused.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="p-6 bg-[#1b1f33]/60 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-xl"
              >
                <p className="text-3xl font-bold text-[#3b4b87]">3+</p>
                <p className="text-sm text-slate-400">
                  Years Teaching Experience
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="p-6 bg-[#1b1f33]/60 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-xl"
              >
                <p className="text-3xl font-bold text-[#3b4b87]">3</p>
                <p className="text-sm text-slate-400">
                  Projects Completed
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Academic Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Academic Information
            </h3>

            {academicData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-6 bg-[#1b1f33]/60 border-l-4 border-[#3b4b87] border border-slate-700 rounded-2xl shadow-lg transition-all"
              >
                <div className="p-3 bg-[#3b4b87]/10 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[#3b4b87] font-bold text-sm">
                      {item.year}
                    </span>
                    <span className="text-white font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {item.institution}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {item.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;