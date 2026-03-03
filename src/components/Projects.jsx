import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/Ecommerce.png",
    demo: "https://exclusive-smoky.vercel.app/",
    github: "https://github.com/Riajul-56/Exclusive",
  },
  {
    title: "School Music Platform",
    description:
      "A modern, interactive music school website built with Next.js 14, TypeScript, and stunning UI components from Aceternity UI.",
    tech: ["Next.JS", "TypeScript"],
    image: "/Music.png",
    demo: "https://school-music-three.vercel.app/",
    github: "https://github.com/Riajul-56/school_music",
  },
  {
    title: "Kids School Platform",
    description: "Modern, responsive website with smooth animations",
    tech: ["SCSS", "HTML", "Framer Motion", "Bootstrap"],
    image: "/kids.png",
    demo: "https://kids-school-neon.vercel.app/",
    github: "https://github.com/Riajul-56/Kids_Schoolv",
  },
  {
    title: "Best NFTs Marketplace.",
    description:
      "It is fully responsive single-page application (SPA) using React.js, Tailwind CSS, JavaScript, and HTML. This project is designed to be sleek, modern, and highly optimized for performance.",
    tech: ["React", "Tailwind CSS"],
    image: "/next.png",
    demo: "https://nextgen-gules.vercel.app/",
    github: "https://github.com/Riajul-56/NextGen",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 ">
      {/* Background decoration - Removed gradient */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-4">
            💼 My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    console.log("Image failed to load:", project.image);
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons Below Image - Solid Colors */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-700/50">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white rounded-lg text-sm font-medium transition-all"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button - Solid Color */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Riajul-56"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-blue-400 rounded-full transition-all"
          >
            View More on GitHub
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
