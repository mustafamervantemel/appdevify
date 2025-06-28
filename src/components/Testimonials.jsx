import React from "react";
import Omale2 from "../profile/Omale2.svg";
import Omale3 from "../profile/Omale3.svg";
import Omale4 from "../profile/Omale4.svg";
import Omale5 from "../profile/Omale5.svg";
import Omale6 from "../profile/Omale6.svg";
import Ofemale2 from "../profile/Ofemale2.svg";
import Ofemale3 from "../profile/Ofemale3.svg";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    profession: "Avukat",
    photo: Omale2,
    text: "Veronsoft ile çalışmak harikaydı, web sitemiz tam istediğimiz gibi oldu!"
  },
  {
    name: "Elif Demir",
    profession: "Mali Müşavir",
    photo: Ofemale2,
    text: "Hızlı ve güvenilir hizmet, kesinlikle tavsiye ederim."
  },
  {
    name: "Mehmet Kaya",
    profession: "E-Ticaret",
    photo: Omale3,
    text: "Satışlarımızı artıran modern bir siteye kavuştuk. Teşekkürler!"
  },
  {
    name: "Ayşe Çelik",
    profession: "Güzellik Salonu Sahibi",
    photo: Ofemale3,
    text: "Müşteri randevu sistemimiz artık çok daha kolay."
  },
  {
    name: "Burak Şahin",
    profession: "Doktor",
    photo: Omale4,
    text: "Klinik web sitemiz hem şık hem de kullanışlı oldu."
  },
  {
    name: "Zeynep Aksoy",
    profession: "Psikolog",
    photo: Ofemale2,
    text: "Danışanlarım için harika bir online platform sağladılar."
  },
  {
    name: "Emre Güneş",
    profession: "Diş Hekimi",
    photo: Omale5,
    text: "Hasta iletişimimiz çok daha profesyonel hale geldi."
  },
  {
    name: "Fatma Yıldız",
    profession: "Restoran Sahibi",
    photo: Ofemale3,
    text: "Online rezervasyon sistemimiz mükemmel çalışıyor."
  },
  {
    name: "Caner Toprak",
    profession: "Fotoğrafçı",
    photo: Omale6,
    text: "Portfolyo sitem çok beğenildi, emeğinize sağlık!"
  },
  {
    name: "Selin Kurt",
    profession: "Yoga Eğitmeni",
    photo: Ofemale2,
    text: "Derslerimi kolayca duyurabiliyorum, çok memnunum."
  },
  {
    name: "Mert Aslan",
    profession: "Mimar",
    photo: Omale2,
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
          className="flex gap-8 items-stretch"
          style={sliderAnimation}
        >
          {testimonials.concat(testimonials).map((item, idx) => (
            <div
              key={idx}
              className="min-w-[340px] max-w-[340px] bg-[#181e29] rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-[#232b3a]"
            >
              <img
                src={item.photo}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover mb-3 border-4 border-[#324b6e]"
                loading="lazy"
              />
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
      `}</style>
    </div>
  );
} 