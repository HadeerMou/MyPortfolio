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
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "bg-white text-black"
      } min-h-screen transition-colors duration-300`}
    >
      <Header isDarkMode={isDarkMode} handleToggle={handleToggle} />
      <main className="max-w-5xl mx-auto px-4">
        <Brief isDarkMode={isDarkMode} />
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
