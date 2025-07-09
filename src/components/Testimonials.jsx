import React from "react";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    profession: "Avukat",
    text: "Veronsoft ile çalışmak harikaydı, web sitemiz tam istediğimiz gibi oldu!"
  },
  {
    name: "Elif Demir",
    profession: "Mali Müşavir",
    text: "Hızlı ve güvenilir hizmet, kesinlikle tavsiye ederim."
  },
  {
    name: "Mehmet Kaya",
    profession: "E-Ticaret",
    text: "Satışlarımızı artıran modern bir siteye kavuştuk. Teşekkürler!"
  },
  {
    name: "Ayşe Çelik",
    profession: "Güzellik Salonu Sahibi",
    text: "Müşteri randevu sistemimiz artık çok daha kolay."
  },
  {
    name: "Burak Şahin",
    profession: "Doktor",
    text: "Klinik web sitemiz hem şık hem de kullanışlı oldu."
  },
  {
    name: "Zeynep Aksoy",
    profession: "Psikolog",
    text: "Danışanlarım için harika bir online platform sağladılar."
  },
  {
    name: "Emre Güneş",
    profession: "Diş Hekimi",
    text: "Hasta iletişimimiz çok daha profesyonel hale geldi."
  },
  {
    name: "Fatma Yıldız",
    profession: "Restoran Sahibi",
    text: "Online rezervasyon sistemimiz mükemmel çalışıyor."
  },
  {
    name: "Caner Toprak",
    profession: "Fotoğrafçı",
    text: "Portfolyo sitem çok beğenildi, emeğinize sağlık!"
  },
  {
    name: "Selin Kurt",
    profession: "Yoga Eğitmeni",
    text: "Derslerimi kolayca duyurabiliyorum, çok memnunum."
  },
  {
    name: "Mert Aslan",
    profession: "Mimar",
    text: "Projelerimi şık bir şekilde sergileyebiliyorum."
  },
];

const sliderAnimation = {
  animation: "testimonial-marquee 40s linear infinite"
};

export default function Testimonials() {
  return (
    <div className="w-full bg-[#10141b] py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Müşterilerimizden Yorumlar</h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-8 items-stretch hover:pause-animation"
          style={sliderAnimation}
        >
          {testimonials.concat(testimonials).map((item, idx) => (
            <div
              key={idx}
              className="min-w-[340px] max-w-[340px] bg-[#181e29] rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-[#232b3a]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-3 border-4 border-[#324b6e]">
                <span className="text-white font-bold text-lg">{item.name.charAt(0)}</span>
              </div>
              <div className="font-semibold text-lg text-white mb-1">{item.name}</div>
              <div className="text-xs text-blue-300 mb-2">{item.profession}</div>
              <div className="text-gray-300 text-sm mb-2">"{item.text}"</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes testimonial-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
        @media (hover: none) {
          .hover\:pause-animation:active {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
} 