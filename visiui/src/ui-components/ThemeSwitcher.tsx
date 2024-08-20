"use client";

import React from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun as SunIcon, HiOutlineMoon as MoonIcon } from "react-icons/hi";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Ensure the theme is not undefined
  const currentTheme = theme || 'dark';

  return (
    <div className="flex items-center justify-end p-4">
      {currentTheme === 'dark' ? (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-yellow-500"
          onClick={toggleTheme}
          aria-label="Switch to light mode"
        />
      ) : (
        <MoonIcon
          className="h-6 w-6 cursor-pointer text-gray-900"
          onClick={toggleTheme}
          aria-label="Switch to dark mode"
        />
      )}
    </div>
  );
}
