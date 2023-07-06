"use client";

const Card = ({ img, title, description, serial }: any) => {
  return (
    <div className="w-full flex flex-row items-center border border-gray-500">
      <div className="flex flex-col gap-6">
        <h1>{serial}</h1>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Card;
