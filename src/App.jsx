import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Brief from "./Components/Brief";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Menu from "./Components/Menu";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark", "stars");
    } else {
      document.documentElement.classList.remove("dark", "stars");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`${
        isDarkMode ? "dark stars" : "bg-white text-black"
      } min-h-screen transition-colors duration-300`}
    >
      <Header
        isDarkMode={isDarkMode}
        handleToggle={handleToggle}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="max-w-5xl mx-auto px-4">
        <div
          id="me"
          className="flex flex-col gap-2 items-center justify-center p-10 mt-22 mb-5 border-2 rounded-2xl border-pink-100 shadow-lg"
        >
          <h1 className="text-3xl font-bold text-pink-50 custom-outline">
            Hadeer Abdelrazik
          </h1>
          <p>Software Engineer | React Frontend Developer</p>
          <p className="flex items-center text-xs opacity-50">
            <TiLocation /> Nozha, Cairo, Egypt
          </p>
          <div className="flex items-center gap-2 mt-4 text-3xl cursor-pointer  animate-flash">
            <a href="https://github.com/HadeerMou">
              <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/hadeermouwad/">
              <FaLinkedin />
            </a>
            <a href="https://www.behance.net/hadeerMouwad">
              <FaBehanceSquare />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/assets/HadeerAbdelrazik.pdf"
              download
              className="flex items-center gap-1 text-xs px-2 py-2 mt-2 bg-pink-100 text-black/80 outline-black/70 outline-2 rounded-full hover:bg-pink-500 transition"
            >
              <MdDownloadForOffline size={16} />
              Download CV
            </a>
            <a
              href="https://wa.me/+201022184011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-2 mt-2 bg-pink-100 text-black/80 outline-black/70 outline-2 rounded-full hover:bg-pink-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              className="flex items-center gap-1 px-2 py-2 mt-2 bg-pink-100 text-black/80  outline-black/70 outline-2 rounded-full hover:bg-pink-500 transition"
              href="mailto:hadeer.mouwad@gmail.com"
            >
              <MdEmail />
            </a>
          </div>
        </div>
        <Brief isDarkMode={isDarkMode} />
        <hr className="border opacity-70 text-pink-100 rounded shadow mb-8" />
        <Education isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
      </main>
      {isMenuOpen && (
        <Menu
          isDarkMode={isDarkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </div>
  );
}

export default App;
