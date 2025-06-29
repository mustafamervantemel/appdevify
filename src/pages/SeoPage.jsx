import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Custom from "../components/Custom";
import Plan from "../components/Plan";
import Offer from "../components/Offer";
import Ecommerce from "../components/Ecommerce";
import Seo from "../components/Seo";
import SeoGrid from "../components/SeoGrid";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Helmet>
        <title>SEO Hizmetleri & Arama Motoru Optimizasyonu | Varonsoft - Google Sıralama</title>
        <meta name="description" content="Varonsoft ile SEO hizmetleri ve arama motoru optimizasyonu. Google sıralama, anahtar kelime optimizasyonu, içerik pazarlaması ve organik trafik artırma. Web sitenizi arama motorlarında üst sıralara taşıyın." />
        <meta name="keywords" content="SEO hizmetleri, arama motoru optimizasyonu, google sıralama, anahtar kelime optimizasyonu, organik trafik, varonsoft" />
        <link rel="canonical" href="https://www.varonsoft.com/seo" />
        <meta property="og:title" content="SEO Hizmetleri & Arama Motoru Optimizasyonu | Varonsoft" />
        <meta property="og:description" content="Varonsoft ile SEO hizmetleri ve arama motoru optimizasyonu. Google sıralama ve organik trafik artırma." />
        <meta property="og:url" content="https://www.varonsoft.com/seo" />
        <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Hizmetleri & Arama Motoru Optimizasyonu | Varonsoft" />
        <meta name="twitter:description" content="Varonsoft ile SEO hizmetleri ve arama motoru optimizasyonu. Google sıralama ve organik trafik artırma." />
        <meta name="twitter:image" content="https://www.varonsoft.com/veron-tiny.svg" />
      </Helmet>

      {/* Arka plan efektleri */}
      <div className="absolute w-[600px] h-[600px] bg-[#4c5faf] opacity-30 rounded-full blur-[120px] top-[-150px] left-[50px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#324b6e] opacity-20 rounded-full blur-[100px] bottom-[-100px] right-[0px]"></div>

      {/* İçerik */}
      <div className="relative z-10">
        <Navbar />
        <Seo />
        <Plan />
        <SeoGrid />
        <Work />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
