"use client";

import React, { useState } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import Avatar from "./Avatar";
import Dropdown from "./Dropdown";
import { CogIcon } from "@heroicons/react/24/solid";
import { dropdownData } from "@/schema/dropdown";

const Appbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-full fixed top-0 bg-white dark:bg-black border-b-2">
      <nav className="w-full">
        <div className="flex justify-between items-center px-2 py-1">
          <span>
            <p className="font-bold">@danishsadpara</p>
          </span>
          <div className="flex items-center space-x-4">
            <ThemeSwitch />
            <div className="relative">
              <Avatar
                source="/self.jpg"
                altText="self avatar"
                width={40}
                height={40}
              />
              <CogIcon
                className={`h-4 w-4 z-30 text-yellow-500 dark:text-white absolute -bottom-0.5 -right-0.5 cursor-pointer ${
                  isDropdownOpen ? "animate-spin" : ""
                }`}
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <Dropdown
                  items={dropdownData}
                  isOpen={isDropdownOpen}
                  toggle={toggleDropdown}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Appbar;
