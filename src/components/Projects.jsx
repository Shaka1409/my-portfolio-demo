import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "NightLight E-commerce Site",
      date: "Feb 2025 - Jul 2025",
      desc: "E-commerce platform for lamps with Laravel and Tailwind",
      tech: ["Laravel", "PHP", "MySQL", "Tailwind"],
      github: "https://github.com/Shaka1409/LightNight",
    },
    {
      title: "Portfolio Website",
      date: "2025",
      desc: "Personal portfolio built with React + Tailwind showcasing my skills and projects.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/Shaka1409/my-portfolio-demo",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-200"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500"
        >
          🚀 <span className="text-transparent">My Projects</span>
        </motion.h2>

        <div className="relative border-l-4 border-indigo-400 pl-6 space-y-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl shadow-lg p-6 border border-transparent hover:border-indigo-400 hover:shadow-2xl transition"
            >
              {/* Timeline Dot with animation */}
              <span className="absolute -left-8 top-6 w-5 h-5 rounded-full bg-indigo-500 shadow-md shadow-indigo-400 animate-pulse"></span>

              <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{p.date}</p>
              <p className="text-gray-700 mb-4">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                  <FaGithub /> Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
