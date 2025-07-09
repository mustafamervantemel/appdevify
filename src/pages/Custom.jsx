import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Custom from "../components/Custom";
import Plan from "../components/Plan";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Helmet>
        <title>Özel Web Sitesi Tasarımı | Türkiye'nin En İyi Web Tasarım Ajansı | Varonsoft</title>
        <meta name="description" content="Varonsoft ile özel web sitesi tasarımı. Kurumsal siteler, e-ticaret platformları, portföy siteleri ve özel yazılım çözümleri. Markanıza özel, modern ve kullanıcı dostu web siteleri. Türkiye'nin lider web tasarım ajansı." />
        <meta name="keywords" content="özel web sitesi tasarımı, kurumsal site, e-ticaret sitesi, portföy sitesi, özel yazılım, varonsoft, türkiye web tasarım, istanbul web tasarım, web sitesi yapımı" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="tr" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.country" content="Turkey" />
        <link rel="canonical" href="https://www.varonsoft.com/hizmetler/ozel-site" />
        <meta property="og:title" content="Özel Web Sitesi Tasarımı | Varonsoft - Kurumsal & E-Ticaret" />
        <meta property="og:description" content="Varonsoft ile özel web sitesi tasarımı. Kurumsal siteler, e-ticaret platformları ve özel yazılım çözümleri." />
        <meta property="og:url" content="https://www.varonsoft.com/hizmetler/ozel-site" />
        <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Özel Web Sitesi Tasarımı | Varonsoft - Kurumsal & E-Ticaret" />
        <meta name="twitter:description" content="Varonsoft ile özel web sitesi tasarımı. Kurumsal siteler, e-ticaret platformları ve özel yazılım çözümleri." />
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
                  "name": "Özel Web Sitesi Tasarımı",
                  "item": "https://www.varonsoft.com/hizmetler/ozel-site"
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
              "name": "Özel Web Sitesi Tasarımı",
              "description": "Kurumsal ve özel web sitesi tasarımı hizmetleri. Modern, responsive ve SEO uyumlu web siteleri.",
              "provider": {
                "@type": "Organization",
                "name": "Varonsoft",
                "url": "https://www.varonsoft.com"
              },
              "serviceType": "Web Tasarım",
              "areaServed": {
                "@type": "Country",
                "name": "Türkiye"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Özel Web Sitesi Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kurumsal Web Sitesi",
                      "description": "Kurumsal kimliğe uygun profesyonel web sitesi tasarımı"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Portföy Web Sitesi",
                      "description": "Kişisel ve profesyonel portföy web sitesi tasarımı"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Responsive Tasarım",
                      "description": "Mobil uyumlu, tüm cihazlarda mükemmel görünüm"
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
        <Custom />
        <Plan />
        <Work />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
