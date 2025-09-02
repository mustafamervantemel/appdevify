import React from "react";
import {
  FaCode,
  FaChalkboardTeacher,
  FaGlobe,
  FaCogs,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Custom Website Design",
      desc: "We design fast and user-friendly websites tailored to your needs.",
      icon: <FaCode size={24} />,
    },
    {
      title: "No-Code Web Setup",
      desc: "We prepare your website without requiring any technical knowledge.",
      icon: <FaGlobe size={24} />,
    },
    {
      title: "Code Support",
      desc: "We provide custom coding solutions for your existing Squarespace site.",
      icon: <FaCode size={24} />,
    },
    {
      title: "Online Course Platforms",
      desc: "We develop educational platforms and membership systems.",
      icon: <FaChalkboardTeacher size={24} />,
    },
    {
      title: "Accessibility Audit",
      desc: "We ensure your website is accessible to all users.",
      icon: <FaSearch size={24} />,
    },
    {
      title: "Site Migration Service",
      desc: "We move your website seamlessly and securely to new infrastructure.",
      icon: <FaGlobe size={24} />,
    },
    {
      title: "Website Management",
      desc: "We provide technical support to keep your website updated, fast, and secure.",
      icon: <FaCogs size={24} />,
    },
    {
      title: "E-Commerce Solutions",
      desc: "We set up sales-focused, user-friendly e-commerce systems.",
      icon: <FaShoppingCart size={24} />,
    },
    {
      title: "SEO Optimization",
      desc: "We help your website rank higher on Google.",
      icon: <FaSearch size={24} />,
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Save Time and Money with Website Experts
        </h2>
        <p className="text-gray-300 mb-12 max-w-3xl">
          At Appdevify, we provide powerful and high-performance solutions.
          We're here to offer simple and effective digital solutions for all
          your needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-md p-6 border border-gray-700 hover:ring-2 transition-all"
              style={{ "--tw-ring-color": "#9CFF28" }}
            >
              <div className="mb-4" style={{ color: "#9CFF28" }}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
