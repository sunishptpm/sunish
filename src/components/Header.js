import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Header() {
    return (_jsxs("header", { className: "relative w-full min-h-[200px] bg-blue-900 text-white mb-10", style: {
            backgroundImage: "url('".concat(import.meta.env.BASE_URL, "/sunish/backgroundimage.png')"),
            backgroundSize: "cover",
            backgroundPosition: "center",
        }, children: [_jsx("img", { src: "".concat(import.meta.env.BASE_URL, "/sunish/passport.jpeg"), alt: "Profile", className: "absolute top-5 right-5 w-28 h-28 rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform duration-300 z-[50]" }), _jsxs("div", { className: "max-w-xl p-5", children: [_jsx("h1", { className: "text-4xl font-bold", children: "Sunish Sudharsanan" }), _jsx("p", { children: "IT Manager" }), _jsx("blockquote", { className: "italic mt-2", children: "\"Striving for excellence in everything I do\"" }), _jsx("a", { href: "".concat(import.meta.env.BASE_URL, "Resume_Sunish.pdf"), download: true, className: "inline-block mt-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-blue-100 transition", children: "Download Resume (PDF)" })] })] }));
}
export default Header;
