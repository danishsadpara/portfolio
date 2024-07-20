import React, { ReactNode } from "react";
interface TagProp {
  name: string;
}

const Tag: React.FC<TagProp> = ({ name }) => {
  return (
    <div className=" px-2 bg-slate-100 dark:bg-slate-900 rounded-full w-max h-max">
      <p className="font-semibold "> {name}</p>
    </div>
  );
};

export default Tag;
