import { motion } from "framer-motion";
import {
  FaPhp,
  FaLaravel,
  FaReact,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

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
  const otherSkills = [
    { name: "Problem-solving" },
    { name: "Teamwork" },
    { name: "English reading comprehension" },
    { name: "Soft skills" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-gradient-to-r from-blue-100 to-indigo-100"
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
        <div className="mt-10 text-left">
  <motion.h3
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-2xl font-bold mb-6 text-indigo-600"
  >
    Other Skills
  </motion.h3>

  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {otherSkills.map((skill, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        className="flex items-center bg-gray-50 hover:bg-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition duration-300"
      >
        <span className="text-indigo-500 text-xl mr-3">✔</span>
        <span className="text-gray-700 text-lg font-medium">{skill.name}</span>
      </motion.li>
    ))}
  </ul>
</div>

      </div>
    </section>
  );
}
