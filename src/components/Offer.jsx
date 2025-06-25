// src/components/WhatWeOffer.jsx
import React from "react";
import {
  FaBoxes,
  FaExchangeAlt,
  FaDog,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaHeadset,
} from "react-icons/fa";

export default function WhatWeOffer() {
  const features = [
    {
      icon: <FaBoxes className="text-2xl" />,
      title: "Ürün Koleksiyonları",
      description:
        "Alıcınız için mantıklı olacak şekilde ürün koleksiyonlarını yapılandırıyoruz.",
    },
    {
      icon: <FaExchangeAlt className="text-2xl" />,
      title: "Arka Uç Kurulumu",
      description:
        "Stok, varyant ve sipariş süreçlerini entegre ederek günlük operasyonlarınızı destekliyoruz.",
    },
    {
      icon: <FaDog className="text-2xl" />,
      title: "Ürün Sayfaları",
      description:
        "Sadece listeleme değil, kullanıcıyı bilgilendiren detaylı ürün sayfaları oluşturuyoruz.",
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Mobil Optimizasyon",
      description:
        "Mobil cihazlar için hızlı, dönüşüm odaklı tasarımlar geliştiriyoruz.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-2xl" />,
      title: "Ödeme Entegrasyonu",
      description:
        "Stripe, PayPal, Apple Pay ve vergi araçlarını teknik karmaşa olmadan entegre ediyoruz.",
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Gerçek Squarespace Uzmanlığı",
      description:
        "Squarespace Commerce’in tüm potansiyelini nasıl açığa çıkaracağımızı biliyoruz.",
    },
  ];

  return (
    <section className="bg-[#0f1113] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Başlık */}
        <div>
          <span className="inline-block bg-[#1e2023] text-sm px-4 py-1 rounded-full text-gray-400">
            • Neler Sunuyoruz
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Her Ürünün Arkasında <br />
            Bir Plan Yatar.
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            E-ticaret sadece bir alışveriş sepetinden ibaret değildir.
            Konumlandırma, hikaye anlatımı ve kullanıcı deneyiminin
            birleşimidir. Shopify gibi ayrı platformlara ihtiyacınız yok; net
            yapı, sade süreç ve ölçeklenebilirlik sunan bir siteye ihtiyacınız
            var. İşte biz bunu yapıyoruz.
          </p>
        </div>

        {/* Özellik kutuları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-[#16181a] hover:bg-[#1d1f21] transition p-6 rounded-xl border border-[#2b2d2f] space-y-4"
            >
              <div className="text-[#8cb4ff]">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
