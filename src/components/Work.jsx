import { MdDesignServices, MdSupportAgent } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import Panel1 from "../media/pnl1.png";
import Panel2 from "../media/pnl2.png";
import Panel3 from "../media/pnl3.png";

export default function Asamalar() {
  const asamalar = [
    {
      id: "01",
      baslik: "Müşteri Tanıma ve Tasarım",
      aciklama:
        "İlk görüşmemizde vizyonunu ve ihtiyaçlarını dinliyoruz. Beklentileri netleştirdikten sonra teklif ve zaman planı ile projeye başlıyoruz.",
      gorsel: Panel1,
      ikon: <MdDesignServices className="text-[#506C83]" size={24} />,
    },
    {
      id: "02",
      baslik: "Geliştirme ve Geri Bildirim",
      aciklama:
        "Tasarım onaylandıktan sonra kodlama aşamasına geçiyoruz. Süreç boyunca düzenli geri bildirimlerle birlikte ilerliyoruz.",
      gorsel: Panel2,
      ikon: <FaCode className="text-[#506C83]" size={22} />,
    },
    {
      id: "03",
      baslik: "Teslimat ve Eğitim",
      aciklama:
        "Web siten yayına alındıktan sonra nasıl kullanacağını adım adım anlatıyoruz. Ayrıca 30 gün boyunca e-posta desteği sunuyoruz.",
      gorsel: Panel3,
      ikon: <MdSupportAgent className="text-[#506C83]" size={24} />,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Başlık alanı */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-[#e3e9f3] text-sm text-gray-600 rounded-full mb-3">
            • Süreç Nasıl İlerliyor?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Web Tasarım Süreci Nasıl İlerliyor?
          </h2>
        </div>

        {/* Aşamalar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {asamalar.map((asama) => (
            <div
              key={asama.id}
              className="group border rounded-xl p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 bg-white relative hover:bg-[#506C83] hover:shadow-2xl"
            >
              {/* Arka plan numarası */}
              <span className="absolute top-4 left-4 md:top-6 md:left-6 text-5xl md:text-6xl font-bold opacity-10 text-gray-200 group-hover:text-white transition-all duration-300">
                {asama.id}
              </span>

              {/* Başlık */}
              <div className="text-xl md:text-2xl mb-2 md:mb-3 font-semibold flex items-center gap-2 z-10 relative text-gray-800 group-hover:text-white transition-all duration-300">
                <span className="text-lg">{asama.ikon}</span>
                {asama.baslik}
              </div>

              {/* Açıklama */}
              <p className="text-gray-600 mb-3 md:mb-4 text-sm z-10 relative group-hover:text-white transition-all duration-300">
                {asama.aciklama}
              </p>

              {/* Görsel */}
              <img
                src={asama.gorsel}
                alt={asama.baslik}
                className="w-full rounded-lg border z-10 relative transform transition-transform duration-300 group-hover:scale-105 max-h-40 sm:max-h-48 md:max-h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
