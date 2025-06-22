import React from "react";

function Header() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header
      className="relative w-full min-h-[200px] text-white mb-10"
      style={{
        backgroundImage: `url('${baseUrl}backgroundimage.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Profile Photo (Top-Right Corner) */}
      <img
        src={`${baseUrl}passport.jpeg`}
        alt="Profile"
        className="absolute top-5 right-5 w-28 h-28 rounded-full border-4 border-white shadow-lg z-50 transition-transform duration-300 hover:scale-105"
      />

      <div className="max-w-xl p-5">
        <h1 className="text-4xl font-bold">Sunish Sudharsanan</h1>
        <p>IT Manager</p>
        <blockquote className="italic mt-2">
          "Striving for excellence in everything I do"
        </blockquote>
      </div>
    </header>
  );
}

export default Header;
