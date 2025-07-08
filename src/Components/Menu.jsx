import React from "react";

function Menu() {
  return (
    <div className="flex flex-col p-2">
      <a href="#brief" className="hover:underline">
        Brief
      </a>
      <a href="#education" className="hover:underline">
        Education
      </a>
      <a href="#experience" className="hover:underline">
        Experience
      </a>
      <a href="#projects" className="hover:underline">
        Projects
      </a>
      <a href="#skills" className="hover:underline">
        Skills
      </a>
      <a href="#contact" className="hover:underline">
        Contact
      </a>
    </div>
  );
}

export default Menu;
