import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaBehance,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0f091c] text-white px-8 py-12">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Sol Bölüm */}
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold tracking-wide mb-4">
            <span className="text-white">VERON</span>
            <span className="text-[#51A2FF]">SOFT</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Veronsoft, ödüllü bir web tasarım ajansıdır. UI/UX, SEO ve özel web
            yazılım çözümleri sunar. Türkiye, Avrupa ve globalde hizmet verir.
          </p>
        </div>

        {/* Orta Menü */}
        <div className="flex flex-col gap-2 text-sm text-gray-200">
          <span className="hover:text-white cursor-pointer transition">
            Nasıl Çalışır
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Son Projeler
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Sunduğumuz Hizmetler
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Fiyatlandırma
          </span>
        </div>

        {/* Sağ Sosyal & Mail */}
        <div className="flex flex-col items-center lg:items-end gap-4">
          <div className="flex gap-4">
            <a
              href="#"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaBehance />
            </a>
          </div>
          <p className="text-sm text-gray-300">hello@veronsoft.com</p>
        </div>
      </div>

      {/* Alt Çizgi */}
      <div className="border-t border-white/10 mt-12 pt-4 text-center text-sm text-gray-400">
        Copyright © 2025 Veronsoft
      </div>
    </footer>
  );
}
