import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className="bg-gray-100 text-gray-900 min-h-screen p-10 transform transition"
      style={{
        backgroundImage: `url('/backgroundimage.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header
        className="mb-10 p-5 rounded shadow-md text-gray-50 transform transition transform hover:scale-105 hover:bg-blue-600"
        style={{
          backgroundImage: `url('/backgroundimage.png')`,
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

      {/* Sections with hover effects and smooth transitions */}
      <About />
      <Experience />
      <Education />
      <Contact />

      <footer className="text-center p-5 mt-10 rounded shadow-md transform transition transform hover:bg-gray-100 hover:shadow-lg hover:translate-y-2 hover:opacity-100">
        &copy; 2025 Your Name
      </footer>
    </div>
  );
}

export default App;
