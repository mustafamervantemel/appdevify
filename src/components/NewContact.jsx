// src/components/ContactSection.jsx
import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPlus,
} from "react-icons/fa";

export default function ContactSection() {
  // Gerçek avatar yollarını buraya koy
  const avatars = [
    "/media/panel1.png",
    "/media/panel1.png",
    "/media/panel1.png",
  ];

  return (
    <section className="bg-[#f4f4f4] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Sol taraf */}
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-gray-200 text-gray-600 text-sm font-medium px-4 py-1 rounded-full">
            • İletişime Geç
          </span>
          <h2 className="text-4xl font-bold text-gray-900">İletişime Geç.</h2>
          <p className="text-gray-700 text-lg">
            24 Saat İçinde Geri Döneceğim.
          </p>
          <p className="text-gray-600">
            Projeniz hakkında konuşmayı çok isterim. Formu doldurarak veya
            Dribbble, Behance, LinkedIn ya da e-posta yoluyla bana
            ulaşabilirsiniz.
          </p>

          {/* Sosyal ikonlar */}
          <div className="flex items-center gap-4">
            <SocialIcon icon={<FaBehance />} />
            <SocialIcon icon={<FaDribbble />} />
            <SocialIcon icon={<FaLinkedin />} />
            <SocialIcon icon={<FaYoutube />} />
            <SocialIcon icon={<FaEnvelope />} />
          </div>

          {/* CTA + avatarlar */}
          <div className="flex items-center gap-6 mt-6">
            <button className="bg-[#506C83] hover:bg-[#3e566a] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition">
              <span>Ücretsiz Görüşme Al</span>
              <FaPlus className="text-sm" />
            </button>
            <div className="flex items-center -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`avatar-${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
              <span className="ml-4 text-gray-600 text-sm">
                450+ kişi Sam ile çalışmayı sevdi
              </span>
            </div>
          </div>

          {/* Rozetler */}
          <div className="flex items-center gap-12 mt-12">
            {["Marketplace Uzmanı", "Topluluk Lideri", "Üye"].map(
              (label, i) => (
                <Badge key={i} label={label} />
              )
            )}
          </div>
        </div>

        {/* Sağ taraf form */}
        <div className="flex-1 relative">
          <div className="absolute -top-8 left-8">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600 font-medium">
              <FaPlus />
            </div>
          </div>
          <form className="bg-white border-8 border-gray-200 rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Ad Soyad" type="text" placeholder="Adınızı girin" />
              <Input
                label="E-posta"
                type="email"
                placeholder="E-posta adresinizi girin"
              />
            </div>
            <Select label="Konu" options={["Seçiniz", "Proje A", "Proje B"]} />
            <Textarea
              label="Mesaj"
              placeholder="Size nasıl yardımcı olabiliriz?"
            />
            <button
              type="submit"
              className="w-full bg-[#506C83] hover:bg-[#3e566a] text-white py-3 rounded-full font-semibold transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Küçük yardımcı bileşenler:

function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 text-xl hover:bg-gray-300 transition cursor-pointer">
      {icon}
    </div>
  );
}

function Badge({ label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 border-2 border-gray-400 rounded-full" />
      <p className="mt-2 text-xs text-gray-600">{label}</p>
    </div>
  );
}

function Input({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <select className="w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]">
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        placeholder={placeholder}
        rows="4"
        className="w-full text-black bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]"
      ></textarea>
    </div>
  );
}
