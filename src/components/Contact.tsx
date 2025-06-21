// src/components/Contact.tsx
import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="p-5 rounded shadow-md bg-gray-50 transform transition hover:shadow-lg hover:bg-gray-100 hover:translate-y-2 hover:opacity-100">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-3 transition transform hover:scale-105 hover:bg-blue-100 p-3 rounded shadow-sm">
          <FaEnvelope className="text-blue-600" />
          <a
            href="mailto:sunishptpm@gmail.com"
            className="text-blue-600 hover:underline"
          >
            sunishptpm@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-3 transition transform hover:scale-105 hover:bg-blue-100 p-3 rounded shadow-sm">
          <FaPhone className="text-blue-600" />
          <span>+91 8848246674</span>
        </li>
        <li className="flex items-center gap-3 transition transform hover:scale-105 hover:bg-blue-100 p-3 rounded shadow-sm">
          <FaLinkedin className="text-blue-600" />
          <a
            href="https://www.linkedin.com/in/sunish-sudharsanan-b0b1ab121"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/sunish-sudharsanan
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
