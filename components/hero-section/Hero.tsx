"use client";
import React, { useEffect, useState } from "react";
import AngleImage from "./AngleImage";

function Hero() {
  const words = ["Innovative Solutions", "Digital World", "Trusted Agency"];
  const colors = [
    "text-[#90E900]",
    "text-[#EFE600]",
    "text-transparent bg-clip-text bg-gradient-to-r from-[#90E900] to-[#EFE600] font-semibold",
  ]; // Add more colors as needed

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2000); // Change word every 1 second

    return () => {
      clearInterval(interval);
    };
  }, [words.length]);

  return (
    <div className="flex flex-col space-y-8 items-center text-white">
      <p className="text-2xl sm:text-6xl font-semibold transition duration-300 ease-in-out text-center">
        {words.map((word: any, index: any) => {
          return index == 1 ? (
            <span key={index}>
              for a
              <span
                className={`${index === currentWord && colors[currentWord]}`}
              >
                {" "}
                {word}
                <br />
              </span>
            </span>
          ) : (
            <span
              key={index}
              className={`${index === currentWord && colors[currentWord]}`}
            >
              {word} <br />
            </span>
          );
        })}
      </p>
      <p className="sm:text-lg font-medium text-center">
        Elevate Your Brand: Powerhouse Agency for Impactful Strategies
      </p>
      <div className="flex flex-row gap-4">
        <button className="transition duration-300 ease-in-out text-[#90E900] border border-[#90E900] hover:bg-[#BCF266] px-6 py-3 rounded-[30px] hover:text-[#1E2A37] font-medium">
          Our Services
        </button>
        <button className="transition duration-300 ease-in-out text-[#90E900] border border-[#90E900] hover:bg-[#BCF266] px-6 py-3 rounded-[30px] hover:text-[#1E2A37] font-medium">
          Work with Us
        </button>
      </div>
    </div>
  );
}

export default Hero;
