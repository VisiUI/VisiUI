"use client";

import React from "react";
import { FloatingNavDemo } from "@/ui-components/Navbar/FloatingNavDemo";
import "../app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Hero from "@/ui-components/Hero/Hero";
import AfterHeader from "@/ui-components/AfterHeader/AfterHeader";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f0f]">
      <FloatingNavDemo />
      <Hero />
      <AfterHeader />
      <Analytics />
    </div>
  );
}
