// src/components/WhyChooseUs.jsx
import React from "react";
import { FaHandshake, FaChartBar, FaCertificate } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Başlık alanı */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block bg-gray-200 text-gray-600 text-sm font-medium px-4 py-1 rounded-full">
              • Neden bizi tercih etmelisiniz
            </span>
            <h2 className="text-4xl font-bold leading-tight">
              Amaç ve Tutkuyla <br />
              Tasarlanmış Mağazalar
            </h2>
          </div>
 
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <FeatureCard
            icon={<FaCertificate className="text-3xl text-[#506C83]" />}
            title="Dönüşüm Odaklı Yaklaşım"
            description="Her tıklama bir amaca hizmet eder. Akışı, okunabilirliği ve güvenli alışveriş hissini ön planda tutuyoruz."
          />
          <FeatureCard
            icon={<FaHandshake className="text-3xl text-[#506C83]" />}
            title="Kolay Yönetim Sistemi"
            description="Ürünleri güncellemek veya kampanya başlatmak için geliştiriciye ihtiyacınız yok. Gerçekten kullanabileceğiniz mağazalar tasarlıyoruz."
          />
          <FeatureCard
            icon={<FaChartBar className="text-3xl text-[#506C83]" />}
            title="Ölçeklenebilir Altyapı"
            description="Ürün yelpazeniz büyüdükçe siteniz de büyür—yeniden tasarıma gerek kalmaz."
          />
        </div>
      </div>
    </section>
  );
}

// Özellik kartı bileşeni
function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
