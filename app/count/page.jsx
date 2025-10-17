"use client";
import { useState } from "react";
import { event } from "../ultils/gtag";

export default function PageButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="mt-[50] ml-[50] ">
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
    </div>
  );
}
