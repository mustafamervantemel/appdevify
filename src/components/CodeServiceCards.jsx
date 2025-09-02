// src/components/CodeServiceCards.jsx
import React from "react";
import {
  FaCode,
  FaMobile,
  FaCloud,
  FaDatabase,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobile size={28} />,
    title: "Mobile App Development",
    description:
      "Native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter.",
  },
  {
    icon: <FaCode size={28} />,
    title: "Custom Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies and frameworks.",
  },
  {
    icon: <FaCloud size={28} />,
    title: "Cloud Integration",
    description:
      "Seamless integration with AWS, Google Cloud, and Azure for scalable and reliable solutions.",
  },
  {
    icon: <FaDatabase size={28} />,
    title: "Database Design & API",
    description:
      "Robust database architecture and RESTful API development for optimal performance and scalability.",
  },
  {
    icon: <FaCog size={28} />,
    title: "DevOps & Automation",
    description:
      "Continuous integration, deployment pipelines, and automated testing for efficient development workflows.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Security & Performance",
    description:
      "Advanced security implementations and performance optimization for enterprise-grade applications.",
  },
];

export default function CodeServiceCards() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-sm text-gray-400 uppercase tracking-widest">
          • Our Services
        </span>
        <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">
          Comprehensive Development <br /> Solutions for Your Business
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          From mobile apps to complex web applications, we deliver clean, fast, and seamless solutions tailored to your specific needs.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-opacity-80 transition" style={{'--hover-border-color': '#9CFF28'}}
            >
              <div className="mb-4" style={{color: '#9CFF28'}}>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
