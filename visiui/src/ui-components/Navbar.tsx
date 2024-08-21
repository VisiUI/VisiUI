"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import ThemeSwitcher from "@/ui-components/ThemeSwitcher"; // Import the ThemeSwitcher component
import Logo from "./Logo";

export default function Nav() {
  return (
    <div className="mx-4 md:mx-2 lg:mx-4">
      <Navbar
        isBordered
        variant="sticky"
        className={`shadow-lg h-16 bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <div className="flex items-center justify-between w-full mx-2">
          {/* Logo aligned to the extreme left */}
          <NavbarBrand className="flex-shrink-0">
            <div className="flex items-center">
              <Logo />
              <span className="ml-3 text-xl font-bold">VisiUI</span>
            </div>
          </NavbarBrand>

          {/* Centered navigation links */}
          <div className="flex items-center justify-center flex-grow mr-56 font-semibold">
            <NavbarContent className="flex gap-6 lg:gap-32">
              <NavbarItem>
                <Link
                  className="text-sm lg:text-base hover:text-blue-600 transition-colors"
                  href="#"
                >
                  Showcase
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-sm lg:text-base hover:text-blue-600 transition-colors"
                  href="#"
                >
                  Docs
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-sm lg:text-base hover:text-blue-600 transition-colors"
                  href="#"
                >
                  Blog
                </Link>
              </NavbarItem>
            </NavbarContent>
          </div>

          {/* Theme Switcher */}
          <NavbarContent className="flex-shrink-0 flex items-center gap-4">
            <ThemeSwitcher /> {/* Use the ThemeSwitcher component */}
            <NavbarItem className="hidden lg:flex">
              <Link
                className="text-gray-600 hover:text-blue-600 transition-colors"
                href="#"
              >
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="#"
                variant="flat"
                className="bg-blue-400 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all px-4 py-2 rounded-lg"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </div>
      </Navbar>
    </div>
  );
}
