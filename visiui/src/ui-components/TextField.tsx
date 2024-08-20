"use client";

import Endpoint from '@/data-components/Endpoint';
import React, { useEffect, useMemo, useState } from 'react';

export default function TextField(props: { readonly value: Endpoint<string> }) {
  const binding = useMemo(props.value.bind, []);
  const [text, setText] = useState("");

  useEffect(() => binding.onSet(setText), []);

  return (
    <input
      className="visiui-textfield bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyDown={e => e.key === 'Enter' && binding.set(text)}
      onBlur={() => binding.set(text)}
    />
  );
}
