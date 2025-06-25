import React, { useState } from "react";

const categories = [
  "Hepsi",
  "Ajans",
  "Yapay Zeka",
  "Otomotiv",
  "Kilise",
  "Danışmanlık",
  "Eğitim",
  "Kurumsal",
  "Etkinlik",
  "Finans",
  "Fitness",
  "Hukuk",
  "Pazarlama",
  "Sağlık",
  "Sivil Toplum",
  "Emlak",
  "SaaS",
  "Medical",
  "Teknoloji",
  "Seyahat",
  "Video Prodüksiyon",
  "Web3",
];

const projects = [
  {
    category: "SaaS",
    title: "Cents",
    description:
      "Cents, Amazon satıcılarının teslimat verimliliğini ve müşteri memnuniyetini artırmalarına yardımcı olmak için geliştirilen yapay zeka destekli bir yazılımdır.",
    goal: "Amacımız, yazılımın değerini vurgulayan ve kullanıcıları harekete geçmeye teşvik eden bilgi dolu bir platform oluşturmaktı.",
    image: "/media/project1.png",
  },
  {
    category: "Medical",
    title: "Prova Health",
    description:
      "Prova Health, yenilikçi sağlık çözümleri geliştiren bir sağlık teknolojisi şirketidir.",
    goal: "Hedefimiz, potansiyel müşterilere ve iş ortaklarına ulaşacak güvenilir ve etkileyici bir platform oluşturmaktı.",
    image: "/media/project2.png",
  },
  {
    category: "SaaS",
    title: "ChangeLab",
    description:
      "ChangeLab, siyasi iletişim ve halkla ilişkiler süreçlerini yöneten bir yazılımdır.",
    goal: "Amaç, platformun değerini net şekilde ileten ve kullanıcı deneyimini kolaylaştıran bir site oluşturmaktı.",
    image: "/media/project3.png",
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
              Squarespace <br /> Web Site Portfolyosu
            </h2>
            <p className="text-gray-300">
              Varonsoft, ödüllü bir Squarespace tasarım stüdyosudur. 5+ yıllık
              tecrübemizle 450’den fazla özel Squarespace web sitesi inşa ettik.
              Aşağıda projelerimize göz atabilirsin.
            </p>
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Görüşme Planla
            </button>
          </div>

          {/* Sağ taraf görsel */}
          <div className="flex-1 relative">
            <img
              src="/media/portfolio-main.png"
              alt="portfolio showcase"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-0 right-0 bg-[#2b2e31] text-white px-4 py-2 text-sm rounded-bl-lg shadow-md">
              450+ Squarespace sitesi inşa edildi
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
                  <button className="mt-4 bg-[#506C83] hover:bg-[#3e566a] text-white text-sm px-6 py-2 rounded-full flex items-center gap-2 transition">
                    Daha Fazla Göster
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
                  </button>
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
