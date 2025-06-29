import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewContact from "../components/NewContact";
import ContactCard from "../components/ContactCard";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Helmet>
        <title>İletişim | Varonsoft - Telefon, E-posta & Adres | Web Tasarım Ajansı</title>
        <meta name="description" content="Varonsoft ile iletişime geçin. Telefon: 0530 562 91 26, E-posta: info@varonsoft.com. İstanbul/Pendik'te web tasarım, yazılım ve dijital çözümler için bize ulaşın." />
        <meta name="keywords" content="varonsoft iletişim, telefon, e-posta, adres, web tasarım ajansı, istanbul" />
        <link rel="canonical" href="https://www.varonsoft.com/iletisim" />
        <meta property="og:title" content="İletişim | Varonsoft - Telefon, E-posta & Adres" />
        <meta property="og:description" content="Varonsoft ile iletişime geçin. Telefon: 0530 562 91 26, E-posta: info@varonsoft.com." />
        <meta property="og:url" content="https://www.varonsoft.com/iletisim" />
        <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İletişim | Varonsoft - Telefon, E-posta & Adres" />
        <meta name="twitter:description" content="Varonsoft ile iletişime geçin. Telefon: 0530 562 91 26, E-posta: info@varonsoft.com." />
        <meta name="twitter:image" content="https://www.varonsoft.com/veron-tiny.svg" />
      </Helmet>

      {/* Arka plan efektleri */}
      <div className="absolute w-[600px] h-[600px] bg-[#4c5faf] opacity-30 rounded-full blur-[120px] top-[-150px] left-[50px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#324b6e] opacity-20 rounded-full blur-[100px] bottom-[-100px] right-[0px]"></div>

      {/* İçerik */}
      <div className="relative z-10">
        <Navbar />
        <NewContact />
        <ContactCard />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
