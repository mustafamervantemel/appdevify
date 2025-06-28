import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import RectangleBg from "../media/rectangle.jpg"; // Görsel yolunu dosya konumuna göre ayarla
import monitor from "../media/monitor.jpg";

const SERVICE_ID = "service_msih2tq";
const TEMPLATE_ID = "template_glsrfjf";
const PUBLIC_KEY = "STJyxJJfDiPqPwq0B";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Email gönderimi başarısız:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center min-h-screen text-white"
      style={{ backgroundImage: `url(${RectangleBg})` }}
    >
      {/* Yarı saydam katman (istersen koyulaştırabilirsin) */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* İçerik */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between px-6 sm:px-10 lg:px-[8%] py-10 gap-10 max-w-[1440px] mx-auto min-h-screen">
        {/* Sol taraf: Tanıtım metni */}
        <div className="flex-1 max-w-full lg:max-w-[48%]">
          <div className="flex gap-3 mb-6 flex-wrap">
            <span className="bg-green-500/20 text-green-300 text-sm font-medium px-4 py-1 rounded-full">
              Müsait
            </span>
            <span className="bg-white/10 text-white text-sm font-medium px-4 py-1 rounded-full">
              İletişime Geç
            </span>
          </div>

          <h1 className="text-[2rem] sm:text-[2.5rem] leading-tight font-semibold mb-6">
            Varonsoft: Ödüllü <br />
            <span className="text-blue-300">Web Tasarım Ajansı</span>
          </h1>

          <p className="text-base text-gray-300 mb-8">
            5+ yıllık tecrübemizle, Türkiye ve dünya çapında 450'den fazla özel
            tasarım site oluşturduk. Şimdi senin için başlıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="https://wa.me/905305629126"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-full font-medium hover:bg-white hover:text-black transition text-center"
            >
              İletişime Geç
            </a>
          </div>
        </div>

        {/* Sağ taraf: Form kutusu */}
        <div className="flex-1 w-full max-w-full lg:max-w-[480px] bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-black">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Başarı/Hata mesajları */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-1 text-sm">
                  Ad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Adınızı girin"
                  required
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-1 text-sm">
                  E-posta <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-posta adresiniz"
                  required
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1 text-sm">
                Konu <span className="text-red-500">*</span>
              </label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Konu seçin</option>
                <option value="Web Sitesi Tasarımı">Web Sitesi Tasarımı</option>
                <option value="SEO Danışmanlığı">SEO Danışmanlığı</option>
                <option value="E-Ticaret Sitesi">E-Ticaret Sitesi</option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1 text-sm">
                Mesaj <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Size nasıl yardımcı olabiliriz?"
                rows="4"
                required
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#324b6e] text-white py-3 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Talep Gönder'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
