"use client";
import React, { useEffect } from "react";
import Card from "./Card";

function CardSection() {
  const cards = [
    {
      serial: "01",
      title: "Connect data",
      img: "/cards/img1.png",
      description:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
    },
    {
      serial: "02",
      img: "/cards/img2.png",
      title: "Pre-processing",
      description:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
    },
    {
      serial: "03",
      title: "Identify & automate",
      img: "/cards/img3.png",
      description:
        "Explore your customer segments and automate e-mail marketing flows easily. Understand deeply why customers abandon shopping carts and find ways to attract them. Predict your future sales and identify payment cycles. ",
    },
    {
      serial: "04",
      img: "/cards/img4.png",
      title: "Pre-processing",
      description:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
    },
  ];

  useEffect(() => {
    // Elements
    const cards: any = document.querySelectorAll(".card");
    const title: any = document.querySelector(".title");

    // Constants
    const OFFSET = 80;
    const scaleReduction = 0.05;

    const { marginBottom } = getComputedStyle(cards[0]);
    const { height } = title.getBoundingClientRect();
    let margin = parseInt(marginBottom, 10);
    let scale = 0.9;

    cards.forEach((card: any, index: any) => {
      card.style.top = `${index * OFFSET + height}px`;
      card.style.marginBottom = `${margin}px`;
      card.style.transform = `scale(${scale})`;
      margin -= OFFSET;
      scale += scaleReduction;
    });
  }, []);

  return (
    <div>
      <div className="title" />
      {cards.map((card) => (
        <Card key={card.serial} {...card} />
      ))}
    </div>
  );
}

export default CardSection;
