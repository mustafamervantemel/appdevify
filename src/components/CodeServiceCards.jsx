// src/components/CodeServiceCards.jsx
import React from "react";
import {
  FaCode,
  FaSlidersH,
  FaPuzzlePiece,
  FaWpforms,
  FaMagic,
  FaFilter,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Kod İncelemesi & Temizlik",
    description:
      "Mevcut kodlar sitenizi yavaşlatıyor veya bozuyorsa inceliyor, temizliyor ve sadeleştiriyoruz.",
  },
  {
    icon: <FaSlidersH size={28} />,
    title: "Tasarım ve Stil Özelleştirme",
    description:
      "Tema sınırlarını aşan gelişmiş görsel düzenlemeleri kodlara dokunmadan uyguluyoruz.",
  },
  {
    icon: <FaPuzzlePiece size={28} />,
    title: "Entegrasyon Desteği",
    description:
      "API, embed veya harici araçları görsel uyum bozulmadan entegre ediyoruz.",
  },
  {
    icon: <FaWpforms size={28} />,
    title: "Özel Formlar ve Mantık",
    description:
      "Koşullu alanlar, çok adımlı formlar veya siteye özel stillendirme ile form yapılandırıyoruz.",
  },
  {
    icon: <FaMagic size={28} />,
    title: "Etkileşimli Özellikler",
    description:
      "Scroll efektleri, içerik açılımları, animasyonlar gibi etkileşimleri optimize kodla yazıyoruz.",
  },
  {
    icon: <FaFilter size={28} />,
    title: "Filtreleme ve Arama",
    description:
      "Ürün veya proje filtrelerini şık, sezgisel ve yüksek performanslı biçimde kuruyoruz.",
  },
];

export default function CodeServiceCards() {
  return (
    <section className="bg-[#111315] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-sm text-gray-400 uppercase tracking-widest">
          • Hizmetlerimiz
        </span>
        <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">
          Dijital Vizyonunuza Uygun <br /> Kodlama Hizmetleri
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          İster özel bir etkileşim, ister animasyon veya tema dışı bir çözüm
          olsun; temiz, hızlı ve kusursuz bir şekilde entegre ediyoruz.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1c1d1f] p-6 rounded-lg border border-[#2a2b2f] hover:border-[#506C83] transition"
            >
              <div className="text-[#506C83] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
