"use client";

const Card = ({ img, title, description, serial }: any) => {
  return (
    <div className="card w-full flex flex-col sm:flex-row items-center justify-between text-white px-12 gap-4 py-14">
      <div className="flex flex-col gap-10 w-full justify-between">
        <h1 className="text-[#D3F699] font-semibold text-2xl sm:text-6xl">
          {serial}
        </h1>
        <h2 className="text-[#90E900] text-lg sm:text-4xl">{title}</h2>
        <p className="text-sm sm:text-lg">{description}</p>
      </div>
      <div className="w-full">
        <img src={img} alt="" className="w-full object-contain" />
      </div>
    </div>
  );
};

export default Card;
