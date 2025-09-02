import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-black">About Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We deliver powerful mobile app and web development solutions to elevate your business in the digital world. Our experienced team creates modern, fast, and user-focused applications that drive results.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-lg transition border-l-4" style={{borderLeftColor: '#9CFF28'}}>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm">
              To be the leading force in digital transformation, creating impactful projects that make a difference on a global scale.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-lg transition border-l-4" style={{borderLeftColor: '#9CFF28'}}>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm">
              To provide our partners with sustainable, fast, and user-friendly digital solutions that drive business growth.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-lg transition border-l-4" style={{borderLeftColor: '#9CFF28'}}>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Our Values
            </h3>
            <p className="text-gray-600 text-sm">
              Trust, transparency, creativity, and customer satisfaction as our core working principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
