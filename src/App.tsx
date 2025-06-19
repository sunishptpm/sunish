import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className="bg-gray-100 text-gray-900 min-h-screen p-10"
      style={{
        backgroundImage: `url('/backgroundimage.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Make header relative and wrap image inside it */}
      <header
        className="relative w-full mb-10 p-5 rounded shadow-md text-gray-50 transform transition hover:scale-105 hover:bg-blue-600"
        style={{
          backgroundImage: `url('/backgroundimage.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ✅ This image is now positioned relative to the header */}
        <img
          src="/passport.jpeg"
          alt="Profile"
          className="absolute top-5 right-5 w-24 h-24 rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform duration-300 z-[10]"
        />

        <h1 className="text-4xl font-semibold">Sunish Sudharsanan</h1>
        <p>IT Manager</p>
        <blockquote className="text-gray-200 mt-4 italic">
          "Striving for excellence in everything I do"
        </blockquote>
      </header>

      {/* ✅ Remove standalone test image */}
      {/* <img src="/passport.jpeg" ... > */}

      {/* Main Sections */}
      <About />
      <Experience />
      <Education />
      <Contact />

      <footer className="text-center p-5 mt-10 rounded shadow-md transition hover:bg-gray-100 hover:shadow-lg hover:translate-y-2 hover:opacity-100">
        &copy; 2025 Sunish Sudharsanan
      </footer>
    </div>
  );
}

export default App;
