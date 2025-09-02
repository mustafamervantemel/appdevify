import { MdDesignServices, MdSupportAgent } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import Panel1 from "../media/pnl1.png";
import Panel2 from "../media/pnl2.png";
import Panel3 from "../media/pnl3.png";

export default function Asamalar() {
  const asamalar = [
    {
      id: "01",
      baslik: "Client Discovery & Design",
      aciklama:
        "In our first meeting, we listen to your vision and needs. After clarifying expectations, we start the project with a proposal and timeline.",
      gorsel: Panel1,
      ikon: <MdDesignServices size={24} />,
    },
    {
      id: "02",
      baslik: "Development & Feedback",
      aciklama:
        "After design approval, we move to the coding phase. We progress with regular feedback throughout the process.",
      gorsel: Panel2,
      ikon: <FaCode size={22} />,
    },
    {
      id: "03",
      baslik: "Delivery & Training",
      aciklama:
        "After your website goes live, we explain step by step how to use it. We also provide 30 days of email support.",
      gorsel: Panel3,
      ikon: <MdSupportAgent size={24} />,
    },
  ];

  return (
    <section className="bg-black py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Title area */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-gray-800 text-sm text-gray-300 rounded-full mb-3">
            • How Does the Process Work?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How Does the Web Development Process Work?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {asamalar.map((asama) => (
            <div
              key={asama.id}
              className="group border border-gray-700 rounded-xl p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 bg-gray-900 relative hover:bg-gray-800 hover:shadow-2xl"
            >
              {/* Background number */}
              <span className="absolute top-4 left-4 md:top-6 md:left-6 text-5xl md:text-6xl font-bold opacity-10 text-gray-600 group-hover:text-[#9CFF28] transition-all duration-300">
                {asama.id}
              </span>

              {/* Title */}
              <div className="text-xl md:text-2xl mb-2 md:mb-3 font-semibold flex items-center gap-2 z-10 relative text-white group-hover:text-[#9CFF28] transition-all duration-300">
                <span className="text-lg" style={{color: '#9CFF28'}}>{asama.ikon}</span>
                {asama.baslik}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-3 md:mb-4 text-sm z-10 relative group-hover:text-gray-200 transition-all duration-300">
                {asama.aciklama}
              </p>

              {/* Image */}
              <img
                src={asama.gorsel}
                alt={asama.baslik}
                className="w-full rounded-lg border border-gray-600 z-10 relative transform transition-transform duration-300 group-hover:scale-105 max-h-40 sm:max-h-48 md:max-h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
