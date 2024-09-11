"use client";

import React from "react";
import { FloatingNavDemo } from "@/ui-components/Navbar/FloatingNavDemo";
import "../app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import homepageInfo from "@/_data/HomepageInfo.json";
import Hero from "@/ui-components/Hero/Hero";
import AfterHeader from "@/ui-components/AfterHeader";

export default function Home() {
  const WhatWeOffer = homepageInfo.WhatWeOfferInfo;

  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f0f]">
      <FloatingNavDemo />
      <Hero />
      <AfterHeader />
      <Analytics />
    </div>
  );
}
