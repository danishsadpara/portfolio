// "use client";

import React from "react";
// export const safeguardClasses = `
//   text-blue-500
//   text-green-500
//   text-red-500
//   text-yellow-500
// `;
interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, color, description }) => {
  return (
    <div className="transform transition-transform duration-300 ease-in-out hover:scale-101 p-2 max-w-44 cursor-pointer rounded-lg shadow-sm hover:shadow-xl dark:hover:shadow-xl dark:shadow-md dark:shadow-cyan-700/5 flex flex-col items-start">
      <Icon className={`h-6 w-6 ${color} mb-2`} />
      <p className="text-gray-600 dark:text-gray-400 text-left">
        {description}
      </p>
    </div>
  );
};

export default Card;
