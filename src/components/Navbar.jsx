import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 bg-opacity-90 backdrop-blur-md z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-blue-400 font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Portfolio
        </div>

        {}
        <div className="hidden md:flex space-x-8">
          <button
            className="text-gray-300 hover:text-blue-400"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </button>
          <button
            className="text-gray-300 hover:text-blue-400"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="text-gray-300 hover:text-blue-400"
            onClick={() => scrollToSection("education")}
          >
            Education
          </button>
          <button
            className="text-gray-300 hover:text-blue-400"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>
        </div>

        {}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {}
      {isOpen && (
        <div className="md:hidden bg-slate-800 bg-opacity-95 backdrop-blur-md px-6 py-4 space-y-4">
          <button
            className="block w-full text-left text-gray-300 hover:text-blue-400"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </button>
          <button
            className="block w-full text-left text-gray-300 hover:text-blue-400"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="block w-full text-left text-gray-300 hover:text-blue-400"
            onClick={() => scrollToSection("education")}
          >
            Education
          </button>
          <button
            className="block w-full text-left text-gray-300 hover:text-blue-400"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
