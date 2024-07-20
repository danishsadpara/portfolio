import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image src="/logo.png" width={30} height={30} alt="Picture of the author" />
  );
};

export default Logo;
