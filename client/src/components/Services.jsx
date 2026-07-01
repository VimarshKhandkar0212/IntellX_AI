import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

import robot from "../assets/new_robo.png";
import analytics from "../assets/service_right.png";

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden  py-24 pb-36 px-8 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-[1800px] mx-auto">

        <h2 className="text-5xl font-bold text-center mb-5 text-black dark:text-white">
          Our 
          
          <span className="text-blue-600 dark:text-blue-400">
            {" "}Services
          </span>
          
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gray-500 to-gray-800" />
        </h2>

        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16">
          AI-powered solutions designed to help businesses grow.
        </p>

        <div className="flex items-center justify-center gap-6">

          {/* Left Image */}

          <div className="hidden 2xl:block shrink-0">
            <img
              src={robot}
              alt="AI Robot"
              className="w-55"
            />
          </div>

          {/* Cards */}

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto -mt-4">

            {services.map((service) => (
              <div
                key={service.slug}
                className="w-full sm:w-[330px] lg:w-[280px]"
              >
                <ServiceCard service={service} />
              </div>
            ))}

</div>

          {/* Right Image */}

          <div className="hidden 2xl:block shrink-0">
            <img
              src={analytics}
              alt="Analytics"
              className="w-55"
            />
          </div>

        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>
    </section>
  );
}

export default Services;