// src/components/ECommerceSection.jsx
import React from "react";

export default function ECommerceSection() {
  return (
    <section className="bg-gradient-to-br from-[#111217] to-[#1a1b1f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Sol metin tarafı */}
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-[#2a2d33] text-sm px-4 py-1 rounded-full text-gray-300">
            • E-Ticaret Tasarımı
          </span>
          <h2 className="text-4xl font-bold leading-snug">
            Squarespace <br /> E-Ticaret Tasarımı
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-xl">
            Squarespace üzerinde rafine e-ticaret deneyimleri tasarlıyoruz —
            kolay yönetilen, görsel olarak kusursuz ve dönüşüm odaklı yapılar.
            İster ilk ürününüzü piyasaya sürüyor olun, ister mevcut mağazanızı
            büyütüyor olun, uçtan uca hatasız çalışan çevrimiçi mağazalar inşa
            ediyoruz.
          </p>
          <button className="bg-[#506C83] hover:bg-[#3e566a] text-white font-medium px-6 py-3 rounded-full transition">
            Görüşme Planla
          </button>
        </div>

        {/* Sağ görsel alanı */}
        <div className="flex-1 relative">
          <img
            src="/media/ecommerce-main.png" // örnek görsel yolu (değiştirilebilir)
            alt="Dijital Ürünler Görseli"
            className="rounded-xl shadow-lg w-full max-w-2xl"
          />
          {/* Etiket: Güvenli Ödeme */}
          <div className="absolute top-0 right-0 bg-[#2f3136] text-xs text-white px-3 py-1 rounded-bl-lg shadow">
            Güvenli Ödeme
          </div>
          {/* Etiket: Dijital Ürünler */}
          <div className="absolute bottom-4 left-4 bg-[#2f3136] text-xs text-white px-3 py-1 rounded-tr-lg shadow">
            Dijital Ürünler
          </div>
        </div>
      </div>
    </section>
  );
}
