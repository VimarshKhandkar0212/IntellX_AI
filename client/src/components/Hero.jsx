function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <div className="inline-block px-4 py-2 rounded-full border mb-6">
          IntellX AI Powered Solutions
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Intelligent Automation
          <br />
          for Modern Business
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your operations with cutting-edge AI solutions.
          We help businesses scale efficiently through smart automation.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <a
            href="#contact"
            className="px-6 py-3 bg-black text-white rounded-xl"
          >
            Get Started
          </a>

          <a
            href="#services"
            className="px-6 py-3 border rounded-xl"
          >
            Learn More
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;