import { useState } from "react";
import { FaPlus, FaHandshake, FaAward, FaRocket } from "react-icons/fa";

export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const values = [
    {
      icon: <FaHandshake size={18} />,
      title: "Innovation and Adaptability",
      content:
        "We embrace change and continuously seek ways to provide our clients with creative and agile solutions.",
    },
    {
      icon: <FaAward size={18} />,
      title: "Quality and Consistency",
      content:
        "We maintain high standards in every project, delivering reliable and consistent results.",
    },
    {
      icon: <FaRocket size={18} />,
      title: "Genuine Connections",
      content:
        "We build long-term, authentic relationships based on trust and transparency.",
    },
  ];

  return (
    <section
      className="py-20 px-6 md:px-16 bg-black text-white"
      id="core-values"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left title */}
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-gray-800 text-sm text-gray-300 mb-4">
            ● Our Values
          </span>
          <h2 className="text-4xl font-bold leading-snug text-white">
            Values That Guide <br />
            Every Project <br />
            and Partnership
          </h2>
        </div>

        {/* Right accordions */}
        <div className="space-y-4">
          {values.map((item, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <div
                onClick={() => toggle(index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-md" style={{backgroundColor: '#9CFF28'}}>
                    <div style={{color: 'black'}}>{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <button className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-800 transition">
                  <FaPlus />
                </button>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-sm text-gray-300">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
