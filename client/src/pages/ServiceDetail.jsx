import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { services } from "../data/services";
import { Link } from "react-router-dom";


import {
  Bot,
  FileText,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <>
        <Navbar />

        <div className="p-10">
          <h1 className="text-4xl font-bold">
            Service Not Found
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="mb-8">

          <Link
            to="/#services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            ← Back to Services
          </Link>

          <p className="text-gray-500">
            Home &gt; Services &gt; {service.title}
          </p>

        </div>

        {/* Hero Section */}

        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 md:p-16 mb-10">

  <div className="grid lg:grid-cols-2 gap-10 items-center">

    <div>

      <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
        {service.title}
      </span>

      <h1 className="text-5xl md:text-6xl font-bold mt-6">
        {service.title}
      </h1>

      <p className="text-lg text-gray-600 mt-6 max-w-2xl">
        {service.description}
      </p>

      <div className="flex gap-4 mt-8">

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300">
          Get Started
        </button>

      </div>

    </div>

    <div className="flex justify-center">

      <div className="
      bg-blue-600
      text-white
      px-6
      py-3
      rounded-xl
      hover:bg-blue-700
      hover:scale-105
      transition-all
      duration-300
      ">

        <img
  src={service.heroImage}
  alt={service.title}
  className="w-full max-w-xs object-contain"
/>

      </div>

    </div>

  </div>

</section>

        {/* Overview */}

        <section className="bg-slate-50 rounded-3xl p-8 mb-8">

  <div className="flex gap-6 items-start">

    <div className="bg-white p-4 rounded-2xl shadow-sm">

      <FileText
        size={32}
        className="text-blue-600"
      />

    </div>

    <div>

      <h2 className="text-3xl font-bold mb-4">
        Overview
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        {service.overview}
      </p>

    </div>

  </div>

</section>

        {/* Features */}

        <section className="bg-blue-50 rounded-3xl p-8 mb-8">

  <h2 className="text-3xl font-bold mb-6">
    Features
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

    {service.features.map((feature) => (

      <div
        key={feature}
        className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
      >

        <div className="flex items-center gap-3">

          <Sparkles
            size={18}
            className="text-blue-600"
          />

          <span>{feature}</span>

        </div>

      </div>

    ))}

  </div>

</section>

        {/* Benefits */}

        <section className="bg-green-50 rounded-3xl p-8 mb-8">

  <h2 className="text-3xl font-bold mb-6">
    Benefits
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

    {service.benefits.map((benefit) => (

      <div
        key={benefit}
        className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
      >

        <div className="flex items-center gap-3">

          <TrendingUp
            size={18}
            className="text-green-600"
          />

          <span>{benefit}</span>

        </div>

      </div>

    ))}

  </div>

</section>

        {/* Use Cases */}

       <section className="bg-purple-50 rounded-3xl p-8 mb-10">

  <h2 className="text-3xl font-bold mb-6">
    Use Cases
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

    {service.useCases.map((useCase) => (

      <div
        key={useCase}
        className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
      >

        <div className="flex items-center gap-3">

          <Users
            size={18}
            className="text-purple-600"
          />

          <span>{useCase}</span>

        </div>

      </div>

    ))}

  </div>

</section>

<section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 text-center">

  <h2 className="text-4xl font-bold mb-4">
    Ready to Transform Your Business?
  </h2>

  <p className="text-lg mb-8 opacity-90">
    Let's discuss your project and build the right AI solution together.
  </p>

  <button
  onClick={() => {
    window.location.href = "/#contact";
  }}
  className="
    bg-white
    text-blue-600
    px-8
    py-3
    rounded-xl
    font-semibold
    hover:scale-105
    hover:bg-gray-100
    transition-all
    duration-300
  "
>
  Contact Us →
</button>

</section>

      </div>
    </>
  );
}

export default ServiceDetail;