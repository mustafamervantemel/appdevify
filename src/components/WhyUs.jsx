import {
  FaLock,
  FaBolt,
  FaStar,
  FaRocket,
  FaFingerprint,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaLock size={28} />,
    title: "Fixed Pricing",
    desc: "Transparent, fixed monthly rates with no surprise costs for unlimited development requests.",
    color: "bg-blue-500",
  },
  {
    icon: <FaBolt size={28} />,
    title: "Fast Delivery",
    desc: "Projects delivered within 24-48 hours. Need revisions? We handle them immediately.",
    color: "bg-purple-500",
  },
  {
    icon: <FaStar size={28} />,
    title: "Premium Quality",
    desc: "Enterprise-grade development quality, always at your fingertips.",
    color: "bg-green-500",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Scale On Demand",
    desc: "Increase, decrease, or pause services anytime. Easy to manage your subscription.",
    color: "bg-pink-500",
  },
  {
    icon: <FaFingerprint size={28} />,
    title: "Fully Custom",
    desc: "All applications are built exclusively for you and are 100% yours.",
    color: "bg-yellow-500",
  },
];

export default function SubscriptionBenefits() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold uppercase">
          Why Choose Appdevify?
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Get reliable and high-quality development services from internationally proven experts in the US and UK markets.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {benefits.map((item, i) => (
          <div
            key={i}
            className={`w-[250px] p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:scale-105 hover:rotate-[-1deg] transition transform duration-300`}
            style={{
              transform: `rotate(${(i % 2 === 0 ? -2 : 2) + i}px)`,
            }}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg text-black mb-4`}
              style={{backgroundColor: '#9CFF28'}}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
