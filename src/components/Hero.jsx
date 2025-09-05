import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import RectangleBg from "../media/rectangle.jpg";


const Hero = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = RectangleBg;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Set dynamic values before sending
    const fromNameInput = form.current.querySelector('input[name="from_name"]');
    const timeInput = form.current.querySelector('input[name="time"]');
    const nameInput = form.current.querySelector('input[name="user_name"]');
    
    if (fromNameInput && nameInput) {
      fromNameInput.value = nameInput.value;
    }
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    try {
      // Send contact form to admin
      await emailjs.sendForm(
        "service_nuc43so",
        "template_dmblenn",
        form.current,
        "rF_c1o5APLw4e78Qy"
      );

      // Send auto-reply to user
      await emailjs.sendForm(
        "service_nuc43so",
        "template_odm7eb9",
        form.current,
        "rF_c1o5APLw4e78Qy"
      );

      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`relative bg-cover bg-center min-h-screen text-white transition-opacity duration-300 ${
        imageLoaded ? 'opacity-100' : 'opacity-90'
      }`}
      style={{ backgroundImage: `url(${RectangleBg})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between px-6 sm:px-10 lg:px-[8%] py-10 gap-10 max-w-[1440px] mx-auto min-h-screen">
        {/* Left side: Hero content */}
        <div className="flex-1 max-w-full lg:max-w-[48%]">
          <div className="flex gap-3 mb-6 flex-wrap">
            <span className="bg-green-500/20 text-green-300 text-sm font-medium px-4 py-1 rounded-full" style={{backgroundColor: 'rgba(156, 255, 40, 0.2)', color: '#9CFF28'}}>
              Available
            </span>
            <span className="bg-white/10 text-white text-sm font-medium px-4 py-1 rounded-full">
              Get in Touch
            </span>
          </div>

          <h1 className="text-[2rem] sm:text-[2.5rem] leading-tight font-semibold mb-6">
            Appdevify: Premium <br />
            <span style={{color: '#9CFF28'}}>App & Web Development</span>
          </h1>

          <p className="text-base text-gray-300 mb-8">
            With 5+ years of expertise, we've built 450+ custom applications and websites 
            for clients across the US, UK, and globally. Let's bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-full font-medium hover:bg-white hover:text-black transition text-center"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="flex-1 w-full max-w-full lg:max-w-[480px] bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-black">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {/* Success/Error messages */}
            {submitStatus === 'success' && (
              <div className="border border-green-400 text-green-700 px-4 py-3 rounded" style={{backgroundColor: 'rgba(156, 255, 40, 0.1)'}}>
                Your message has been sent successfully! We'll get back to you shortly.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                There was an error sending your message. Please try again.
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  name="user_name"
                  className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="user_email"
                  className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
                  placeholder="your.email@company.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input
                type="tel"
                name="user_phone"
                className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
              <input
                type="text"
                name="subject"
                className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                name="message"
                className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 text-sm placeholder-gray-500"
                placeholder="Tell us briefly about your project"
                rows="4"
                required
              />
            </div>
            
            <input type="hidden" name="from_name" value="" />
            <input type="hidden" name="time" value="" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#9CFF28] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
