import React from "react";
import { Link } from "react-router-dom";
import monitor from "../media/monitor.jpg";

export default function CustomWebsiteSection() {
  return (
    <section
      className="relative py-28 px-6 lg:px-16 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/media/website-section-bg.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Sol taraf içerik */}
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-[#2b2e31] text-sm px-4 py-1 rounded-full">
            • Web site tasarımı
          </span>
          <h2 className="text-5xl font-bold leading-tight text-white">
            Özel<br /> Web Site Tasarımı
          </h2>
          <p className="text-gray-300 max-w-xl">
            Markalara özel web siteleri tasarlıyoruz. Amacımız
            yalnızca "güzel görünen bir site" yapmak değil. Müşterilerimiz bize;
            işleri büyüdüğünde, markaları olgunlaştığında ve çevrim içi
            varlıklarını ileri taşımak istediklerinde ulaşıyor.
          </p>
          <Link to="/iletisim" className="bg-[#D6E2F0] text-[#1a1a1a] px-6 py-3 rounded-full font-medium hover:bg-white transition flex items-center gap-2 w-fit">
            Görüşme Planla
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Sağ taraf görseller */}
        <div className="flex-1 relative w-full max-w-xl">
          {/* Ana ekran */}
          <img
            src= {monitor}
            alt="Ana Web Sitesi"
            className="w-full rounded-xl shadow-2xl"
          />

         


          {/* Renk paleti */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <span className="w-5 h-5 rounded-full bg-[#5c3a2f]" />
            <span className="w-5 h-5 rounded-full bg-[#f2eee9]" />
            <span className="w-5 h-5 rounded-full bg-[#e1dfdc]" />
            <span className="w-5 h-5 rounded-full bg-[#f6f4f0]" />
          </div>

       
        </div>
      </div>
    </section>
  );
}
