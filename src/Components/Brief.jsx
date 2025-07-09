import React from "react";

function Brief() {
  return (
    <div
      id="brief"
      className="flex flex-col items-center justify-center p-10 mb-5 border-2 rounded-2xl border-pink-100 shadow-lg"
    >
      <h1 className="text-2xl font-bold">Brief Overview</h1>
      <p className="mt-4 text-sm tracking-widest text-center">
        I'm a passionate Frontend Software Engineer dedicated to crafting
        seamless and engaging user experiences. With strong skills in modern web
        technologies like HTML, CSS, JavaScript, and frameworks such as React, I
        specialize in building responsive, accessible, and high-performance web
        applications. I enjoy transforming complex ideas into intuitive designs,
        writing clean, maintainable code, and continuously learning to stay
        ahead in the ever-evolving world of frontend development.
      </p>
      <div className="mt-8 text-sm">
        <h2 className="font-bold text-base mb-3">What I Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            A keen eye for design and user experience, ensuring beautiful and
            functional interfaces.
          </li>
          <li>
            Strong skills in modern frontend technologies like HTML, CSS,
            JavaScript, React, TailwindCSS, etc.
          </li>
          <li>
            Expertise in building cross-platform web applications for seamless
            user experiences on any device.
          </li>
          <li>
            Solid skills in API integration and backend communication,
            connecting frontend interfaces to powerful data and services.
          </li>
          <li>
            Experience working in Agile teams, collaborating effectively and
            delivering high-quality work in fast-paced environments.
          </li>
          <li>A focus on clean, maintainable code and user-centered design.</li>
        </ul>
      </div>
    </div>
  );
}

export default Brief;
