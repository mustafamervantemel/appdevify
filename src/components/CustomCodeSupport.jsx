// src/components/CustomCodeSupport.jsx
import React from "react";
import monitor from "../media/monitor.jpg";

export default function CustomCodeSupport() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left side: content */}
        <div className="lg:w-1/2">
          <span className="bg-gray-800 text-sm text-gray-300 px-4 py-1 rounded-full inline-block mb-4">
            • Custom Code Support
          </span>
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Custom Code Support <br /> For Your Website
          </h2>
          <p className="text-gray-400 mb-8">
            We provide professional code support that goes beyond platform 
            limitations to maximize your website's potential. Whether it's layout 
            improvements, interaction settings, or advanced features, we write 
            clean and effective code without compromising performance.
          </p>
          <a
            href="/contact"
            className="inline-block text-black transition px-6 py-3 rounded-full font-medium hover:opacity-80"
            style={{backgroundColor: '#9CFF28'}}
          >
            Schedule Consultation
          </a>
        </div>

        {/* Right side: visual area (can be used as placeholder) */}
        <div className="lg:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <img
              src= {monitor}
              alt="Code Support Image"
              className="w-full object-cover"
            />
            {/* labels can be added on top */}

          </div>
        </div>
      </div>
    </section>
  );
}
