import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Why from "../components/Why";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Integration from "../components/Integration";
import Type from "../components/Type";
import Library from "../components/Library";
import General from "../components/General";
import Footer from "../components/Footer";
import Talk from "../components/Talk";
import Call from "../components/MobileCTA";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Helmet>
        <title>Varonsoft - Modern Web Tasarım & Yazılım Ajansı | Kurumsal Site & E-Ticaret</title>
        <meta name="description" content="Varonsoft, modern ve yenilikçi web tasarım, yazılım ve dijital dönüşüm çözümleri sunar. Kurumsal web siteleri, e-ticaret, SEO ve özel yazılım projelerinde uzman ekibimizle Türkiye ve globalde işletmelere değer katıyoruz." />
        <meta name="keywords" content="varonsoft, web tasarım, yazılım, e-ticaret, SEO, dijital ajans, kurumsal site, mobil uyumlu" />
        <link rel="canonical" href="https://www.varonsoft.com/" />
        <meta property="og:title" content="Varonsoft - Modern Web Tasarım & Yazılım Ajansı" />
        <meta property="og:description" content="Varonsoft, modern ve yenilikçi web tasarım, yazılım ve dijital dönüşüm çözümleri sunar." />
        <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
        <meta property="og:url" content="https://www.varonsoft.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Varonsoft - Modern Web Tasarım & Yazılım Ajansı" />
        <meta name="twitter:description" content="Varonsoft, modern ve yenilikçi web tasarım, yazılım ve dijital dönüşüm çözümleri sunar." />
        <meta name="twitter:image" content="https://www.varonsoft.com/veron-tiny.svg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Varonsoft",
              "url": "https://www.varonsoft.com",
              "logo": "https://www.varonsoft.com/veron-tiny.svg",
              "sameAs": [
                "https://www.instagram.com/varonsoft/",
                "https://www.linkedin.com/company/varonsoft/"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Arka plan efektleri */}
      <div className="absolute w-[600px] h-[600px] bg-[#4c5faf] opacity-30 rounded-full blur-[120px] top-[-150px] left-[50px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#324b6e] opacity-20 rounded-full blur-[100px] bottom-[-100px] right-[0px]"></div>

      {/* İçerik */}
      <div className="relative z-10">
        <Navbar />
        <Call />
        <Hero />
        <Testimonials />
        <Why />
        <Work />
        <Contact />
        <Integration />
        <Type />
        <Library />
        <General />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
