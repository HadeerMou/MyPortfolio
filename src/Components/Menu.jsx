import React from "react";

function Menu({ isDarkMode, isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-black/90" : "bg-white/95"
      } md:hidden rounded-b-4xl shadow-lg fixed top-18 left-0 w-full flex flex-col items-center py-4 space-y-7 z-40`}
    >
      <a
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        href="#me"
        className="hover:underline"
      >
        Connect
      </a>
      <a
        href="#brief"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="hover:underline"
      >
        Brief
      </a>
      <a
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        href="#education"
        className="hover:underline"
      >
        Education
      </a>
      <a
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        href="#experience"
        className="hover:underline"
      >
        Experience
      </a>
      <a
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        href="#projects"
        className="hover:underline"
      >
        Projects
      </a>
      <a
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        href="#skills"
        className="hover:underline"
      >
        Skills
      </a>
    </div>
  );
}

export default Menu;
