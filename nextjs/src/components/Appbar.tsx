"use client";
import React, { useState } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import Avatar from "./Avatar";
import { CogIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";
import { AppbarSchema } from "@/schema/Appbar";
import Tag from "./Tag";

const Appbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="">
      <div className="flex justify-between items-center px-6 py-3">
        <span className="hidden md:block">
          <Tag text="danishsadpara" />
        </span>
        <div className="flex items-center justify-center space-x-4">
          <div className="">
            <ThemeSwitch />
          </div>

          <div className="relative">
            <Avatar
              source="/self.jpg"
              altText="self avatar"
              width={40}
              height={40}
            />
            <CogIcon
              className={` h-4 w-4 z-30 text-yellow-500 dark:text-white absolute -bottom-0.5 -right-0.5 cursor-pointer ${
                isDropdownOpen ? "animate-spin" : ""
              }`}
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <Dropdown
                items={AppbarSchema}
                isOpen={isDropdownOpen}
                toggle={toggleDropdown}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
