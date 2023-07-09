import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#90E900] font-medium sm:text-lg">
        Trusted by Top-tier product campanies
      </p>
      <div className="fill flex flex-wrap justify-center sm:flex-row items-center gap-4 sm:gap-8 mt-4">
        {[...Array(5)].map((_, num) => (
          <img
            key={num}
            src={`/logos/logo${++num}.svg`}
            className="w-[100px] h-[40px] cursor-pointer logo"
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
