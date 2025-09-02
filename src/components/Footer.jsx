import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import AppdevifyLogo from "../media/appdevify_logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start justify-start">
          <img src={AppdevifyLogo} alt="Appdevify Logo" className="w-32 h-auto mb-4" />
          <p className="text-sm leading-relaxed text-gray-300">
            Appdevify delivers cutting-edge mobile app and web development solutions for businesses across the US and UK. We specialize in custom software development, modern web applications, and comprehensive digital transformation services.
          </p>
        </div>

        {/* Center Menu */}
        <div className="flex flex-col gap-2 text-sm text-gray-200">
          <Link to="/portfolio" className="hover:text-white cursor-pointer transition">Portfolio</Link>
          <Link to="/portfolio" className="hover:text-white cursor-pointer transition">Our Projects</Link>
          <Link to="/services/web-development" className="hover:text-white cursor-pointer transition">Services</Link>
          <Link to="/contact" className="hover:text-white cursor-pointer transition">Contact</Link>
        </div>

        {/* Right Social & Email */}
        <div className="flex flex-col items-center lg:items-end gap-4">
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 hover:border-white p-2 rounded-full transition"
              style={{'--hover-border-color': '#9CFF28'}}
            >
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm text-gray-300">hello@appdevify.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 mt-12 pt-4 text-center text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} Appdevify
      </div>
    </footer>
  );
}
