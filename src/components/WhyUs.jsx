import {
  FaLock,
  FaBolt,
  FaStar,
  FaRocket,
  FaFingerprint,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaLock size={28} />,
    title: "Sabit Fiyat",
    desc: "Sürpriz maliyetler olmadan sınırsız tasarım talebi için sabit aylık ücret.",
    color: "bg-blue-500",
  },
  {
    icon: <FaBolt size={28} />,
    title: "Hızlı Teslimat",
    desc: "Tasarımın 24–48 saat içinde teslim. Revize ister misin? Hemen halledilir.",
    color: "bg-purple-500",
  },
  {
    icon: <FaStar size={28} />,
    title: "Üst Düzey Kalite",
    desc: "Her zaman uzman tasarımcı kalitesi, parmaklarının ucunda.",
    color: "bg-green-500",
  },
  {
    icon: <FaRocket size={28} />,
    title: "İstediğin Zaman Ölçekle",
    desc: "İstediğin zaman artır, azalt veya ara ver. Aboneliği durdurmak kolay.",
    color: "bg-pink-500",
  },
  {
    icon: <FaFingerprint size={28} />,
    title: "Tamamen Sana Özel",
    desc: "Tüm tasarımlar sana özel hazırlanır ve %100 senindir.",
    color: "bg-yellow-500",
  },
];

export default function SubscriptionBenefits() {
  return (
    <section className="bg-[#0a0218] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold uppercase">
          Neden Bizi Seçmelisiniz ?
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Uluslararası alanda kendini kanıtlamış uzmanlardan güvenilir ve yüksek
          kaliteli tasarım hizmeti alın.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {benefits.map((item, i) => (
          <div
            key={i}
            className={`w-[250px] p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:scale-105 hover:rotate-[-1deg] transition transform duration-300`}
            style={{
              transform: `rotate(${(i % 2 === 0 ? -2 : 2) + i}px)`,
            }}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg text-white mb-4 ${item.color}`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
