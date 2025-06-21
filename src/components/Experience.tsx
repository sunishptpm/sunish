// src/components/Experience.tsx
import React from "react";

function Experience() {
  return (
    <section className="mb-10 p-5 rounded shadow-md bg-gray-50 transform transition hover:shadow-lg hover:bg-gray-100 hover:translate-y-2 hover:opacity-100">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>

      {/* ProEmTech Infosystems Pvt Ltd */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">IT Manager</h3>
        <p className="text-gray-600">ProEmTech Infosystems Pvt Ltd, India</p>
        <p className="text-gray-500 mb-2">Nov 19, 2019 – Present</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            Installation & maintenance of desktop, laptop, servers, CCTV,
            firewall, router, access points, printers, and scanners.
          </li>
          <li>Installation & maintenance of EPBX and telephone systems.</li>
          <li>Installation & maintenance of NAS storage devices.</li>
          <li>Microsoft O365 administration and management.</li>
          <li>
            Maintenance of networking infrastructure and ISP coordination.
          </li>
          <li>
            Deployment and upkeep of IoT devices (UrgenZ, PresenZ, Anges, KiKo –
            ProEmTech products).
          </li>
          <li>Collaborated in the development of new IoT products.</li>
          <li>Vendor management and procurement of IT assets.</li>
          <li>Overall IT asset management and inventory control.</li>
        </ul>
      </div>

      {/* QWERTY SOLUTIONS */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">CCTV Engineer</h3>
        <p className="text-gray-600">QWERTY SOLUTIONS, UAE</p>
        <p className="text-gray-500 mb-2">08 Aug 2018 – 30 Aug 2019</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            Planned and designed CCTV systems as per Fujairah police
            regulations.
          </li>
          <li>Obtained approval for CCTV drawings from Fujairah police.</li>
          <li>
            Coordinated CCTV installations with subcontractors across projects
            including Fujairah Mall, Century Mall, Ajman University, and Al
            Hilal Bank.
          </li>
          <li>
            Installed and maintained Point to Point systems for Fujairah police.
          </li>
        </ul>
      </div>

      {/* Overlook Security Systems LLC */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">CCTV Technician</h3>
        <p className="text-gray-600">Overlook Security Systems LLC, UAE</p>
        <p className="text-gray-500 mb-2">08 June 2016 – 07 June 2018</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Installed and configured CCTV systems.</li>
          <li>Coordinated with subcontractors during implementation.</li>
          <li>Provided technical support for remote viewing solutions.</li>
          <li>Collaborated with SIRA for CCTV compliance approvals.</li>
          <li>
            Worked on projects like Rosewood Hotel, Stepping Stone Nursery, and
            structured cabling in Sharjah Airport.
          </li>
        </ul>
      </div>

      {/* ProEmTech Infosystems Pvt Ltd - Earlier Role */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">System Engineer</h3>
        <p className="text-gray-600">ProEmTech Infosystems Pvt Ltd, India</p>
        <p className="text-gray-500 mb-2">08 April 2014 – 29 April 2016</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Installed and configured computer hardware and software.</li>
          <li>Planned and designed system networks.</li>
          <li>Provided ongoing technical support to clients.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
