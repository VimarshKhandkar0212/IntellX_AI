import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-5 text-black dark:text-white transition-colors">
          Our Services
        </h2>

        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16 transition-colors">
          AI-powered solutions designed to help businesses grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;