import React from "react";
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
    },
  ];
  return (
    <div id="projects" className={`flex flex-col items-center my-3`}>
      <h1 className="text-2xl font-bold text-center">Featured Projects</h1>
      {Projects.map((proj) => (
        <div
          key={proj.id}
          className={`${
            isDarkMode ? "bg-black/60 shadow-white/50 shadow/20" : ""
          } flex flex-col gap-3 m-5 rounded-2xl border border-black/10 shadow`}
        >
          <div>
            <a href={proj.live}>
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
            <button
              className={`${
                isDarkMode ? "bg-pink-200 text-black" : "bg-pink-700 text-white"
              } flex items-center gap-2 py-1 px-3 w-fit rounded-full font-bold text-xs shadow-md hover:shadow-2xl cursor-pointer`}
            >
              Live <FiExternalLink />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
