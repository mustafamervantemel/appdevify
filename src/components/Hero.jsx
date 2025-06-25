import React from "react";
import RectangleBg from "../media/rectangle.jpg"; // Görsel yolunu dosya konumuna göre ayarla

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen text-white"
      style={{ backgroundImage: `url(${RectangleBg})` }}
    >
      {/* Yarı saydam katman (istersen koyulaştırabilirsin) */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* İçerik */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between px-6 sm:px-10 lg:px-[8%] py-10 gap-10 max-w-[1440px] mx-auto min-h-screen">
        {/* Sol taraf: Tanıtım metni */}
        <div className="flex-1 max-w-full lg:max-w-[48%]">
          <div className="flex gap-3 mb-6 flex-wrap">
            <span className="bg-green-500/20 text-green-300 text-sm font-medium px-4 py-1 rounded-full">
              Müsait
            </span>
            <span className="bg-white/10 text-white text-sm font-medium px-4 py-1 rounded-full">
              İletişime Geç
            </span>
          </div>

          <h1 className="text-[2rem] sm:text-[2.5rem] leading-tight font-semibold mb-6">
            Varonsoft: Ödüllü <br />
            <span className="text-blue-300">Web Tasarım Ajansı</span>
          </h1>

          <p className="text-base text-gray-300 mb-8">
            5+ yıllık tecrübemizle, Türkiye ve dünya çapında 450'den fazla özel
            tasarım site oluşturduk. Şimdi senin için başlıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:scale-105 transition flex items-center justify-center gap-2 shadow-sm">
              <span>Görüşme Planla</span>
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-full font-medium hover:bg-white hover:text-black transition">
              İletişime Geç
            </button>
          </div>
        </div>

        {/* Sağ taraf: Form kutusu */}
        <div className="flex-1 w-full max-w-full lg:max-w-[480px] bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-black">
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-1 text-sm">
                  Ad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Adınızı girin"
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-1 text-sm">
                  E-posta <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1 text-sm">
                Konu <span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option value="">Konu seçin</option>
                <option value="web">Web Sitesi Tasarımı</option>
                <option value="seo">SEO Danışmanlığı</option>
                <option value="e-ticaret">E-Ticaret Sitesi</option>
                <option value="diger">Diğer</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1 text-sm">
                Mesaj <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Size nasıl yardımcı olabiliriz?"
                rows="4"
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#324b6e] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Talep Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
