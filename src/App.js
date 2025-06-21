import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
function App() {
    return (_jsxs("div", { className: "flex flex-col min-h-screen bg-gray-100 text-gray-900", style: {
            backgroundImage: "url('/backgroundimage.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }, children: [_jsxs("div", { className: "flex-grow p-10", children: [_jsxs("header", { className: "relative w-full mb-10 p-5 rounded shadow-md text-gray-50 transform transition hover:scale-105 hover:bg-blue-600", style: {
                            backgroundImage: "url('/backgroundimage.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: [_jsx("img", { src: "/passport.jpeg", alt: "Profile", className: "absolute top-5 right-5 w-28 sm:w-32 h-28 sm:h-32 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-700 ease-in-out animate-fade-in z-[10]" }), _jsxs("div", { className: "max-w-xl", children: [_jsx("h1", { className: "text-4xl font-semibold", children: "Sunish Sudharsanan" }), _jsx("p", { children: "IT Manager" }), _jsx("blockquote", { className: "text-gray-200 mt-4 italic", children: "\"Striving for excellence in everything I do\"" }), _jsx("a", { href: "/Resume_Sunish.pdf", download: true, className: "inline-block mt-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-blue-100 transition", children: "Download Resume (PDF)" })] })] }), _jsx(About, {}), _jsx(Experience, {}), _jsx(Education, {}), _jsx(Contact, {})] }), _jsx("footer", { className: "text-center p-5 bg-white mt-auto shadow-md transition hover:bg-gray-100 hover:shadow-lg hover:translate-y-2 hover:opacity-100", children: "\u00A9 2025 Sunish Sudharsanan" })] }));
}
export default App;
