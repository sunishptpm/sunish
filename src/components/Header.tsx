// src/components/Header.tsx
import React from "react";

function Header() {
  return (
    <header
      className="relative w-full min-h-[200px] bg-blue-900 text-white mb-10"
      style={{
        backgroundImage: `url('${
          import.meta.env.BASE_URL
        }/sunish/backgroundimage.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Profile Image */}
      <img
        src={`${import.meta.env.BASE_URL}/sunish/passport.jpeg`}
        alt="Profile"
        className="absolute top-5 right-5 w-28 h-28 rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform duration-300 z-[50]"
      />

      <div className="max-w-xl p-5">
        <h1 className="text-4xl font-bold">Sunish Sudharsanan</h1>
        <p>IT Manager</p>
        <blockquote className="italic mt-2">
          "Striving for excellence in everything I do"
        </blockquote>

        {/* Resume Download Button */}
        <a
          href={`${import.meta.env.BASE_URL}/sunish/Resume_Sunish.pdf`}
          download
          className="inline-block mt-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-blue-100 transition"
        >
          Download Resume (PDF)
        </a>
      </div>
    </header>
  );
}

export default Header;
