"use client";
import React from "react";
import Avatar from "./Avatar";
import { AtSymbolIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div>
      <div className="relative drop-shadow-lg">
        <Avatar
          source="/self.jpg"
          altText="self avatar"
          width={80}
          height={80}
        />
        <AtSymbolIcon className="h-4 w-4 z-30 text-teal-400 dark:text-white absolute bottom-0.5 right-0.5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Hero;
