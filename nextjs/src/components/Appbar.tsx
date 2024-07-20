"use client";
import React, { useState, useRef, ReactElement } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import Logo from "./Logo";
import Avatar from "./Avatar";
import { CogIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";
import { AppbarSchema } from "@/schema/Appbar";

const Appbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    if (logoRef.current) {
      logoRef.current.focus(); // Ensure this is needed
    }
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-slate-200 dark:bg-slate-950">
      <div className="flex justify-between items-center px-6 py-3">
        <div ref={logoRef} tabIndex={0}>
          <Logo />
        </div>
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
              className="h-4 w-4 text-yellow-500 dark:text-white absolute -bottom-0.5 -right-0.5 cursor-pointer"
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
