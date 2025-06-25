import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const MobileCTA = () => {
  const phoneNumber = "905305629126"; // 90 ile başlat, boşluksuz
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 max-md:flex hidden items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={20} />
      <span className="text-sm font-medium">Bize Ulaşın</span>
    </a>
  );
};

export default MobileCTA;
