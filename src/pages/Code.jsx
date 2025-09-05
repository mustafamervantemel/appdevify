import React from "react";
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
      <title>Özel Kod Desteği & Yazılım Geliştirme | Türkiye'nin En İyi Yazılım Ajansı | Varonsoft</title>
      <meta name="description" content="Varonsoft ile özel kod desteği ve yazılım geliştirme hizmetleri. Web uygulamaları, mobil uygulamalar, API geliştirme ve özel yazılım çözümleri. Mevcut projelerinize kod desteği ve yeni yazılım geliştirme. Türkiye'nin lider yazılım ajansı." />
      <meta name="keywords" content="özel kod desteği, yazılım geliştirme, web uygulaması, mobil uygulama, API geliştirme, varonsoft, türkiye yazılım, istanbul yazılım, özel yazılım" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="tr" />
      <meta name="geo.region" content="TR" />
      <meta name="geo.country" content="Turkey" />
      <link rel="canonical" href="https://www.varonsoft.com/hizmetler/kod-destegi" />
      <meta property="og:title" content="Özel Kod Desteği & Yazılım Geliştirme | Varonsoft" />
      <meta property="og:description" content="Varonsoft ile özel kod desteği ve yazılım geliştirme hizmetleri. Web uygulamaları, mobil uygulamalar ve API geliştirme." />
      <meta property="og:url" content="https://www.varonsoft.com/hizmetler/kod-destegi" />
      <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Özel Kod Desteği & Yazılım Geliştirme | Varonsoft" />
      <meta name="twitter:description" content="Varonsoft ile özel kod desteği ve yazılım geliştirme hizmetleri. Web uygulamaları, mobil uygulamalar ve API geliştirme." />
      <meta name="twitter:image" content="https://www.varonsoft.com/veron-tiny.svg" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://www.varonsoft.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Hizmetler",
                "item": "https://www.varonsoft.com/hizmetler"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Yazılım Geliştirme",
                "item": "https://www.varonsoft.com/hizmetler/kod-destegi"
              }
            ]
          }
        `}
      </script>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Özel Kod Desteği ve Yazılım Geliştirme",
            "description": "Özel yazılım geliştirme, web uygulamaları, mobil uygulamalar, API geliştirme ve kod desteği hizmetleri.",
            "provider": {
              "@type": "Organization",
              "name": "Varonsoft",
              "url": "https://www.varonsoft.com"
            },
            "serviceType": "Yazılım Geliştirme",
            "areaServed": {
              "@type": "Country",
              "name": "Türkiye"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Yazılım Geliştirme Hizmetleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Uygulaması",
                    "description": "Özel web uygulamaları ve sistem geliştirme"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobil Uygulama",
                    "description": "iOS ve Android mobil uygulama geliştirme"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "API Geliştirme",
                    "description": "REST API ve entegrasyon çözümleri"
                  }
                }
              ]
            }
          }
        `}
      </script>

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
