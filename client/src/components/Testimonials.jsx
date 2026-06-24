function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Testimonials
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Client feedback and success stories will appear here.
        </p>

        <div className="border rounded-2xl p-8 text-center">

          <h3 className="text-2xl font-semibold mb-6">
            No Testimonials Yet
          </h3>

          <div className="space-y-3 text-gray-500">

            <p>Name of Person</p>

            <p>Designation</p>

            <p>Service Used</p>

            <p>Feedback</p>

            <p>Rating</p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;