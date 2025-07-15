import React from "react";
import { FaCheckSquare, FaCalendarAlt } from "react-icons/fa";
import ceoPhoto from "../media/pnl1.png"; // Görsel yolunu kendi projene göre düzenle

export default function ProjectContactSection() {
  return (
    <section className="bg-[#f4f4f4] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Sol Kısım */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projen mi var?
          </h2>
          <h3 className="text-4xl font-semibold text-gray-500 mb-10">
            Hadi konuşalım!
          </h3>

          <div className="space-y-4 text-gray-700 text-sm">
            <p className="flex items-start gap-2">
              <FaCheckSquare className="text-[#324b6e] mt-1" />
              Gizlilik mi? İstemen yeterli.
            </p>
            <p className="flex items-start gap-2">
              <FaCheckSquare className="text-[#324b6e] mt-1" />
              24 saat içinde hızlı ve odaklı geri dönüş sağlıyoruz.
            </p>
            <p className="flex items-start gap-2">
              <FaCheckSquare className="text-[#324b6e] mt-1" />
              Junior değil, deneyimli uzmanlarla çalışıyorsun.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-medium text-gray-900 mb-2">Görüşme planla:</p>
            <div className="bg-white rounded-lg shadow flex items-center justify-between p-4 max-w-[320px]">
              <div className="flex items-center gap-3">
                <img
                  src={ceoPhoto}
                  alt="Mert Yılmaz, Kurucu ve CEO"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Mert Yılmaz</p>
                  <p className="text-sm text-gray-500">Kurucu & CEO</p>
                </div>
              </div>
              <button 
                className="bg-[#324b6e] text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#324b6e] focus:ring-offset-2"
                aria-label="Mert Yılmaz ile görüşme planla"
              >
                <FaCalendarAlt />
              </button>
            </div>
          </div>
        </div>

        {/* Sağ Form */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-6">
            {/* Giriş Alanları */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="E-posta"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#324b6e]"
              />
              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#324b6e]"
              />
              <select className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#324b6e]">
                <option>Proje bütçesi</option>
                <option>0–10.000₺</option>
                <option>10.000₺–50.000₺</option>
                <option>50.000₺+</option>
              </select>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#324b6e]">
                <option>Bizden nasıl haberdar oldunuz?</option>
                <option>Google</option>
                <option>Sosyal Medya</option>
                <option>Referans</option>
              </select>
            </div>

            {/* Mesaj */}
            <textarea
              rows="4"
              placeholder="Bize projenizden ve hedeflerinizden bahsedin."
              className="w-full border text-black border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#324b6e]"
            />

            {/* Yardımcı Olunacak Konular */}
            <div>
              <p className="font-medium text-gray-900 mb-2">
                Nasıl yardımcı olabiliriz?
              </p>
              <div className="flex flex-wrap gap-2 text-black">
                {[
                  "UI/UX Tasarımı",
                  "Kurumsal Site",
                  "SEO Danışmanlığı",
                  "Mobil Uygulama",
                  "E-Ticaret",
                  "Yazılım Geliştirme",
                  "MVP Geliştirme",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-gray-300 text-sm rounded-full hover:bg-[#324b6e] hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Gönderme Alanı */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <button
                type="submit"
                className="bg-[#324b6e] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Mesaj Gönder
              </button>
              <p className="text-sm">
                Mail mi tercih edersiniz?{" "}
                <a
                  href="mailto:hello@veronsoft.com"
                  className="underline text-[#324b6e]"
                >
                  hello@veronsoft.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
