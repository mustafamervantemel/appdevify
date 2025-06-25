export default function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-lg p-10">
        {/* Sol Metin Alanı */}
        <div>
          <span className="inline-block px-3 py-1 bg-[#dbe4ec] text-sm text-gray-600 rounded-full mb-4">
            • Hayalinizdeki site
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
            Projenize Başlayın
          </h2>
          <p className="text-gray-700 mb-6">
            Uzmanlığıma güvenen birçok işletmenin arasına katılın. Ücretsiz bir
            keşif görüşmesi ile projenizi başlatın ve vizyonunuzu nasıl hayata
            geçirebileceğimizi görün.
          </p>
          <button className="bg-[#506C83] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#3f5364] transition">
            Görüşme Planla <span>↗</span>
          </button>

          <div className="mt-5 flex items-center gap-3">
            <img
              src="/avatars/avatar1.png"
              className="w-8 h-8 rounded-full"
              alt="avatar1"
            />
            <img
              src="/avatars/avatar2.png"
              className="w-8 h-8 rounded-full"
              alt="avatar2"
            />
            <img
              src="/avatars/avatar3.png"
              className="w-8 h-8 rounded-full"
              alt="avatar3"
            />
            <span className="text-sm text-gray-500 ml-2">
              450+ kişi birlikte çalışmaktan memnun kaldı
            </span>
          </div>
        </div>

        {/* Sağ Form Alanı */}
        <form className="bg-white rounded-xl p-6 border shadow-sm space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ad Soyad *
              </label>
              <input
                type="text"
                placeholder="Adınızı girin"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-[#506C83] focus:border-[#506C83] text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-posta *
              </label>
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-[#506C83] focus:border-[#506C83] text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Konu *
            </label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-[#506C83] focus:border-[#506C83] text-sm"
              required
            >
              <option>Bir konu seçin</option>
              <option>Web Sitesi Tasarımı</option>
              <option>Açılış Sayfası (Landing Page)</option>
              <option>UI/UX Danışmanlığı</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mesaj *
            </label>
            <textarea
              rows="4"
              placeholder="Size nasıl yardımcı olabiliriz?"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-[#506C83] focus:border-[#506C83] text-sm"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#506C83] text-white py-2 rounded-md hover:bg-[#3f5364] transition"
          >
            Mesajı Gönder
          </button>
        </form>
      </div>
    </section>
  );
}
