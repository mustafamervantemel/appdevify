import React from "react";
import { FiArrowRight } from "react-icons/fi";

// Örnek görseller (800x600 önerilir)
import Proje1 from "../media/pnl1.png";
import Proje2 from "../media/pnl2.png";
import Proje3 from "../media/pnl3.png";
import Proje4 from "../media/pnl2.png";
import Proje5 from "../media/pnl1.png";
import Proje6 from "../media/pnl3.png";

// Animasyon için ekstra CSS (aşağıda eklenmiştir)

const projeler = [
  {
    id: 1,
    kategori: "Kurumsal",
    baslik: "Trident Global",
    gorsel: Proje1,
    link: "#",
  },
  {
    id: 2,
    kategori: "Yazılım (SaaS)",
    baslik: "Cents",
    gorsel: Proje2,
    link: "#",
  },
  {
    id: 3,
    kategori: "Sağlık",
    baslik: "Prova Health",
    gorsel: Proje3,
    link: "#",
  },
  {
    id: 4,
    kategori: "E-Ticaret",
    baslik: "Moda Market",
    gorsel: Proje4,
    link: "#",
  },
  {
    id: 5,
    kategori: "Hizmet",
    baslik: "TemizFix",
    gorsel: Proje5,
    link: "#",
  },
  {
    id: 6,
    kategori: "Kişisel Portföy",
    baslik: "Tasarımcı Deniz",
    gorsel: Proje6,
    link: "#",
  },
];

export default function PortfolioSection() {
  // Projeleri iki kez üst üste koyarak akışı döngüsel hale getiriyoruz
  const allProjects = [...projeler, ...projeler];

  return (
    <section className="bg-[#e8edf3] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Etiket */}
        <div className="mb-6">
          <span className="inline-block bg-[#d2d8e2] text-sm text-[#3b4b61] px-4 py-1 rounded-full font-medium">
            • Son Çalışmalarım
          </span>
        </div>

        {/* Başlık */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1e2b3a] leading-tight mb-6">
          Sonuç Odaklı Web Siteleri Tasarlıyoruz
        </h1>

        {/* Açıklama */}
        <p className="text-[#3b4b61] max-w-3xl text-lg leading-relaxed mb-10">
          Varonsoft olarak kullanıcı dostu, hızlı ve etkili web siteleri
          geliştiriyoruz. E-ticaret, hizmet, portföy veya kurumsal çözümler fark
          etmeksizin her projemiz işlevsellik ve estetiği bir araya getirir.
        </p>

        {/* Buton */}
        <a
          href="#"
          className="inline-block bg-[#506C83] hover:bg-[#40576d] text-white text-sm font-medium px-6 py-3 rounded-full transition"
        >
          Tüm Çalışmaları Gör
        </a>

        {/* Sürekli kayan kartlar */}
        <div className="mt-20 relative">
          <div className="scrolling-wrapper flex gap-6 w-max animate-scroll">
            {allProjects.map((proje, index) => (
              <div
                key={index}
                className="min-w-[320px] w-[320px] bg-white rounded-2xl border border-[#d3d9e2] p-5 relative group shadow-sm hover:shadow-xl"
              >
                {/* Etiket */}
                <span className="absolute top-5 left-5 bg-[#f1f3f7] text-[#6b7a8d] text-xs font-medium px-3 py-1 rounded-full">
                  {proje.kategori}
                </span>

                {/* Ok butonu */}
                <a
                  href={proje.link}
                  className="absolute top-5 right-5 w-9 h-9 bg-[#506C83] rounded-full flex items-center justify-center text-white transition hover:bg-[#40576d]"
                >
                  <FiArrowRight size={18} />
                </a>

                {/* Başlık */}
                <h3 className="text-lg font-medium text-[#1e2b3a] mt-14 mb-4">
                  {proje.baslik}
                </h3>

                {/* Görsel */}
                <img
                  src={proje.gorsel}
                  alt={proje.baslik}
                  className="rounded-xl w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
