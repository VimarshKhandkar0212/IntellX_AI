import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/#hero"
          className="text-2xl font-bold text-gray-900"
        >
          IntellX AI
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link to="/#hero" className="text-gray-700 hover:text-black transition">
            Home
          </Link>

          <Link to="/#services" className="text-gray-700 hover:text-black transition">
            Services
          </Link>

          <Link to="/#about" className="text-gray-700 hover:text-black transition">
            About
          </Link>

          <Link to="/#contact" className="text-gray-700 hover:text-black transition">
            Contact
          </Link>

          <button className="px-4 py-2 rounded-lg border">
            Theme
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;