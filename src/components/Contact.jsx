import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_r8nml2t", 
        "template_e8hbdhe",
        formRef.current,
        "ZWpTRaylkY_BntRGS"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          setStatus("Failed to send. " + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-300 via-white to-pink-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          📬 <span className="text-transparent">Get in Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                Contact Information
              </h3>
              <p className="mb-4 text-gray-700">
                Feel free to reach out for collaborations, freelance projects,
                or just to say hi 👋
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-800">
                  <FaMapMarkerAlt className="text-indigo-500 text-xl" />
                  <span>Hà Nội, Việt Nam</span>
                </div>
                <div className="flex items-center gap-4 text-gray-800">
                  <FaPhoneAlt className="text-indigo-500 text-xl" />
                  <a href="tel:0358169047">+84 358 169 047</a>
                </div>
                <div className="flex items-center gap-4 text-gray-800">
                  <FaEnvelope className="text-indigo-500 text-xl" />
                  <a href="mailto:trinh14092004z@gmail.com">
                    trinh14092004z@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 mt-6 text-2xl text-gray-600">
                <a
                  href="https://www.facebook.com/thanh.trinh.566775"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/tr%C3%ACnh-nguy%E1%BB%85n-2b157a231/"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Shaka1409"
                  target="_blank"
                  className="hover:text-gray-900"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
              Send a Message
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
            {status && (
              <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
