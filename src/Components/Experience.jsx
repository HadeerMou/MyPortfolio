import { HiCalendarDateRange } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";

function Experience({ isDarkMode }) {
  const experiences = [
    {
      id: 1,
      title: "Frontend React Developer",
      company: "Expansion Branding Agency",
      date: "Jan 2025 - Present",
      location: "Cairo, Egypt",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFVm0jeyXrjhg/company-logo_200_200/B4EZWWaUl9GYAI-/0/1741985238117?e=1757548800&v=beta&t=ppCk3EbXC7uYyZ_kEGBAiOoe4WEM48JuH4j_q0omjWQ",
      skills: [
        "React.js",
        "TailwindCSS",
        "BootStrap",
        "Figma",
        "Vercel",
        "nest",
        "Deployment",
      ],
      description: [
        "Designing and developing responsive, user-friendly web applications, ensuring seamless UI/UX experiences.",
        "Integration and Collaborating with backend developer to translate design concepts into functional, high-performance web solutions.",
        "Optimizing frontend code for speed, accessibility, and cross-browser compatibility. Utilizing modern frameworks and design tools to create visually appealing and scalable web interfaces.",
        "Adding some features in backend using nest.ts",
        "Deploy website hosting on hostinger and vercel",
      ],
    },
    {
      id: 2,
      title: "CyberSecurity Intern",
      company: "Depi Cybersecurity Program",
      date: "SEP 2024 – Present",
      location: "Cairo, Egypt",
      logo: "https://debi.gov.eg/assets/optimized-images/AGEN.webp",
      skills: ["React.js", "TailwindCSS", "BootStrap", "Figma", "Vercel"],
      description: [
        "Developed expertise in network security, penetration testing, and threat analysis, conducting vulnerability assessments and implementing security measures to mitigate risks.",
      ],
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      company: "Scramblebit Company",
      date: "JUN 2023 - SEP 2023",
      location: "Istanbul, Turkey",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEBklEQVR4Aa2XA4xdTxTGy9j+27aN2nFS227D2l3bu7Vt2zYe11ZURYvT70tub6bz5rWzSn7J7H1n5vvunDPn3tvG5q+2allH8DWYDLaBwJmC+Kcjrq2RwVfXyuG8hGc1Vcv8uL4VTAJfcY7V4hbCf4BMUAzqgZwvjJPuFzfKeyd2COl0fpMcz08QmBAnpghkOHM7NkeYvAWiQTUQYhDXTMQ7Jlw4Nwa8DazF24JfwVnQYCNu3gmXBnAO/My1bcS7AC8QW3ELE8QDOlHjVdv+q63456e2yfgbq2XyzVXyJcbGdJhN/AyMBt4CZ23Fl97LktKKCKmoXC7JD9NpwnYnToM3TdUeDRqaIu7ENdUENSKoqRr4A1Q3R1w3YZmOKvCbeveZzRe3M3GqIMREOrXbOB2uGAi5VhwjPS5usBe3NNH1wka5WhSrxhaCL2lgMqgHQpZDqFniFiYi7meqcdScSAPb1Mmc+IG9uLWJD0/ukHRPuh63mQYC6kVfWZTMvpMjA/CQ4QSzuL2Jlb5U4QNr4d1sCZZF6jE+GniqXqzEpEN5CZLhSZPrqIdwi+eVR8qmQLJs8KdIwFlYpwZcRt651sG8RBrSYx630SftCibJt6e3yvvYtm4onBM4QnqMH7vEDvjRye3yIeBj2VMaFSK+LzdR/jm3SbjWN1iTa+trhRiYj61SC6ezZoLik26scuuEcDzcMaGK/3Fu80trLcLaJgPP1Avbg8ksHKMJk7hu4kFptFH8q9PbuAPGFPj1wkkK00yGXl3jiv8FAaZhEsDYNdHv0nr5/WyoeJon3VQDXhrYCsTGhNpULqBbViMWsHOyXoyxFE/VxbVjOAnU25r4ALCqyyrw+4N0SQQcZ+HaB00Tp+YEGvgKFAHRYT57am35E1Q9c8x66H5+A5EAxruR34/xmxrLXblbEh0qrrXijiBDDwhXcO871cx+wcIkHC/VWrjhdOikUdv4OA4YxCHs/v/jmS2S7U2T+7i7B4DjH85sdVvu+683UQV+119IYkAD2qXxnA/GCcBdujXB7f4T1Q84dnPOBw4bkz5/5LXV3NUXuY8CHfS3orfBOfZ/djd18hCIP8QdGArTWHC825EGEzyK0DgD3gr3UvrztJsrPeqkoViI4uEfteZz7sWc0ddXv2Ri5q2VD/DbjyD8azm2rxPy6fkJeR6HVCjiLuUQoiAbEHt9Jo6gKq6awA3Jr2e3yM9ntzwYdX31f6/9NsALSduV3rSf0VxOl1RENHAhE1UQvIcC5FGtrjTHkNKK5fVXimLPbPKn/Bh9PxPi9p9mb4IIUAWkmVSBKPAWaPbH6W8gHRSCegvReic2DfwOOrTWV/KXYCLYDHzgsSLKsdf5bQJjbb+KnwOt4EAn7nJ4mwAAAABJRU5ErkJggg==",
      skills: [
        "C#",
        "HTML",
        "JavaScript",
        "CSS",
        "Figma",
        "Full-Stack Development",
      ],
      description: [
        "Planned and designed a website using Figma, achieving a 20% increase in user retention by implementing a full-stack solution with HTML, CSS, and JavaScript for a seamless user experience.",
        "Enhanced user engagement by 25% because of contributing to the development of a scalable web application, focusing on performance optimization and user-friendly features.",
        "Collaborated with cross-functional teams, successfully delivering software solutions that met 100% of project requirements by aligning design, development, and implementation processes.",
      ],
    },
    {
      id: 4,
      title: "Software Developer Intern",
      company: "GrosWare Company",
      date: "JUL 2022 - SEP 2022",
      location: "Cairo, Egypt",
      logo: "https://grosware.com/wp-content/uploads/2021/10/cropped-Favicon-150x150.png",
      skills: ["HTML", "CSS", "JavaScript"],
      description: [
        "Developed new features for web tools, resulting in a 15% increase in functionality by collaborating closely with developers and designers during the planning and development process.",
      ],
    },
  ];
  return (
    <div id="experience" className={`flex flex-col items-center my-4`}>
      <h1 className="text-3xl font-bold text-center p-2">
        Professional <br /> Experience
      </h1>
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className={`${
            isDarkMode ? "bg-black/60 shadow-white/50 shadow/20" : ""
          } flex flex-col gap-3 p-5 m-2 rounded-2xl border border-black/10 shadow`}
        >
          <div className="flex items-center gap-4">
            {exp.logo ? (
              <img className="w-12 rounded-md" src={exp.logo} alt="" />
            ) : (
              ""
            )}
            <div className="flex flex-col">
              <h2 className="text-lg font-bold w-2/3">{exp.title}</h2>
              <h2 className="tracking-tight">{exp.company}</h2>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-xs opacity-60">
            <p className="flex items-center gap-1">
              <HiCalendarDateRange size={18} /> {exp.date}
            </p>
            <p className="flex items-center gap-1">
              <CiLocationOn size={18} />
              {exp.location}
            </p>
          </div>
          <ul className="list-disc pl-5 text-sm max-w-5xl">
            {exp.description.map((desc, idx) => (
              <li key={idx} className="mb-1">
                {desc}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, index) => (
              <p
                key={index}
                className={`${
                  isDarkMode
                    ? "bg-pink-50 text-black"
                    : "bg-pink-500 text-white"
                } text-xs rounded-full border py-1 px-2 border-black/10 shadow`}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
