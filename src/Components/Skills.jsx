import React from "react";
import { AiTwotoneCode } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { PiFigmaLogoBold } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { FaQuidditch } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiRailway } from "react-icons/si";
import { SiHostinger } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiI18Next } from "react-icons/si";

function Skills({ isDarkMode }) {
  const skills = [
    {
      id: 1,
      category: "Languages",
      skills: [
        { icon: <IoLogoJavascript />, name: "JavaScript" },
        { icon: <FaPython />, name: "Python" },
        { icon: null, name: "C" },
      ],
      icon: <AiTwotoneCode />,
    },
    {
      id: 2,
      category: "Frontend Development",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <IoLogoJavascript />, name: "Javascript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
        { icon: <FaSass />, name: "SASS/SCSS" },
        { icon: null, name: "ES6+" },
        { icon: null, name: "Motion" },
        { icon: <SiI18Next />, name: "react-i18next" },
      ],
      icon: <FaCode />,
    },
    {
      id: 3,
      category: "UI/UX",
      skills: [{ icon: <PiFigmaLogoBold />, name: "Figma" }],
      icon: <FaQuidditch />,
    },
    {
      id: 4,
      category: "Backend Basics & Database",
      skills: [
        { icon: <FaNodeJs />, name: "Nodejs" },
        { icon: <GrMysql />, name: "MySQL" },
        { icon: <SiPrisma />, name: "Prisma" },
      ],
      icon: <FaDatabase />,
    },
    {
      id: 5,
      category: "Version Control",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
      ],
      icon: <FaGitAlt />,
    },
    {
      id: 6,
      category: "Deployment & Testing",
      skills: [
        { icon: <IoLogoVercel />, name: "Vercel" },
        { icon: <SiRailway />, name: "Railway" },
        { icon: <SiHostinger />, name: "Hostinger hosting" },
        { icon: <SiSwagger />, name: "Swagger" },
        { icon: <SiPostman />, name: "Postman" },
      ],
      icon: <AiOutlineDeploymentUnit />,
    },
  ];
  return (
    <div id="skills">
      <h1 className="text-3xl font-bold text-center p-2">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`${
              isDarkMode ? "bg-black/60 shadow-white/50 shadow/20" : ""
            } flex flex-col justify-center items-center gap-3 p-4 m-2 rounded-2xl border border-black/10 shadow`}
          >
            <span className="text-2xl bg-pink-50 text-black/80 p-2 rounded-full">
              {skill.icon}
            </span>
            <h1 className="font-bold">{skill.category}</h1>
            <div className="flex flex-wrap gap-2">
              {skill.skills.map((skill, index) => (
                <p
                  key={index}
                  className={`${
                    isDarkMode
                      ? "bg-pink-50 text-black"
                      : "bg-pink-500 text-white"
                  } flex items-center gap-1 text-xs rounded-md border py-1 px-2 border-black/10 shadow`}
                >
                  {skill.icon}
                  {skill.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
