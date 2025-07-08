import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header({ isDarkMode, handleToggle }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-pink-500/90" : "bg-pink-100"
      } p-5 flex md:grid md:grid-cols-3 justify-between items-center font-bold`}
    >
      <div className="hidden md:flex gap-20 justify-start ms-30 opacity-50">
        <a href="#brief" className="hover:underline">
          Brief
        </a>
        <a href="#education" className="hover:underline">
          Education
        </a>
        <a href="#experience" className="hover:underline">
          Experience
        </a>
      </div>
      <h2 className="text-center text-xl md:text-2xl">Welcome to my place</h2>
      <div className="flex items-center justify-end gap-4">
        <div className="hidden md:flex gap-20 me-30 opacity-50">
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
          <HiOutlineMenuAlt4 className="text-xl md:hidden lg:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Header;
