import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm <span className="font-semibold">Thanh Trinh</span>, a developer
            who loves crafting modern and responsive web applications.  
            With experience in{" "}
            <span className="font-bold text-indigo-600">PHP</span>,{" "}
            <span className="font-bold text-purple-600">JavaScript</span>,{" "}
            <span className="font-bold text-pink-600">Laravel</span>,{" "}
            <span className="font-bold text-teal-600">Tailwind</span>, and{" "}
            <span className="font-bold text-yellow-600">ReactJS</span> (learning),
            I enjoy building clean UIs and solving problems through code.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond coding, I value <strong>teamwork</strong> and continuous learning.  
            My focus is on creating impactful digital experiences 🚀.
          </p>
          <Link
            to="contact" smooth duration={600}
            className="inline-block cursor-pointer mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-indigo-400/50 hover:scale-105 transform transition"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Right Info Card */}
        <motion.div
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="bg-white border border-gray-200 
             shadow-lg rounded-2xl p-8 space-y-6 
             transform hover:scale-105 hover:shadow-indigo-300/50 
             transition text-gray-800"
>
  <div>
    <h3 className="text-xl font-semibold text-pink-600">✨ Personal Info</h3>
    <ul className="mt-4 space-y-2">
      <li><span className="font-medium text-gray-900">Name:</span> Thanh Trinh</li>
      <li>Email: <a href="mailto:trinh14092004z@gmail.com" className="underline">trinh14092004z@gmail.com</a></li>
      <li><span className="font-medium text-gray-900">Location:</span> Hanoi, Vietnam</li>
      <li><span className="font-medium text-gray-900">Role:</span> Frontend Developer</li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-indigo-600">🎓 Education</h3>
    <p className="mt-2">
      Graduate with Distinction in IT, Hanoi Polytechnic College (2022 - 2025)  
      GPA: 3.28/4.00  
      <br />
      <span className="italic text-gray-600">
        Graduation project: E-commerce website (Laravel, MySQL, PHP, TailwindCSS)
      </span>
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-teal-600">💡 Interests</h3>
    <p className="mt-2">
      Web design, problem-solving, learning new frameworks, teamwork.
    </p>
  </div>
</motion.div>

      </div>
    </section>
  );
}
