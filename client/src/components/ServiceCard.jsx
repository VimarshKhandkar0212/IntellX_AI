import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="
        block
        border
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-lg
        transition
      "
    >
      <h3 className="text-2xl font-semibold mb-3">
        {service.title}
      </h3>

      <p className="text-gray-600 mb-6">
        {service.description}
      </p>

      <p className="font-semibold">
        Learn More →
      </p>
    </Link>
  );
}

export default ServiceCard;