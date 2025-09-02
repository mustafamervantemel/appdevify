import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const phone = "15551234567";
  const formattedPhone = phone.replace(/\s+/g, "");

  return (
    <section className="bg-black text-white py-14 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Our Contact Information</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Phone */}
        <a
          href={`https://wa.me/1${formattedPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 rounded-xl p-8 flex flex-col items-center hover:bg-gray-800 transition border border-gray-700"
        >
          <FaPhoneAlt size={30} className="mb-4" style={{ color: "#9CFF28" }} />
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p className="text-gray-300">+1 (555) 123-4567</p>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@appdevify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 rounded-xl p-8 flex flex-col items-center hover:bg-gray-800 transition border border-gray-700"
        >
          <FaEnvelope size={30} className="mb-4" style={{ color: "#9CFF28" }} />
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p className="text-gray-300">hello@appdevify.com</p>
        </a>

        {/* Address */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center border border-gray-700">
          <FaMapMarkerAlt
            size={30}
            className="mb-4"
            style={{ color: "#9CFF28" }}
          />
          <h3 className="text-lg font-semibold mb-1">Address</h3>
          <p className="text-gray-300 text-center">
            New York / Manhattan / Downtown
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
