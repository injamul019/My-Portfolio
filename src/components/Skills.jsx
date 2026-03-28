import { motion } from "framer-motion";
import { Code2, Database, Server, Globe, Award } from "lucide-react";

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

const skills = [
  {
    name: "Frontend",
    icon: <Code2 size={28} />,
    items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    icon: <Server size={28} />,
    items: ["Node.js", "Express"],
  },
  {
    name: "Database",
    icon: <Database size={28} />,
    items: ["MySQL","PHP"],
  },
  {
    name: "Tools",
    icon: <Globe size={28} />,
    items: ["Git", "GitHub", "VS Code", "CodeBlocks", "NetBeans"],
  },
  {
    name: "Competitive Programming",
    icon: <Award size={28} />,
    items: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
  },
  {
    name: "Soft Skills",
    icon: <Globe size={28} />,
    items: ["MS Word", "PowerPoint", "Photoshop","Communication in Groups"],
  },
];

const proficiency = [
  { name: "React.js", level: 70 },
  { name: "Node.js", level: 50 },
  { name: "Tailwind CSS", level: 70 },
  { name: "C/C++", level: 70 },
  { name: "HTML", level: 90 },
  { name: "Word, Power-point", level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">

      {/* Background Glow */}
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
            Technical{" "}
            <span className="bg-gradient-to-r from-[#3b4b87] to-indigo-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b4b87] to-indigo-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skill Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-[#1b1f33]/60 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-xl hover:shadow-[#3b4b87]/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b4b87]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mb-6 text-[#3b4b87]"
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {skill.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-[#2c2f44]/70 text-slate-300 text-sm rounded-full border border-[#3b3e5a] hover:bg-[#3b4b87]/20 hover:text-[#3b4b87] transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Skill Proficiency
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {proficiency.map((skill) => (
              <motion.div key={skill.name} variants={fadeUp}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-[#3b4b87] font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-[#1b1f33]/60 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="h-4 rounded-full bg-gradient-to-r from-[#263260] via-[#3b4b87] to-indigo-400 relative"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;