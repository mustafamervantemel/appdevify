import React from "react";
import { FaCheckSquare, FaCalendarAlt } from "react-icons/fa";
import ceoPhoto from "../media/pnl1.png"; // Adjust image path according to your project

export default function ProjectContactSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-white mb-4">
            Have a Project?
          </h2>
          <h3 className="text-4xl font-semibold text-gray-400 mb-10">
            Let's Talk!
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">
            <p className="flex items-start gap-2">
              <FaCheckSquare className="mt-1" style={{color: '#9CFF28'}} />
              Privacy? Just ask.
            </p>
            <p className="flex items-start gap-2">
              <FaCheckSquare className="mt-1" style={{color: '#9CFF28'}} />
              We provide fast and focused feedback within 24 hours.
            </p>
            <p className="flex items-start gap-2">
              <FaCheckSquare className="mt-1" style={{color: '#9CFF28'}} />
              You're working with experienced experts, not juniors.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-medium text-white mb-2">Schedule a meeting:</p>
            <div className="bg-gray-900 rounded-lg shadow flex items-center justify-between p-4 max-w-[320px] border border-gray-700">
              <div className="flex items-center gap-3">
                <img
                  src={ceoPhoto}
                  alt="Michael Johnson, Founder and CEO"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">Michael Johnson</p>
                  <p className="text-sm text-gray-400">Founder & CEO</p>
                </div>
              </div>
              <button 
                className="text-black p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9CFF28] focus:ring-offset-2 focus:ring-offset-black"
                style={{backgroundColor: '#9CFF28'}}
                aria-label="Schedule meeting with Michael Johnson"
              >
                <FaCalendarAlt />
              </button>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-gray-900 p-8 rounded-xl shadow-md border border-gray-700">
          <form className="space-y-6">
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 text-white"
                style={{'--tw-ring-color': '#9CFF28'}}
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 text-white"
                style={{'--tw-ring-color': '#9CFF28'}}
              />
              <select className="w-full border border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-sm text-white focus:outline-none focus:ring-2"
                      style={{'--tw-ring-color': '#9CFF28'}}>
                <option>Project Budget</option>
                <option>$0–$10,000</option>
                <option>$10,000–$50,000</option>
                <option>$50,000+</option>
              </select>
              <select className="w-full border border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-sm text-white focus:outline-none focus:ring-2"
                      style={{'--tw-ring-color': '#9CFF28'}}>
                <option>How did you hear about us?</option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Referral</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Tell us about your project and goals."
              className="w-full border text-white border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2"
              style={{'--tw-ring-color': '#9CFF28'}}
            />

            {/* Help Topics */}
            <div>
              <p className="font-medium text-white mb-2">
                How can we help you?
              </p>
              <div className="flex flex-wrap gap-2 text-white">
                {[
                  "UI/UX Design",
                  "Corporate Website",
                  "SEO Consulting",
                  "Mobile App",
                  "E-Commerce",
                  "Software Development",
                  "MVP Development",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-gray-600 text-sm rounded-full hover:bg-[#9CFF28] hover:text-black cursor-pointer transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Submit Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <button
                type="submit"
                className="text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                style={{backgroundColor: '#9CFF28'}}
              >
                Send Message
              </button>
              <p className="text-sm text-gray-400">
                Prefer email?{" "}
                <a
                  href="mailto:hello@appdevify.com"
                  className="underline"
                  style={{color: '#9CFF28'}}
                >
                  hello@appdevify.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
