import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-12">
          AI-powered solutions designed to help businesses grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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