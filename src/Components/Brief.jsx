import React from "react";

function Brief() {
  return (
    <div
      id="brief"
      className="flex flex-col items-center justify-center p-10 mb-5 border-2 rounded-2xl border-pink-100 shadow-lg"
    >
      <h1 className="text-2xl font-bold">Brief Overview</h1>
      <p className="mt-4 text-sm tracking-widest text-center">
        I'm a full-stack developer who builds polished, performant web and
        mobile solutions from design through deployment. I work with modern
        frontend technologies like HTML, CSS, JavaScript, React, Next.js,
        TailwindCSS, and React Native, while also handling backend services,
        APIs, databases, and deployment workflows using Node.js, NestJS,
        ExpressJS, Prisma, MySQL, PostgreSQL, and Vercel. I enjoy turning
        complex requirements into intuitive experiences with clean, maintainable
        code and thoughtful UX.
      </p>
      <div className="mt-8 text-sm">
        <h2 className="font-bold text-base mb-3">What I Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            A keen eye for design and user experience, ensuring beautiful and
            functional interfaces.
          </li>
          <li>
            Strong skills across frontend and backend technologies, including
            React, Next.js, TailwindCSS, Node.js, NestJS, Prisma, and MySQL.
          </li>
          <li>
            Expertise in building full-stack applications with responsive UI,
            reliable APIs, and database-backed workflows.
          </li>
          <li>
            Solid skills in API integration and backend communication,
            connecting frontend interfaces to powerful data and services.
          </li>
          <li>
            Proficient in cross-platform mobile app development using React
            Native and Expo, delivering seamless experiences on both iOS and
            Android.
          </li>
          <li>
            Skilled in designing mobile-first interfaces with performance and
            usability in mind.
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
