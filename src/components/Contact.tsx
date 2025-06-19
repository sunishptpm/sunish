import React from "react";

function Contact() {
  return (
    <section className="p-5 rounded shadow-md bg-gray-50 transform transition transform hover:shadow-lg hover:bg-gray-100 hover:translate-y-2 hover:opacity-100">
      <h2 className="text-2xl font-semibold transform transition transform hover:translate-y-2 hover:opacity-100">
        Contact
      </h2>
      <ul>
        <li className="transition transform hover:scale-105 hover:bg-blue-100 p-2 rounded">
          Email: sunishptpm@gmail.com
        </li>
        <li className="transition transform hover:scale-105 hover:bg-blue-100 p-2 rounded">
          Phone: +91 8848246674
        </li>
        <li className="transition transform hover:scale-105 hover:bg-blue-100 p-2 rounded">
          LinkedIn:
          https://www.linkedin.com/in/sunish-sudharsanan-b0b1ab121?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
        </li>
      </ul>
    </section>
  );
}

export default Contact;
