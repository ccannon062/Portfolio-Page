"use client";
import "../globals.css";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function SubmitForms() {
  return (
    <>
      <div className="w-full py-16 bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5]">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white tracking-tight py-6 text-center">
            Let's Work Together
          </h1>
          <div className="w-32 h-1 mx-auto rounded bg-indigo-900 mb-6"></div>
          <p className="text-gray-100/90 text-lg leading-relaxed text-center">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-100/90 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or just having a chat about technology and design.
                Feel free to reach out!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-100/90">
                      caleb.cristoph.cannon@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p className="text-gray-100/90">Omaha, NE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-700/50">
              <form
                action="https://formspree.io/f/xzzayjql"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-indigo-800/50 border border-indigo-600 rounded-lg text-white placeholder-gray-100/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-indigo-800/50 border border-indigo-600 rounded-lg text-white placeholder-gray-100/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 bg-indigo-800/50 border border-indigo-600 rounded-lg text-white placeholder-gray-100/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-indigo-800/50 border border-indigo-600 rounded-lg text-white placeholder-gray-100/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FiSend className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
