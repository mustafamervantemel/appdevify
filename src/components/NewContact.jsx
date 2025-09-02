// src/components/ContactSection.jsx
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
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
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-xl mx-auto">
        <span className="inline-block bg-gray-800 text-gray-300 text-sm font-medium px-4 py-1 rounded-full mb-4">
          • Get in Touch
        </span>
        <h2 className="text-4xl font-bold text-white mb-2">Get in Touch</h2>
        <p className="text-gray-300 text-lg mb-8">
          Fill out the form below for questions about your project or our
          services. We'll get back to you as soon as possible.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border-8 border-gray-700 rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#9CFF28" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#9CFF28" }}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#9CFF28" }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#9CFF28" }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="How can we help you?"
              rows="4"
              required
              className="w-full text-white bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#9CFF28" }}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-black py-3 rounded-full font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#9CFF28" }}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          {submitStatus === "success" && (
            <div
              className="text-center font-medium mt-2 px-4 py-3 rounded"
              style={{
                backgroundColor: "rgba(156, 255, 40, 0.1)",
                color: "#9CFF28",
                border: "1px solid #9CFF28",
              }}
            >
              Your message was sent successfully!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="text-red-400 text-center font-medium mt-2">
              An error occurred, please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

