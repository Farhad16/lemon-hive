"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex items-center justify-between p-4 text-white">
      <div className="flex items-center">
        <img src="/Logo.svg" className="w-24" />
      </div>
      <div className="relative">
        <button
          className="p-2 rounded-md bg-gray-700 text-white"
          onClick={handleMenuToggle}
        >
          Menu
        </button>
        {showMenu && (
          <div className="absolute top-full left-0 right-0 bg-gray-800 text-white">
            <div className="container mx-auto py-4">
              <ul className="flex flex-col md:flex-row">
                <li className="p-2 md:p-4">Home</li>
                <li className="p-2 md:p-4">About</li>
                <li className="p-2 md:p-4 relative group">
                  Products
                  <div className="absolute hidden md:block bg-gray-800 text-white mt-2 py-4 px-8 space-y-4">
                    <ul>
                      <li>Category 1</li>
                      <li>Category 2</li>
                      <li>Category 3</li>
                    </ul>
                  </div>
                </li>
                <li className="p-2 md:p-4">Contact</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
