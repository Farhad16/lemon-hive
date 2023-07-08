"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="flex flex-wrap flex-col sm:flex-row justify-between mt-6 gap-4">
        {/* Left Column */}
        <div className="">
          <img src="/Logo.svg" className="w-24" />
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#90E900]">Abc</span>. All rights reserved.
          </p>
        </div>

        {/* Middle Column */}
        <div className="flex justify-end flex-col">
          <p className="font-bold text-[#EFE600]">LONDON</p>
          <p className="text-sm">20-22 Wenlock Road, London, N1 7GU</p>
          <p className="text-[#90E900] mt-2">+44 207 1188550</p>
          <p className="text-sm mt-3">career@lemonhive.com</p>
        </div>

        {/* Right Column */}
        <ul className="flex flex-col sm:justify-center">
          <li className="mr-4">
            <a
              href="#"
              className="text-white hover:text-[#90E900] hover:underline"
            >
              Facebook
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className="text-white hover:text-[#90E900] hover:underline"
            >
              Twitter
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className="text-white hover:text-[#90E900] hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className="text-white hover:text-[#90E900] hover:underline"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
