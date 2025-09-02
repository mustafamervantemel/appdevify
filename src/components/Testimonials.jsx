import React from "react";

const testimonials = [
  {
    name: "Michael Johnson",
    profession: "Lawyer",
    text: "Working with Appdevify was amazing, our website turned out exactly as we wanted!",
  },
  {
    name: "Sarah Williams",
    profession: "Accountant",
    text: "Fast and reliable service, I definitely recommend them.",
  },
  {
    name: "David Chen",
    profession: "E-Commerce",
    text: "We got a modern site that increased our sales. Thank you!",
  },
  {
    name: "Emily Rodriguez",
    profession: "Beauty Salon Owner",
    text: "Our customer booking system is now much easier to use.",
  },
  {
    name: "Robert Thompson",
    profession: "Doctor",
    text: "Our clinic website is both stylish and functional.",
  },
  {
    name: "Jennifer Davis",
    profession: "Psychologist",
    text: "They provided an amazing online platform for my clients.",
  },
  {
    name: "Christopher Lee",
    profession: "Dentist",
    text: "Our patient communication is now much more professional.",
  },
  {
    name: "Amanda Wilson",
    profession: "Restaurant Owner",
    text: "Our online reservation system works perfectly.",
  },
  {
    name: "James Brown",
    profession: "Photographer",
    text: "My portfolio site was very well received, great work!",
  },
  {
    name: "Lisa Garcia",
    profession: "Yoga Instructor",
    text: "I can easily promote my classes, very satisfied.",
  },
  {
    name: "Mark Anderson",
    profession: "Architect",
    text: "I can showcase my projects in an elegant way.",
  },
];

const sliderAnimation = {
  animation: "testimonial-marquee 40s linear infinite",
};

export default function Testimonials() {
  return (
    <div className="w-full bg-black py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        What Our Clients Say
      </h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-8 items-stretch hover:pause-animation"
          style={sliderAnimation}
        >
          {testimonials.concat(testimonials).map((item, idx) => (
            <div
              key={idx}
              className="min-w-[340px] max-w-[340px] bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-700"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 border-[#9CFF28]"
                style={{ backgroundColor: "#9CFF28" }}
              >
                <span className="text-black font-bold text-lg">
                  {item.name.charAt(0)}
                </span>
              </div>
              <div className="font-semibold text-lg text-white mb-1">
                {item.name}
              </div>
              <div className="text-xs text-[#9CFF28] mb-2">
                {item.profession}
              </div>
              <div className="text-gray-300 text-sm mb-2">"{item.text}"</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes testimonial-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
        @media (hover: none) {
          .hover\:pause-animation:active {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}
