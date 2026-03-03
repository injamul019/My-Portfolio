import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Meta / Coursera",
    date: "2023",
    description:
      "Comprehensive certification covering React, Node.js, and MongoDB.",
    link: "#",
    image: "https://via.placeholder.com/150/3b82f6/ffffff?text=Meta",
  },
  {
    id: 2,
    title: "MERN Stack Masterclass",
    issuer: "Udemy",
    date: "2023",
    description: "Advanced project-based learning for MERN stack development.",
    link: "#",
    image: "https://via.placeholder.com/150/3b82f6/ffffff?text=Udemy",
  },
  {
    id: 3,
    title: "Computer Science Fundamentals",
    issuer: "Metropolitan University",
    date: "2022",
    description:
      "Academic certification for core CS principles and algorithms.",
    link: "#",
    image: "https://via.placeholder.com/150/3b82f6/ffffff?text=MU",
  },
  {
    id: 4,
    title: "Cloud Computing Basics",
    issuer: "AWS",
    date: "2024",
    description: "Introduction to cloud services and deployment strategies.",
    link: "#",
    image: "https://via.placeholder.com/150/3b82f6/ffffff?text=AWS",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-brand transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-4 p-3 bg-brand/10 rounded-lg w-fit">
                <Award className="text-brand" size={24} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>

              <p className="text-slate-400 text-sm mb-4 flex-grow">
                {cert.issuer}
              </p>

              <p className="text-slate-500 text-xs mb-4">{cert.description}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brand text-sm font-medium hover:text-brand-hover transition-colors"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
