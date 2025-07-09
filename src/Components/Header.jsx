import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Menu from "./Menu";
import { useState } from "react";

function Header({ isDarkMode, handleToggle, isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? "bg-pink-500/90" : "bg-pink-100"
      } p-5 flex md:grid md:grid-cols-3 justify-between items-center font-bold`}
    >
      <div className="hidden md:flex gap-20 justify-start ms-30 opacity-50">
        <a href="#me" className="hover:underline">
          Connect
        </a>
        <a href="#brief" className="hover:underline">
          Brief
        </a>
        <a href="#education" className="hover:underline">
          Education
        </a>
      </div>
      <div className="flex md:inline items-center gap-2">
        <img
          className="md:hidden w-8 rounded-full border-2 border-pink-300"
          src="/assets/meOpacity.jpg"
          alt=""
        />
        <a
          href="#"
          className="flex text-center justify-center text-xl md:text-2xl tracking-wide"
        >
          Eng.Hadeer
        </a>
      </div>
      <div className="flex items-center justify-end gap-4">
        <div className="hidden md:flex gap-20 me-30 opacity-50">
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
        </div>
        <div className="flex items-center gap-2">
          {isDarkMode ? (
            <FaToggleOn
              onClick={handleToggle}
              className="text-xl lg:text-3xl"
            />
          ) : (
            <FaToggleOff
              onClick={handleToggle}
              className="text-xl lg:text-3xl"
            />
          )}
          <HiOutlineMenuAlt4
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl md:hidden lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
