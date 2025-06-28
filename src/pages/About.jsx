import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Talk from "../components/Talk";
import WhyUs from "../components/WhyUs";
import Work from "../components/Work";
import AboutUs from "../components/AboutUs";
import CoreValues from "../components/CoreValues";
import Customer from "../components/Customer";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Helmet>
        <title>Hakkımızda | Varonsoft Web & Mobil Ajansı</title>
        <meta
          name="description"
          content="Varonsoft ekibi olarak, yenilikçi web ve mobil uygulama çözümleriyle markanızı dijitalde büyütüyoruz. Ekibimizi ve vizyonumuzu tanıyın."
        />
        <meta name="keywords" content="varonsoft, hakkımızda, ekip, ajans, yazılım, web geliştirme, mobil uygulama" />
        <meta property="og:title" content="Hakkımızda | Varonsoft Web & Mobil Ajansı" />
        <meta property="og:description" content="Yenilikçi web ve mobil uygulama çözümleriyle markanızı dijitalde büyütüyoruz." />
        <meta property="og:url" content="https://www.varonsoft.com/hakkimizda" />
        <meta property="og:image" content="/media/veronlogo12.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Varonsoft | Web & Mobil Uygulama Geliştirme Ajansı" />
        <meta name="twitter:description" content="Web ve mobil projeleriniz için profesyonel çözümler. Varonsoft ile dijitalde fark yaratın." />
        <meta name="twitter:image" content="/media/veronlogo12.png" />
      </Helmet>

      {/* Arka plan efektleri */}
      <div className="absolute w-[600px] h-[600px] bg-[#4c5faf] opacity-30 rounded-full blur-[120px] top-[-150px] left-[50px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#324b6e] opacity-20 rounded-full blur-[100px] bottom-[-100px] right-[0px]"></div>

      {/* İçerik */}
      <div className="relative z-10">
        <Navbar />
        <AboutUs />
        <Customer />
        <CoreValues />
        <WhyUs />
        <Work />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
