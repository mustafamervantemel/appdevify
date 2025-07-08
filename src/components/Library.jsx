import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Örnek görseller (800x600 önerilir)
import Proje1 from "../media/ubuntu1.png";
import Proje2 from "../media/adasmile1.png";
import Proje3 from "../media/irfan12.png";
import Proje4 from "../media/mrhukuk1.png";
import Proje5 from "../media/jing1.png";
import Proje6 from "../media/pimax1.png";

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
            • Son Çalışmalarımız
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
        <Link
          to="/portfolyo"
          className="inline-block bg-[#506C83] hover:bg-[#40576d] text-white text-sm font-medium px-6 py-3 rounded-full transition"
        >
          Tüm Çalışmaları Gör
        </Link>

        {/* Sürekli kayan kartlar */}
        <div className="mt-20 relative">
          <div className="scrolling-wrapper flex gap-8 w-max animate-scroll">
            {allProjects.map((proje, index) => (
              <div
                key={index}
                className="min-w-[380px] w-[380px] h-[500px] bg-white rounded-3xl border border-[#d3d9e2] relative group shadow-sm hover:shadow-2xl overflow-hidden p-0 flex flex-col justify-end"
              >
                {/* Görsel */}
                <img
                  src={proje.gorsel}
                  alt={proje.baslik}
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2b3a]/80 via-[#1e2b3a]/30 to-transparent z-10" />
                {/* İçerik */}
                <div className="relative z-20 flex flex-col h-full justify-between p-6">
                  <div className="flex items-center justify-between">
                    {/* Etiket */}
                    <span className="bg-[#f1f3f7]/80 text-[#506C83] text-xs font-semibold px-4 py-1 rounded-full backdrop-blur-sm">
                      {proje.kategori}
                    </span>
                    {/* Ok butonu */}
                    <a
                      href={proje.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#506C83] rounded-full flex items-center justify-center text-white transition hover:bg-[#40576d] shadow-lg"
                    >
                      <FiArrowRight size={22} />
                    </a>
                  </div>
                  {/* Başlık */}
                  <h3 className="text-2xl font-semibold text-white mt-auto mb-2 drop-shadow-lg">
                    {proje.baslik}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
