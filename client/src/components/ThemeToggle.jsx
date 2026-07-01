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