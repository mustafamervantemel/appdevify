import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaMobile,
  FaLaptopCode,
  FaCode,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import AppdevifyLogo from "../media/appdevify_logo.svg";

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
    <nav
      className="text-black py-4 px-6 sm:px-10 relative z-50 bg-white shadow-sm"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="w-56 sm:w-64">
          <img
            src={AppdevifyLogo}
            alt="Appdevify Logo"
            className="h-32 w-auto"
          />
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black">
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-600 transition-colors"
              itemProp="url"
            >
              <span itemProp="name">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black hover:text-gray-600 transition-colors"
              itemProp="url"
            >
              <span itemProp="name">About</span>
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <span className="cursor-pointer text-black hover:text-gray-600 transition-colors flex items-center gap-1">
              Services <FaChevronDown size={12} />
            </span>

            {isServicesOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-[600px] bg-white text-black rounded-xl shadow-xl p-6 grid grid-cols-2 gap-6"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <ServiceItem
                  icon={<FaMobile size={20} />}
                  title="Mobile App Development"
                  desc="Native and cross-platform mobile applications."
                  link="/services/mobile-apps"
                />
                <ServiceItem
                  icon={<FaLaptopCode size={20} />}
                  title="Web Development"
                  desc="Modern, responsive websites and web applications."
                  link="/services/web-development"
                />
                <ServiceItem
                  icon={<FaCode size={20} />}
                  title="Custom Development"
                  desc="Tailored software solutions for your business."
                  link="/services/custom-development"
                />
                <ServiceItem
                  icon={<FaCode size={20} />}
                  title="Technical Support"
                  desc="Ongoing maintenance and technical assistance."
                  link="/services/technical-support"
                />
              </div>
            )}
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-black hover:text-gray-600 transition-colors"
              itemProp="url"
            >
              <span itemProp="name">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black hover:text-gray-600 transition-colors"
              itemProp="url"
            >
              <span itemProp="name">Contact</span>
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link to="/contact" className="hidden md:block">
          <button
            className="text-black hover:opacity-80 px-5 py-2 rounded-full text-sm font-medium transition"
            style={{ backgroundColor: "#9CFF28" }}
          >
            Get Quote
          </button>
        </Link>
      </div>

      {/* Menu - Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-md px-4 py-6 space-y-4 text-sm font-medium border border-gray-200">
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="block text-black hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="block text-black hover:text-gray-600"
          >
            About
          </Link>

          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none block text-black hover:text-gray-600">
              <span>Services</span>
              <FaChevronDown
                size={12}
                className="group-open:rotate-180 transition"
              />
            </summary>
            <div className="mt-3 ml-2 space-y-1">
              <Link
                to="/services/mobile-apps"
                onClick={toggleMobileMenu}
                className="block py-2 px-3 text-black hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Mobile App Development
              </Link>
              <Link
                to="/services/web-development"
                onClick={toggleMobileMenu}
                className="block py-2 px-3 text-black hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Web Development
              </Link>
              <Link
                to="/services/custom-development"
                onClick={toggleMobileMenu}
                className="block py-2 px-3 text-black hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Custom Development
              </Link>
              <Link
                to="/services/technical-support"
                onClick={toggleMobileMenu}
                className="block py-2 px-3 text-black hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Technical Support
              </Link>
            </div>
          </details>

          <Link
            to="/portfolio"
            onClick={toggleMobileMenu}
            className="block text-black hover:text-gray-600"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="block text-black hover:text-gray-600"
          >
            Contact
          </Link>
          <Link to="/contact" onClick={toggleMobileMenu} className="block">
            <button
              className="w-full text-black hover:opacity-80 px-4 py-2 rounded-full font-medium transition"
              style={{ backgroundColor: "#9CFF28" }}
            >
              Get Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

// Service Card Component
function ServiceItem({ icon, title, desc, link }) {
  return (
    <Link
      to={link}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
    >
      <div className="mt-1" style={{ color: "#9CFF28" }}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-1 text-black">{title}</h4>
        <p className="text-xs text-black">{desc}</p>
      </div>
    </Link>
  );
}
