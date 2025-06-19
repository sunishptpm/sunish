import React from "react";

function Header() {
  return (
    <header
      className="relative w-full min-h-[200px] bg-blue-900 text-white mb-10"
      style={{
        backgroundImage: `url('/backgroundimage.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Debug Box */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 border border-black z-50" />

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
