import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 shadow-md backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={600}
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
        >
          MyPortfolio
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                spy={true}
                activeClass="text-indigo-600 border-b-2 border-indigo-600"
                className="hover:text-indigo-600 font-bold cursor-pointer transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl text-indigo-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-white/90 shadow-lg">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                spy={true}
                activeClass="text-indigo-600 border-b-2 border-indigo-600"
                className="hover:text-indigo-600 font-bold cursor-pointer transition"
                onClick={() => setOpen(false)} // đóng menu khi bấm
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
