import React, { useState, useEffect } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

// Project images (800x600 recommended)
import Proje1 from "../media/ubuntu1.png";
import Proje2 from "../media/adasmile1.png";
import Proje3 from "../media/irfan12.png";
import Proje4 from "../media/mrhukuk1.png";
import Proje5 from "../media/jing1.png";
import Proje6 from "../media/pimax1.png";
import Proje7 from "../media/restorant.png";
import Proje8 from "../media/varonmark.png";

// Animation CSS (added below)

const projeler = [
  {
    id: 1,
    kategori: "Finance",
    baslik: "Ubuntu Investment",
    gorsel: Proje1,
    link: "https://www.ubuntuyatirim.com/",
  },
  {
    id: 2,
    kategori: "Dental Clinic",
    baslik: "Ada Smile Studio",
    gorsel: Proje2,
    link: "https://www.adasmilestudio.com/",
  },
  {
    id: 3,
    kategori: "Accounting",
    baslik: "İrfan Özdamar",
    gorsel: Proje3,
    link: "https://irfanozdamar-com.vercel.app/",
  },
  {
    id: 4,
    kategori: "Law Office",
    baslik: "MR Law Office",
    gorsel: Proje4,
    link: "https://mrhukuk.vercel.app/",
  },
  {
    id: 5,
    kategori: "E-Commerce",
    baslik: "Jing Tea",
    gorsel: Proje5,
    link: "https://jingtea.com/",
  },
  {
    id: 6,
    kategori: "E-Commerce",
    baslik: "Pimax",
    gorsel: Proje6,
    link: "https://pimax.com/",
  },
  {
    id: 7,
    kategori: "Restaurant",
    baslik: "Restaurant Five",
    gorsel: Proje7,
    link: "https://restaurant-five-azure.vercel.app/",
  },
  {
    id: 8,
    kategori: "Social Media Agency",
    baslik: "Varonmark",
    gorsel: Proje8,
    link: "https://varonmark.com/",
  },
];

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive card counts
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 3; // Desktop
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + cardsPerView < projeler.length;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerView >= projeler.length ? 0 : prev + cardsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, projeler.length - cardsPerView)
        : Math.max(0, prev - cardsPerView)
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0); // Reset to first slide on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex((prev) =>
          prev === 0
            ? Math.max(0, projeler.length - cardsPerView)
            : Math.max(0, prev - cardsPerView)
        );
      } else if (
        e.key === "ArrowRight" &&
        currentIndex + cardsPerView < projeler.length
      ) {
        e.preventDefault();
        setCurrentIndex((prev) =>
          prev + cardsPerView >= projeler.length ? 0 : prev + cardsPerView
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, cardsPerView]);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <div className="mb-6">
          <span className="inline-block bg-gray-800 text-sm text-gray-300 px-4 py-1 rounded-full font-medium">
            • Our Latest Work
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
          Result-Driven Web & Mobile Applications
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl text-lg leading-relaxed mb-10">
          At Appdevify, we develop user-friendly, fast, and effective web and
          mobile applications. Whether it's e-commerce, services, portfolio, or
          enterprise solutions, every project combines functionality and
          aesthetics seamlessly.
        </p>

        {/* Button */}
        <Link
          to="/portfolio"
          className="inline-block text-black text-sm font-medium px-6 py-3 rounded-full transition hover:opacity-80"
          style={{ backgroundColor: "#9CFF28" }}
        >
          View All Projects
        </Link>

        {/* Carousel */}
        <div
          className="mt-20 relative"
          role="region"
          aria-label="Portfolio carousel"
        >
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              aria-label="Show previous projects"
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9CFF28] focus:ring-offset-2 ${
                canGoPrev
                  ? "border-[#9CFF28] text-[#9CFF28] hover:bg-[#9CFF28] hover:text-black shadow-md hover:shadow-lg"
                  : "border-gray-600 text-gray-600 cursor-not-allowed"
              }`}
            >
              <FiChevronLeft size={24} />
            </button>

            <div
              className="flex space-x-2"
              role="tablist"
              aria-label="Portfolio page indicators"
            >
              {Array.from({
                length: Math.ceil(projeler.length / cardsPerView),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * cardsPerView)}
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={
                    Math.floor(currentIndex / cardsPerView) === index
                      ? "page"
                      : false
                  }
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9CFF28] focus:ring-offset-2 ${
                    Math.floor(currentIndex / cardsPerView) === index
                      ? "bg-[#9CFF28] scale-110"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              aria-label="Show next projects"
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9CFF28] focus:ring-offset-2 ${
                canGoNext
                  ? "border-[#9CFF28] text-[#9CFF28] hover:bg-[#9CFF28] hover:text-black shadow-md hover:shadow-lg"
                  : "border-gray-600 text-gray-600 cursor-not-allowed"
              }`}
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          {/* Cards Container */}
          <div className="overflow-hidden px-3 md:px-0">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-3 md:gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {projeler.map((proje, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 bg-gray-900 rounded-3xl border border-gray-700 relative group shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                    cardsPerView === 1
                      ? "w-[calc(100%-24px)] mx-3"
                      : cardsPerView === 2
                      ? "w-[calc(50%-12px)]"
                      : "w-[calc(33.333%-16px)]"
                  } h-[450px] md:h-[500px]`}
                >
                  {/* Image */}
                  <LazyImage
                    src={proje.gorsel}
                    alt={`${proje.baslik} - ${proje.kategori} project screenshot`}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-300 group-hover:from-black/95" />
                  {/* Content */}
                  <div className="relative z-20 flex flex-col h-full justify-between p-6">
                    <div className="flex items-center justify-between">
                      {/* Tag */}
                      <span className="bg-gray-800/90 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-105 shadow-sm">
                        {proje.kategori}
                      </span>
                      {/* Arrow button */}
                      <a
                        href={proje.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${proje.baslik} project`}
                        className="w-12 h-12 rounded-full flex items-center justify-center text-black transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                        style={{ backgroundColor: "#9CFF28" }}
                      >
                        <FiArrowRight size={20} />
                      </a>
                    </div>
                    {/* Title */}
                    <div className="mt-auto">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 drop-shadow-lg transition-transform duration-300 group-hover:translate-y-[-4px]">
                        {proje.baslik}
                      </h3>
                      <div className="w-12 h-1 bg-[#9CFF28]/80 rounded-full transition-all duration-300 group-hover:w-16 group-hover:bg-[#9CFF28]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
