import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaSearch,
  FaShoppingCart,
  FaCode,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../media/veronlogo12.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimer = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleServicesEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
  };

  return (
    <nav className="text-black py-4 px-6 sm:px-10 relative z-50 bg-white shadow-sm" itemscope itemtype="https://schema.org/SiteNavigationElement">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="w-28 sm:w-32">
          <img src={Logo} alt="Varonsoft Logo" className="w-full h-auto" />
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Menü - Masaüstü */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-gray-500" itemProp="url">
              <span itemProp="name">Anasayfa</span>
            </Link>
          </li>
          <li>
            <Link to="/hakkimizda" className="hover:text-gray-500" itemProp="url">
              <span itemProp="name">Hakkımızda</span>
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <span className="cursor-pointer hover:text-gray-500 flex items-center gap-1">
              Hizmetler <FaChevronDown size={12} />
            </span>

            {isServicesOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-[600px] bg-white text-black rounded-xl shadow-xl p-6 grid grid-cols-2 gap-6"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <ServiceItem
                  icon={<FaLaptopCode size={20} />}
                  title="Özel İnternet Sitesi"
                  desc="Firmanıza özel tasarım ve güçlü performans."
                  link="/hizmetler/ozel-site"
                />
                <ServiceItem
                  icon={<FaSearch size={20} />}
                  title="SEO"
                  desc="Google sıralamasında yükselin, daha görünür olun."
                  link="/hizmetler/seo"
                />
                <ServiceItem
                  icon={<FaShoppingCart size={20} />}
                  title="E-Ticaret Sitesi Yapımı"
                  desc="Ürünlerinizi online satışa taşıyın."
                  link="/hizmetler/e-ticaret"
                />
                <ServiceItem
                  icon={<FaCode size={20} />}
                  title="Özel Kod Desteği"
                  desc="İhtiyaca yönelik özel yazılım çözümleri."
                  link="/hizmetler/kod-destegi"
                />
              </div>
            )}
          </li>
          <li>
            <Link to="/portfolyo" className="hover:text-gray-500" itemProp="url">
              <span itemProp="name">Portfolyo</span>
            </Link>
          </li>
          <li>
            <Link to="/iletisim" className="hover:text-gray-500" itemProp="url">
              <span itemProp="name">İletişim</span>
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link to="/iletisim" className="hidden md:block">
          <button className="bg-[#506C83] hover:bg-[#3e566a] text-white px-5 py-2 rounded-full text-sm font-medium transition">
            Görüşme Planla
          </button>
        </Link>
      </div>

      {/* Menü - Mobil */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-md px-4 py-6 space-y-4 text-sm font-medium">
          <Link to="/" onClick={toggleMobileMenu} className="block">
            Anasayfa
          </Link>
          <Link to="/hakkimizda" onClick={toggleMobileMenu} className="block">
            Hakkımızda
          </Link>

          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer">
              <span>Hizmetler</span>
              <FaChevronDown
                size={12}
                className="group-open:rotate-180 transition"
              />
            </summary>
            <div className="mt-2 ml-2 space-y-2 text-gray-700">
              <Link to="/hizmetler/ozel-site" onClick={toggleMobileMenu}>
                • Özel İnternet Sitesi
              </Link>
              <Link to="/hizmetler/seo" onClick={toggleMobileMenu}>
                • SEO
              </Link>
              <Link to="/hizmetler/e-ticaret" onClick={toggleMobileMenu}>
                • E-Ticaret Sitesi
              </Link>
              <Link to="/hizmetler/kod-destegi" onClick={toggleMobileMenu}>
                • Özel Kod Desteği
              </Link>
            </div>
          </details>

          <Link to="/portfolyo" onClick={toggleMobileMenu} className="block">
            Portfolyo
          </Link>
          <Link to="/iletisim" onClick={toggleMobileMenu} className="block">
            İletişim
          </Link>
          <Link to="/gorusme" onClick={toggleMobileMenu} className="block">
            <button className="w-full bg-[#506C83] hover:bg-[#3e566a] text-white px-4 py-2 rounded-full font-medium transition">
              Görüşme Planla
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

// Hizmet Kartı bileşeni
function ServiceItem({ icon, title, desc, link }) {
  return (
    <Link
      to={link}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
    >
      <div className="mt-1 text-[#506C83]">{icon}</div>
      <div>
        <h4 className="font-semibold text-sm mb-1">{title}</h4>
        <p className="text-xs text-gray-600">{desc}</p>
      </div>
    </Link>
  );
}
