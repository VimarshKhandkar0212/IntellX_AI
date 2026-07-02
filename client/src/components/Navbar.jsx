import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <Link
          to="/#hero"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          IntellX AI
        </Link>

        {/* Right Side */}

        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/#hero"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>

            <Link
              to="/#services"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              Services
            </Link>

            <Link
              to="/#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              About
            </Link>

            <Link
              to="/#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white transition-all"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Theme Toggle */}

          <button
            onClick={toggleTheme}
            title={
              theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
            }
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-all"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-80 opacity-100 border-t border-gray-200 dark:border-gray-800"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-gray-950">
          <Link
            to="/#hero"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-cyan-400 transition-all"
          >
            Home
          </Link>

          <Link
            to="/#services"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-cyan-400 transition-all"
          >
            Services
          </Link>

          <Link
            to="/#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-cyan-400 transition-all"
          >
            About
          </Link>

          <Link
            to="/#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-cyan-400 transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
