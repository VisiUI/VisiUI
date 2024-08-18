"use client";

import React, { useEffect, useState } from "react";
import Endpoint from "@/data-components/Endpoint";
import TextField from "@/ui-components/TextField";
import Label from "@/ui-components/Label";

const sampleValue = new Endpoint<string>({ value: "Edit me!" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950">
      <Label value={sampleValue} />
      <TextField value={sampleValue} />
    </main>
  );
}
