// src/components/CustomCodeSupport.jsx
import React from "react";

export default function CustomCodeSupport() {
  return (
    <section className="bg-gradient-to-r from-[#111] to-[#1a1b1f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Sol taraf: içerik */}
        <div className="lg:w-1/2">
          <span className="bg-[#2f2f32] text-sm text-gray-300 px-4 py-1 rounded-full inline-block mb-4">
            • Özel Kod Desteği
          </span>
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Web Siteniz İçin <br /> Özel Kod Desteği
          </h2>
          <p className="text-gray-400 mb-8">
            Web sitenizin potansiyelini en üst düzeye çıkarmak için platform
            kısıtlamalarını aşan profesyonel kod desteği sunuyoruz. Düzen
            iyileştirmeleri, etkileşim ayarları veya gelişmiş özellikler fark
            etmeksizin, performanstan ödün vermeyen temiz ve etkili kodlar
            yazarız.
          </p>
          <a
            href="#iletisim"
            className="inline-block bg-[#506C83] hover:bg-[#3e5466] transition px-6 py-3 rounded-full text-white font-medium"
          >
            Görüşme Planla
          </a>
        </div>

        {/* Sağ taraf: görsel alan (yer tutucu olarak kullanılabilir) */}
        <div className="lg:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#333]">
            <img
              src="https://dummyimage.com/700x450/1c1c1c/ffffff&text=Kod+Destek+Ekranı"
              alt="Kod Destek Görseli"
              className="w-full object-cover"
            />
            {/* üzerine etiket eklenebilir */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-sm px-3 py-1 rounded-full text-gray-200">
              <span>Custom CSS Görünümü</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
