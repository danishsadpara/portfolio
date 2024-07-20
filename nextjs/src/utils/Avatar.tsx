import Image from "next/image";
import React from "react";

interface AvatarProps {
  source: string;
  altText: string;
  width: number;
  height: number;
}
const Avatar: React.FC<AvatarProps> = ({ source, altText, width, height }) => {
  return (
    <Image
      src={source}
      alt={altText}
      className="object-cover rounded-full "
      width={width}
      height={height}
    />
  );
};

export default Avatar;
