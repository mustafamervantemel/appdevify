import React, { useState, useEffect } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

// Örnek görseller (800x600 önerilir)
import Proje1 from "../media/ubuntu1.png";
import Proje2 from "../media/adasmile1.png";
import Proje3 from "../media/irfan12.png";
import Proje4 from "../media/mrhukuk1.png";
import Proje5 from "../media/jing1.png";
import Proje6 from "../media/pimax1.png";
import Proje7 from "../media/restorant.png";
import Proje8 from "../media/varonmark.png";

// Animasyon için ekstra CSS (aşağıda eklenmiştir)

const projeler = [
  {
    id: 1,
    kategori: "Finans",
    baslik: "Ubuntu Yatırım",
    gorsel: Proje1,
    link: "https://www.ubuntuyatirim.com/",
  },
  {
    id: 2,
    kategori: "Diş Polikliniği",
    baslik: "Ada Smile Studio",
    gorsel: Proje2,
    link: "https://www.adasmilestudio.com/",
  },
  {
    id: 3,
    kategori: "Mali Müşavirlik",
    baslik: "İrfan Özdamar",
    gorsel: Proje3,
    link: "https://irfanozdamar-com.vercel.app/",
  },
  {
    id: 4,
    kategori: "Hukuk Bürosu",
    baslik: "MR Hukuk Bürosu",
    gorsel: Proje4,
    link: "https://mrhukuk.vercel.app/",
  },
  {
    id: 5,
    kategori: "E-Ticaret",
    baslik: "Jing Tea",
    gorsel: Proje5,
    link: "https://jingtea.com/",
  },
  {
    id: 6,
    kategori: "E-Ticaret",
    baslik: "Pimax",
    gorsel: Proje6,
    link: "https://pimax.com/",
  },
  {
    id: 7,
    kategori: "Restoran",
    baslik: "Restaurant Five",
    gorsel: Proje7,
    link: "https://restaurant-five-azure.vercel.app/",
  },
  {
    id: 8,
    kategori: "Sosyal Medya Ajansı",
    baslik: "Varonmark",
    gorsel: Proje8,
    link: "https://varonmark.com/",
  },
];

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive card counts
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
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
      prev === 0 ? Math.max(0, projeler.length - cardsPerView) : Math.max(0, prev - cardsPerView)
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex((prev) => 
          prev === 0 ? Math.max(0, projeler.length - cardsPerView) : Math.max(0, prev - cardsPerView)
        );
      } else if (e.key === 'ArrowRight' && currentIndex + cardsPerView < projeler.length) {
        e.preventDefault();
        setCurrentIndex((prev) => 
          prev + cardsPerView >= projeler.length ? 0 : prev + cardsPerView
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, cardsPerView]);

  return (
    <section className="bg-[#e8edf3] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Etiket */}
        <div className="mb-6">
          <span className="inline-block bg-[#d2d8e2] text-sm text-[#3b4b61] px-4 py-1 rounded-full font-medium">
            • Son Çalışmalarımız
          </span>
        </div>

        {/* Başlık */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1e2b3a] leading-tight mb-6">
          Sonuç Odaklı Web Siteleri Tasarlıyoruz
        </h2>

        {/* Açıklama */}
        <p className="text-[#3b4b61] max-w-3xl text-lg leading-relaxed mb-10">
          Varonsoft olarak kullanıcı dostu, hızlı ve etkili web siteleri
          geliştiriyoruz. E-ticaret, hizmet, portföy veya kurumsal çözümler fark
          etmeksizin her projemiz işlevsellik ve estetiği bir araya getirir.
        </p>

        {/* Buton */}
        <Link
          to="/portfolyo"
          className="inline-block bg-[#506C83] hover:bg-[#40576d] text-white text-sm font-medium px-6 py-3 rounded-full transition"
        >
          Tüm Çalışmaları Gör
        </Link>

        {/* Carousel */}
        <div className="mt-20 relative" role="region" aria-label="Portfolio carousel">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              aria-label="Önceki projeleri göster"
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#506C83] focus:ring-offset-2 ${
                canGoPrev
                  ? 'border-[#506C83] text-[#506C83] hover:bg-[#506C83] hover:text-white shadow-md hover:shadow-lg'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
            >
              <FiChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2" role="tablist" aria-label="Portfolio sayfa göstergeleri">
              {Array.from({ length: Math.ceil(projeler.length / cardsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * cardsPerView)}
                  aria-label={`Sayfa ${index + 1}'e git`}
                  aria-current={Math.floor(currentIndex / cardsPerView) === index ? 'page' : false}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#506C83] focus:ring-offset-2 ${
                    Math.floor(currentIndex / cardsPerView) === index
                      ? 'bg-[#506C83] scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              aria-label="Sonraki projeleri göster"
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#506C83] focus:ring-offset-2 ${
                canGoNext
                  ? 'border-[#506C83] text-[#506C83] hover:bg-[#506C83] hover:text-white shadow-md hover:shadow-lg'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
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
                transform: `translateX(-${(currentIndex * (100 / cardsPerView))}%)`,
              }}
            >
              {projeler.map((proje, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 bg-white rounded-3xl border border-[#d3d9e2] relative group shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                    cardsPerView === 1 ? 'w-[calc(100%-24px)] mx-3' : 
                    cardsPerView === 2 ? 'w-[calc(50%-12px)]' : 
                    'w-[calc(33.333%-16px)]'
                  } h-[450px] md:h-[500px]`}
                >
                  {/* Görsel */}
                  <LazyImage
                    src={proje.gorsel}
                    alt={`${proje.baslik} - ${proje.kategori} projesi ekran görüntüsü`}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e2b3a]/90 via-[#1e2b3a]/40 to-transparent z-10 transition-opacity duration-300 group-hover:from-[#1e2b3a]/95" />
                  {/* İçerik */}
                  <div className="relative z-20 flex flex-col h-full justify-between p-6">
                    <div className="flex items-center justify-between">
                      {/* Etiket */}
                      <span className="bg-[#f1f3f7]/90 text-[#506C83] text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:scale-105 shadow-sm">
                        {proje.kategori}
                      </span>
                      {/* Ok butonu */}
                      <a
                        href={proje.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${proje.baslik} projesini görüntüle`}
                        className="w-12 h-12 bg-[#506C83] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#40576d] hover:scale-110 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#506C83]"
                      >
                        <FiArrowRight size={20} />
                      </a>
                    </div>
                    {/* Başlık */}
                    <div className="mt-auto">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 drop-shadow-lg transition-transform duration-300 group-hover:translate-y-[-4px]">
                        {proje.baslik}
                      </h3>
                      <div className="w-12 h-1 bg-white/60 rounded-full transition-all duration-300 group-hover:w-16 group-hover:bg-white"></div>
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
