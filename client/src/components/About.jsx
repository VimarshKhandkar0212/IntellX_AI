import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="about"
      className="min-h-[85vh] flex items-center py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="w-full max-w-6xl mx-auto text-center">

        <span className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm transition-colors">
          WHY CHOOSE US
        </span>

        <h2 className="text-5xl font-bold mt-8 mb-6 text-black dark:text-white transition-colors">
          Built for the Future
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors">
          We partner with forward-thinking businesses to
          implement AI automation that drives measurable
          results. Our solutions are designed to help SMEs
          streamline operations, improve efficiency, and
          prepare for scalable growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

          <div className="border border-gray-800 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-5xl font-bold text-black dark:text-white transition-colors">
              98%
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300 transition-colors">
              Client Satisfaction
            </p>
          </div>

          <div className="border border-gray-800 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-5xl font-bold text-black dark:text-white transition-colors">
              3.8X
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300 transition-colors">
              ROI Within 18 Months
            </p>
          </div>

          <div className="border border-gray-800 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-5xl font-bold text-black dark:text-white transition-colors">
              15-16%
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300 transition-colors">
              Average Revenue Increase
            </p>
          </div>

        </div>


      </div>
    </section>
  );
}

export default About;