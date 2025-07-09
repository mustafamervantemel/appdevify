import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Custom from "../components/Custom";
import Plan from "../components/Plan";
import Offer from "../components/Offer";
import Ecommerce from "../components/Ecommerce";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Helmet>
        <title>E-Ticaret Web Sitesi Tasarımı | Türkiye'nin En İyi Online Mağaza Tasarımı | Varonsoft</title>
        <meta name="description" content="Varonsoft ile e-ticaret web sitesi tasarımı. Online mağaza, satış sitesi, ödeme sistemi entegrasyonu ve mobil uyumlu e-ticaret platformları. Satışlarınızı artıracak profesyonel e-ticaret çözümleri. Türkiye'nin lider e-ticaret ajansı." />
        <meta name="keywords" content="e-ticaret web sitesi, online mağaza, satış sitesi, ödeme sistemi, e-ticaret tasarımı, varonsoft, türkiye e-ticaret, istanbul e-ticaret, online mağaza açma" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="tr" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.country" content="Turkey" />
        <link rel="canonical" href="https://www.varonsoft.com/hizmetler/e-ticaret" />
        <meta property="og:title" content="E-Ticaret Web Sitesi Tasarımı | Varonsoft - Online Mağaza & Satış Sitesi" />
        <meta property="og:description" content="Varonsoft ile e-ticaret web sitesi tasarımı. Online mağaza, satış sitesi ve ödeme sistemi entegrasyonu." />
        <meta property="og:url" content="https://www.varonsoft.com/hizmetler/e-ticaret" />
        <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-Ticaret Web Sitesi Tasarımı | Varonsoft - Online Mağaza & Satış Sitesi" />
        <meta name="twitter:description" content="Varonsoft ile e-ticaret web sitesi tasarımı. Online mağaza, satış sitesi ve ödeme sistemi entegrasyonu." />
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
                  "name": "E-Ticaret Web Sitesi",
                  "item": "https://www.varonsoft.com/hizmetler/e-ticaret"
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
              "name": "E-Ticaret Web Sitesi Tasarımı",
              "description": "Profesyonel e-ticaret web sitesi ve online mağaza çözümleri. Ödeme sistemi entegrasyonu, ürün yönetimi ve mobil uyumlu tasarım.",
              "provider": {
                "@type": "Organization",
                "name": "Varonsoft",
                "url": "https://www.varonsoft.com"
              },
              "serviceType": "E-Ticaret Geliştirme",
              "areaServed": {
                "@type": "Country",
                "name": "Türkiye"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "E-Ticaret Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Online Mağaza",
                      "description": "Profesyonel online mağaza tasarımı ve kurulumu"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ödeme Sistemi Entegrasyonu",
                      "description": "Güvenli ödeme sistemleri ve finansal entegrasyonlar"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ürün Yönetimi",
                      "description": "Kolay ürün yönetimi ve stok takip sistemi"
                    }
                  }
                ]
              }
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
        <Ecommerce />
        <Plan />
        <Offer />
        <Work />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
