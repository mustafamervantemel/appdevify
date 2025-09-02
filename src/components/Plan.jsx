// src/components/WhyChooseUs.jsx
import React from "react";
import { FaHandshake, FaChartBar, FaCertificate } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title area */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block bg-gray-800 text-gray-300 text-sm font-medium px-4 py-1 rounded-full">
              • Why Choose Us
            </span>
            <h2 className="text-4xl font-bold leading-tight">
              Stores Designed with <br />
              Purpose and Passion
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <FeatureCard
            icon={<FaCertificate className="text-3xl" />}
            title="Conversion-Focused Approach"
            description="Every click serves a purpose. We prioritize flow, readability, and the feeling of secure shopping."
          />
          <FeatureCard
            icon={<FaHandshake className="text-3xl" />}
            title="Easy Management System"
            description="You don't need a developer to update products or start campaigns. We design stores you can actually use."
          />
          <FeatureCard
            icon={<FaChartBar className="text-3xl" />}
            title="Scalable Infrastructure"
            description="As your product range grows, your site grows—no redesign needed."
          />
        </div>
      </div>
    </section>
  );
}

// Feature card component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start space-y-4">
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: "#9CFF28" }}
      >
        <div style={{ color: "black" }}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
