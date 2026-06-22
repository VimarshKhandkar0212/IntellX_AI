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
        "http://localhost:5000/api/contact",
        formData
      );

      if (response.data.success) {
        setSubmitted(true);
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
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="border px-4 py-2 rounded-full text-sm">
            GET IN TOUCH
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Let's Build Something Extraordinary
          </h2>

          <p className="text-gray-600 mt-4">
            Tell us about your project and we'll get back to you.
          </p>

        </div>

        {!submitted ? (

          <div className="max-w-3xl mx-auto">

            {/* Contact Information */}

            <div className="border rounded-2xl p-8 mb-8">

              <h3 className="text-3xl font-bold mb-6">
                Contact Information
              </h3>

              <p className="text-gray-600 mb-8">
                You can contact us directly for consultation
                or discuss your project requirements.
              </p>

              <div className="space-y-6">

                <div>
                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    contact@intellxai.com
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Phone
                  </h4>

                  <p className="text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    LinkedIn
                  </h4>

                  <p className="text-gray-600">
                    linkedin.com/company/intellx-ai
                  </p>
                </div>

              </div>

            </div>

            {/* Information Text */}

            <div className="text-center mb-10">

              <p className="text-lg text-gray-600">
                If you'd like to explore our services further
                or discuss a custom AI solution, please fill
                out the application form below.
              </p>

            </div>

            {/* Form */}

            <div className="border rounded-2xl p-8">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Row 1 */}

                <div className="grid md:grid-cols-2 gap-4">

                  <div>

                    <label className="block mb-2 font-medium">
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
                      className="w-full border rounded-lg px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium">
                      Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value= {formData.email}
                      onChange={handleChange} 
                      required
                      placeholder="john@example.com"
                      className="w-full border rounded-lg px-4 py-3"
                    />

                  </div>

                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-4">

                  <div>

                    <label className="block mb-2 font-medium">
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
                      className="w-full border rounded-lg px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium">
                      Company Name
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full border rounded-lg px-4 py-3"
                    />

                  </div>

                </div>

                {/* Project Title */}

                <div>

                  <label className="block mb-2 font-medium">
                    Project Title
                  </label>

                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    placeholder="AI Chatbot for Customer Support"
                    className="w-full border rounded-lg px-4 py-3"
                  />

                </div>

                {/* Project Details */}

                <div>

                  <label className="block mb-2 font-medium">
                    Project Details
                  </label>

                  <textarea
                    rows="6"
                    maxLength="1000"
                    name="projectDetail"
                    value={formData.projectDetail}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full border rounded-lg px-4 py-3"
                  />

                  <p className="text-right text-sm text-gray-500 mt-2">
                    {formData.projectDetail.length}/1000
                  </p>

                </div>

                <button type="submit" disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 disabled:opacity-50">
                {loading ? "Submitting..." : "Submit Application"}
                </button>

              </form>

            </div>

          </div>

        ) : (

          <div className="border rounded-2xl p-10 text-center max-w-3xl mx-auto">

            <h3 className="text-4xl font-bold mb-4">
              Inquiry Submitted Successfully 🎉
            </h3>

            <p className="text-gray-600 text-lg">
              Thank you for contacting IntellX AI.
              Our team has received your application
              and will get back to you shortly.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default Contact;