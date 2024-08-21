"use client";

import Endpoint from "@/data-components/Endpoint";
import { useEffect, useState } from "react";

export default function Label(props: { readonly value: Endpoint<string> }) {
  let [text, setText] = useState("");
  useEffect(() => props.value.onSet(setText));
  return <div className="visiui-label ">{text}</div>;
}
