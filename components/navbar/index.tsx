"use client";
import React, { useMemo, useState } from "react";
import ServicesMenu from "./ServicesMenu";
import Popover from "./PopoverMenu";
import ProductMenu from "./ProductMenu";

const Navbar = () => {
  const [active, setActive] = useState("");
  const menus = ["home", "services", "projects", "blogs"];

  const megaMenus = [
    {
      name: "services",
      component: <ServicesMenu />,
    },
    {
      name: "projects",
      component: <ProductMenu />,
    },
  ];
  const activeMegaMenu = useMemo(() => {
    return megaMenus.filter((menu) => menu.name === active)[0];
  }, [active]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <nav className="w-full flex items-center flex-col sm:flex-row justify-between py-4 text-white gap-4">
      <div className="flex items-center">
        <img src="/Logo.svg" className="sm:w-24 max-w-[100px]" />
      </div>
      <ul className="flex flex-col items-center gap-2 sm:gap-8 sm:flex-row">
        {menus.map((menu) => (
          <li
            key={menu}
            onMouseEnter={() => setActive(menu)}
            className={`capitalize transition duration-300 ease-in-out cursor-pointer group flex flex-col items-center relative py-2 hover:text-[#90E900]${
              active === menu && " active"
            } `}
          >
            {menu}
            <span
              className={`h-[6px] w-[6px] bg-[#90E900] rounded-full absolute bottom-0 group-hover:visible ${
                active === menu ? "visible" : "invisible"
              }`}
              onClick={handleClick}
            ></span>
          </li>
        ))}

        <li>
          <button className="transition duration-300 ease-in-out text-[#90E900] border border-[#90E900] hover:bg-[#BCF266] px-6 py-3 rounded-[30px] hover:text-[#1E2A37] font-medium mt-2 sm:mt-0">
            Get In Touch
          </button>
        </li>
        {activeMegaMenu && (
          <Popover open={open} anchorEl={anchorEl} handleClose={handleClose}>
            {activeMegaMenu?.component}
          </Popover>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
