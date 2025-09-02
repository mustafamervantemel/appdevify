import squarespace from "../icons/squarespace.svg";
import shopify from "../icons/shopify.svg";
import notion from "../icons/notion.svg";
import figma from "../icons/figma.svg";
import vercel from "../icons/vercel.svg";
import webflow from "../icons/webflow.svg";
import analytics from "../icons/analytics.svg";
import firebase from "../icons/firebase.svg";
import iyzico from "../icons/iyzico.svg";
import tailwind from "../icons/tailwind.svg";
import vite from "../icons/vite.svg";
import mongo from "../icons/mongo.svg";

const icons = [
  shopify,
  notion,
  figma,
  vercel,
  webflow,
  analytics,
  firebase,
  iyzico,
  tailwind,
  vite,
  mongo,
  squarespace,
];

export default function IntegrationsScroll() {
  return (
    <section className="py-24 px-4 md:px-10 bg-black overflow-hidden">
      <div className="text-center max-w-3xl mx-auto z-10 relative">
        <span className="inline-block px-3 py-1 bg-gray-800 text-sm text-gray-300 rounded-full mb-4">
          • Integrations
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          We Handle All Your Integrations
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          From complex challenges to seamless implementation; we integrate all
          your marketing tools and automations into your website.
        </p>
      </div>

      <div className="mt-16 relative overflow-hidden">
        <div className="flex w-max animate-scroll whitespace-nowrap gap-10">
          {icons.concat(icons).map((icon, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-20 h-20 p-3 bg-gray-900 shadow rounded-full border border-gray-700"
            >
              <img src={icon} className="w-10 h-10 object-contain" alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
