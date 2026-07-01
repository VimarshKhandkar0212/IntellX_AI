import { useState, useEffect } from "react";
import testimonials from "../data/testimonials";

function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[85vh] flex items-center py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="border border-gray-700 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="text-5xl font-bold mt-6 text-black dark:text-white">
            What Our Clients Say
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            Hear directly from businesses we've helped transform.
          </p>
        </div>

        {/* Slider */}

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}

          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
              )
            }
            className="absolute left-0 lg:-left-16 w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg text-2xl hover:scale-110 hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white transition-all duration-300"
          >
            ←
          </button>

          {/* Card */}

          <div className="max-w-4xl w-full bg-zinc-100 dark:bg-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-yellow-500 text-3xl mb-6">
              {"★".repeat(testimonial.rating)}
            </div>

            <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-200 leading-relaxed min-h-[160px] md:min-h-[140px]">
              "{testimonial.feedback}"
            </p>

            <div className="mt-10">
              <h3 className="text-3xl font-bold text-black dark:text-white">
                {testimonial.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {testimonial.designation}
              </p>

              <p className="inline-block mt-3 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium text-sm">
                {testimonial.service}
              </p>
            </div>
          </div>

          {/* Right Arrow */}

          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
              )
            }
            className="absolute right-0 lg:-right-16 w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg text-2xl hover:scale-110 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Dots */}

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-3 bg-blue-600"
                  : "w-3 h-3 bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSlider;
