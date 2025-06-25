import React from "react";
import MonitorImage from "../media/monitor.jpg"; // Or any relevant image you have

export default function WhyVeronsoft() {
  return (
    <section className="w-full bg-[#f3f6fb] py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center mb-12">
        <span className="inline-block text-sm text-[#5f738c] bg-[#dce3ea] rounded-full px-4 py-1">
          • Neden Varonsoft?
        </span>
        <h2 className="text-4xl font-semibold text-[#1c1f23] mt-4">
          Neden Varonsoft?
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Yalnızca bir web sitesi tasarımcısı değil, dönüşüm odaklı çözümler
          sunan bir iş ortağı arıyorsan doğru yerdesin.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 bg-[#111315] text-white p-6 rounded-xl">
        {/* Image side */}
        <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden">
          <img
            src={MonitorImage}
            alt="Desktop setup"
            className="rounded-xl object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-md text-sm">
            <strong className="text-lg">120+</strong> Müşteri
          </div>
          <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-md text-sm">
            <strong className="text-lg">450+</strong> Tamamlanan Proje
          </div>
        </div>

        {/* Text side */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">
            Mobil Uyumlu ve Dönüşüm Odaklı Tasarımlar
          </h3>
          <p className="text-gray-300">
            5+ yıllık deneyimimizle, kod yazmadan bile güzel görünün web
            siteleri yapmanıza yardımcı oluyoruz. Ama esas farkımız, bu siteleri
            birer satış makinesine dönüştürmemiz.
            <br />
            <br />
            Sitenizin tüm cihazlarda kusursuz görünmesini sağlıyor, SEO ve
            sosyal medya entegrasyonlarıyla görünürlüğü maksimuma çıkarıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
