// src/components/ECommerceSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import monitor from "../media/monitor.jpg";

export default function ECommerceSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left text side */}
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-gray-800 text-sm px-4 py-1 rounded-full text-gray-300">
            • E-Commerce Design
          </span>
          <h2 className="text-4xl font-bold leading-snug">
            Squarespace <br /> E-Commerce Design
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-xl">
            We design refined e-commerce experiences on Squarespace — easily
            managed, visually flawless, and conversion-focused structures.
            Whether you're launching your first product or growing your existing
            store, we build end-to-end flawless online stores.
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
            src={monitor} // example image path (can be changed)
            alt="Digital Products Image"
            className="rounded-xl shadow-lg w-full max-w-2xl"
          />
          {/* Label: Secure Payment */}
          <div className="absolute top-0 right-0 bg-gray-800 text-xs text-white px-3 py-1 rounded-bl-lg shadow">
            Secure Payment
          </div>
          {/* Label: Digital Products */}
          <div className="absolute bottom-4 left-4 bg-gray-800 text-xs text-white px-3 py-1 rounded-tr-lg shadow">
            Digital Products
          </div>
        </div>
      </div>
    </section>
  );
}
