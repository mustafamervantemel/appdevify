import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function AboutResultsSection() {
  const [experience, setExperience] = useState(0);
  const [referral, setReferral] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    // Sayı arttırıcı yardımcı fonksiyon
    const animateCount = (target, setter, speed = 30) => {
      let count = 0;
      const increment = target / 40;
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setter(Math.round(count));
      }, speed);
    };

    animateCount(10, setExperience);
    animateCount(89, setReferral);
    animateCount(85, setSatisfaction);
  }, []);

  return (
    <section className="bg-[#e8edf2] py-20 px-6 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm bg-white inline-block px-4 py-1 rounded-full mb-4 text-[#3a506b] shadow">
          • Değerlerimiz
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Başarı Kayıtlarımız
        </h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Müşterilerimize olan bağlılığımız ve mükemmeliyet tutkumuzla
          sektörlerde etkili sonuçlar elde ettik. İşte ortaklıklarımızdaki
          başarıyı ve adanmışlığımızı yansıtan bazı kilometre taşları:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 1. Kart */}
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Tecrübe Yılı</h3>
              <div className="text-5xl font-bold text-[#3a506b] flex items-center gap-2">
                <FaArrowUp />
                {experience}+
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Müşterilerimize modern, duyarlı ve etkileyici dijital deneyimler
                sunmak için öncüyüz.
              </p>
            </div>
          </div>

          {/* 2. Kart */}
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Tavsiye Oranı
              </h3>
              <div className="text-5xl font-bold text-[#3a506b] flex items-center gap-2">
                <FaArrowUp />
                {referral}%
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Yeni müşterilerimizin çoğu tavsiyelerle geliyor. Bu, önceki
                müşterilerimizin memnuniyetini gösteriyor.
              </p>
            </div>
          </div>

          {/* 3. Kart */}
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Müşteri Memnuniyeti
              </h3>
              <div className="text-5xl font-bold text-[#3a506b] flex items-center gap-2">
                <FaArrowUp />
                {satisfaction}%
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Müşteri odaklı yaklaşımımız, yüksek puanlar ve tam memnuniyetle
                sonuçlanır.
              </p>
            </div>
          </div>
        </div>

        {/* Buton */}
        <div className="mt-12">
          <a
            href="/iletisim"
            className="bg-[#3a506b] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2e425d] transition"
          >
            Görüşme Planla
          </a>
        </div>
      </div>
    </section>
  );
}
