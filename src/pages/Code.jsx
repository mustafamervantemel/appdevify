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
        <title>Veronsoft - Web Tasarım Hizmetleri</title>
        <meta
          name="description"
          content="Veronsoft, modern, hızlı ve mobil uyumlu web tasarım hizmetleri sunar."
        />
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
