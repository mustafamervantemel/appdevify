import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-[#324b6e]">Hakkımızda</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Markanızı dijital dünyada öne çıkarmak için güçlü tasarım ve yazılım
            çözümleri sunuyoruz. Deneyimli ekibimizle modern, hızlı ve kullanıcı
            odaklı projeler geliştiriyoruz.
          </p>
        </div>

        {/* 3'lü kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vizyon */}
          <div className="bg-[#f4f7fb] rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[#324b6e]">
              Vizyonumuz
            </h3>
            <p className="text-gray-600 text-sm">
              Dijital dönüşümün öncüsü olarak, global ölçekte fark yaratan
              projelere imza atmak.
            </p>
          </div>

          {/* Misyon */}
          <div className="bg-[#f4f7fb] rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[#324b6e]">
              Misyonumuz
            </h3>
            <p className="text-gray-600 text-sm">
              İş ortaklarımıza sürdürülebilir, hızlı ve kullanıcı dostu dijital
              çözümler sunmak.
            </p>
          </div>

          {/* Değerler */}
          <div className="bg-[#f4f7fb] rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[#324b6e]">
              Değerlerimiz
            </h3>
            <p className="text-gray-600 text-sm">
              Güven, şeffaflık, yaratıcılık ve müşteri memnuniyeti odaklı
              çalışma prensibi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
