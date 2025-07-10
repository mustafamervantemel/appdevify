import React, { useState } from "react";
import monitor from "../media/monitor.jpg";
import ubuntu1 from "../media/ubuntu-panel.png";
import adasmile1 from "../media/adasmile-panel.png";
import irfan12 from "../media/irfan-panel.png";
import mrhukuk1 from "../media/mrhukuk-panel.png";

const categories = [
  "Hepsi",
  "Ajans",
  "Yapay Zeka",
  "Otomotiv",
  "Danışmanlık",
  "Eğitim",
  "Kurumsal",
  "Etkinlik",
  "Finans",
  "Hukuk",
  "Pazarlama",
  "Sağlık",
  "Emlak",
  "Medical",
  "Teknoloji",
  "Seyahat",
  "Video Prodüksiyon",
];

const projects = [
  {
    category: "Finans",
    title: "Ubuntu Yatırım",
    description:
      "Özellikle bist hakkında temel ve teknik analiz eğitimi almak isteyen kişiler için hem eğitimler hem eğitim sonrası finansal danışmanlık yapan bir finansal kuruluş.",
    goal: "Amacımız özellikle borsa yatırımcıların hisseler hakkında sisteme üye olduktan sonra forum ortamında sorularını sorup tartışması ve kolayca eğitim satın alacak bir arayüz geliştirerek satın alım oranını yükseltmekti.",
    image: ubuntu1,
    domain: "https://www.ubuntuyatirim.com/",
  },
  {
    category: "Diş Polikliniği",
    title: "Ada Smile Studio",
    description:
      "Ada Smile Studio İstanbul/Fatih yerli ve yabancı hastalara dental hizmet sunan bir poliklinik.",
    goal: "Kurduğumuz özel randevu sistemi ile müşteriler direkt internet sitesinde randevu taleplerini polikliniğe iletmesini amaçladık. Ayrıca mobil için özel tasarladığımız hemen ara ve whatsapp ile iletişime geç yoluyla hastaların klinik ile temasını artırdık.",
    image: adasmile1,
    domain: "https://www.adasmilestudio.com/",
  },
  {
    category: "Mali Müşavirlik",
    title: "İrfan Özdamar",
    description:
      "İrfan Özdamar web sitesi İrfan Özdamar Bey'in kendi malimüşavirlik hizmetlerini sunduğu bir platform.",
    goal: "Sayın İrfan Özdamar'ın iş portföyünü ve tecrübesini detaylıca yansıtarak müşterilerin İrfan Bey'i yakından tanımasını amaçladık. Kullandığımız Eylem Butonları sayesinde müşteriler direkt whatsapp ile İrfan Bey'in ofisi ile iletişime geçebiliyor.",
    image: irfan12,
    domain: "https://irfanozdamar-com.vercel.app/",
  },
  {
    category: "Hukuk",
    title: "MR Hukuk Bürosu",
    description:
      "MR Hukuk Bürosu Diyarbakır'da hukuki konularda hizmetler veren bir kurum.",
    goal: "MR Hukuk Bürosunun İş Porföyü ve Hizmetleri detaylıca açıklamak istedik. Ayrıca özellikle Diyarbakır ilindeki müşterilerin ilgisini çekmek için özellikle SEO hizmetlerimizde Diyarbakır ilini hedefledik.",
    image: mrhukuk1,
    domain: "https://mrhukuk.vercel.app/",
  },
];

export default function FullPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");

  const filteredProjects =
    selectedCategory === "Hepsi"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-[#f5f5f5]">
      {/* ÜST BÖLÜM */}
      <div className="py-20 px-6">
        <div className="bg-[#16181a] text-white rounded-2xl p-12 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          {/* Sol taraf */}
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-[#2b2e31] text-sm px-4 py-1 rounded-full">
              • Portfolyo
            </span>
            <h2 className="text-4xl font-bold leading-tight">
               <br /> Web Site Portfolyosu
            </h2>
            <p className="text-gray-300">
              Varonsoft, ödüllü bir web tasarım stüdyosudur. 5+ yıllık
              tecrübemizle 300'den fazla özel web sitesi inşa ettik.
              Aşağıda projelerimize göz atabilirsin.
            </p>
        
          </div>

          {/* Sağ taraf görsel */}
          <div className="flex-1 relative">
            <img
              src={monitor}
              alt="portfolio showcase"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-0 right-0 bg-[#2b2e31] text-white px-4 py-2 text-sm rounded-bl-lg shadow-md">
              300+ web sitesi tasarlandı
            </div>
            <div className="absolute bottom-0 left-0 bg-[#2b2e31] text-white px-4 py-2 text-sm rounded-tr-lg shadow-md">
              5+ Yıllık Tecrübe
            </div>
          </div>
        </div>

        {/* Kategori filtreleri */}
        <div className="max-w-5xl mx-auto mt-12 flex flex-wrap gap-4 justify-center">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border border-gray-300 ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100 text-gray-800"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ALT PROJE LİSTESİ */}
      <div className="bg-[#f9fbfd] py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8 p-6 border-4 border-[#e3e9ef] rounded-3xl bg-white"
              >
                {/* Görsel */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-sm w-full object-cover"
                  />
                </div>

                {/* İçerik */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <span className="inline-block bg-[#e3e9ef] text-[#506C83] text-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                  <p className="text-gray-500 text-sm">{project.goal}</p>
                  <a
                    href={project.domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-[#506C83] hover:bg-[#3e566a] text-white text-sm px-6 py-2 rounded-full flex items-center gap-2 transition w-fit"
                  >
                    Siteyi Ziyaret Et
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              Bu kategoriye ait proje bulunamadı.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
