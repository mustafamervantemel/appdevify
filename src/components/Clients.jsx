import React from "react";

const logosTop = [
  "../logos/ashgrove.png",
  "../logos/changelab.png",
  "../logos/damekelly.png",
  "../logos/cp.png",
  "../logos/escuela.png",
];

const logosBottom = [
  "../logos/scospace.png",
  "../logos/loomia.png",
  "../logos/elmington.png",
  "../logos/network.png",
  "../logos/squarespace.png",
];

const Clients = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      {/* Label */}
      <div className="mb-2">
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
          Partnership
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
        Değerli Müşterilerimiz
      </h2>

      {/* Top Slider */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-right gap-12 w-max">
          {[...logosTop, ...logosTop].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`client-${i}`}
              className="h-12 object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="overflow-hidden mt-8">
        <div className="flex animate-scroll-left gap-12 w-max">
          {[...logosBottom, ...logosBottom].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`client-bottom-${i}`}
              className="h-12 object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
