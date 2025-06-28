import React from "react";
import {
  FaCode,
  FaChalkboardTeacher,
  FaGlobe,
  FaCogs,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Özel Web Sitesi Tasarımı",
      desc: "İhtiyacınıza özel, hızlı ve kullanıcı dostu web siteleri tasarlıyoruz.",
      icon: <FaCode size={24} />,
    },
    {
      title: "Kodsuz Web Kurulumu",
      desc: "Hiçbir teknik bilgiye ihtiyaç duymadan web sitenizi hazırlıyoruz.",
      icon: <FaGlobe size={24} />,
    },
    {
      title: "Kod Desteği",
      desc: "Mevcut Squarespace sitenize özel kodlama çözümleri sunuyoruz.",
      icon: <FaCode size={24} />,
    },
    {
      title: "Online Kurs Platformları",
      desc: "Eğitim platformları ve üyelik sistemleri geliştiriyoruz.",
      icon: <FaChalkboardTeacher size={24} />,
    },
    {
      title: "Erişilebilirlik Denetimi",
      desc: "Web sitenizin her kullanıcı için erişilebilir olmasını sağlıyoruz.",
      icon: <FaSearch size={24} />,
    },
    {
      title: "Site Taşıma Hizmeti",
      desc: "Web sitenizi sorunsuz ve güvenli şekilde yeni altyapıya taşıyoruz.",
      icon: <FaGlobe size={24} />,
    },
    {
      title: "Web Sitesi Yönetimi",
      desc: "Web sitenizin güncel, hızlı ve güvenli kalması için teknik destek sağlıyoruz.",
      icon: <FaCogs size={24} />,
    },
    {
      title: "E-Ticaret Çözümleri",
      desc: "Satış odaklı, kullanıcı dostu e-ticaret sistemleri kuruyoruz.",
      icon: <FaShoppingCart size={24} />,
    },
    {
      title: "SEO Optimizasyonu",
      desc: "Web sitenizin Google’da daha üst sıralarda yer almasını sağlıyoruz.",
      icon: <FaSearch size={24} />,
    },
  ];

  return (
    <section className="bg-[#f8fbff] text-[#1f2937] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-6">
          Website Uzmanı ile Zaman ve Para Kazanın
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl">
          Varonsoft olarak güçlü ve performanslı çözümler sunuyoruz. Tüm
          ihtiyaçlarınıza uygun, sade ve etkili dijital çözümler sunmak için
          buradayız.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:ring-2 hover:ring-[#506C83] transition-all"
            >
              <div className="text-[#506C83] mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
         
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
