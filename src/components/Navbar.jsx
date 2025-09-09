import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 w-full z-1 p-4 bg-white/70 shadow-md backdrop-blur-lg">
      <Link
        to="hero"
        smooth="true"
        duration={600}
        className="text-xl font-bold text-indigo-600 cursor-pointer"
      >
        MyPortfolio
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link
            to="about"
            smooth="true"
            duration={600}
            spy={true}
            activeClass="text-indigo-600 border-b-2 border-indigo-600"
            className="hover:text-indigo-600 font-bold cursor-pointer transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth="true"
            duration={600}
            spy={true}
            activeClass="text-indigo-600 border-b-2 border-indigo-600"
            className="hover:text-indigo-600 font-bold cursor-pointer transition"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth="true"
            duration={600}
            spy={true}
            activeClass="text-indigo-600 border-b-2 border-indigo-600"
            className="hover:text-indigo-600 font-bold cursor-pointer transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth="true"
            duration={600}
            spy={true}
            activeClass="text-indigo-600 border-b-2 border-indigo-600"
            className="hover:text-indigo-600 font-bold cursor-pointer transition"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
