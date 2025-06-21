// src/components/Education.tsx
import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

function Education() {
  return (
    <section className="mb-10 p-5 rounded shadow-md bg-gray-50 transform transition hover:shadow-lg hover:bg-gray-100 hover:translate-y-2 hover:opacity-100">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-3">
          <FaGraduationCap className="text-blue-600" />
          Bachelor of Computer Applications, MG University Kottayam, 2006 - 2009
        </li>
        <li className="flex items-center gap-3">
          <FaSchool className="text-blue-600" />
          Higher Secondary School, GHSS Kalanjoor, 2004 - 2006
        </li>
        <li className="flex items-center gap-3">
          <FaSchool className="text-blue-600" />
          Secondary School, St Stephen's HSS Pathanapuram, 2004
        </li>
      </ul>
    </section>
  );
}

export default Education;
