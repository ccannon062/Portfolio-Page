"use client";
import "../globals.css";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function SubmitForms() {
  return (
    <>
      <div id="contact" className="w-full py-20 md:py-28 bg-[#1e2432]">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight py-6 text-center">
            Let&apos;s Connect
          </h1>
          <div className="w-32 h-1 mx-auto rounded bg-[#D3AC2B] mb-6"></div>
          <p className="text-gray-100/90 text-lg leading-relaxed text-center">
            I&apos;m always glad to connect with attorneys, alumni, and fellow
            students — whether it&apos;s about intellectual property law, 1L
            life, or just to chat. Feel free to reach out.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-100/90 text-lg leading-relaxed mb-8">
                Open to networking conversations, informational interviews,
                and opportunities related to IP law. Feel free to reach out by
                email or connect with me on LinkedIn.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D3AC2B] rounded-lg flex items-center justify-center">
                    <FiMail className="w-6 h-6 text-[#232a3a]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-100/90">
                      caleb.cristoph.cannon@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D3AC2B] rounded-lg flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-[#232a3a]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p className="text-gray-100/90">Lincoln, NE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#3B475C]/30 backdrop-blur-sm rounded-xl p-8 border border-[#D3AC2B]/30">
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
                      className="w-full px-4 py-3 bg-[#293040]/50 border border-[#D3AC2B]/30 rounded-lg text-white placeholder-gray-100/90 focus:outline-none focus:ring-2 focus:ring-[#D3AC2B] focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-[#293040]/50 border border-[#D3AC2B]/30 rounded-lg text-white placeholder-gray-100/90 focus:outline-none focus:ring-2 focus:ring-[#D3AC2B] focus:border-transparent"
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
                    placeholder="Let's connect"
                    className="w-full px-4 py-3 bg-[#293040]/50 border border-[#D3AC2B]/30 rounded-lg text-white placeholder-gray-100/90 focus:outline-none focus:ring-2 focus:ring-[#D3AC2B] focus:border-transparent"
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
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 bg-[#293040]/50 border border-[#D3AC2B]/30 rounded-lg text-white placeholder-gray-100/90 focus:outline-none focus:ring-2 focus:ring-[#D3AC2B] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D3AC2B] hover:bg-[#c09a23] text-[#293040] font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
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
