function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <span className="border px-4 py-2 rounded-full text-sm">
          WHY CHOOSE US
        </span>

        <h2 className="text-5xl font-bold mt-8 mb-6">
          Built for the Future
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          We partner with forward-thinking businesses to
          implement AI automation that drives measurable
          results. Our solutions are designed to help SMEs
          streamline operations, improve efficiency, and
          prepare for scalable growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="border rounded-2xl p-8">
            <h3 className="text-5xl font-bold">
              98%
            </h3>

            <p className="mt-3 text-gray-600">
              Client Satisfaction
            </p>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-5xl font-bold">
              3.8X
            </h3>

            <p className="mt-3 text-gray-600">
              ROI Within 18 Months
            </p>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-5xl font-bold">
              15-16%
            </h3>

            <p className="mt-3 text-gray-600">
              Average Revenue Increase
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;