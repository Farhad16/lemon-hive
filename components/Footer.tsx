"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        {/* Left Column */}
        <div className="w-full lg:w-1/3">
          <img src="/Logo.svg" className="w-24" />
          <p className="mt-4">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#90E900]">Abc</span>. All rights reserved.
          </p>
        </div>

        {/* Middle Column */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <p className="font-bold text-[#EFE600]">LONDON</p>
          <p className="text-sm">20-22 Wenlock Road, London, N1 7GU</p>
          <p className="text-[#90E900] mt-2">+44 207 1188550</p>
          <p className="text-sm mt-3">career@lemonhive.com</p>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-400">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
