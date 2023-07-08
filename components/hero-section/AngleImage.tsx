import React, { useState, useEffect } from "react";

const AngleImage = () => {
  const [lean, setLean] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setLean(scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scene flex items-center justify-center mt-2">
      <img
        src="/angle.png"
        alt="angle"
        className={lean ? "lean common" : "normal common"}
      />
    </div>
  );
};

export default AngleImage;
