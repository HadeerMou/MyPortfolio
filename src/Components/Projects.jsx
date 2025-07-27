import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

function Projects({ isDarkMode }) {
  const Projects = [
    {
      id: 1,
      name: "Alhalapi E-commerce",
      live: "https://alhalabi-website.vercel.app/",
      img: "/assets/Alhalapi.png",
      descrption: "Scalable e-commerce platform with seamless API integration",
      tech: [
        "React",
        "TailwindCSS",
        "Figma",
        "react-i18next",
        "Motion",
        "Swagger",
      ],
      features: [],
      field: "web",
    },
    {
      id: 2,
      name: "CHARMI E-commerce",
      live: "https://www.charmi.shop/",
      img: "/assets/charmi.png",
      descrption: "Scalable e-commerce platform with seamless API integration",
      tech: [
        "React",
        "BootStrap",
        "CSS",
        "Figma",
        "Nest",
        "MySQL",
        "Swagger",
        "Deployment",
      ],
      features: [],
      field: "web",
    },
    {
      id: 3,
      name: "CULT agency Website Redesign",
      live: "https://cult-redesign-itc5.vercel.app/",
      img: "/assets/cult.png",
      descrption: "CULT agency responsive Website Redesign",
      tech: ["React", "vite", "CSS", "TailwindCSS", "Figma", "Vercel"],
      features: [],
      field: "web",
    },
    {
      id: 4,
      name: "MAMZI | Fashion brand identity redesign.",
      live: "https://www.behance.net/gallery/212909843/MAMZI-Fashion-brand-identity-redesign",
      img: "/assets/mamzi.png",
      descrption:
        "MAMZI Fashion brand identity redesign. Includes logo and packaging",
      tech: ["Figma"],
      features: [],
      field: "UI/UX",
    },
    {
      id: 5,
      name: "MAMZI | Fashion brand identity redesign.",
      live: "https://www.behance.net/gallery/197023069/Step-away-E-Commerce-UI",
      img: "/assets/stepaway.png",
      descrption:
        "Step away E-Commerce App UI design. Includes product pages, cart, checkout and other pages.",
      tech: ["Figma"],
      features: [],
      field: "UI/UX",
    },
    {
      id: 6,
      name: "Qafta Web Design",
      live: "https://www.behance.net/gallery/215026057/Qafta-Web-Design",
      img: "/assets/qafta.png",
      descrption:
        "Qafta Web Design. Includes homepage, and other pages with animations.",
      tech: ["Figma"],
      features: [],
      field: "UI/UX",
    },
    {
      id: 7,
      name: "InspoFA Landing Page",
      live: "https://landing-page-design-azure.vercel.app/",
      img: "/assets/inspoFA.png",
      descrption: "InspoFA modern responsive Landing Page.",
      tech: ["React", "CSS", "Figma", "Vercel"],
      features: [],
      field: "web",
    },
  ];
  const fields = ["All", ...new Set(Projects.map((proj) => proj.field))];

  // Step 2: state for selected field
  const [selectedField, setSelectedField] = useState("All");

  // Step 3: filter projects
  const filteredProjects =
    selectedField === "All"
      ? Projects
      : Projects.filter((proj) => proj.field === selectedField);
  return (
    <div id="projects" className={`flex flex-col items-center my-4`}>
      <h1 className="text-3xl font-bold text-center p-2">Featured Projects</h1>
      <div className="flex flex-wrap justify-center gap-2 my-4">
        {fields.map((field) => (
          <button
            key={field}
            onClick={() => setSelectedField(field)}
            className={`px-4 py-1 rounded-full text-sm font-semibold border shadow-md ${
              selectedField === field
                ? isDarkMode
                  ? "bg-pink-200 text-black"
                  : "bg-pink-600 text-white"
                : isDarkMode
                ? "bg-black/30 text-white border-white/20"
                : "bg-gray-100 text-black border-black/10"
            }`}
          >
            {field}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className={`${
              isDarkMode ? "bg-black/60 shadow-white/50 shadow/20" : ""
            } flex flex-col gap-3 m-2 rounded-2xl border border-black/10 shadow`}
          >
            <div>
              <a href={proj.live} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-2xl rounded-b-md border-b-2 border-pink-900/50 opacity-90 hover:opacity-100 cursor-pointer"
                  src={proj.img}
                  alt=""
                />
              </a>
            </div>
            <div className="flex flex-col gap-2 px-5 py-3">
              <h1 className="text-2xl font-bold">{proj.name}</h1>
              <p className="text-xs">{proj.descrption}</p>
              <h2 className="text-sm font-bold">Technologies:</h2>
              <div className="flex flex-wrap gap-1">
                {proj.tech.map((tech, index) => (
                  <p
                    key={index}
                    className={`${
                      isDarkMode
                        ? "bg-pink-50 text-black"
                        : "bg-pink-500 text-white"
                    } text-xs rounded-md border py-1 px-2 border-black/10 shadow`}
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <h2 className="text-sm font-bold">Key Features:</h2>
              {proj.features.map((feature, index) => (
                <ul key={index} className="text-sm mt-4 space-y-2">
                  <li>{feature}</li>
                </ul>
              ))}
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "bg-pink-200 text-black"
                    : "bg-pink-700 text-white"
                } flex items-center gap-2 py-1 px-3 w-fit rounded-full font-bold text-xs shadow-md hover:shadow-2xl cursor-pointer`}
              >
                Live <FiExternalLink />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
