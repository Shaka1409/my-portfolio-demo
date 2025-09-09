import { motion } from "framer-motion";
import { FaPhp, FaLaravel, FaReact, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "PHP", icon: <FaPhp />, color: "text-indigo-500" },
    { name: "Laravel", icon: <FaLaravel />, color: "text-red-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "ReactJS", icon: <FaReact />, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "MySQL", icon: <FaDatabase />, color: "text-yellow-600" },
    { name: "Git/GitHub", icon: <FaGitAlt />, color: "text-gray-700" },
  ];

  return (
    <section
      id="skills"
      className="h-screen py-20 bg-gradient-to-r from-blue-100 to-indigo-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text "
        >
          💡 <span className="text-transparent">My Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-xl shadow-md p-6 flex flex-col 
                         items-center justify-center hover:shadow-2xl 
                         hover:-translate-y-2 transition duration-300"
            >
              <div className={`text-5xl mb-3 ${skill.color}`}>{skill.icon}</div>
              <p className="font-semibold text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
