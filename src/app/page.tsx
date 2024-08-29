"use client";

import React from "react";
import { FloatingNavDemo } from "@/ui-components/Navbar/FloatingNavDemo";
import Hero from "@/ui-components/Hero/Hero";
import WhyChooseUs from "@/ui-components/WhyChooseUs/WhyChooseUs";
import "../app/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow text-white"></div>
      <FloatingNavDemo />
      <Hero />
      <WhyChooseUs />
      <Analytics />
    </div>
  );
}
