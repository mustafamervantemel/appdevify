import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaBehance,
} from "react-icons/fa6";
import Logo from "../media/veronlogo12.png";

export default function Footer() {
  return (
    <footer className="bg-[#0f091c] text-white px-8 py-12">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Sol Bölüm */}
        <div className="flex-1 flex flex-col items-start justify-start">
          <img src={Logo} alt="Varonsoft Logo" className="w-32 h-auto mb-4" />
          <p className="text-sm leading-relaxed text-gray-300">
            Varonsoft, modern ve yenilikçi web tasarım, yazılım ve dijital dönüşüm çözümleri sunar. Kurumsal web siteleri, e-ticaret, SEO ve özel yazılım projelerinde uzman ekibimizle Türkiye ve globalde işletmelere değer katıyoruz.
          </p>
        </div>

        {/* Orta Menü */}
        <div className="flex flex-col gap-2 text-sm text-gray-200">
          <a href="/portfolyo" className="hover:text-white cursor-pointer transition">Nasıl Çalışıyoruz</a>
          <a href="/portfolyo" className="hover:text-white cursor-pointer transition">Projelerimiz</a>
          <a href="/hizmetler/seo" className="hover:text-white cursor-pointer transition">Hizmetler</a>
          <a href="/iletisim" className="hover:text-white cursor-pointer transition">İletişim</a>
        </div>

        {/* Sağ Sosyal & Mail */}
        <div className="flex flex-col items-center lg:items-end gap-4">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/varonsoft/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/varonsoft/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/varonsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/varonsoft/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.behance.net/varonsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
            >
              <FaBehance />
            </a>
          </div>
          <p className="text-sm text-gray-300">info@varonsoft.com</p>
        </div>
      </div>

      {/* Alt Çizgi */}
      <div className="border-t border-white/10 mt-12 pt-4 text-center text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} Varonsoft
      </div>
    </footer>
  );
}
