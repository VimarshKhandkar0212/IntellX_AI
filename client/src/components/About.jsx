import { Link } from "react-router-dom";
import humanAiColab from "../assets/humanAiColab.png";
import humanAiBlack from "../assets/humanAiBlack.png";

import {
  Smile,
  TrendingUp,
  BarChart3,
} from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 px-6 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="w-full max-w-6xl mx-auto text-center">

        <span className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm transition-colors">
          WHY CHOOSE US
        </span>

        <h2 className="text-5xl lg:text-6xl font-bold mt-8 mb-8 text-black dark:text-white">
          
          Built for the Future
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          
        </h2>

        <p className="max-w-3xl mx-auto text-xl leading-9 text-gray-600 dark:text-gray-300">
          We partner with forward-thinking businesses to
          implement AI automation that drives measurable
          results. Our solutions are designed to help SMEs
          streamline operations, improve efficiency, and
          prepare for scalable growth.
        </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            {/* LEFT SIDE */}
            <div>

              <img
                 src={humanAiColab} alt="" className="rounded-3xl shadow-2xl shadow-blue-300/20 dark:hidden transition-transform duration-500 hover:scale-[1.02]"
              />

              <img
                src={humanAiBlack} alt="" className="hidden dark:block rounded-3xl shadow-2xl shadow-cyan-500/10 transition-transform duration-500 hover:scale-[1.02]"/>

            </div>

            <div className="space-y-6">
              <div className="group flex items-center gap-6 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/90 backdrop-blur-sm dark:bg-slate-900/80 p-6 shadow-lg hover:-translate-y-2  hover:shadow-2xl  duration-300">

                <div className="h-16 w-16 rounded-2xl bg-blue-50 dark:bg-cyan-500/10 flex items-center justify-center">

                  <Smile
                    size={32}
                    className="text-blue-600 dark:text-cyan-400 transition-all group-hover:scale-110 group-hover:rotate-6"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                    98%
                  </h3>

                  <h4 className="font-semibold text-lg text-black dark:text-white">
                    Client Satisfaction
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Consistently delivering excellence and building long-term partnerships.
                  </p>

                </div>

                <div className="w-1 self-stretch rounded-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>

              </div>
              
              
              
              <div className="group flex items-center gap-6 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/90 backdrop-blur-sm  dark:bg-slate-900/80 p-6 shadow-lg hover:-translate-y-2  hover:shadow-2xl  duration-300">

                <div className="h-16 w-16 rounded-2xl bg-blue-50 dark:bg-cyan-500/10 flex items-center justify-center">

                  <TrendingUp
                    size={32}
                    className="text-blue-600 dark:text-cyan-400 transition-all group-hover:scale-110 group-hover:rotate-6"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                    3.8X
                  </h3>

                  <h4 className="font-semibold text-lg text-black dark:text-white">
                    ROI Within 18 Months
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Businesses achieve measurable ROI through intelligent automation.
                  </p>

                </div>

              <div className="w-1 self-stretch rounded-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>

              </div>
              
              
              <div className="group flex items-center gap-6 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/90 backdrop-blur-sm dark:bg-slate-900/80 p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300 ">

                <div className="h-16 w-16 rounded-2xl bg-blue-50 dark:bg-cyan-500/10 flex items-center justify-center">

                  <BarChart3
                    size={32}
                    className="text-blue-600 dark:text-cyan-400 transition-all group-hover:scale-110 group-hover:rotate-6"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                    15-16%
                  </h3>

                  <h4 className="font-semibold text-lg text-black dark:text-white">
                    Average Revenue Increase
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Our AI solutions help businesses drive measurable revenue growth and operational efficiency.
                  </p>

                </div>

                <div className="w-1 self-stretch rounded-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>

              </div>
            </div>
          </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>
    </section>
  );
}

export default About;