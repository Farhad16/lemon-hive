"use client";
import React from "react";
import Card from "./Card";

function CardSection() {
  const cards = [
    {
      serial: "01",
      title: "Connect data",
      img: "img1.png",
      description:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
    },
    {
      serial: "02",
      img: "img2.png",
      title: "Pre-processing",
      desccription:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
    },
    {
      serial: "03",
      title: "Identify & automate",
      img: "img3.png",
      description:
        "Explore your customer segments and automate e-mail marketing flows easily. Understand deeply why customers abandon shopping carts and find ways to attract them. Predict your future sales and identify payment cycles. ",
    },
    {
      serial: "04",
      img: "img4.png",
      title: "Pre-processing",
      description:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
    },
  ];

  return (
    <div className="flex flex-col">
      {cards.map((card) => (
        <Card key={card.serial} />
      ))}
    </div>
  );
}

export default CardSection;
