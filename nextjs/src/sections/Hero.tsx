// components/Hero.js
import React from "react";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import { cardsData } from "@/schema/hero";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Centered Logo */}
      <div className="drop-shadow-lg mb-8">
        <Avatar
          source="/self.jpg"
          altText="self avatar"
          width={80}
          height={80}
        />
      </div>
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            color={card.color}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
