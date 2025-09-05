import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewContact from "../components/NewContact";
import Project from "../components/Project";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <title>Portfolyo | Varonsoft - Projeler & Çalışmalar | Web Tasarım Örnekleri</title>
      <meta name="description" content="Varonsoft portfolyosu: Ubuntu Yatırım, Ada Smile Studio, İrfan Özdamar, MR Hukuk Bürosu gibi başarılı projelerimizi inceleyin. Finans, sağlık, hukuk ve e-ticaret alanlarında web tasarım örnekleri." />
      <meta name="keywords" content="varonsoft portfolyo, projeler, çalışmalar, web tasarım örnekleri, ubuntu yatırım, ada smile studio" />
      <link rel="canonical" href="https://www.varonsoft.com/portfolyo" />
      <meta property="og:title" content="Portfolyo | Varonsoft - Projeler & Çalışmalar" />
      <meta property="og:description" content="Varonsoft portfolyosu: Ubuntu Yatırım, Ada Smile Studio, İrfan Özdamar, MR Hukuk Bürosu gibi başarılı projelerimizi inceleyin." />
      <meta property="og:url" content="https://www.varonsoft.com/portfolyo" />
      <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Portfolyo | Varonsoft - Projeler & Çalışmalar" />
      <meta name="twitter:description" content="Varonsoft portfolyosu: Ubuntu Yatırım, Ada Smile Studio, İrfan Özdamar, MR Hukuk Bürosu gibi başarılı projelerimizi inceleyin." />
      <meta name="twitter:image" content="https://www.varonsoft.com/veron-tiny.svg" />

      {/* Arka plan efektleri */}
      <div className="absolute w-[600px] h-[600px] bg-[#4c5faf] opacity-30 rounded-full blur-[120px] top-[-150px] left-[50px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#324b6e] opacity-20 rounded-full blur-[100px] bottom-[-100px] right-[0px]"></div>

      {/* İçerik */}
      <div className="relative z-10">
        <Navbar />
        <Project />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
