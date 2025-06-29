import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Custom from "../components/Custom";
import Plan from "../components/Plan";
import Offer from "../components/Offer";
import Code from "../components/CustomCodeSupport";
import CodeService from "../components/CodeServiceCards";
const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Helmet>
        <title>Özel Kod Desteği & Yazılım Geliştirme | Varonsoft - Web & Mobil Uygulama</title>
        <meta name="description" content="Varonsoft ile özel kod desteği ve yazılım geliştirme hizmetleri. Web uygulamaları, mobil uygulamalar, API geliştirme ve özel yazılım çözümleri. Mevcut projelerinize kod desteği ve yeni yazılım geliştirme." />
        <meta name="keywords" content="özel kod desteği, yazılım geliştirme, web uygulaması, mobil uygulama, API geliştirme, varonsoft" />
        <link rel="canonical" href="https://www.varonsoft.com/kod-destegi" />
        <meta property="og:title" content="Özel Kod Desteği & Yazılım Geliştirme | Varonsoft" />
        <meta property="og:description" content="Varonsoft ile özel kod desteği ve yazılım geliştirme hizmetleri. Web uygulamaları, mobil uygulamalar ve API geliştirme." />
        <meta property="og:url" content="https://www.varonsoft.com/kod-destegi" />
        <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Özel Kod Desteği & Yazılım Geliştirme | Varonsoft" />
        <meta name="twitter:description" content="Varonsoft ile özel kod desteği ve yazılım geliştirme hizmetleri. Web uygulamaları, mobil uygulamalar ve API geliştirme." />
        <meta name="twitter:image" content="https://www.varonsoft.com/veron-tiny.svg" />
      </Helmet>

      {/* Arka plan efektleri */}
      <div className="absolute w-[600px] h-[600px] bg-[#4c5faf] opacity-30 rounded-full blur-[120px] top-[-150px] left-[50px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#324b6e] opacity-20 rounded-full blur-[100px] bottom-[-100px] right-[0px]"></div>

      {/* İçerik */}
      <div className="relative z-10">
        <Navbar />
        <Code />
        <Plan />
        <CodeService />
        <Work />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
