"use client";

import React from "react";
import Endpoint from "@/data-components/Endpoint";
import TextField from "@/ui-components/TextField";
import Label from "@/ui-components/Label";
import Nav from "@/ui-components/Navbar";
import "../app/globals.css"

const sampleValue = new Endpoint<string>({ value: "Edit me!" });

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen dark:bg-slate-900 bg-white'>
      <Nav />
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow text-gray-900 dark:text-white">

      </div>
    </div>
  );
}
