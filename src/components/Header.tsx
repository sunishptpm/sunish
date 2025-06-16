import React from "react";

function Header() {
  return (
    <header
      className="mb-10 p-5 rounded shadow-md transform transition hover:shadow-lg hover:bg-gray-100 hover:scale-105"
      style={{
        backgroundImage: "url('/backgroundimage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-semibold">Sunish Sudharsanan</h1>
      <p>IT Manager</p>
      <blockquote className="text-gray-200 mt-4 font-italic">
        "Striving for excellence in everything I do"
      </blockquote>
    </header>
  );
}

export default Header;
