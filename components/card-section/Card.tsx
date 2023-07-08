"use client";

const Card = ({ img, title, description, serial }: any) => {
  return (
    <div className="card w-full flex flex-row items-center text-white">
      <div className="flex flex-col gap-6">
        <div className="details">
          <h1 className="text-[#D3F699] font-semibold text-3xl">{serial}</h1>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <img />
      <div className="example">
        <img src={img} alt="" className="w-[50%]" />
      </div>
    </div>
  );
};

export default Card;
