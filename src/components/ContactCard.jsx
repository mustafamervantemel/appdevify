import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const phone = "05305629126";
  const formattedPhone = phone.replace(/\s+/g, "");

  return (
    <section className="bg-[#0B0E15] text-white py-14 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">İletişim Bilgilerimiz</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Telefon */}
        <a
          href={`https://wa.me/90${formattedPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1C2532] rounded-xl p-8 flex flex-col items-center hover:bg-[#253041] transition"
        >
          <img src={male1} alt="Erkek profil" className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-[#324b6e]" />
          <FaPhoneAlt size={30} className="mb-4 text-white/80" />
          <h3 className="text-lg font-semibold mb-1">Telefon</h3>
          <p className="text-white/70">0 530 562 91 26</p>
        </a>

        {/* E-posta */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@varonsoft.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1C2532] rounded-xl p-8 flex flex-col items-center hover:bg-[#253041] transition"
        >
        
          <FaEnvelope size={30} className="mb-4 text-white/80" />
          <h3 className="text-lg font-semibold mb-1">E-posta</h3>
          <p className="text-white/70">info@varonsoft.com</p>
        </a>

        {/* Adres */}
        <div className="bg-[#1C2532] rounded-xl p-8 flex flex-col items-center">
          
          <FaMapMarkerAlt size={30} className="mb-4 text-white/80" />
          <h3 className="text-lg font-semibold mb-1">Adres</h3>
          <p className="text-white/70 text-center">
            İstanbul / Pendik / Kurtköy
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
