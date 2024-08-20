"use client";

import React from "react";
import Endpoint from "@/data-components/Endpoint";
import TextField from "@/ui-components/TextField";
import Label from "@/ui-components/Label";
import Navbar from "@/ui-components/navbar/navbar";

const sampleValue = new Endpoint<string>({ value: "Edit me!" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950">
      <Label value={sampleValue} />
      <TextField value={sampleValue} />
      <Navbar />
    </main>
  );
}
