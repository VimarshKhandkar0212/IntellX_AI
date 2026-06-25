function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}

          <div>

            <h3 className="text-2xl font-bold mb-4">
              IntellX AI
            </h3>

            <div className="w-16 h-1 bg-blue-500 mb-4"></div>

            <p className="text-gray-400 leading-relaxed">
              Empowering businesses through intelligent
              automation, AI-driven solutions, and scalable
              digital transformation.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-xl font-semibold mb-4">
              Quick Links
            </h4>

            <div className="w-16 h-1 bg-blue-500 mb-4"></div>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#hero" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/testimonials"
                  className="hover:text-white transition"
                >
                  Testimonials
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-semibold mb-4">
              Contact
            </h4>

            <div className="w-16 h-1 bg-blue-500 mb-4"></div>

            <ul className="space-y-3 text-gray-400">

              <li>
                Email: your-email@example.com
              </li>

              <li>
                Phone: +91 XXXXXXXXXX
              </li>

              <li>
                Location: Your Location
              </li>

            </ul>

          </div>

          {/* Social Media */}

          <div>

            <h4 className="text-xl font-semibold mb-4">
              Social Media
            </h4>

            <div className="w-16 h-1 bg-blue-500 mb-4"></div>

            <ul className="space-y-3 text-gray-400">

              <li>
                LinkedIn
              </li>

              <li>
                GitHub
              </li>

              <li>
                Instagram
              </li>

              <li>
                X (Twitter)
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} IntellX AI.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;