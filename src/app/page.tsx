"use client";

import React from "react";
import Endpoint from "@/data-components/Endpoint";
import Nav from "@/ui-components/Navbar";
import Footer from "@/ui-components/footer";
import Hero from "@/ui-components/hero";
import "../app/globals.css";
import { Analytics } from "@vercel/analytics/react"

//const sampleValue = new Endpoint<string>({ value: "Edit me!" });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Nav />
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow text-white"></div>
      <Hero/>
      <Footer />

      <Analytics />
    </div>
  );
}
