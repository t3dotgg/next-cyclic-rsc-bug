"use client";

import React from "react";

// This cyclic import causes some really weird errors at times, it's tame on this repro
import { SomeCommonHelper } from "./server";

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <SomeCommonHelper />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};
