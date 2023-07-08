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
            <span className="text-[#D3F699]">Abc</span>. All rights reserved.
          </p>
        </div>

        {/* Middle Column */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@example.com</p>
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
