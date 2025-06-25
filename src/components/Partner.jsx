import React from "react";

const brands = [
  "/brands/cp.png",
  "/brands/escuela.png",
  "/brands/acuity.png",
  "/brands/artorius.png",
  "/brands/crystal.png",
  "/brands/ashgrove.png",
  "/brands/interdoor.png",
  "/brands/prova.png",
  "/brands/norman.png",
  "/brands/reformer.png",
  "/brands/lineslip.png",
  "/brands/lastbrand.png",
];

export default function PartnerBrands() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-slate-200 text-slate-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
          Partnerships
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12">
          Our Amazing Clients
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 opacity-90 grayscale hover:grayscale-0 transition-all duration-300">
          {brands.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`brand-${index}`}
              className="h-8 sm:h-10 max-w-[140px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
