import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="border px-4 py-2 rounded-full text-sm">
            CLIENT FEEDBACK
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-8">
            What Our Clients Say
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Testimonials, client experiences, and success stories
            will be showcased here.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default TestimonialsPage;