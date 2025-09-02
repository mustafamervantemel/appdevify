// src/components/WhatWeOffer.jsx
import React from "react";
import {
  FaBoxes,
  FaExchangeAlt,
  FaDog,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaHeadset,
} from "react-icons/fa";

export default function WhatWeOffer() {
  const features = [
    {
      icon: <FaBoxes className="text-2xl" />,
      title: "Product Collections",
      description:
        "We structure product collections in a way that makes sense for your buyers.",
    },
    {
      icon: <FaExchangeAlt className="text-2xl" />,
      title: "Backend Setup",
      description:
        "We support your daily operations by integrating inventory, variants, and order processes.",
    },
    {
      icon: <FaDog className="text-2xl" />,
      title: "Product Pages",
      description:
        "We create detailed product pages that inform users, not just listings.",
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Mobile Optimization",
      description:
        "We develop fast, conversion-focused designs for mobile devices.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-2xl" />,
      title: "Payment Integration",
      description:
        "We integrate Stripe, PayPal, Apple Pay, and tax tools without technical complexity.",
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Real Squarespace Expertise",
      description:
        "We know how to unlock the full potential of Squarespace Commerce.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Title */}
        <div>
          <span className="inline-block bg-gray-800 text-sm px-4 py-1 rounded-full text-gray-300">
            • What We Offer
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Behind Every Product <br />
            Lies a Plan.
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            E-commerce is not just about a shopping cart. It's a combination of
            positioning, storytelling, and user experience. You don't need
            separate platforms like Shopify; you need a site that offers clear
            structure, simple processes, and scalability. That's what we do.
          </p>
        </div>

        {/* Feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 hover:bg-gray-800 transition p-6 rounded-xl border border-gray-700 space-y-4"
            >
              <div style={{ color: "#9CFF28" }}>{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
