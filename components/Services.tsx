import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#90E900] font-medium sm:text-lg">
        Trusted by Top-tier product campanies
      </p>
      <div className="flex flex-row items-center">
        {[...Array(5)].map((_, num) => (
          <img src={`/r${++num}.png`} />
        ))}
      </div>
    </div>
  );
};

export default Services;
