"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex  p-2 ">
      <button
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <div className="flex space-x-1 ">
            <MoonIcon className="h-6 w-6 text-slate-500" />
          </div>
        ) : (
          <div className="flex space-x-1">
            <SunIcon className="h-6 w-6" />
          </div>
        )}
      </button>
    </div>
  );
};
