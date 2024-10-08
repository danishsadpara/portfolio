import React from "react";
import Link from "next/link";

interface MenuItem {
  title: string;
  route: string;
  icon: React.ReactElement;
}

interface Props {
  items: MenuItem[];
  isOpen: boolean;
  toggle: () => void;
}

const Dropdown: React.FC<Props> = ({ items, isOpen, toggle }) => {
  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div
        className={`absolute top-8 right-0 z-20 w-[250px] min-h-[100px] flex flex-col py-4 bg-slate-300 dark:bg-zinc-800 rounded-md ${transClass}`}
      >
        {items.map((item) => (
          <Link
            className="hover:bg-white hover:text-black px-4 py-1 flex items-center"
            href={item.route || ""}
            onClick={toggle}
            key={item.route}
          >
            <span className="mr-2">
              {React.cloneElement(item.icon, {
                className: "h-5 w-5 hover:text-gray-700 ",
              })}
            </span>
            {item.title}
          </Link>
        ))}
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0"
          onClick={toggle}
        ></div>
      ) : null}
    </>
  );
};

export default Dropdown;
