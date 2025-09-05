import React from "react";
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
import Call from "../components/MobileCTA";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <title>Appdevify - Premier Mobile App & Web Development Company | UK & US</title>
      <meta name="description" content="Leading mobile app and web development company serving UK & US clients. Custom software solutions, modern web applications, e-commerce platforms, and digital transformation services. Expert developers, fast delivery, 24/7 support." />
      <meta name="keywords" content="mobile app development, web development company, custom software development, react native apps, iOS development, android development, web applications, e-commerce development, UK app developers, US web development" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="GB, US" />
      <meta name="geo.country" content="United Kingdom, United States" />
      <meta name="geo.placename" content="UK, US" />
      <meta name="author" content="Appdevify Development Team" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="subject" content="Mobile App Development, Web Development, Software Engineering, Digital Solutions" />
      <meta name="classification" content="Business, Technology, Web Development" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="worldwide" />
      <meta name="identifier-URL" content="https://www.appdevify.com" />
      <link rel="canonical" href="https://www.appdevify.com/" />
      <meta property="og:title" content="Appdevify - Premier Mobile App & Web Development Company" />
      <meta property="og:description" content="Leading mobile app and web development company serving UK & US clients. Custom software solutions, modern web applications, and digital transformation services." />
      <meta property="og:image" content="https://www.appdevify.com/appdevify-logo.png" />
      <meta property="og:url" content="https://www.appdevify.com/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Appdevify - Premier Mobile App & Web Development Company" />
      <meta name="twitter:description" content="Leading mobile app and web development company serving UK & US clients. Custom software solutions and digital transformation services." />
      <meta name="twitter:image" content="https://www.appdevify.com/appdevify-logo.png" />
      <script type="application/ld+json">
        {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Appdevify",
              "alternateName": "Appdevify Development Team",
              "description": "Leading mobile app and web development company serving UK & US clients. Custom software solutions, modern web applications, e-commerce platforms, and digital transformation services.",
              "url": "https://www.appdevify.com",
              "logo": "https://www.appdevify.com/appdevify-logo.png",
              "foundingDate": "2019",
              "foundingLocation": {
                "@type": "Place",
                "name": "United Kingdom"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Country",
                  "name": "United States"
                }
              ],
              "knowsAbout": [
                "Mobile App Development",
                "Web Development",
                "React Native",
                "iOS Development",
                "Android Development",
                "Custom Software Development",
                "E-commerce Development",
                "React",
                "Node.js",
                "JavaScript",
                "Python",
                "Flutter",
                "Swift",
                "Kotlin"
              ],
              "slogan": "Your Trusted Partner in Digital Innovation",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English"]
              },
              "serviceArea": [
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Country",
                  "name": "United States"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Appdevify Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile App Development",
                      "description": "Custom iOS and Android applications with React Native, Flutter, and native technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Modern, responsive websites and web applications using React, Node.js, and latest technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Development",
                      "description": "Professional online stores and e-commerce platforms with payment integration and inventory management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Software Development",
                      "description": "Tailored software solutions, APIs, and enterprise applications for business automation"
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
                "https://www.instagram.com/appdevify/",
                "https://www.linkedin.com/company/appdevify/",
                "https://twitter.com/appdevify"
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
      
      <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
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
    </>
  );
};

export default Home;
