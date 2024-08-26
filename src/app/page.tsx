"use client";

import React from "react";
import Footer from "@/ui-components/footer";
import "../app/globals.css";
import { Analytics } from "@vercel/analytics/react";

//const sampleValue = new Endpoint<string>({ value: "Edit me!" });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900 bg-white">
      {/**Navbar */}
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow text-gray-900 dark:text-white"></div>
      {/**<Footer /> */}

      <Analytics />
    </div>
  );
}
