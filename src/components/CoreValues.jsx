import { useState } from "react";
import { FaPlus, FaHandshake, FaAward, FaRocket } from "react-icons/fa";

export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const values = [
    {
      icon: <FaHandshake className="text-blue-500" size={18} />,
      title: "Yenilik ve Uyarlanabilirlik",
      content:
        "Değişimi benimsiyor ve müşterilerimize yaratıcı ve çevik çözümler sunmanın yollarını sürekli arıyoruz.",
    },
    {
      icon: <FaAward className="text-blue-500" size={18} />,
      title: "Kalite ve Tutarlılık",
      content:
        "Her projede yüksek standartları koruyor, güvenilir ve tutarlı sonuçlar üretiyoruz.",
    },
    {
      icon: <FaRocket className="text-blue-500" size={18} />,
      title: "Samimi Bağlantılar",
      content:
        "Güvene ve şeffaflığa dayalı, uzun vadeli ve gerçek ilişkiler kuruyoruz.",
    },
  ];

  return (
    <section
      className="py-20 px-6 md:px-16 bg-white text-gray-800"
      id="core-values"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Sol başlık */}
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-sm text-blue-700 mb-4">
            ● Değerlerimiz
          </span>
          <h2 className="text-4xl font-bold leading-snug text-[#324b6e]">
            Her Projeye <br />
            ve Ortaklığa <br />
            Yön Veren Değerler
          </h2>
        </div>

        {/* Sağ accordionlar */}
        <div className="space-y-4">
          {values.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <div
                onClick={() => toggle(index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-2 rounded-md">{item.icon}</div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <button className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
                  <FaPlus />
                </button>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-sm text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
