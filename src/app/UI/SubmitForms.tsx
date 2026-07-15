"use client";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function SubmitForms() {
  return (
    <section
      id="contact"
      className="w-full bg-[#12161f] py-20 md:py-24 px-6 border-y border-white/10"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-[#a3812f] text-sm font-medium tracking-[0.2em] uppercase mb-3">
          Contact
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-[#e8e6df]/80 text-lg leading-relaxed mb-10 max-w-xl">
          I&apos;m always glad to connect with attorneys, alumni, and fellow
          students — whether it&apos;s about intellectual property law, 1L
          life, or just to chat. Feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12 text-[#e8e6df]/80">
          <a
            href="mailto:caleb.cristoph.cannon@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
          >
            <FiMail className="w-4 h-4 text-[#a3812f]" />
            caleb.cristoph.cannon@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <FiMapPin className="w-4 h-4 text-[#a3812f]" />
            Lincoln, NE
          </span>
        </div>

        <form
          action="https://formspree.io/f/xzzayjql"
          method="POST"
          className="space-y-6 max-w-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-[#e8e6df]/60 text-sm mb-2"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/15 pb-2 text-white placeholder-[#e8e6df]/30 focus:outline-none focus:border-[#a3812f] transition-colors duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[#e8e6df]/60 text-sm mb-2"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-white/15 pb-2 text-white placeholder-[#e8e6df]/30 focus:outline-none focus:border-[#a3812f] transition-colors duration-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-[#e8e6df]/60 text-sm mb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              placeholder="Let's connect"
              className="w-full bg-transparent border-b border-white/15 pb-2 text-white placeholder-[#e8e6df]/30 focus:outline-none focus:border-[#a3812f] transition-colors duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[#e8e6df]/60 text-sm mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="What's on your mind?"
              className="w-full bg-transparent border-b border-white/15 pb-2 text-white placeholder-[#e8e6df]/30 focus:outline-none focus:border-[#a3812f] transition-colors duration-200 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-[#a3812f] hover:bg-[#c9a227] text-[#0c0f16] font-semibold py-3 px-6 rounded transition-colors duration-200"
          >
            <FiSend className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
