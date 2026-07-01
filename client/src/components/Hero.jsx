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

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 -mt-5">

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

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <div className="min-w-[170px] rounded-2xl border border-white/20 dark:border-cyan-500/20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md px-6 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1">

            <h3 className="text-3xl font-bold text-blue-600 dark:text-cyan-400">
              98%
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Client Satisfaction
            </p>

          </div>

          <div className="min-w-[170px] rounded-2xl border border-white/20 dark:border-cyan-500/20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md px-6 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1">

            <h3 className="text-3xl font-bold text-blue-600 dark:text-cyan-400">
              3.8X
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              ROI Growth
            </p>

          </div>

          <div className="min-w-[170px] rounded-2xl border border-white/20 dark:border-cyan-500/20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md px-6 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1">

            <h3 className="text-3xl font-bold text-blue-600 dark:text-cyan-400">
              15-16%
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Revenue Increase
            </p>

          </div>

        </div>

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
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>
    </section>
  );
}

export default Hero;