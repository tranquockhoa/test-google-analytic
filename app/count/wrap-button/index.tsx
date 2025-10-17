"use client";

import { event } from "@/app/ultils/gtag";
import { useState } from "react";

export default function WrapButton() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button
        type="button"
        className="bg-blue-500 px-[20] mr-[20] rounded-full"
        onClick={() => {
          handleClick();
          event("count", {
            count_name: "button count",
            value: count + 1,
          });
        }}
      >
        onClick
      </button>
      <button
        type="button"
        className="bg-blue-500 px-[20] rounded-full"
        onClick={() => {
          setCount(0);
          event("reset", {
            reset_name: "button reset",
          });
        }}
      >
        Reset
      </button>

      <p className="mt-[20]">
        count : <span>{count}</span>
      </p>
    </>
  );
}
