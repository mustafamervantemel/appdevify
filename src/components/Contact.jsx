import React, { useState, useRef } from "react";
import Omale2 from "../profile/Omale2.svg";
import Ofemale2 from "../profile/Ofemale2.svg";
import emailjs from "@emailjs/browser";

export default function ContactP() {
  const SERVICE_ID = "service_nuc43so";
  const TEMPLATE_ID_ADMIN = "template_dmblenn";
  const TEMPLATE_ID_AUTOREPLY = "template_odm7eb9";
  const PUBLIC_KEY = "rF_c1o5APLw4e78Qy";

  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Ensure EmailJS is initialized
      if (typeof emailjs.sendForm !== 'function') {
        emailjs.init(PUBLIC_KEY);
      }

      // Send admin notification
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID_ADMIN,
        form.current,
        PUBLIC_KEY
      );

      // Send auto-reply to user
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID_AUTOREPLY,
        form.current,
        PUBLIC_KEY
      );

      setSubmitStatus("success");
      form.current.reset();
    } catch (err) {
      console.error('Email sending failed:', err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-lg p-10">
        {/* Left Text Area */}
        <div>
          <span className="inline-block px-3 py-1 text-sm text-gray-600 rounded-full mb-4" style={{backgroundColor: 'rgba(156, 255, 40, 0.1)'}}>
            • Your Dream App
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Start Your Project
          </h2>
          <p className="text-gray-600 mb-6">
            Join many businesses who trust our expertise. Start with a free discovery consultation and see how we can bring your vision to life with cutting-edge technology.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <img src={Omale2} className="w-8 h-8 rounded-full" alt="avatar1" loading="lazy" />
            <img src={Ofemale2} className="w-8 h-8 rounded-full" alt="avatar2" loading="lazy" />
            <span className="text-sm text-gray-600 ml-2">
              300+ satisfied clients worldwide
            </span>
          </div>
        </div>

        {/* Right Form Area */}
        <form ref={form} onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border shadow-sm space-y-4 text-gray-800">
          {submitStatus === "success" && (
            <div className="border text-green-700 px-4 py-3 rounded" style={{backgroundColor: 'rgba(156, 255, 40, 0.1)', borderColor: '#9CFF28'}}>
              Your message was sent successfully! We'll get back to you shortly.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              There was an error sending your message. Please try again.
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
                style={{'--tw-ring-color': '#9CFF28', 'focus': {borderColor: '#9CFF28'}}}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="your.email@company.com"
                className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
                style={{'--tw-ring-color': '#9CFF28'}}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              name="user_phone"
              placeholder="+1 (555) 123-4567"
              className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
              style={{'--tw-ring-color': '#9CFF28'}}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
              style={{'--tw-ring-color': '#9CFF28'}}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project and goals."
              rows="4"
              className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
              style={{'--tw-ring-color': '#9CFF28'}}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#9CFF28] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
