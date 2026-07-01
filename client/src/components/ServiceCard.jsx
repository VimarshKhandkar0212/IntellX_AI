import { Link } from "react-router-dom";


function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative flex flex-col h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(59,130,246,0.18)] dark:hover:shadow-[0_10px_35px_rgba(94,245,253,0.20)]"
    >

      {/* Animated Border */}

      <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 dark:group-hover:border-cyan-400 transition-all duration-500"></span>

      {/* Top Glow */}

      <span className="absolute -top-12 left-[-40%] h-20 w-40 rotate-12 bg-blue-400/30 blur-2xl opacity-0 group-hover:opacity-100 group-hover:left-[110%] transition-all duration-700 dark:bg-cyan-400/30"></span>

        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 dark:bg-cyan-500/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

          <Icon
            size={28}
            className="text-blue-600 dark:text-cyan-400 transition-all duration-500"
          />

        </div>

      <h3 className="relative text-xl font-semibold mb-4 text-black dark:text-white">
        {service.title}
      </h3>

      <p className="relative flex-grow text-sm leading-7 text-gray-600 dark:text-gray-300">
        {service.description}
      </p>

      <div className="relative mt-6 flex items-center font-semibold text-black dark:text-white">

        Learn More

        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>

      </div>

    </Link>
  );
}

export default ServiceCard;