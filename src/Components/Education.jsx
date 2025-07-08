import React from "react";
import { LuDot } from "react-icons/lu";

function Education({ isDarkMode }) {
  return (
    <div
      id="education"
      className={`${
        isDarkMode ? "bg-black/60 shadow-white/50 shadow/20" : ""
      } flex flex-col gap-2 p-8 m-2 rounded-2xl border border-black/10 shadow`}
    >
      {" "}
      <h1 className="text-2xl font-bold">Education</h1>
      <ul className="text-sm mt-4 space-y-2">
        <li>
          <h2 className="font-bold">
            Bachelor's Degree in Software Engineering
          </h2>
          <p className="flex items-center">
            Istanbul Okan University
            <LuDot className="text-xl" />
            2024
          </p>
          <p className="opacity-50">GPA: 3.02/4</p>
        </li>
      </ul>
    </div>
  );
}

export default Education;
