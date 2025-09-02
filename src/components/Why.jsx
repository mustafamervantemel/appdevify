import React from "react";
import MonitorImage from "../media/monitor.jpg"; // Or any relevant image you have

export default function WhyAppdevify() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center mb-12">
        <span className="inline-block text-sm text-gray-300 bg-gray-800 rounded-full px-4 py-1">
          • Why Appdevify?
        </span>
        <h2 className="text-4xl font-semibold text-white mt-4">
          Why Appdevify?
        </h2>
        <p className="text-gray-300 mt-2 max-w-xl mx-auto">
          If you're looking for not just a website designer, but a business
          partner that provides conversion-focused solutions, you're in the
          right place.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 bg-gray-900 text-white p-6 rounded-xl border border-gray-700">
        {/* Image side */}
        <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden">
          <img
            src={MonitorImage}
            alt="Desktop setup"
            className="rounded-xl object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-md text-sm">
            <strong className="text-lg">120+</strong> Clients
          </div>
          <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-md text-sm">
            <strong className="text-lg">450+</strong> Completed Projects
          </div>
        </div>

        {/* Text side */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">
            Mobile Responsive and Conversion-Focused Designs
          </h3>
          <p className="text-gray-300">
            With 5+ years of experience, we help you create beautiful-looking
            websites even without coding. But our real difference is turning
            these sites into sales machines.
            <br />
            <br />
            We ensure your site looks perfect on all devices and maximize
            visibility through SEO and social media integrations.
          </p>
        </div>
      </div>
    </section>
  );
}
