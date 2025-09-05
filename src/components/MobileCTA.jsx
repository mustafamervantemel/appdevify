import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const MobileCTA = () => {
  const phoneNumber = "905305629126"; // Turkish format, no spaces
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 max-md:flex hidden items-center gap-3 text-black px-5 py-3 rounded-full shadow-lg hover:opacity-80 transition"
      style={{ backgroundColor: "#9CFF28" }}
    >
      <FaWhatsapp size={20} />
      <span className="text-sm font-medium">Contact Us</span>
    </a>
  );
};

export default MobileCTA;
