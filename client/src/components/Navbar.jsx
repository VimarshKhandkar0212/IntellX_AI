import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/#hero"
          className="text-2xl font-bold text-gray-900 dark:text-white transition-colors"
        >
          IntellX AI
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link to="/#hero" className=" text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            Home
          </Link>

          <Link to="/#services" className=" text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            Services
          </Link>

          <Link to="/#about" className=" text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            About
          </Link>

          <Link to="/#contact" className=" text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            Contact
          </Link>

          <button onClick={toggleTheme} title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors">
              {theme === "light" ? (<Moon size={20} />
              ) : (
              <Sun size={20} />
              )}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;