import React, { useMemo, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { ProjectsData } from "../Data/ProjectsData";

function Projects({ isDarkMode }) {
  const fields = ["All", ...new Set(ProjectsData.map((proj) => proj.field))];

  // state for selected field
  const [selectedField, setSelectedField] = useState("All");

  // filter projects using usememo to stop unnecessary renders/re-calculations
  const filteredProjects = useMemo(
    () =>
      selectedField === "All"
        ? ProjectsData
        : ProjectsData.filter((proj) => proj.field === selectedField),
    [selectedField]
  );

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
            <div className="flex flex-col gap-2 px-5 py-3 h-full">
              <h1 className="text-2xl font-bold">{proj.name}</h1>
              <p className="text-xs">{proj.description}</p>
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
                <ul key={index} className="text-sm list-disc list-inside">
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
                } flex items-center mt-auto gap-1 py-2 px-4 w-fit rounded-full font-bold text-xs shadow-md hover:shadow-2xl cursor-pointer`}
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
