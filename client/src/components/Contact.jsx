import { useState } from "react";
import axios from "axios";

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
        formData
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
          setSubmitted(false)
        }, 3000);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[90vh] flex items-center py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="w-full max-w-5xl mx-auto">

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

          <div className="max-w-3xl mx-auto">

            {/* Contact Information */}

            <div className="border border-gray-800 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 mb-8 transition-all duration-300">

              <h3 className="text-3xl font-bold mb-6 text-black dark:text-white transition-colors">
                Contact Information
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-7 transition-colors">
                You can contact us directly for consultation
                or discuss your project requirements.
              </p>

              <div className="space-y-6">

                <div>
                  <h4 className="font-semibold text-lg text-black dark:text-white transition-colors">
                    Email
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 transition-colors">
                    contact@intellxai.com
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-black dark:text-white transition-colors">
                    Phone
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 transition-colors">
                    +91 XXXXX XXXXX
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-black dark:text-white transition-colors">
                    LinkedIn
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 transition-colors">
                    linkedin.com/company/intellx-ai
                  </p>
                </div>

              </div>

            </div>

            {/* Information Text */}

            <div className="text-center mb-10">

              <p className="max-w-2xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors">
                If you'd like to explore our services further
                or discuss a custom AI solution, please fill
                out the application form below.
              </p>

            </div>

            {/* Form */}

            <div className="border border-gray-800 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl  md:p-10 transition-all duration-300">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Row 1 */}

                <div className="grid md:grid-cols-2 gap-4">

                  <div>

                    <label className="block mb-2 font-medium text-black dark:text-white transition-colors">
                      Name *
                    </label>

                    <input
                      type="text"
                      name = "name"
                      value={formData.name}
                      onChange = {handleChange}
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
                      value= {formData.email}
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

                <button type="submit" disabled={loading}
                className="w-full bg-black text-white border border-black dark:border-white py-3 rounded-xl hover:scale-[1.02] hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-all duration-300 disabled:opacity-50">
                {loading ? "Submitting..." : "Submit Application"}
                </button>

              </form>

            </div>

          </div>

        ) : (

          <div className="border border-gray-800 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl p-10 text-center max-w-3xl mx-auto shadow-xl transition-all duration-300">

            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white transition-colors">
              Inquiry Submitted Successfully 🎉
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors">
              Thank you for contacting IntellX AI.
              Our team has received your application
              and will get back to you shortly.
              This form will reset in few seconds.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default Contact;