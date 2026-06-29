import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { services } from "../data/services";

import {
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

      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12">

          {/* Breadcrumb */}
          <div className="mb-8">

            <Link
              to="/#services"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mb-4 transition-colors"
            >
              ← Back to Services
            </Link>

            <p className="text-gray-500 dark:text-gray-400 flex flex-wrap gap-1 transition-colors">

              <Link
                to="/"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Home
              </Link>

              <span>&gt;</span>

              <Link
                to="/#services"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Services
              </Link>

              <span>&gt;</span>

              <span className="text-black dark:text-white transition-colors">
                {service.title}
              </span>

            </p>
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-800 rounded-3xl p-10 md:p-16 mb-12 transition-colors duration-300">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div>

                <span className="inline-block bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors">
                  {service.title}
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 text-black dark:text-white transition-colors">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl leading-relaxed transition-colors">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                    Get Started
                  </button>
                </div>

              </div>

              <div className="flex justify-center">

                <div className="bg-gray-200 dark:bg-gray-800 text-white p-5 rounded-xl border border-gray-300 dark:border-gray-600 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">

                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full max-w-[280px] sm:max-w-sm object-contain"
                  />

                </div>

              </div>

            </div>

          </section>

          {/* Overview */}
          <section className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-800 rounded-3xl p-8 md:p-10 mb-8 transition-colors duration-300">

            <div className="flex flex-col sm:flex-row gap-6 items-start">

              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300">

                <FileText
                  size={32}
                  className="text-blue-600"
                />

              </div>

              <div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white transition-colors">
                  Overview
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
                  {service.overview}
                </p>

              </div>

            </div>

          </section>

          {/* Features */}
          <section className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-800 rounded-3xl p-8 md:p-10 mb-8 transition-colors duration-300">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white transition-colors">
              Features
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out"
                >

                  <div className="flex items-center gap-3">

                    <Sparkles
                      size={20}
                      className="text-blue-600"
                    />

                    <span className="text-black dark:text-white transition-colors">
                      {feature}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* Benefits */}
          <section className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-800 rounded-3xl p-8 md:p-10 mb-8 transition-colors duration-300">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white transition-colors">
              Benefits
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out"
                >

                  <div className="flex items-center gap-3">

                    <TrendingUp
                      size={20}
                      className="text-green-600"
                    />

                    <span className="text-black dark:text-white transition-colors">
                      {benefit}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* Use Cases */}
          <section className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-800 rounded-3xl p-8 md:p-10 mb-10 transition-colors duration-300">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white transition-colors">
              Use Cases
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {service.useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out"
                >

                  <div className="flex items-center gap-3">

                    <Users
                      size={20}
                      className="text-purple-600"
                    />

                    <span className="text-black dark:text-white transition-colors">
                      {useCase}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-800 text-black dark:text-white rounded-3xl p-8 md:p-12 text-center transition-colors duration-300">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>

            <p className="text-lg mb-8 opacity-90">
              Let's discuss your project and build the right AI solution together.
            </p>

            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="bg-white text-blue-600 dark:bg-gray-900 dark:text-white px-8 py-3 w-full sm:w-auto rounded-xl font-semibold border border-transparent dark:border-gray-700 hover:scale-105 hover:bg-gray-950 dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Contact Us →
            </button>

          </section>

        </div>
      </div>
    </>
  );
}

export default ServiceDetail;