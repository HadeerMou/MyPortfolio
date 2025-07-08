import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Brief from "./Components/Brief";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      <Header isDarkMode={isDarkMode} handleToggle={handleToggle} />
      <main className="max-w-5xl mx-auto px-4">
        <Brief isDarkMode={isDarkMode} />
        <hr className="border opacity-70 text-pink-100 rounded shadow mb-8" />
        <Education isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
