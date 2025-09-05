import React from "react";
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
      <title>SEO Hizmetleri & Arama Motoru Optimizasyonu | Türkiye'nin En İyi SEO Ajansı | Varonsoft</title>
      <meta name="description" content="Varonsoft ile SEO hizmetleri ve arama motoru optimizasyonu. Google sıralama, anahtar kelime optimizasyonu, içerik pazarlaması ve organik trafik artırma. Web sitenizi arama motorlarında üst sıralara taşıyın. Türkiye'nin lider SEO ajansı." />
      <meta name="keywords" content="SEO hizmetleri, arama motoru optimizasyonu, google sıralama, anahtar kelime optimizasyonu, organik trafik, varonsoft, türkiye seo, istanbul seo, google seo" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="tr" />
      <meta name="geo.region" content="TR" />
      <meta name="geo.country" content="Turkey" />
      <link rel="canonical" href="https://www.varonsoft.com/hizmetler/seo" />
      <meta property="og:title" content="SEO Hizmetleri & Arama Motoru Optimizasyonu | Varonsoft" />
      <meta property="og:description" content="Varonsoft ile SEO hizmetleri ve arama motoru optimizasyonu. Google sıralama ve organik trafik artırma." />
      <meta property="og:url" content="https://www.varonsoft.com/hizmetler/seo" />
      <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SEO Hizmetleri & Arama Motoru Optimizasyonu | Varonsoft" />
      <meta name="twitter:description" content="Varonsoft ile SEO hizmetleri ve arama motoru optimizasyonu. Google sıralama ve organik trafik artırma." />
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
                "name": "SEO Hizmetleri",
                "item": "https://www.varonsoft.com/hizmetler/seo"
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
            "name": "SEO Hizmetleri ve Arama Motoru Optimizasyonu",
            "description": "Profesyonel SEO hizmetleri ile Google sıralama, anahtar kelime optimizasyonu, içerik pazarlaması ve organik trafik artırma.",
            "provider": {
              "@type": "Organization",
              "name": "Varonsoft",
              "url": "https://www.varonsoft.com"
            },
            "serviceType": "SEO ve Dijital Pazarlama",
            "areaServed": {
              "@type": "Country",
              "name": "Türkiye"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SEO Hizmetleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Sıralama",
                    "description": "Google arama sonuçlarında üst sıralara çıkma"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Anahtar Kelime Optimizasyonu",
                    "description": "Hedef anahtar kelimeler için içerik optimizasyonu"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Teknik SEO",
                    "description": "Site hızı, yapısal veri ve teknik SEO optimizasyonu"
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
