import Tilt from "react-parallax-tilt";
import ThanhTrinh from "../assets/ThanhTrinh.png";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center pt-10 justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
    >
      <Tilt
        glareEnable={true}
        glareColor="white"
        glareMaxOpacity={0.1}
        className="max-w-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="bg-white/10 backdrop-blur-md border transform transition duration-700 md:hover:scale-105 
        border-white/20 rounded-2xl shadow-xl p-6 text-center text-white"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <img
                src={ThanhTrinh}
                alt="Thanh trinh Avatar"
                className="w-32 h-32 rounded-full border-4 border-white/30 hover:shadow-xl md:hover:scale-95 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold mb-4">
              Hi, I'm Thanh Trinh 👋
            </h1>
            <p className="text-lg mb-2">PHP | Tailwind CSS | ReactJS</p>
            <p className="italic text-gray-200 mb-6">
              I build modern & responsive web applications 🚀
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 text-2xl mb-6">
              <a
                href="https://github.com/Shaka1409"
                target="_blank"
                className=" md:hover:text-gray-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tr%C3%ACnh-nguy%E1%BB%85n-2b157a231/"
                target="_blank"
                className="md:hover:text-blue-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/thanh.trinh.566775"
                target="_blank"
                className="md:hover:text-blue-400"
              >
                <FaFacebook />
              </a>
              <a
                href="mailto:trinh14092004z@example.com"
                className="md:hover:text-red-300"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Button */}
            <Link
              to="about"
              smooth="true"
              duration={600}
              className="px-6 py-3 bg-white/20 md:hover:bg-gradient-to-br hover:from-pink-500 hover:to-indigo-500 rounded-full font-semibold cursor-pointer"
            >
              View My Information
            </Link>
          </div>
        </motion.div>
      </Tilt>
      <div className="absolute bottom-6 animate-bounce text-white text-xl">
        ↓ Scroll Down
      </div>
    </section>
  );
}
