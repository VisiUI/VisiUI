"use client";

import React from "react";
import Nav from "@/ui-components/Navbar";
import Footer from "@/ui-components/footer";
import Hero from "@/ui-components/Hero";
import "../app/globals.css";
import { Analytics } from "@vercel/analytics/react"

//const sampleValue = new Endpoint<string>({ value: "Edit me!" });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Nav />
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow text-white"></div>
      <Hero/>
      <Footer />

      <Analytics />
    </div>
  );
}