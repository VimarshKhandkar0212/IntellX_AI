import heroLight from "../assets/hero_light.png";
import heroDark from "../assets/hero_dark.png";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}

      <img
        src={heroLight}
        alt=""
        className="
          absolute inset-0
          w-full h-full
          object-cover
          dark:hidden
          pointer-events-none
          select-none
        "
      />

      <img
        src={heroDark}
        alt=""
        className="
          absolute inset-0
          w-full h-full
          object-cover
          hidden
          dark:block
          pointer-events-none
          select-none
        "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-white/35 dark:bg-black/45"></div>

      {/* Content */}

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">

        <div className="inline-block px-5 py-2 rounded-full border border-blue-200 dark:border-blue-800 bg-white/70 dark:bg-black/40 backdrop-blur-sm text-blue-700 dark:text-blue-300 mb-6 transition-all duration-300">
          IntellX AI Powered Solutions
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black dark:text-white">

          Intelligent Automation

          <br />

          for

          <span className="text-blue-600 dark:text-blue-400">
            {" "}Modern Business
          </span>

        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Transform your operations with cutting-edge AI solutions.
          We help businesses scale efficiently through smart automation.
        </p>

        <div className="mt-10 flex justify-center">

          <a
            href="#services"
            className="
              px-8 py-3
              rounded-xl
              bg-black
              text-white
              dark:bg-white
              dark:text-black
              hover:scale-105
              hover:bg-gray-800
              dark:hover:bg-gray-200
              transition-all
              duration-300
            "
          >
            Get Started
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;