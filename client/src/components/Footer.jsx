function Footer() {
  return (
    <footer className="border-t py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <h3 className="text-2xl font-bold mb-3">
              IntellX AI
            </h3>

            <p className="text-gray-600">
              Empowering businesses through intelligent
              automation and AI-driven solutions.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="font-semibold mb-3">
              Quick Links
            </h4>

            <ul className="space-y-2">

              <li>
                <a href="#hero" className="hover:underline">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>

              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="font-semibold mb-3">
              Connect
            </h4>

            <ul className="space-y-2 text-gray-600">

              <li>Email: Coming Soon</li>

              <li>Phone: Coming Soon</li>

              <li>Location: India</li>

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} IntellX AI.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}

export default Footer;