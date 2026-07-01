import { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, Star, Send, ShieldCheck } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    projectTitle: "",
    projectDetail: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://192.168.1.2:5000/api/contact",
        formData,
      );

      if (response.data.success) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          projectTitle: "",
          projectDetail: "",
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[90vh] flex items-center py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="border border-gray-700 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm transition-colors">
            GET IN TOUCH
          </span>

          <h2 className="text-5xl font-bold mt-6 text-black dark:text-white transition-colors">
            Let's Build Something Extraordinary
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-4 transition-colors">
            Tell us about your project and we'll get back to you.
          </p>
        </div>

        {!submitted ? (
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">
            {/* LEFT SIDE */}

            <div className="rounded-3xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex gap-4 items-center rounded-2xl border border-gray-200 dark:border-slate-700 p-5">
                  <div className="h-14 w-14 rounded-2xl bg-blue-50 dark:bg-cyan-500/10 flex items-center justify-center">
                    <Mail className="text-blue-600 dark:text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-black dark:text-white">
                      Email
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300">
                      contact@intellxai.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center rounded-2xl border border-gray-200 dark:border-slate-700 p-5">
                  <div className="h-14 w-14 rounded-2xl bg-blue-50 dark:bg-cyan-500/10 flex items-center justify-center">
                    <Phone className="text-blue-600 dark:text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-black dark:text-white">
                      Phone
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300">
                      9898998989
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center rounded-2xl border border-gray-200 dark:border-slate-700 p-5">
                  <div className="h-14 w-14 rounded-2xl bg-blue-50 dark:bg-cyan-500/10 flex items-center justify-center">
                    <MapPin className="text-blue-600 dark:text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-black dark:text-white">
                      Location
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300">Ujjain</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-500/40 bg-blue-50 dark:bg-cyan-500/10 p-6">
                  <h3 className="font-bold text-lg text-black dark:text-white mb-4">
                    <Star className="text-blue-600 dark:text-cyan-400" />
                    Why Contact Us?
                  </h3>

                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>✔ Free AI Consultation</li>

                    <li>✔ Custom AI Strategy</li>

                    <li>✔ Response within 24 Hours</li>

                    <li>✔ Long-term Support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="rounded-3xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-black dark:text-white transition-colors">
                      Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength="2"
                      placeholder="John Doe"
                      className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white rounded-lg px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-black dark:text-white transition-colors">
                      Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white rounded-lg px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-black dark:text-white transition-colors">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10 digit phone number"
                      placeholder="9876543210"
                      className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white rounded-lg px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-black dark:text-white transition-colors">
                      Company Name
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white rounded-lg px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Project Title */}

                <div>
                  <label className="block mb-2 font-medium text-black dark:text-white transition-colors">
                    Project Title
                  </label>

                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    placeholder="AI Chatbot for Customer Support"
                    className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white rounded-lg px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Project Details */}

                <div>
                  <label className="block mb-2 font-medium text-black dark:text-white transition-colors">
                    Project Details
                  </label>

                  <textarea
                    rows="6"
                    maxLength="1000"
                    name="projectDetail"
                    value={formData.projectDetail}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white rounded-lg px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />

                  <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-2 transition-colors">
                    {formData.projectDetail.length}/1000
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl py-4 font-semibold text-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-[1.01] shadow-lg"
                >
                  {loading ? "Submitting..." : "Get Free Consultation"}
                </button>
                <div className="mt-5 flex justify-center items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <ShieldCheck size={16} />
                  Your information is secure and will never be shared.
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="border border-gray-800 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl p-10 text-center max-w-3xl mx-auto shadow-xl transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white transition-colors">
              Inquiry Submitted Successfully 🎉
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors">
              Thank you for contacting IntellX AI. Our team has received your
              application and will get back to you shortly. This form will reset
              in few seconds.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
