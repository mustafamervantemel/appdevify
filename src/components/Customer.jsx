import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutResultsSection() {
  const [experience, setExperience] = useState(0);
  const [referral, setReferral] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    // Number increment helper function
    const animateCount = (target, setter, speed = 30) => {
      let count = 0;
      const increment = target / 40;
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setter(Math.round(count));
      }, speed);
    };

    animateCount(10, setExperience);
    animateCount(89, setReferral);
    animateCount(85, setSatisfaction);
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm bg-gray-800 inline-block px-4 py-1 rounded-full mb-4 text-gray-300 shadow">
          • Our Values
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Our Success Records
        </h2>
        <p className="text-gray-300 max-w-3xl mb-12">
          With our commitment to our clients and passion for excellence, we have achieved 
          effective results across industries. Here are some milestones that reflect the 
          success and dedication in our partnerships:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 1. Card */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md flex flex-col justify-between border border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-200 mb-2">Years of Experience</h3>
              <div className="text-5xl font-bold text-[#9CFF28] flex items-center gap-2">
                <FaArrowUp />
                {experience}+
              </div>
              <p className="mt-4 text-sm text-gray-400">
                We are pioneers in providing our clients with modern, responsive, and 
                impressive digital experiences.
              </p>
            </div>
          </div>

          {/* 2. Card */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md flex flex-col justify-between border border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-200 mb-2">
                Referral Rate
              </h3>
              <div className="text-5xl font-bold text-[#9CFF28] flex items-center gap-2">
                <FaArrowUp />
                {referral}%
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Most of our new clients come through referrals. This shows the satisfaction 
                of our previous clients.
              </p>
            </div>
          </div>

          {/* 3. Card */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md flex flex-col justify-between border border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-200 mb-2">
                Customer Satisfaction
              </h3>
              <div className="text-5xl font-bold text-[#9CFF28] flex items-center gap-2">
                <FaArrowUp />
                {satisfaction}%
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Our customer-focused approach results in high ratings and complete satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <Link
            to="/contact"
            className="text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition"
            style={{backgroundColor: '#9CFF28'}}
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
