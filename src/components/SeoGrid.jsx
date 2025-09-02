// src/components/SEOServicesGrid.jsx
import React from "react";
import {
  FaSearch,
  FaRegHandPaper,
  FaExchangeAlt,
  FaCog,
  FaHeadphones,
  FaFolderOpen,
} from "react-icons/fa";

const services = [
  {
    title: "Site Audit and Indexing Review",
    icon: <FaSearch size={24} />,
    description:
      "We analyze how your website is structured, indexed, and crawled, identifying and fixing issues.",
  },
  {
    title: "On-Page Optimization",
    icon: <FaRegHandPaper size={24} />,
    description:
      "We establish structures that reflect your content strategy, such as titles, meta descriptions, image SEO, and internal linking.",
  },
  {
    title: "SEO-Friendly Content Writing (When Needed)",
    icon: <FaExchangeAlt size={24} />,
    description:
      "If content writing from scratch is needed, we produce meaningful content optimized for both people and Google.",
  },
  {
    title: "Local SEO Setup",
    icon: <FaCog size={24} />,
    description:
      "We properly configure Google Business Profile, map data, and local schema settings.",
  },
  {
    title: "Content Strategy Support",
    icon: <FaHeadphones size={24} />,
    description:
      "We provide consultation on what to publish, what to update, or what to remove.",
  },
  {
    title: "Continuous Monitoring and Reporting",
    icon: <FaFolderOpen size={24} />,
    description:
      "We monitor performance, evaluate analytics, and make necessary adjustments quietly in the background.",
  },
];

export default function SEOServicesGrid() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            SEO Services to Increase Your Website's Visibility
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer strategy, not magic. Clean and rule-compliant SEO services
            based on human and search engine behaviors.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition border border-gray-700"
            >
              <div className="mb-4" style={{ color: "#9CFF28" }}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
