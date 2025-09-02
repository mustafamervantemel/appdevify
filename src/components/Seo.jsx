// src/components/SEOSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import monitor from "../media/monitor.jpg";

export default function SEOSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left text side */}
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-gray-800 text-sm px-4 py-1 rounded-full text-gray-300">
            • Search Engine Optimization
          </span>
          <h2 className="text-4xl font-bold leading-snug">
            SEO Services <br /> For Websites
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-xl">
            We provide strategic and effective SEO services. No exaggerated
            promises — only technical clarity, solid structure, and powerful
            content working behind the scenes. We optimize your website to be
            easier to find on Google, rank better, and be more reliable.
          </p>
          <Link
            to="/contact"
            className="text-black font-medium px-6 py-3 rounded-full transition inline-block text-center hover:opacity-80"
            style={{ backgroundColor: "#9CFF28" }}
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Right visual area */}
        <div className="flex-1 relative">
          <img
            src={monitor} // change image path according to your system
            alt="SEO Analysis Image"
            className="rounded-xl shadow-lg w-full max-w-2xl"
          />
          {/* Label: Keyword Research */}
          <div className="absolute bottom-4 left-4 bg-gray-800 text-xs text-white px-3 py-1 rounded-tr-lg shadow">
            Keyword Research
          </div>
        </div>
      </div>
    </section>
  );
}
