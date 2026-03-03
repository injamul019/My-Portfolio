import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://via.placeholder.com/600x400/1e293b/3b82f6?text=E-Commerce",
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team features.",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    image:
      "https://via.placeholder.com/600x400/1e293b/3b82f6?text=Task+Manager",
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website with smooth animations and dark mode.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://via.placeholder.com/600x400/1e293b/3b82f6?text=Portfolio",
    demo: "#",
    github: "#",
  },
  {
    title: "Blog Platform",
    description:
      "Content management system for creating and publishing blog posts.",
    tech: ["React", "Node.js", "MongoDB", "Markdown"],
    image:
      "https://via.placeholder.com/600x400/1e293b/3b82f6?text=Blog+Platform",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-card border border-border rounded-xl overflow-hidden hover:border-brand transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demo}
                    className="p-3 bg-brand rounded-full hover:bg-brand-hover transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="text-white" size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-brand text-sm rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
