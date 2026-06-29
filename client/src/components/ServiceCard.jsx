import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col h-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-white/10 dark:hover:border-gray-500 transition-all duration-300"
    >
      <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white transition-colors">
        {service.title}
      </h3>

      <p className="flex-grow text-gray-600 dark:text-gray-300 leading-7 transition-colors">
        {service.description}
      </p>

      <p className="mt-8 font-semibold text-black dark:text-white group-hover:translate-x-1 transition-all duration-300">
        Learn More →
      </p>
    </Link>
  );
}

export default ServiceCard;