// src/components/ContactSection.jsx
import React, { useState } from "react";
import {
  FaBehance,
  FaDribbble,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPlus,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const SERVICE_ID = "service_msih2tq";
  const TEMPLATE_ID = "template_glsrfjf";
  const PUBLIC_KEY = "STJyxJJfDiPqPwq0B";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f4f4f4] py-20 px-6 md:px-16">
      <div className="max-w-xl mx-auto">
        <span className="inline-block bg-gray-200 text-gray-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
          • İletişime Geç
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">İletişime Geç</h2>
        <p className="text-gray-700 text-lg mb-8">
          Projeniz veya hizmetlerimiz hakkında sorularınız için aşağıdaki formu doldurun. Size en kısa sürede dönüş yapacağız.
        </p>
        <form onSubmit={handleSubmit} className="bg-white border-8 border-gray-200 rounded-2xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ad Soyad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Adınızı girin"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-posta <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-posta adresinizi girin"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefon <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="05XX XXX XX XX"
              pattern="[0-9]{11}"
              required
              className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Konu <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Konu"
              required
              className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mesaj <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Size nasıl yardımcı olabiliriz?"
              rows="4"
              required
              className="w-full text-black bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#506C83] hover:bg-[#3e566a] text-white py-3 rounded-full font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Gönderiliyor..." : "Gönder"}
          </button>
          {submitStatus === "success" && (
            <div className="text-green-600 text-center font-medium mt-2">Mesajınız başarıyla gönderildi!</div>
          )}
          {submitStatus === "error" && (
            <div className="text-red-600 text-center font-medium mt-2">Bir hata oluştu, lütfen tekrar deneyin.</div>
          )}
        </form>
      </div>
    </section>
  );
}

// Küçük yardımcı bileşenler:

function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 text-xl hover:bg-gray-300 transition cursor-pointer">
      {icon}
    </div>
  );
}

function Badge({ label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 border-2 border-gray-400 rounded-full" />
      <p className="mt-2 text-xs text-gray-600">{label}</p>
    </div>
  );
}

function Input({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <select className="w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]">
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        placeholder={placeholder}
        rows="4"
        className="w-full text-black bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#506C83]"
      ></textarea>
    </div>
  );
}
