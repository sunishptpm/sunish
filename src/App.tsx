// src/App.tsx
import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-gray-100 text-gray-900"
      style={{
        backgroundImage: `url('/sunish/backgroundimage.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main content */}
      <div className="flex-grow p-10">
        <header
          className="relative w-full mb-10 p-5 rounded shadow-md text-gray-50 transform transition hover:scale-105 hover:bg-blue-600"
          style={{
            backgroundImage: `url('/sunish/backgroundimage.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/sunish/passport.jpeg"
            alt="Profile"
            className="absolute top-5 right-5 w-28 sm:w-32 h-28 sm:h-32 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-700 ease-in-out animate-fade-in z-[10]"
          />
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold">Sunish Sudharsanan</h1>
            <p>IT Manager</p>
            <blockquote className="text-gray-200 mt-4 italic">
              "Striving for excellence in everything I do"
            </blockquote>
            <a
              href="/sunish/Resume_Sunish.pdf"
              download
              className="inline-block mt-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-blue-100 transition"
            >
              Download Resume (PDF)
            </a>
          </div>
        </header>

        <About />
        <Experience />
        <Education />
        <Contact />
      </div>

      {/* Footer always at bottom */}
      <footer className="text-center p-5 bg-white mt-auto shadow-md transition hover:bg-gray-100 hover:shadow-lg hover:translate-y-2 hover:opacity-100">
        &copy; 2025 Sunish Sudharsanan
      </footer>
    </div>
  );
}

export default App;
