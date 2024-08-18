"use client";

import Endpoint from '@/data-components/Endpoint';
import React, { useEffect, useMemo, useState } from 'react'

export default function TextField(props: { readonly value: Endpoint<string> }) {
  const binding = useMemo(props.value.bind, []);
  let [text, setText] = useState("");
  useEffect(() => binding.onSet(setText), []);

  return (
    <input
      className='visiui-textfield'
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyDown={e => e.key == 'Enter' && binding.set(text)}
      onBlur={() => binding.set(text)}
    />
  )
}
