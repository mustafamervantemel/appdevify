import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Omale2 from "../profile/Omale2.svg";
import Omale3 from "../profile/Omale3.svg";
import Omale4 from "../profile/Omale4.svg";
import Omale5 from "../profile/Omale5.svg";
import Omale6 from "../profile/Omale6.svg";
import Ofemale2 from "../profile/Ofemale2.svg";
import Ofemale3 from "../profile/Ofemale3.svg";

const SERVICE_ID = "service_msih2tq";
const TEMPLATE_ID = "template_glsrfjf";
const PUBLIC_KEY = "STJyxJJfDiPqPwq0B";

export default function ContactSection() {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-lg p-10">
        {/* Sol Metin Alanı */}
        <div>
          <span className="inline-block px-3 py-1 bg-[#dbe4ec] text-sm text-gray-600 rounded-full mb-4">
            • Hayalinizdeki site
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Projenize Başlayın
          </h2>
          <p className="text-gray-600 mb-6">
            Uzmanlığıma güvenen birçok işletmenin arasına katılın. Ücretsiz bir
            keşif görüşmesi ile projenizi başlatın ve vizyonunuzu nasıl hayata
            geçirebileceğimizi görün.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <img src={Omale2} className="w-8 h-8 rounded-full" alt="avatar1" loading="lazy" />
            <img src={Ofemale2} className="w-8 h-8 rounded-full" alt="avatar2" loading="lazy" />
            <span className="text-sm text-gray-600 ml-2">
              300+ kişi birlikte çalışmaktan memnun kaldı
            </span>
          </div>
        </div>

        {/* Sağ Form Alanı */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border shadow-sm space-y-4 text-gray-800">
          {submitStatus === "success" && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ad Soyad *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Adınızı girin"
                className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-[#506C83] focus:border-[#506C83] text-sm placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-posta *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-posta adresiniz"
                className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-[#506C83] focus:border-[#506C83] text-sm placeholder-gray-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Konu *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-[#506C83] focus:border-[#506C83] text-sm"
              required
            >
              <option value="">Bir konu seçin</option>
              <option>Web Sitesi Tasarımı</option>
              <option>Açılış Sayfası (Landing Page)</option>
              <option>UI/UX Danışmanlığı</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mesaj *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Size nasıl yardımcı olabiliriz?"
              className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-[#506C83] focus:border-[#506C83] text-sm placeholder-gray-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#506C83] text-white py-3 rounded-md hover:bg-[#3f5364] transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
          </button>
        </form>
      </div>
    </section>
  );
}
