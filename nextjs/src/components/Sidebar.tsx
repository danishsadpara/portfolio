"use client";
import { links } from "@/schema/sidebar";
import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-60 h-dvh overflow-auto border-r-2">
      <nav className="mt-5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center py-2.5 px-4  hover:bg-gray-100 dark:hover:text-black"
          >
            <link.icon className="h-5 w-5 mr-3" />
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
