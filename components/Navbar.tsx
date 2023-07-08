"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const menus = ["home", "services", "projects", "blogs"];

  return (
    <nav className="flex items-center justify-between p-4 text-white">
      <div className="flex items-center">
        <img src="/Logo.svg" className="sm:w-24 max-w-[100px]" />
      </div>
      <ul className="flex flex-row items-center gap-8 sm:visible invisible">
        {menus.map((menu) => (
          <li
            key={menu}
            onMouseOver={() => setActive(menu)}
            className={`capitalize transition duration-300 ease-in-out cursor-pointer group flex flex-col items-center relative py-2 hover:text-[#90E900]${
              active === menu && " active"
            } `}
          >
            {menu}
            <span
              className={`h-[5px] w-[5px] bg-[#90E900] rounded-full absolute bottom-0 group-hover:visible ${
                active === menu ? "sm:visible" : "sm:invisible"
              }`}
            ></span>
          </li>
        ))}

        <li>
          <button className="transition duration-300 ease-in-out text-[#90E900] border border-[#90E900] hover:bg-[#BCF266] px-6 py-3 rounded-[30px] hover:text-[#1E2A37] font-medium">
            Get In Touch
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
