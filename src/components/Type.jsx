import search from "../media/search.svg";
import mobile from "../media/mobile.svg";
import design from "../media/design.svg";
import feature from "../media/feature.svg";

export default function FeaturesSection() {
  const features = [
    {
      icon: design,
      title: "Custom Design",
      text: "We create a design unique to your brand with custom fonts, colors, logos, and layouts. We bring your website to life with extra features like lightbox galleries and animated transitions.",
    },
    {
      icon: feature,
      title: "Advanced Features",
      text: "We integrate all powerful tools like e-commerce, blog, email campaigns, and analytics systems. We make your site functional to facilitate your digital business.",
    },
    {
      icon: mobile,
      title: "Mobile Responsive",
      text: "We provide perfect appearance for phone and tablet users. We optimize for every screen size for a fast, readable, and aesthetic experience on all devices.",
    },
    {
      icon: search,
      title: "SEO Focused",
      text: "We implement technical and content SEO strategies to help you rank higher on Google and other search engines.",
    },
  ];

  function formatPhoneNumber(value) {
    // Take only digits
    const digits = value.replace(/\D/g, "").slice(0, 11);
    let formatted = "";
    if (digits.length > 0) formatted += digits.slice(0, 3);
    if (digits.length > 3) formatted += " " + digits.slice(3, 6);
    if (digits.length > 6) formatted += " " + digits.slice(6, 8);
    if (digits.length > 8) formatted += " " + digits.slice(8, 10);
    return formatted;
  }

  return (
    <section className="py-10 md:py-24 px-2 md:px-4 bg-black">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <span className="inline-block px-3 py-1 text-sm text-gray-300 bg-gray-800 rounded-full mb-4">
          • Features
        </span>
        <h2 className="text-[28px] md:text-[34px] font-semibold text-white tracking-tight mb-3">
          Reliable Appdevify Web Design Services
        </h2>
        <p className="text-[15px] text-gray-300 leading-relaxed max-w-2xl mx-auto">
          At Appdevify, we provide comprehensive services to create impressive
          websites that effectively highlight your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto px-2 md:px-0">
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-4 md:p-6 flex flex-col justify-start transition-all duration-300 bg-gray-900 hover:bg-gray-800 hover:shadow-lg group"
          >
            <div className="w-12 h-12 mb-4 transition-all duration-300 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <h3 className="text-[17px] font-semibold text-white mb-2 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-sm text-gray-300 transition-colors duration-300 leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
