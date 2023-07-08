import * as React from "react";
import { productContent, productTabs } from "./static.data";

export default function ServicesMenu() {
  const [value, setValue] = React.useState(0);
  const [active, setActive] = React.useState(0);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const elements = document.querySelectorAll(".box");

    const handleMouseEnter = (event: any) => {
      event.target.classList.add("arrow");
    };

    const handleMouseLeave = (event: any) => {
      event.target.classList.remove("arrow");
    };

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const selectedOption = React.useMemo(() => {
    const selected = productContent.filter((option) => option.id === active)[0];
    return selected?.content;
  }, [active]);

  return (
    <div className="flex flex-row gap-2">
      <div
        onClick={handleChange}
        className="flex flex-col bg-[#172029] rounded-md p-3 w-[250px] gap-1"
      >
        {productTabs.map((tab, i) => (
          <div
            className={`"box transition duration-300 ease-in-out flex flex-col text-white hover:bg-[#D3F699] p-3 hover:text-black rounded-md cursor-pointer" ${
              active === i && "bg-[#D3F699] arrow text-black"
            }`}
            onMouseEnter={() => setActive(i)}
          >
            <span className="text-xs font-medium">{tab.name}</span>
            <span className="text-[10px] font-light">{tab.title}</span>
          </div>
        ))}
      </div>
      <div
        onClick={handleChange}
        className="flex flex-row bg-[#172029] rounded-md p-3 w-[240px] gap-2"
      >
        <div className="w-1/2">
          {selectedOption?.map((opt, i) => (
            <div className="transition duration-300 ease-in-out flex flex-row gap-3 items-start text-white hover:bg-[#D3F699] p-3 hover:text-black rounded-md cursor-pointer">
              <img src={opt.img} alt={opt.name} className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-xs font-medium">{opt.name}</span>
                <span className="text-[10px] font-light">{opt.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
