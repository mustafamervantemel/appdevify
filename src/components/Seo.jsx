// src/components/SEOSection.jsx
import React from "react";

export default function SEOSection() {
  return (
    <section className="bg-gradient-to-br from-[#111217] to-[#1a1b1f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Sol metin tarafı */}
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-[#2a2d33] text-sm px-4 py-1 rounded-full text-gray-300">
            • Arama Motoru Optimizasyonu
          </span>
          <h2 className="text-4xl font-bold leading-snug">
            Web Siteleri İçin <br /> SEO Hizmetleri
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-xl">
            Gürültüsüz, stratejik ve etkili SEO hizmetleri sunuyoruz. Abartılı
            vaatler yok — yalnızca teknik netlik, sağlam yapı ve arka planda
            çalışan güçlü içerik. Web sitenizin Google’da daha kolay bulunması,
            daha iyi sıralanması ve daha güvenilir olması için optimize
            ediyoruz.
          </p>
          <button className="bg-[#506C83] hover:bg-[#3e566a] text-white font-medium px-6 py-3 rounded-full transition">
            Görüşme Planla
          </button>
        </div>

        {/* Sağ görsel alanı */}
        <div className="flex-1 relative">
          <img
            src="/media/seo-main.png" // görsel yolunu kendi sistemine göre değiştir
            alt="SEO Analizi Görseli"
            className="rounded-xl shadow-lg w-full max-w-2xl"
          />
          {/* Etiket: Anahtar Kelime Araştırması */}
          <div className="absolute bottom-4 left-4 bg-[#2f3136] text-xs text-white px-3 py-1 rounded-tr-lg shadow">
            Anahtar Kelime Araştırması
          </div>
        </div>
      </div>
    </section>
  );
}
