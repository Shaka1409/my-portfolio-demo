import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Thanh Trinh</h3>
          <p className="text-gray-100 leading-relaxed">
            A passionate developer who loves creating modern and responsive web applications 🚀.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p>Email: <a href="mailto:trinh14092004z@gmail.com" className="underline">trinh14092004z@gmail.com</a></p>
          <p>Location: Hanoi, Vietnam</p>
          <div className="flex gap-4 text-2xl mt-4">
            <a href="https://github.com/Shaka1409" target="_blank" className="hover:text-gray-300"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/tr%C3%ACnh-nguy%E1%BB%85n-2b157a231/" target="_blank" className="hover:text-blue-300"><FaLinkedin /></a>
            <a href="https://www.facebook.com/thanh.trinh.566775" target="_blank" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="mailto:trinh14092004z@gmail.com" className="hover:text-red-300"><FaEnvelope /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Thanh Trinh. All rights reserved.
      </div>
    </footer>
  );
}
