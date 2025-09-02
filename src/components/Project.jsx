import React, { useState } from "react";
import monitor from "../media/monitor.jpg";
import ubuntu1 from "../media/ubuntu-panel.png";
import adasmile1 from "../media/adasmile-panel.png";
import irfan12 from "../media/irfan-panel.png";
import mrhukuk1 from "../media/mrhukuk-panel.png";

const categories = [
  "All",
  "Agency",
  "Artificial Intelligence",
  "Automotive",
  "Consulting",
  "Education",
  "Corporate",
  "Events",
  "Finance",
  "Legal",
  "Marketing",
  "Health",
  "Real Estate",
  "Medical",
  "Technology",
  "Travel",
  "Video Production",
];

const projects = [
  {
    category: "Finance",
    title: "Ubuntu Investment",
    description:
      "A financial institution that provides both training and post-training financial consulting for people who want to receive basic and technical analysis training, especially about the stock market.",
    goal: "Our goal was to develop an interface where stock market investors can ask questions and discuss about stocks in a forum environment after becoming members of the system, and easily purchase training to increase the purchase rate.",
    image: ubuntu1,
    domain: "https://www.ubuntuyatirim.com/",
  },
  {
    category: "Dental Clinic",
    title: "Ada Smile Studio",
    description:
      "Ada Smile Studio is a clinic in Istanbul/Fatih that provides dental services to local and foreign patients.",
    goal: "With our special appointment system, we aimed for customers to directly send their appointment requests to the clinic through the website. Additionally, we increased patients' contact with the clinic through our specially designed mobile features like immediate call and WhatsApp communication.",
    image: adasmile1,
    domain: "https://www.adasmilestudio.com/",
  },
  {
    category: "Accounting",
    title: "İrfan Özdamar",
    description:
      "İrfan Özdamar website is a platform where İrfan Özdamar Bey offers his own accounting services.",
    goal: "We aimed for customers to get to know İrfan Bey closely by thoroughly reflecting Mr. İrfan Özdamar's business portfolio and experience. Thanks to the Action Buttons we used, customers can directly contact İrfan Bey's office via WhatsApp.",
    image: irfan12,
    domain: "https://irfanozdamar-com.vercel.app/",
  },
  {
    category: "Legal",
    title: "MR Law Office",
    description:
      "MR Law Office is an institution that provides legal services in Diyarbakır.",
    goal: "We wanted to explain MR Law Office's Business Portfolio and Services in detail. Additionally, we specifically targeted Diyarbakır province in our SEO services to attract customers from Diyarbakır.",
    image: mrhukuk1,
    domain: "https://mrhukuk.vercel.app/",
  },
];

export default function FullPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-black">
      {/* TOP SECTION */}
      <div className="py-20 px-6">
        <div className="bg-gray-900 text-white rounded-2xl p-12 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto border border-gray-700">
          {/* Left side */}
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-gray-800 text-sm px-4 py-1 rounded-full text-gray-300">
              • Portfolio
            </span>
            <h2 className="text-4xl font-bold leading-tight">
              <br /> Website Portfolio
            </h2>
            <p className="text-gray-300">
              Appdevify is an award-winning web design studio. With 5+ years of
              experience, we have built over 300 custom websites. You can browse
              our projects below.
            </p>
          </div>

          {/* Right side visual */}
          <div className="flex-1 relative">
            <img
              src={monitor}
              alt="portfolio showcase"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-0 right-0 bg-gray-800 text-white px-4 py-2 text-sm rounded-bl-lg shadow-md">
              300+ websites designed
            </div>
            <div className="absolute bottom-0 left-0 bg-gray-800 text-white px-4 py-2 text-sm rounded-tr-lg shadow-md">
              5+ Years Experience
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="max-w-5xl mx-auto mt-12 flex flex-wrap gap-4 justify-center">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border ${
                selectedCategory === cat
                  ? "bg-[#9CFF28] text-black border-[#9CFF28]"
                  : "bg-gray-800 hover:bg-gray-700 text-white border-gray-600"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BOTTOM PROJECT LIST */}
      <div className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8 p-6 border-4 border-gray-700 rounded-3xl bg-gray-800"
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-sm w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <span className="inline-block bg-gray-700 text-[#9CFF28] text-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                  <p className="text-gray-400 text-sm">{project.goal}</p>
                  <a
                    href={project.domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-black text-sm px-6 py-2 rounded-full flex items-center gap-2 transition w-fit hover:opacity-80"
                    style={{ backgroundColor: "#9CFF28" }}
                  >
                    Visit Site
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">
              No projects found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
