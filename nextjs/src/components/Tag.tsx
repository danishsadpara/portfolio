import React from "react";
interface TagProp {
  text: string;
}

const Tag: React.FC<TagProp> = ({ text }) => {
  return (
    <div className=" px-2 py-1  rounded-full outline outline-1  w-max h-max">
      <p className=" "> {text}</p>
    </div>
  );
};

export default Tag;
