// src/components/SEOServicesGrid.jsx
import React from "react";
import {
  FaSearch,
  FaRegHandPaper,
  FaExchangeAlt,
  FaCog,
  FaHeadphones,
  FaFolderOpen,
} from "react-icons/fa";

const services = [
  {
    title: "Site Denetimi ve İndeksleme İncelemesi",
    icon: <FaSearch size={24} />,
    description:
      "Web sitenizin nasıl yapılandığını, indekslendiğini ve tarandığını analiz ediyor, sorunları tespit edip düzeltiyoruz.",
  },
  {
    title: "Sayfa İçi Optimizasyon",
    icon: <FaRegHandPaper size={24} />,
    description:
      "Başlıklar, meta açıklamalar, görsel SEO ve iç linkleme gibi içerik stratejinizi yansıtan yapılar kurarız.",
  },
  {
    title: "SEO Uyumlu İçerik Yazımı (Gerektiğinde)",
    icon: <FaExchangeAlt size={24} />,
    description:
      "Sıfırdan içerik yazımı gerekiyorsa, hem insanlar hem Google için optimize edilmiş anlamlı içerikler üretiriz.",
  },
  {
    title: "Yerel SEO Kurulumu",
    icon: <FaCog size={24} />,
    description:
      "Google İşletme Profili, harita verileri ve yerel şema ayarlarını doğru şekilde yapılandırırız.",
  },
  {
    title: "İçerik Stratejisi Desteği",
    icon: <FaHeadphones size={24} />,
    description:
      "Nelerin yayınlanacağı, neyin güncelleneceği veya kaldırılacağı konusunda danışmanlık sunarız.",
  },
  {
    title: "Sürekli Takip ve Raporlama",
    icon: <FaFolderOpen size={24} />,
    description:
      "Performansı izler, analizleri değerlendirir ve sessizce arka planda gerekli düzenlemeleri yaparız.",
  },
];

export default function SEOServicesGrid() {
  return (
    <section className="bg-[#111215] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Web Sitenizin Görünürlüğünü Artıracak SEO Hizmetleri
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sihir değil, strateji sunuyoruz. İnsanların ve arama motorlarının
            davranışlarına dayalı, temiz ve kurallara uygun SEO hizmetleri.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1b1f] p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition"
            >
              <div className="text-[#7fb3ff] mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
