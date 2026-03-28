import { motion } from "framer-motion";
import { Github } from "lucide-react";

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

const projects = [
  {
    title: "ML Based Student Advisor",
    description:
      "A smart system that uses machine learning to guide students in academic and career decisions.",
    tech: ["Python"],
    image: "/ML.PNG",
    github: "https://github.com/injamul019/ML-Student-Advisor",
  },
  {
    title: "Photography Club",
    description:
      "A creative platform where students capture and showcase moments through photography while developing visual storytelling and editing skills.",
    tech: ["Php","Sql"],
    image: "/ph.png",
    github: "https://github.com/injamul019/Photography_Club...",
  },
  {
    title: "Furniture Shop",
    description:
      "An interactive platform showcasing a variety of furniture products for easy browsing and purchasing.",
    tech: ["Java"],
    image: "/java.png",
    github: "https://github.com/injamul019/Furniture_Shop_Java",
  },
  {
    title: "My Portfolio!",
    description:
      "My Portfolio showcases my skills, projects, and professional journey in a single interactive web platform.",
    tech: ["React","Tailwind CSS", "Framer Motion","Lucide React"],
    image: "/port.PNG",
    github: "https://github.com/injamul019/My-Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">

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
            My{" "}
            <span className="bg-gradient-to-r from-[#3b4b87] to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Projects showcasing my development skills and practical experience.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              variants={fadeUp}
              whileHover={{ y: -12 }}
              className="group bg-[#1b1f33]/60 backdrop-blur-lg border border-slate-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-[#3b4b87]/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => (e.target.style.display = "none")}
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#2c2f44]/70 text-slate-300 text-xs rounded-full border border-[#3b3e5a] hover:bg-[#3b4b87]/20 hover:text-[#3b4b87] transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-600 text-slate-300 hover:border-[#3b4b87] hover:text-[#3b4b87] rounded-lg text-sm font-medium transition-all duration-300"
                >
                  <Github size={16} />
                  View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/injamul019?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-[#3b4b87] text-slate-300 hover:text-[#3b4b87] rounded-full transition-all duration-300"
          >
            View More on GitHub
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;