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
        <title>Varonsoft - Türkiye'nin En İyi Web Tasarım & Yazılım Ajansı | Kurumsal Site & E-Ticaret</title>
        <meta name="description" content="Türkiye'nin lider web tasarım ve yazılım ajansı Varonsoft. Modern web siteleri, e-ticaret, SEO, mobil uygulamalar için uzman ekibimizle işletmenizi dijitalleştirin. 7/24 destek, hızlı teslimat garantisi." />
        <meta name="keywords" content="türkiye web tasarım, istanbul web tasarım, web sitesi yapımı, e-ticaret sitesi, kurumsal web tasarım, yazılım şirketi, dijital ajans, seo hizmetleri, mobil uygulama, varonsoft" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="tr" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.country" content="Turkey" />
        <meta name="geo.placename" content="Türkiye" />
        <meta name="author" content="Varonsoft Yazılım ve Teknoloji" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="subject" content="Web Tasarım, Yazılım Geliştirme, E-Ticaret, SEO Hizmetleri" />
        <meta name="classification" content="Business, Technology, Web Development" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="worldwide" />
        <meta name="identifier-URL" content="https://www.varonsoft.com" />
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
              "alternateName": "Varonsoft Yazılım ve Teknoloji",
              "description": "Türkiye'nin lider web tasarım ve yazılım ajansı. Modern web siteleri, e-ticaret, SEO, mobil uygulamalar için uzman ekibimizle işletmenizi dijitalleştirin.",
              "url": "https://www.varonsoft.com",
              "logo": "https://www.varonsoft.com/veron-tiny.svg",
              "foundingDate": "2020",
              "foundingLocation": {
                "@type": "Place",
                "name": "Türkiye"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Türkiye"
              },
              "knowsAbout": [
                "Web Tasarım",
                "Yazılım Geliştirme",
                "E-ticaret",
                "SEO",
                "Mobil Uygulama",
                "Dijital Pazarlama",
                "Kurumsal Web Sitesi",
                "React",
                "Node.js",
                "JavaScript"
              ],
              "slogan": "Dijital Dönüşümde Güvenilir Ortağınız",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Turkish"
              },
              "serviceArea": {
                "@type": "Country",
                "name": "Turkey"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Varonsoft Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Tasarım",
                      "description": "Modern, responsive ve SEO uyumlu web sitesi tasarımı"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-ticaret",
                      "description": "Profesyonel e-ticaret sitesi ve online mağaza çözümleri"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO",
                      "description": "Arama motoru optimizasyonu ve Google sıralama hizmetleri"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Yazılım Geliştirme",
                      "description": "Özel yazılım ve mobil uygulama geliştirme"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5"
              },
              "sameAs": [
                "https://www.instagram.com/varonsoft/",
                "https://www.linkedin.com/company/varonsoft/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Türkiye'de web sitesi nasıl yaptırırım?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Varonsoft ile web sitesi yaptırmak için iletişime geçin. Uzman ekibimiz modern, SEO uyumlu ve mobil responsive web siteleri tasarlar. Kurumsal siteler, e-ticaret ve özel yazılım çözümleri sunuyoruz."
                  }
                },
                {
                  "@type": "Question",
                  "name": "En iyi web tasarım ajansı hangisi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Varonsoft, Türkiye'nin lider web tasarım ajansıdır. Modern teknolojiler kullanarak, SEO uyumlu ve kullanıcı dostu web siteleri tasarlıyoruz. 7/24 destek ve hızlı teslimat garantisi sunuyoruz."
                  }
                },
                {
                  "@type": "Question",
                  "name": "E-ticaret sitesi nasıl açılır?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Varonsoft ile e-ticaret sitenizi profesyonel şekilde açabilirsiniz. Ödeme sistemi entegrasyonu, ürün yönetimi, sipariş takibi ve mobil uyumlu tasarım ile satışlarınızı artırın."
                  }
                },
                {
                  "@type": "Question",
                  "name": "SEO hizmetleri nedir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Varonsoft SEO hizmetleri ile web sitenizi Google'da üst sıralara taşıyın. Anahtar kelime optimizasyonu, içerik pazarlaması ve teknik SEO ile organik trafiğinizi artırıyoruz."
                  }
                }
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Varonsoft",
              "alternateName": "Varonsoft Web Tasarım",
              "url": "https://www.varonsoft.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.varonsoft.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "about": {
                "@type": "Thing",
                "name": "Web Tasarım ve Yazılım Hizmetleri"
              },
              "keywords": "web tasarım, yazılım geliştirme, e-ticaret, SEO, mobil uygulama, dijital ajans, kurumsal site"
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Varonsoft Ana Navigasyon",
              "url": "https://www.varonsoft.com",
              "hasPart": [
                {
                  "@type": "SiteNavigationElement",
                  "name": "Hakkımızda",
                  "description": "Varonsoft hakkında bilgi ve ekibimiz",
                  "url": "https://www.varonsoft.com/hakkimizda"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Hizmetler",
                  "description": "Web tasarım, e-ticaret, SEO ve yazılım hizmetleri",
                  "url": "https://www.varonsoft.com/hizmetler",
                  "hasPart": [
                    {
                      "@type": "SiteNavigationElement",
                      "name": "Özel Web Sitesi",
                      "description": "Kurumsal ve özel web sitesi tasarımı",
                      "url": "https://www.varonsoft.com/hizmetler/ozel-site"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "name": "E-Ticaret",
                      "description": "Online mağaza ve e-ticaret çözümleri",
                      "url": "https://www.varonsoft.com/hizmetler/e-ticaret"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "name": "SEO",
                      "description": "Arama motoru optimizasyonu hizmetleri",
                      "url": "https://www.varonsoft.com/hizmetler/seo"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "name": "Kod Desteği",
                      "description": "Özel yazılım ve kod desteği",
                      "url": "https://www.varonsoft.com/hizmetler/kod-destegi"
                    }
                  ]
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Portfolyo",
                  "description": "Gerçekleştirdiğimiz projeler ve referanslar",
                  "url": "https://www.varonsoft.com/portfolyo"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "İletişim",
                  "description": "Bizimle iletişime geçin",
                  "url": "https://www.varonsoft.com/iletisim"
                }
              ]
            }
          `}
        </script>
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
                }
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Varonsoft Hizmetleri",
              "description": "Varonsoft'un sunduğu tüm dijital hizmetler",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Özel Web Sitesi Tasarımı",
                  "description": "Kurumsal ve özel web sitesi tasarımı hizmetleri",
                  "url": "https://www.varonsoft.com/hizmetler/ozel-site",
                  "image": "https://www.varonsoft.com/veron-tiny.svg"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "E-Ticaret Web Sitesi",
                  "description": "Online mağaza ve e-ticaret platformu geliştirme",
                  "url": "https://www.varonsoft.com/hizmetler/e-ticaret",
                  "image": "https://www.varonsoft.com/veron-tiny.svg"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "SEO Hizmetleri",
                  "description": "Arama motoru optimizasyonu ve Google sıralama",
                  "url": "https://www.varonsoft.com/hizmetler/seo",
                  "image": "https://www.varonsoft.com/veron-tiny.svg"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Yazılım Geliştirme",
                  "description": "Özel yazılım ve kod desteği hizmetleri",
                  "url": "https://www.varonsoft.com/hizmetler/kod-destegi",
                  "image": "https://www.varonsoft.com/veron-tiny.svg"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Portfolyo",
                  "description": "Gerçekleştirdiğimiz projeler ve başarı hikayeleri",
                  "url": "https://www.varonsoft.com/portfolyo",
                  "image": "https://www.varonsoft.com/veron-tiny.svg"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Hakkımızda",
                  "description": "Varonsoft ekibi ve şirket bilgileri",
                  "url": "https://www.varonsoft.com/hakkimizda",
                  "image": "https://www.varonsoft.com/veron-tiny.svg"
                }
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
