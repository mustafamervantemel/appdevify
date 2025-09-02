import React from "react";
import { Link } from "react-router-dom";
import monitor from "../media/monitor.jpg";

export default function CustomWebsiteSection() {
  return (
    <section className="relative py-28 px-6 lg:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side content */}
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-gray-800 text-sm px-4 py-1 rounded-full text-gray-300">
            • Website design
          </span>
          <h2 className="text-5xl font-bold leading-tight text-white">
            Custom
            <br /> Website Design
          </h2>
          <p className="text-gray-300 max-w-xl">
            We design custom websites for brands. Our goal is not just to make
            "a site that looks good." Our clients reach out to us when their
            business grows, their brand matures, and they want to advance their
            online presence.
          </p>
          <Link
            to="/contact"
            className="text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition flex items-center gap-2 w-fit"
            style={{ backgroundColor: "#9CFF28" }}
          >
            Schedule Consultation
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Right side visuals */}
        <div className="flex-1 relative w-full max-w-xl">
          {/* Main screen */}
          <img
            src={monitor}
            alt="Main Website"
            className="w-full rounded-xl shadow-2xl"
          />

          {/* Color palette */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <span className="w-5 h-5 rounded-full bg-[#9CFF28]" />
            <span className="w-5 h-5 rounded-full bg-gray-800" />
            <span className="w-5 h-5 rounded-full bg-gray-600" />
            <span className="w-5 h-5 rounded-full bg-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
